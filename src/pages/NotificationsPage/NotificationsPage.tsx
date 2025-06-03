import React from "react";
import { View, Text, ScrollView } from "react-native";
import { notifications } from "../../data/notifications";
import { NotificationCard } from "../../components/NotificationCard";
import { Notification } from "../../components/Notification";

interface NotificationsPageProps {
  onPressBack: () => void;
}

export const NotificationsPage = () => {
  return (
    <View className="flex-1 bg-black p-5">
      <View className="flex-row items-center justify-between pb-5">
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
