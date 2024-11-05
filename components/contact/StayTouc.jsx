import { View, Text, Image, Linking } from "react-native"
import { follow, stayTouch } from "../../constant/data"
import { TouchableOpacity } from "react-native"

export default function StayTouch() {
    return (
        <View className="bg-primary px-6 py-[50px] mb-10 rounded-xl">
            <Text className="font-bold font-poppins leading-[36px] text-[30px] text-white uppercase">
                STAY IN TOUCH
            </Text>
            <Text className="font-bold font-poppins leading-[36px] text-[30px] text-white uppercase">
                WITH US ANYTIME
            </Text>
            <View className="mt-10 flex gap-[14px]">
                {stayTouch.map((data) => (
                    <View
                        key={data.name}
                        className="flex-row items-center gap-[10px]"
                    >
                        <View className="p-[14px] bg-[#19B6F1] rounded-full w-[50px] flex-row items-center justify-center">
                            <Image source={data.icon} className="" />
                        </View>
                        <View className="">
                            <Text className="text-white font-poppins font-bold text-[12px] uppercase">
                                {data.name}
                            </Text>
                            <Text className="text-white text-[14px] font-poppins mt-[2px] uppercase">
                                {data.title}
                            </Text>
                        </View>
                    </View>
                ))}

                <View className="mt-[30px] flex-row gap-[14px] items-center">
                    <View className="w-[34px] h-[2px] bg-white"></View>
                    <Text className="uppercase text-white text-[18px] font-poppins font-medium">
                        connect with us:
                    </Text>
                </View>
                <View className="flex-row gap-[10px] items-center">
                    {follow.map((data, index) => (
                        <TouchableOpacity
                            key={index}
                            className="p-[14px]"
                            onPress={() =>
                                Linking.openURL(data.link).catch((error) =>
                                    console.error(
                                        "Failed to open email link:",
                                        error
                                    )
                                )
                            }
                        >
                            <Image source={data.img} />
                        </TouchableOpacity>
                    ))}
                </View>
            </View>
        </View>
    )
}
