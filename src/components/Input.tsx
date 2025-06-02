import { Search } from "lucide-react-native"
import { TextInputProps, View } from "react-native"
import { TextInput } from "react-native"

interface InputProps extends TextInputProps {
  placeholder?: string
  icon?: React.ReactNode
}

export const Input: React.FC<InputProps> = ({ placeholder, icon, value, ...props }) => {
  return (
    <View className="flex-row items-center bg-neutral-800 rounded-xl px-3 h-10">
      {icon && <View className="mr-[10px]">{icon}</View>}
      <TextInput
        className="flex-1 text-white text-base h-full"
        placeholder={placeholder}
        placeholderTextColor="#666"
        value={value}
        {...props}
      />
    </View>
  )
}
