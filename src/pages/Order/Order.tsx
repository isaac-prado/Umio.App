import React from "react";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import { ChevronLeft, MapPin, ChevronDown, Plus } from "lucide-react-native";
import { useState } from "react";
import CustomButton from "../../components/CustomButton";
import { Produto } from "../../interface/Produto";
import { useOrder } from "../../context/useOrder";

interface OrderProps {
  produto: Produto;
  onGoBack: () => void;
  onNext: () => void;
}

type Adicional = {
  id: string;
  nome: string;
  preco: number;
  quantidade: number;
};

export const Order = ({ produto, onGoBack, onNext }: OrderProps) => {
  const { currentOrder, updateCurrentOrder } = useOrder();
  const [currentStep, setCurrentStep] = useState<
    "molho" | "adicionais" | "molho-extra"
  >("molho");
  const [selectedMolho, setSelectedMolho] = useState<string>(
    currentOrder?.molhoSelecionado || "Potinho de Rach",
  );
  const [adicionais, setAdicionais] = useState<Adicional[]>(
    currentOrder?.adicionais.length
      ? currentOrder.adicionais
      : [
          { id: "1", nome: "Ketchup", preco: 0, quantidade: 0 },
          { id: "2", nome: "Mostarda", preco: 0, quantidade: 0 },
          { id: "3", nome: "Burger 160g", preco: 11.9, quantidade: 0 },
          { id: "4", nome: "Bacon", preco: 11.9, quantidade: 0 },
          { id: "5", nome: "Gorgonzola", preco: 11.9, quantidade: 0 },
          { id: "6", nome: "Onion Rings", preco: 11.9, quantidade: 0 },
          { id: "7", nome: "American Cheese", preco: 11.9, quantidade: 0 },
          { id: "8", nome: "Catupiry", preco: 11.9, quantidade: 0 },
        ],
  );
  const [molhosExtra, setMolhosExtra] = useState<Adicional[]>([
    { id: "m1", nome: "Potinho de Barbecue", preco: 11.9, quantidade: 0 },
    { id: "m2", nome: "Potinho de Maionese Verde", preco: 11.9, quantidade: 0 },
    { id: "m3", nome: "Potinho de Molho Cheddar", preco: 11.9, quantidade: 0 },
    { id: "m4", nome: "Potinho de Ranch", preco: 11.9, quantidade: 0 },
    { id: "m5", nome: "Ketchup", preco: 11.9, quantidade: 0 },
    { id: "m6", nome: "Mostarda", preco: 11.9, quantidade: 0 },
  ]);
  const [imageError, setImageError] = useState(false);

  const molhoOptions = [
    "Potinho de Barbecue",
    "Potinho de Maionese Verde",
    "Potinho de Molho Cheddar",
    "Potinho de Rach",
  ];

  const getImageSource = () => {
    if (imageError || !produto.imagem) {
      return require("../../assets/images/hamburger.png");
    }
    return { uri: produto.imagem };
  };

  const handleMolhoSelection = (molho: string) => {
    setSelectedMolho(molho);
    updateCurrentOrder({ molhoSelecionado: molho });
  };

  const handleAdicionalQuantity = (id: string, increment: boolean) => {
    const newAdicionais = adicionais.map((adicional) =>
      adicional.id === id
        ? {
            ...adicional,
            quantidade: increment
              ? adicional.quantidade + 1
              : Math.max(0, adicional.quantidade - 1),
          }
        : adicional,
    );

    setAdicionais(newAdicionais);
    updateCurrentOrder({ adicionais: newAdicionais });
  };

  const handleMolhoExtraQuantity = (id: string, increment: boolean) => {
    const newMolhosExtra = molhosExtra.map((molho) =>
      molho.id === id
        ? {
            ...molho,
            quantidade: increment
              ? molho.quantidade + 1
              : Math.max(0, molho.quantidade - 1),
          }
        : molho,
    );

    setMolhosExtra(newMolhosExtra);
    updateCurrentOrder({ molhosExtra: newMolhosExtra });
  };

  const handleNext = () => {
    if (currentStep === "molho") {
      setCurrentStep("adicionais");
    } else if (currentStep === "adicionais") {
      setCurrentStep("molho-extra");
    } else {
      // Último passo - adicionar ao pedido
      onNext();
    }
  };

  const getButtonText = () => {
    if (currentStep === "molho-extra") {
      return "Adicionar Pedido";
    }
    return "Próximo";
  };

  const RadioButton = ({
    isSelected,
    onPress,
    label,
  }: {
    isSelected: boolean;
    onPress: () => void;
    label: string;
  }) => (
    <TouchableOpacity className="flex-row items-center mb-3" onPress={onPress}>
      <View className="w-5 h-5 rounded-full border-2 border-orange-500 mr-3 items-center justify-center">
        {isSelected && <View className="w-3 h-3 rounded-full bg-orange-500" />}
      </View>
      <Text className="text-white text-base">{label}</Text>
    </TouchableOpacity>
  );

  const AdicionalItem = ({ adicional }: { adicional: Adicional }) => (
    <View className="flex-row items-center justify-between mb-4">
      <View className="flex-1">
        <Text className="text-white text-base font-medium">
          {adicional.nome}
        </Text>
        {adicional.preco > 0 && (
          <Text className="text-gray-400 text-sm">
            + R$ {adicional.preco.toFixed(2)}
          </Text>
        )}
      </View>

      <View className="flex-row items-center">
        {adicional.quantidade > 0 && (
          <>
            <TouchableOpacity
              className="w-8 h-8 bg-gray-600 rounded-full items-center justify-center mr-2"
              onPress={() => handleAdicionalQuantity(adicional.id, false)}
            >
              <Text className="text-white text-lg font-bold">-</Text>
            </TouchableOpacity>
            <Text className="text-white text-base font-bold mx-2 min-w-[20px] text-center">
              {adicional.quantidade}
            </Text>
          </>
        )}

        <TouchableOpacity
          className="w-8 h-8 bg-orange-500 rounded-full items-center justify-center"
          onPress={() => handleAdicionalQuantity(adicional.id, true)}
        >
          <Plus size={16} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );

  const MolhoExtraItem = ({ molho }: { molho: Adicional }) => (
    <View className="flex-row items-center justify-between mb-4">
      <View className="flex-1">
        <Text className="text-white text-base font-medium">{molho.nome}</Text>
        <Text className="text-gray-400 text-sm">
          + R$ {molho.preco.toFixed(2)}
        </Text>
      </View>

      <View className="flex-row items-center">
        {molho.quantidade > 0 && (
          <>
            <TouchableOpacity
              className="w-8 h-8 bg-gray-600 rounded-full items-center justify-center mr-2"
              onPress={() => handleMolhoExtraQuantity(molho.id, false)}
            >
              <Text className="text-white text-lg font-bold">-</Text>
            </TouchableOpacity>
            <Text className="text-white text-base font-bold mx-2 min-w-[20px] text-center">
              {molho.quantidade}
            </Text>
          </>
        )}

        <TouchableOpacity
          className="w-8 h-8 bg-orange-500 rounded-full items-center justify-center"
          onPress={() => handleMolhoExtraQuantity(molho.id, true)}
        >
          <Plus size={16} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View className="flex-1 bg-black">
      {/* Header */}
      <View className="flex-row justify-between items-center p-5 pt-12">
        <TouchableOpacity onPress={onGoBack}>
          <ChevronLeft size={24} color="white" />
        </TouchableOpacity>

        <View className="flex-row items-center gap-2">
          <MapPin size={16} color="#EE6B10" />
          <Text className="text-white text-sm">Itajubá, Minas Gerais</Text>
          <ChevronDown size={12} color="#EE6B10" />
        </View>

        <TouchableOpacity className="w-[35px] h-[35px]">
          <Image
            source={require("../../assets/images/logo.png")}
            style={{ width: "100%", height: "100%" }}
          />
        </TouchableOpacity>
      </View>

      <ScrollView className="flex-1 px-5">
        {/* Título do Produto */}
        <View className="bg-orange-500 rounded-[20px] py-3 px-4 mb-5">
          <Text className="text-white text-lg font-bold text-center">
            {produto.nome}
          </Text>
        </View>

        {/* Imagem do Produto */}
        <View className="items-center mb-5">
          <Image
            source={getImageSource()}
            style={{ width: 250, height: 200 }}
            resizeMode="contain"
            onError={() => setImageError(true)}
          />
        </View>

        {currentStep === "molho" ? (
          <>
            {/* Descrição */}
            <Text className="text-white text-base mb-3 leading-5">
              {produto.descricao}
            </Text>

            {/* Preço */}
            <Text className="text-white text-2xl font-bold mb-6">
              R$ {produto.preco.toFixed(2)}
            </Text>

            {/* Opções de Molho */}
            <Text className="text-white text-lg font-bold mb-4">
              Molho Especial (Uma vai na faixa!)
            </Text>

            {molhoOptions.map((molho) => (
              <RadioButton
                key={molho}
                isSelected={selectedMolho === molho}
                onPress={() => handleMolhoSelection(molho)}
                label={molho}
              />
            ))}
          </>
        ) : currentStep === "adicionais" ? (
          <>
            {/* Seção de Adicionais */}
            <Text className="text-white text-lg font-bold mb-2">
              Ketchup & Mostarda?
            </Text>
            <Text className="text-gray-400 text-sm mb-4">
              (Até 4 por nossa conta!)
            </Text>

            {/* Ketchup e Mostarda */}
            {adicionais.slice(0, 2).map((adicional) => (
              <AdicionalItem key={adicional.id} adicional={adicional} />
            ))}

            <Text className="text-white text-lg font-bold mb-2 mt-6">
              Deixe o Miô Ainda Miô!
            </Text>
            <Text className="text-gray-400 text-sm mb-4">
              Selecione até 10 opções
            </Text>

            {/* Outros Adicionais */}
            {adicionais.slice(2).map((adicional) => (
              <AdicionalItem key={adicional.id} adicional={adicional} />
            ))}
          </>
        ) : (
          <>
            {/* Seção de Molho Extra */}
            <Text className="text-white text-lg font-bold mb-2">
              Molho Especial Extra
            </Text>
            <Text className="text-gray-400 text-sm mb-4">
              Selecione até 10 opções
            </Text>

            {/* Molhos Extra */}
            {molhosExtra.map((molho) => (
              <MolhoExtraItem key={molho.id} molho={molho} />
            ))}

            <Text className="text-white text-lg font-bold mb-2 mt-6">
              Ketchup & Mostarda Extra
            </Text>
            <Text className="text-gray-400 text-sm mb-4">
              Selecione até 100 opções
            </Text>

            {/* Ketchup e Mostarda Extra */}
            {molhosExtra.slice(4).map((molho) => (
              <MolhoExtraItem key={molho.id} molho={molho} />
            ))}
          </>
        )}

        {/* Botão Próximo/Adicionar Pedido */}
        <View className="mt-8 mb-10">
          <CustomButton onPress={handleNext}>{getButtonText()}</CustomButton>
        </View>
      </ScrollView>
    </View>
  );
};
