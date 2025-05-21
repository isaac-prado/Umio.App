import { Search } from "lucide-react-native"
import { View } from "react-native"
import { TextInput } from "react-native"

interface InputProps {
  placeholder?: string
  icon?: React.ReactNode
}

export const Input = ({ placeholder, icon, value }: InputProps & { value?: string }) => {
  return (
    <View className="flex-row items-center bg-neutral-800 rounded-xl px-3 h-10">
      <View className="mr-[10px] text-white">
        {icon && icon}
      </View>
      <TextInput
        className="flex-1 text-white text-base h-full"
        placeholder={placeholder || ''}
        placeholderTextColor="#666"
        value={value}
      />
    </View>
  )
}
