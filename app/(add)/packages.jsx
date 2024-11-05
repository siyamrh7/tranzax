import { View, Text, Image, ScrollView, StyleSheet } from "react-native"
import AdsHeroSection from "../../components/addAdvertise/AdsHeroSection"
import { useContext, useState } from "react"
import { AppContext } from "../../store/store"
import CustomHr from "../../components/shared/CustomHr"
import { pricingCategories } from "../../constant/data"
import { TouchableOpacity } from "react-native"
import { AntDesign } from "@expo/vector-icons"
import { router } from "expo-router"
import PackagesCom from "../../components/add/Packages"

export default function Packages() {
    const { servicePackages } = useContext(AppContext)
    const [selectCategory, setSelectCategory] = useState(null)

    return (
        <ScrollView className="px-4">
            <AdsHeroSection />
            <View
                className="mt-[25px] px-[24px] py-10 rounded-[12px]"
                style={styles.shadowBox}
            >
                <View className="flex-row items-center justify-between uppercase">
                    <TouchableOpacity
                        onPress={() => router.push("(add)/advertise")}
                    >
                        <Text className="text-[20px] font-poppins font-semibold text-primaryBlk">
                            ADVERTISE
                        </Text>
                    </TouchableOpacity>

                    <View className="w-[1px] h-5 bg-[#BFBFBF]"></View>
                    <TouchableOpacity>
                        <Text className="text-[20px] font-poppins font-semibold text-primary uppercase">
                            PACKAGES
                        </Text>
                    </TouchableOpacity>

                    <View className="w-[1px] h-5 bg-[#BFBFBF]"></View>
                    <TouchableOpacity
                        className=""
                        onPress={() => router.push("(add)/payment")}
                    >
                        <Text className="text-[20px] font-poppins font-semibold text-primaryBlk uppercase">
                            Payments
                        </Text>
                    </TouchableOpacity>
                </View>
                <PackagesCom
                    selectCategory={selectCategory}
                    setSelectCategory={setSelectCategory}
                />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    shadowBox: {
        backgroundColor: "#fff",
        shadowColor: "rgba(0, 0, 0, 0.10)",
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 1,
        shadowRadius: 30,
        elevation: 5,
    },
})
