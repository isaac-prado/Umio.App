import { StatusBar, View, Image, Text, TouchableOpacity } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

interface SplashPageProps {
  onPressStart: () => void
}

export const SplashPage = ({
  onPressStart
}: SplashPageProps) => {
    return (
      <SafeAreaView className="flex-1 bg-black p-5 justify-between">
        <StatusBar />
            
        <View className="items-center mt-10">
          <Image
            source={require("./../../assets/images/umio.svg")}
            style={{ width: 83, height: 82 }}
          />
        </View>

        <View className="flex-1 justify-center items-center -mt-10">
          <Image 
            source={require("../../assets/images/hamburguer.svg")}
            style={{ width: 456, height: 426 }}
          />
        </View>

        <Text className="font-title font-bold text-white text-base mb-10 ml-5">
          É coisa de outro mundo...
        </Text>
        
        <TouchableOpacity 
          className="bg-[#EE6B10] rounded-3xl py-[15px] items-center mb-5 w-[300px] self-center"
          onPress={onPressStart}  
        >
          <Text className="text-white text-xl">Peça já!</Text>
        </TouchableOpacity>
      </SafeAreaView>
    )
}