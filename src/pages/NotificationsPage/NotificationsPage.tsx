import React from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { ArrowLeft, ChevronLeft } from "lucide-react-native";
import { notifications } from "../../data/notifications";
import { NotificationCard } from "../../components/NotificationCard";
import { Notification } from "../../components/Notification";

interface NotificationsPageProps {
  onPressBack: () => void;
}

export const NotificationsPage = ({ onPressBack }: NotificationsPageProps) => {
  return (
    <View className="flex-1 bg-black p-5">
      <View className="flex-row items-center justify-between pb-5">
        <TouchableOpacity
          onPress={onPressBack}
          className="w-10 h-10 justify-center items-center"
        >
          <ChevronLeft size={28} color="white" />
        </TouchableOpacity>
        <Text className="text-white text-base">Notificações</Text>
        <Notification active={true} />
      </View>

      <ScrollView className="flex-1 px-5" showsVerticalScrollIndicator={false}>
        {notifications.map((notification) => (
          <NotificationCard key={notification.id} notification={notification} />
        ))}
      </ScrollView>
    </View>
  );
};
