import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import { MapPin, ChevronDown, Search } from "lucide-react-native";
import { useMemo, useState } from "react";

import { DiscountBanner } from "../../components/DiscountBanner";
import { CategoryCard } from "../../components/CategoryCard";
import { FoodCard } from "../../components/FoodCard";
import { Input } from "../../components/Input";
import { Notification } from "../../components/Notification";

import { Produto } from "../../interface/Produto";

import { categories } from "../../data/categories";
import { foods } from "../../data/foods";
import { discounts } from "../../data/discounts";

interface HomePageProps {
  produtos: Produto[];
  onPressProfile: () => void;
  onPressNotifications: () => void;
}

export const HomePage = ({ produtos, onPressNotifications }: HomePageProps) => {
  const [selectedCategoria, setSelectedCategoria] = useState<string | null>(
    null,
  );

  const filteredProdutos = useMemo(() => {
    if (!selectedCategoria) return produtos;
    return produtos.filter((p) => p.categoriaId === selectedCategoria);
  }, [produtos, selectedCategoria]);

  return (
    <View className="flex-1 bg-black p-5">
      <View className="flex-row justify-between items-center">
        <TouchableOpacity className="w-[35px] h-[35px]">
          <Image
            source={require("../../assets/images/logo.png")}
            style={{ width: "100%", height: "100%" }}
          />
        </TouchableOpacity>

        <View className="flex-row items-center gap-2">
          <MapPin size={16} color="#EE6B10" />
          <Text className="text-white text-sm">Itajubá, Minas Gerais</Text>
          <ChevronDown size={12} color="#EE6B10" />
        </View>

        <TouchableOpacity onPress={onPressNotifications}>
          <Notification />
        </TouchableOpacity>
      </View>

      <View className="my-4">
        <Input icon={<Search size={16} />} />
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <Text className="text-white text-lg font-bold mb-2">Bem-vindo!</Text>

        {discounts.map((discount) => (
          <DiscountBanner
            key={discount.id}
            title={discount.title}
            discount={discount.discount}
            subtitle={discount.subtitle}
            image={require("../../assets/images/hamburger.png")}
          />
        ))}

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          className="my-3"
        >
          <View className="flex flex-row gap-2">
            <CategoryCard
              iconName="Utensils"
              name="Todos"
              isActive={selectedCategoria === null}
              onPress={() => setSelectedCategoria(null)}
            />

            {categories.map((category) => (
              <CategoryCard
                key={category.id}
                iconName={category.iconName}
                name={category.name}
                isActive={selectedCategoria === category.id.toString()}
                onPress={() => setSelectedCategoria(category.id.toString())}
              />
            ))}
          </View>
        </ScrollView>

        <View className="my-5 flex flex-row flex-wrap gap-4 items-center justify-center">
          {filteredProdutos.length === 0 ? (
            <Text className="text-white">Nenhum produto nessa categoria.</Text>
          ) : (
            filteredProdutos.map((product) => (
              <FoodCard
                key={product.id}
                image={{ uri: product.imagem }}
                name={product.nome}
                description={product.descricao}
                price={product.preco.toFixed(2)}
              />
            ))
          )}
        </View>
      </ScrollView>
    </View>
  );
};
