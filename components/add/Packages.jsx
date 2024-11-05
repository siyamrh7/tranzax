import { View, Text, StyleSheet } from "react-native"
import CustomHr from "../shared/CustomHr"
import { Image } from "react-native"
import { useContext } from "react"
import { AppContext } from "../../store/store"
import { TouchableOpacity } from "react-native"
import { AntDesign } from "@expo/vector-icons"

const Packages = ({ selectCategory, setSelectCategory }) => {
    const { servicePackages } = useContext(AppContext)
    return (
        <View className="px-4">
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
                {servicePackages.length > 0 &&
                    servicePackages?.map((priceCat) => (
                        <View
                            key={priceCat.id}
                            className="pb-[17px] flex-row items-center justify-between border-b-[1px] border-b-[#D9D9D9]"
                        >
                            <View className=" ">
                                <View className="mt-3 gap-x-2 flex-row items-center">
                                    <TouchableOpacity
                                        onPress={() =>
                                            setSelectCategory(
                                                priceCat.short_name
                                            )
                                        }
                                        className="w-[18px] h-[18px] border-[1px] border-primary mr-2 rounded-full items-center justify-center"
                                    >
                                        {selectCategory === priceCat.name && (
                                            <View className="w-3 h-3 rounded-full bg-primary" />
                                        )}
                                    </TouchableOpacity>
                                    <Text className="text-[#8F8F8F]  font-poppins font-semibold text-[16px] uppercase">
                                        {priceCat.short_name}
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
    )
}

export default Packages

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
