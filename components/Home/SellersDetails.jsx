import { View, Text, Image } from "react-native"
import { homeFotterData } from "../../constant/data"

export default function SellersDetails({ stats }) {
    return (
        <View className="bg-primary mt-2">
            {homeFotterData.map((data) => (
                <View
                    key={data.name}
                    className="py-[30px] flex items-center justify-center"
                >
                    <Image source={data.img} />
                    <View className="mt-[14px] flex items-center justify-center ">
                        <Text className="text-white font-poppins font-semibold text-[44px]">
                            {stats[data.countName] !== undefined
                                ? stats[data.countName]
                                : 0}
                            {data.name === "Locations" && "+"}
                        </Text>
                        <Text className="text-white font-poppins font-medium text-[36px]">
                            {data.name}
                        </Text>
                    </View>
                </View>
            ))}
        </View>
    )
}
