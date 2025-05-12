import { View, Text, Image, SafeAreaView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import CustomButton from '../../components/CustomButton';

interface SplashPageProps {
  onPressStart: () => void;
}

export const SplashPage = ({ onPressStart }: SplashPageProps) => {
  return (
    <View className="flex-1 bg-black p-5">
      <StatusBar style="light" />
      
      <View className="items-center mt-10">
        <Image 
          source={require('../../assets/images/logo.png')} 
          style={{width: 80, height: 80}}
        />
      </View>
      
      <View className="flex-1 justify-center items-center -mt-10">
        <Image 
          source={require('../../assets/images/hamburger.png')} 
          style={{width: 360}}
          resizeMode="contain"
        />
      </View>
      
      <Text className="text-white text-base font-medium mb-5 ml-5">É coisa de outro mundo...</Text>
      
      <CustomButton onPress={onPressStart}>
        Peça já!
      </CustomButton>
    </View>
  );
} 