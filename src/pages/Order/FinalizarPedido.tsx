import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from "react-native";
import {
  ChevronLeft,
  MapPin,
  ChevronDown,
  Plus,
  Minus,
} from "lucide-react-native";
import { useState } from "react";
import CustomButton from "../../components/CustomButton";
import { Produto } from "../../interface/Produto";

interface FinalizarPedidoProps {
  produto: Produto;
  molhoSelecionado: string;
  adicionais: Array<{ nome: string; quantidade: number; preco: number }>;
  molhosExtra: Array<{ nome: string; quantidade: number; preco: number }>;
  onGoBack: () => void;
  onFinalizarPedido: () => void;
  onAdicionarMaisItens: () => void;
}

export const FinalizarPedido = ({
  produto,
  molhoSelecionado,
  adicionais,
  molhosExtra,
  onGoBack,
  onFinalizarPedido,
  onAdicionarMaisItens,
}: FinalizarPedidoProps) => {
  const [quantidade, setQuantidade] = useState(1);
  const [comentarios, setComentarios] = useState("");
  const [imageError, setImageError] = useState(false);

  const getImageSource = () => {
    if (imageError || !produto.imagem) {
      return require("../../assets/images/hamburger.png");
    }
    return { uri: produto.imagem };
  };

  const calcularPrecoTotal = () => {
    let precoBase = produto.preco * quantidade;

    // Adicionar preço dos adicionais
    const precoAdicionais = adicionais.reduce((total, adicional) => {
      return total + adicional.preco * adicional.quantidade * quantidade;
    }, 0);

    // Adicionar preço dos molhos extra
    const precoMolhosExtra = molhosExtra.reduce((total, molho) => {
      return total + molho.preco * molho.quantidade * quantidade;
    }, 0);

    return precoBase + precoAdicionais + precoMolhosExtra;
  };

  const getAdicionaisSelecionados = () => {
    const selecionados = [];

    // Adicionar molho selecionado
    selecionados.push(`+ ${molhoSelecionado}`);

    // Adicionar adicionais com quantidade > 0
    adicionais.forEach((adicional) => {
      if (adicional.quantidade > 0) {
        selecionados.push(`+ ${adicional.nome}`);
      }
    });

    // Adicionar molhos extra com quantidade > 0
    molhosExtra.forEach((molho) => {
      if (molho.quantidade > 0) {
        selecionados.push(`+ ${molho.nome}`);
      }
    });

    return selecionados;
  };

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
        {/* Título */}
        <View className="bg-orange-500 rounded-[20px] py-3 px-4 mb-5">
          <Text className="text-white text-lg font-bold text-center">
            Meu pedido
          </Text>
        </View>

        {/* Item do Pedido */}
        <View className="flex-row items-center mb-6">
          <Image
            source={getImageSource()}
            style={{ width: 80, height: 80 }}
            resizeMode="contain"
            onError={() => setImageError(true)}
          />

          <View className="flex-1 ml-4">
            <Text className="text-white text-lg font-bold">{produto.nome}</Text>
            <Text className="text-white text-base mb-2">
              R$ {calcularPrecoTotal().toFixed(2)}
            </Text>

            {/* Lista de adicionais */}
            {getAdicionaisSelecionados().map((adicional, index) => (
              <Text key={index} className="text-gray-400 text-sm">
                {adicional}
              </Text>
            ))}
          </View>

          {/* Controle de Quantidade */}
          <View className="flex-row items-center">
            <TouchableOpacity
              className="w-8 h-8 bg-gray-600 rounded-full items-center justify-center mr-2"
              onPress={() => setQuantidade(Math.max(1, quantidade - 1))}
            >
              <Minus size={16} color="white" />
            </TouchableOpacity>

            <Text className="text-white text-lg font-bold mx-2 min-w-[30px] text-center">
              {quantidade}
            </Text>

            <TouchableOpacity
              className="w-8 h-8 bg-orange-500 rounded-full items-center justify-center ml-2"
              onPress={() => setQuantidade(quantidade + 1)}
            >
              <Plus size={16} color="white" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Comentários */}
        <Text className="text-white text-lg font-bold mb-3">Comentários</Text>

        <TextInput
          className="bg-gray-800 border border-gray-600 rounded-lg p-4 text-white text-base mb-6"
          placeholder="Opcional"
          placeholderTextColor="#9CA3AF"
          multiline
          numberOfLines={4}
          value={comentarios}
          onChangeText={setComentarios}
          style={{ textAlignVertical: "top", minHeight: 100 }}
        />

        {/* Botões */}
        <View className="mb-10">
          <CustomButton onPress={onAdicionarMaisItens} className="mb-4">
            Adicionar mais itens
          </CustomButton>

          <CustomButton onPress={onFinalizarPedido}>
            Finalizar pedido
          </CustomButton>
        </View>
      </ScrollView>
    </View>
  );
};
