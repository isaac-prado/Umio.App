import { Bell } from "lucide-react-native";
import { View } from "react-native";

export const Notification = ({ active }: { active?: boolean }) => {
  return (
    <View
      className={`rounded-full p-1.5 ${
        active ? "bg-orange-500" : "bg-[#B8B8B8] "
      }`}
    >
      <Bell size={20} color="#000" />
    </View>
  );
};
