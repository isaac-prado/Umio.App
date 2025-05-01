import { View, Text, Image } from 'react-native';

type DiscountBannerProps = {
  title: string;
  discount: string;
  subtitle: string;
  image: any;
};

export default function DiscountBanner({ title, discount, subtitle, image }: DiscountBannerProps) {
  return (
    <View className="bg-[#EE6B10] rounded-lg mx-[15px] mb-5 h-[100px] flex-row justify-between overflow-hidden">
      <View className="p-[15px]">
        <Text className="text-white text-sm font-bold">{title}</Text>
        <Text className="text-white text-4xl font-bold leading-10">{discount}</Text>
        <Text className="text-white text-sm font-bold">{subtitle}</Text>
      </View>
      <Image 
        source={image} 
        style={{width: 120, height: 120, marginTop: -10, marginRight: -10}}
        resizeMode="contain"
      />
    </View>
  );
} 