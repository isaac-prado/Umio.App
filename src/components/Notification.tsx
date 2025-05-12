import { Bell } from "lucide-react-native";
import { View } from "react-native";

export const Notification = () => {
  return (
    <View className="rounded-full bg-[#B8B8B8] p-1.5">
      <Bell size={20} color="#000" />
    </View>
  )
}