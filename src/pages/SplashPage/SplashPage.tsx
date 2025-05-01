import { StatusBar, View, Image, Text, TouchableOpacity } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

interface SplashPageProps {
  onPressStart: () => void
}

export const SplashPage = ({
  onPressStart
}: SplashPageProps) => {
    return (
      <SafeAreaView>
        <StatusBar />
            
        <View>
          <Image
            source={require("./../../assets/images/logo.png")}
            style={{ width: 80, height: 80 }}
          />
        </View>

        <View>
          <Image />
        </View>

        
        <TouchableOpacity 
          className="bg-[#EE6B10] rounded-3xl py-[15px] items-center mb-5 w-[300px] self-center"
          onPress={onPressStart}  
        >
          <Text className="text-white text-xl">Peça já!</Text>
        </TouchableOpacity>
      </SafeAreaView>
    )
}