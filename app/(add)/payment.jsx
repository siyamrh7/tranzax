import { View, Text, ScrollView, Image, TextInput } from "react-native"
import BoostBrand from "../../components/shared/BoostBrand"
import AdsHeroSection from "../../components/addAdvertise/AdsHeroSection"
import CustomHr from "../../components/shared/CustomHr"
import { adsCardHolderInfo, adsCardInformation } from "../../constant/data"
import { useState } from "react"
import { TouchableOpacity } from "react-native"
import { AntDesign } from "@expo/vector-icons"
import { router } from "expo-router"

export default function Payment() {
    return (
        <ScrollView className="px-4">
            <View className="mt-20">
                <AdsHeroSection />
                <View
                    className="px-[30px] mt-5 py-10 rounded-[12px]"
                    style={styles.shadowBox}
                >
                    <View className="flex-row items-center justify-between">
                        <TouchableOpacity
                            onPress={() => router.push("(add)/advertise")}
                        >
                            <Text className="text-[20px] font-poppins font-semibold text-primaryBlk uppercase">
                                ADVERTISE
                            </Text>
                        </TouchableOpacity>

                        <View className="w-[1px] h-5 bg-[#BFBFBF]"></View>
                        <TouchableOpacity
                            onPress={() => router.push("(add)/packages")}
                        >
                            <Text className="text-[20px] font-poppins font-semibold text-primaryBlk uppercase">
                                PACKAGES
                            </Text>
                        </TouchableOpacity>

                        <View className="w-[1px] h-5 bg-[#BFBFBF]"></View>

                        <Text className="text-[20px] font-poppins font-semibold text-primary uppercase">
                            Payments
                        </Text>
                    </View>
                    <CustomHr className={"bg-primary h-[2px] mt-[14px]"} />
                    <View className="mt-[30px] flex-row items-center gap-[10px] pb-2 border-b-[1px] border-primary">
                        <Image
                            source={require("../../assets/images/cardinfo.png")}
                            className="w-[18px] h-[18px]"
                        />
                        <Text className="uppercase text-[18px] font-poppins font-semibold text-primary ">
                            Payments
                        </Text>
                    </View>
                    {/* <View> */}
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
