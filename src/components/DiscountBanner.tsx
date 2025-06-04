import { View, Text, Image } from "react-native";

type DiscountBannerProps = {
  discount: string;
  subtitle: string;
  image: any;
};

export const DiscountBanner = ({
  discount,
  subtitle,
  image,
}: DiscountBannerProps) => {
  return (
    <View className="bg-[#EE6B10] rounded-2xl mb-5 h-[120px] flex-row justify-between items-center overflow-hidden relative">
      <Text className="text-white text-xs font-semibold absolute top-1 left-2">
        CUPONS
      </Text>
      <View className="pl-16 pr-4 py-4 flex-1">
        <Text className="text-white text-5xl font-black leading-none mb-1 mt-4">
          {discount}
        </Text>
        <Text className="text-white text-sm font-semibold tracking-wide">
          {subtitle}
        </Text>
      </View>
      <View className="absolute right-0 top-0 h-full w-[140px] justify-center items-center">
        <Image
          source={image}
          style={{ width: 130, height: 130, marginTop: -5 }}
          resizeMode="contain"
        />
      </View>
    </View>
  );
};
