import { View, Text, Image, ScrollView } from "react-native"
import AdsHeroSection from "../../components/addAdvertise/AdsHeroSection"
import { useContext, useState } from "react"
import { AppContext } from "../../store/store"
import CustomHr from "../../components/shared/CustomHr"
import { pricingCategories } from "../../constant/data"
import { TouchableOpacity } from "react-native"
import { AntDesign } from "@expo/vector-icons"
import { router } from "expo-router"

export default function Packages() {
    const { packageLists } = useContext(AppContext)
    const [selectCategory, setSelectCategory] = useState(null)

    return (
        <ScrollView className="px-4">
            <AdsHeroSection />
            <View
                className="mt-[25px] px-[24px] py-10 rounded-[12px]"
                style={styles.shadowBox}
            >
                <View className="flex-row items-center justify-between uppercase">
                    <Text className="text-[20px] font-poppins font-semibold text-primaryBlk">
                        ADVERTISE
                    </Text>

                    <View className="w-[1px] h-5 bg-[#BFBFBF]"></View>
                    <Text className="text-[20px] font-poppins font-semibold text-primary uppercase">
                        PACKAGES
                    </Text>
                    <View className="w-[1px] h-5 bg-[#BFBFBF]"></View>
                    <Text className="text-[20px] font-poppins font-semibold text-primaryBlk uppercase">
                        Payments
                    </Text>
                </View>
                <CustomHr className={"bg-primary h-[2px] mt-[14px]"} />
                <View className="mt-[30px] flex-row items-center gap-[10px] pb-2 border-b-[1px] border-primary">
                    <Image
                        source={require("../../assets/images/token.png")}
                        className="w-[18px] h-[18px]"
                    />
                    <Text className="uppercase text-[18px] font-poppins font-semibold text-primary">
                        PACKAGES
                    </Text>
                </View>
                <View className="mt-10 flex gap-10">
                    {pricingCategories.map((priceCat) => (
                        <View
                            key={priceCat.name}
                            className="pb-[17px] flex-row items-center justify-between border-b-[1px] border-b-[#D9D9D9]"
                        >
                            <View className=" ">
                                <View className="mt-3 gap-x-2 flex-row items-center">
                                    <TouchableOpacity
                                        onPress={() =>
                                            setSelectCategory(priceCat.name)
                                        }
                                        className="w-[18px] h-[18px] border-[1px] border-primary mr-2 rounded-full items-center justify-center"
                                    >
                                        {selectCategory === priceCat.name && (
                                            <View className="w-3 h-3 rounded-full bg-primary" />
                                        )}
                                    </TouchableOpacity>
                                    <Text className="text-[#8F8F8F]  font-poppins font-semibold text-[16px] uppercase">
                                        {priceCat.name}
                                    </Text>
                                </View>
                            </View>
                            <View className="flex-row items-center">
                                <Text className="text-[16px] font-poppins font-bold text-primary">
                                    $ {priceCat.price}
                                </Text>
                            </View>
                        </View>
                    ))}
                    <TouchableOpacity
                        className={`bg-[#00ADEF] mt-5 rounded-[12px] justify-center py-[10px] flex-row items-center gap-1 `}
                        onPress={() => router.push("(add)/payment")}
                    >
                        <Text
                            className={`font-poppins text-[16px] text-white font-semibold text-center uppercase`}
                        >
                            NEXT
                        </Text>
                        <AntDesign name="arrowright" size={20} color="white" />
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = {
    shadowBox: {
        shadowColor: "rgba(0, 0, 0, 0.1)",
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 1,
        shadowRadius: 20,
        elevation: 5,
    },
}
