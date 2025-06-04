import React from "react";
import { View, Text, Image } from "react-native";
import { NotificationData } from "../data/notifications";

interface NotificationCardProps {
  notification: NotificationData;
}

export const NotificationCard = ({ notification }: NotificationCardProps) => {
  // Função para selecionar a imagem correta com base no nome
  const getNotificationImage = () => {
    switch (notification.image) {
      case "notfication1":
        return require("../assets/images/notfication1.png");
      case "notfication2":
        return require("../assets/images/notfication2.png");
      case "notfication3":
        return require("../assets/images/notfication3.png");
      case "notfication4":
        return require("../assets/images/notfication4.png");
      case "notfication5":
        return require("../assets/images/notfication5.png");
      default:
        return require("../assets/images/notfication1.png");
    }
  };

  return (
    <View className="bg-zinc-800/30 rounded-xl mb-4 overflow-hidden">
      <View className="flex-row px-4 pt-4 pb-1 items-center">
        {/* Imagem à esquerda */}
        <View className="mr-1">
          <Image
            source={getNotificationImage()}
            style={{ width: 120, height: 120 }}
            resizeMode="contain"
          />
        </View>

        {/* Conteúdo no meio */}
        <View className="flex-1">
          <Text className="text-white text-3xl text-center">
            {notification.percentage}% OFF
          </Text>
          <Text className="text-white text-[10px] text-center">
            {notification.description}
          </Text>
        </View>

        {/* Data à direita */}
        <View className="absolute right-4 top-3">
          <Text className="text-white text-[8px]">{notification.date}</Text>
        </View>
      </View>
    </View>
  );
};
