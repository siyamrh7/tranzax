import { View, Text, ScrollView, Image, TextInput } from "react-native"
import BoostBrand from "../../components/shared/BoostBrand"
import AdsHeroSection from "../../components/addAdvertise/AdsHeroSection"
import CustomHr from "../../components/shared/CustomHr"
import { adsCardHolderInfo, adsCardInformation } from "../../constant/data"
import { useState } from "react"
import { TouchableOpacity } from "react-native"
import { AntDesign } from "@expo/vector-icons"

export default function Payment() {
    const [cardholderInfo, setCardHolderDerInfo] = useState({
        firstName: "",
        lastName: "",
        address: "",
        city: "",
        stateProvince: "",
        postalCode: "",
        country: "Canada",
    })
    const [cardInfo, setCardInfo] = useState({
        cardNumber: "",
        expirationMonth: "",
        expirationYear: "",
        cvv: "",
    })
    return (
        <ScrollView className="px-4">
            <View className="mt-20">
                <AdsHeroSection />
                <View
                    className="px-[30px] mt-5 py-10 rounded-[12px]"
                    style={styles.shadowBox}
                >
                    <View className="flex-row items-center justify-between">
                        <Text className="text-[20px] font-poppins font-semibold text-primaryBlk uppercase">
                            ADVERTISE
                        </Text>

                        <View className="w-[1px] h-5 bg-[#BFBFBF]"></View>
                        <Text className="text-[20px] font-poppins font-semibold text-primaryBlk uppercase">
                            PACKAGES
                        </Text>
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
                    <View className="mt-[42px]">
                        <View className="flex-row items-center justify-between gap-1">
                            <Image
                                source={require("../../assets/images/cardholder.png")}
                                className="w-7 h-7"
                            />
                            <Text className="text-[21px] font-semibold font-poppins text-primary text-nowrap">
                                CARD HOLDER INFORMATION:
                            </Text>
                        </View>
                        <View className="flex gap-[14px] mt-[14px]">
                            {adsCardHolderInfo.map((info) => (
                                <View key={info.key} className="">
                                    <Text className="text-[#061B3B] text-[16px] font-poppins font-semibold">
                                        {info.label}
                                    </Text>
                                    <View className="border-[1px] mt-[10px] border-[#BFBFBF] px-[14px] py-[10px] rounded-[4px]">
                                        <TextInput
                                            value={cardholderInfo[info.key]}
                                            onChangeText={(text) =>
                                                setCardHolderDerInfo((pre) => {
                                                    return {
                                                        ...pre,
                                                        [info.key]: text,
                                                    }
                                                })
                                            }
                                            placeholder={info.placeholder}
                                            placeholderTextColor={"#BFBFBF"}
                                            className="font-poppins text-[16px] mt-[10px]"
                                        />
                                    </View>
                                </View>
                            ))}
                        </View>
                    </View>
                </View>
                <View
                    className="px-[30px] py-10 rounded-[12px] mt-[26px]"
                    style={styles.shadowBox}
                >
                    <View className="flex-row items-center gap-[18px]">
                        <Image
                            source={require("../../assets/images/cardinfo.png")}
                            className="w-7 h-7"
                        />
                        <Text className="text-[21px] font-semibold font-poppins mt-[1px] text-primary text-nowrap">
                            Card Information
                        </Text>
                    </View>
                    <View className="flex gap-[14px] mt-[14px]">
                        {adsCardInformation.map((info) => (
                            <View key={info.name} className="">
                                <Text className="text-[#061B3B] text-[16px] font-poppins font-semibold">
                                    {info.label}
                                </Text>
                                <View className="border-[1px] mt-[10px] border-[#BFBFBF] px-[14px] py-[10px] rounded-[4px]">
                                    <TextInput
                                        value={cardInfo[info.name]}
                                        onChangeText={(text) =>
                                            setCardInfo((pre) => {
                                                return {
                                                    ...pre,
                                                    [info.name]: text,
                                                }
                                            })
                                        }
                                        placeholder={info.placeholder}
                                        placeholderTextColor={"#BFBFBF"}
                                        className="font-poppins text-[16px] mt-[10px]"
                                    />
                                </View>
                            </View>
                        ))}
                    </View>
                </View>
                <TouchableOpacity
                    className={`bg-[#00ADEF] mt-5 rounded-[12px] justify-center py-[10px] flex-row items-center gap-1 `}
                >
                    <Text
                        className={`font-poppins text-[16px] text-white font-semibold text-center uppercase`}
                    >
                        NEXT
                    </Text>
                    <AntDesign name="arrowright" size={20} color="white" />
                </TouchableOpacity>
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
