import {
    View,
    Text,
    Image,
    ScrollView,
    TextInput,
    StyleSheet,
} from "react-native"
import CustomHr from "../../components/shared/CustomHr"
import { useContext, useState } from "react"
import { AppContext } from "../../store/store"
import SelectCategories from "../../components/addAdvertise/SelectCategories"
import * as ImagePicker from "expo-image-picker"
import { TouchableOpacity } from "react-native"
import { AntDesign, Ionicons } from "@expo/vector-icons"
import AdsHeroSection from "../../components/addAdvertise/AdsHeroSection"
import { router } from "expo-router"
import AdvertisePackage from "../../components/add/Advertise"
import Packages from "../../components/add/Packages"
import Payment from "../../components/add/Payment"

const Advertise = () => {
    const [currentTab, setCurrentTab] = useState("Advertise")
    const [selectCategory, setSelectCategory] = useState("")

    return (
        <ScrollView>
            <View className="mb-20">
                <AdsHeroSection />
                <View className="px-4">
                    <View
                        style={styles.shadowBox}
                        className="px-[30px] py-10 rounded-[12px]"
                    >
                        <View className="flex-row items-center justify-between">
                            <TouchableOpacity>
                                <Text
                                    className={`text-[18px] font-poppins font-semibold uppercase ${
                                        currentTab === "Advertise"
                                            ? "text-primary border-b border-b-primary"
                                            : "text-primaryBlk"
                                    }`}
                                    onPress={() => setCurrentTab("Advertise")}
                                >
                                    Advertise
                                </Text>
                            </TouchableOpacity>
                            <View className="w-[1px] h-5 bg-[#BFBFBF]"></View>
                            <TouchableOpacity
                                onPress={() => setCurrentTab("Packages")}
                            >
                                <Text
                                    className={`text-[18px] font-poppins font-semibold uppercase ${
                                        currentTab === "Packages" &&
                                        "text-primary border-b border-primary"
                                    }`}
                                >
                                    Packages
                                </Text>
                            </TouchableOpacity>

                            <View className="w-[1px] h-5 bg-[#BFBFBF]"></View>
                            <TouchableOpacity
                                onPress={() => setCurrentTab("Payment")}
                            >
                                <Text
                                    className={`text-[18px] font-poppins font-semibold uppercase ${
                                        currentTab === "Payment"
                                            ? "text-primary border-b border-primary"
                                            : "text-primaryBlk"
                                    }`}
                                >
                                    Payments
                                </Text>
                            </TouchableOpacity>
                        </View>
                        <View>
                            <CustomHr
                                className={"bg-primary h-[2px] mt-[14px]"}
                            />
                            {currentTab === "Advertise" && (
                                <View className="mt-[30px] flex-row items-center gap-[10px] pb-2 border-b-[1px] border-primary">
                                    <Image
                                        source={require("../../assets/images/files.png")}
                                        className="w-[18px] h-[18px]"
                                    />
                                    <Text className="uppercase text-[18px] font-poppins font-semibold text-primary">
                                        ADD INFORMATION:
                                    </Text>
                                </View>
                            )}
                            {currentTab === "Packages" && (
                                <View className="mt-[30px] flex-row items-center gap-[10px] pb-2 border-b-[1px] border-primary">
                                    <Image
                                        source={require("../../assets/images/token.png")}
                                        className="w-[18px] h-[18px]"
                                    />
                                    <Text className="uppercase text-[18px] font-poppins font-semibold text-primary">
                                        PACKAGES
                                    </Text>
                                </View>
                            )}
                            {currentTab === "Payment" && (
                                <View className="mt-[30px] flex-row items-center gap-[10px] pb-2 border-b-[1px] border-primary">
                                    <Image
                                        source={require("../../assets/images/cardinfo.png")}
                                        className="w-[18px] h-[18px]"
                                    />
                                    <Text className="uppercase text-[18px] font-poppins font-semibold text-primary ">
                                        Payments
                                    </Text>
                                </View>
                            )}
                        </View>

                        {currentTab === "Advertise" && <SelectCategories />}
                    </View>
                    {currentTab === "Advertise" && <AdvertisePackage />}
                    {currentTab === "Packages" && (
                        <Packages
                            selectCategory={selectCategory}
                            setSelectCategory={setSelectCategory}
                        />
                    )}
                    {currentTab === "Payment" && <Payment />}
                    {currentTab === "Advertise" && <AdvertisePackage />}
                </View>
            </View>
        </ScrollView>
    )
}

export default Advertise

// const styles = {
//     shadowBox: {
//         shadowColor: "rgba(0, 0, 0, 0.1)",
//         shadowOffset: { width: 0, height: 0 },
//         shadowOpacity: 1,
//         shadowRadius: 20,
//         elevation: 5,
//     },
// }

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
