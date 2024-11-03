import { View, Text, Image, ScrollView, TextInput } from "react-native"
import CustomHr from "../../components/shared/CustomHr"
import { useContext, useState } from "react"
import { AppContext } from "../../store/store"
import SelectCategories from "../../components/addAdvertise/SelectCategories"
import * as ImagePicker from "expo-image-picker"
import { TouchableOpacity } from "react-native"
import { AntDesign, Ionicons } from "@expo/vector-icons"
import AdsHeroSection from "../../components/addAdvertise/AdsHeroSection"

const Advertise = () => {
    const [thumbnail, setThumbnail] = useState(null)
    const [video, setVideo] = useState(false)
    const [makeFeature, setMakeFeature] = useState(false)

    const [receiveNegation, setReceiveNegotiation] = useState(false)
    const [hidePhoneNumber, setHidePhoneNumber] = useState(false)

    return (
        <ScrollView>
            <View className="mb-20">
                <AdsHeroSection />
                <View className="mt-[26px] px-4">
                    <View
                        style={styles.shadowBox}
                        className="p-6 rounded-[12px]"
                    >
                        <View className="flex-row items-center justify-between">
                            <Text className="text-[20px] font-poppins font-semibold text-primary">
                                Advertise
                            </Text>
                            <View className="w-[1px] h-5 bg-[#BFBFBF]"></View>
                            <Text className="text-[20px] font-poppins font-semibold text-primaryBlk">
                                Package
                            </Text>
                            <View className="w-[1px] h-5 bg-[#BFBFBF]"></View>
                            <Text className="text-[20px] font-poppins font-semibold text-primaryBlk">
                                Payments
                            </Text>
                        </View>
                        <CustomHr className={"bg-primary h-[2px] mt-[14px]"} />
                        <View className="mt-[30px] flex-row items-center gap-[10px] pb-2 border-b-[1px] border-primary">
                            <Image
                                source={require("../../assets/images/files.png")}
                                className="w-[18px] h-[18px]"
                            />
                            <Text className="uppercase text-[18px] font-poppins font-semibold text-primary">
                                ADD INFORMATION:
                            </Text>
                        </View>
                        {/* <CustomHr className={"bg-primary h-[2px] mt-[14px]"} /> */}
                        <SelectCategories />
                    </View>
                    <View className="p-6">
                        <View>
                            <Text className="text-primaryBlk text-[16px] font-semibold font-poppins">
                                TITLE*
                            </Text>
                            <View className="mt-[10px] py-[10px] px-[10px] border-[1px] border-[#BFBFBF] rounded-[4px]">
                                <TextInput
                                    placeholder="ADD A TITLE"
                                    placeholderTextColor={"#999"}
                                />
                            </View>
                        </View>
                        <Text className="uppercase font-semibold mt-[10px] text-[13px] font-poppins">
                            A GREAT TITLE NEEDS AT LEAST 60 CHARACTERS.*
                        </Text>
                        <View className="mt-[26px]">
                            <Text className="text-[16px] font-poppins text-primaryBlk font-semibold mt-[44px] ">
                                DESCRIPTION*
                            </Text>
                            <TextInput
                                multiline={true}
                                numberOfLines={3}
                                placeholderTextColor={
                                    "TELL US ABOUT YOUR PROJECT..."
                                }
                                className="px-[14px] py-[10px] rounded-[4px] border-[1px] border-[#BFBFBF]"
                                placeholder="TELL US ABOUT YOUR PROJECT..."
                            />
                        </View>
                        <View className="">
                            <Text className="text-[16px] font-poppins text-primaryBlk font-semibold mt-[44px] ">
                                THUMBNAIL*
                            </Text>
                            <View className="mt-[10px] py-[50px] flex items-center justify-center border-[1px] border-[#BFBFBF] rounded-[4px]">
                                <Image
                                    source={require("../../assets/images/fileImg.png")}
                                    className="w-[50px] h-[50px]"
                                />

                                <Text className="font-poppins text-[#737373] tracking-[.56px] mt-5 text-center">
                                    ADD 1 APPEALING THUMBNAIL FOR MAXIMUM VISUAL
                                    IMPACT (OPTIONAL).
                                </Text>
                            </View>
                        </View>
                        <View className="mt-[]">
                            <Text className="text-[16px] font-poppins text-primaryBlk font-semibold mt-[44px] ">
                                VIDEO*
                            </Text>
                            <View className="mt-[10px] py-[50px] flex items-center justify-center border-[1px] border-[#BFBFBF] rounded-[4px]">
                                <Image
                                    source={require("../../assets/images/fileImg.png")}
                                    className="w-[50px] h-[50px]"
                                />

                                <Text className="font-poppins text-[#737373] tracking-[.56px] mt-5 text-center">
                                    ADD UP TO 1 VIDEOS. USE REAL VIDEOS OF YOUR
                                    PRODUCT.
                                </Text>
                            </View>
                        </View>
                        <View className="mt-[44px]">
                            <Text className="#010101 font-semibold text-[16px] uppercase">
                                Price: Enter o to offer as a donation
                            </Text>
                            <View className="mt-[10px] flex-row items-center gap-[10px] px-[14px] py-[10px] border-[1px] border-[#BFBFBF] rounded-[4px]">
                                <Image
                                    source={require("../../assets/images/dolar.png")}
                                    className="w-5 h-5"
                                />
                                <TextInput
                                    placeholder="ENTER PRICE"
                                    placeholderTextColor={"#999999"}
                                    className="text-primaryBlk font-poppins text-[12px]"
                                />
                            </View>
                            <View className="mt-3 flex-row items-center">
                                <TouchableOpacity
                                    onPress={() =>
                                        setReceiveNegotiation(!receiveNegation)
                                    }
                                    className="w-[18px] h-[18px] border-[1px] border-primary mr-2 items-center justify-center"
                                >
                                    {receiveNegation && (
                                        <View className="w-3 h-3 bg-[#000]" />
                                    )}
                                </TouchableOpacity>
                                <Text className="text-[#010101] mt-[5px] font-poppins text-[12px] uppercase">
                                    NEGOTIABLE
                                </Text>
                            </View>
                            <View className="mt-4">
                                <Text className="#010101 font-semibold text-[16px] uppercase">
                                    CITY*
                                </Text>
                                <View className=" flex-row justify-between mt-[10px] items-center gap-[10px] px-[14px] py-[10px] border-[1px] border-[#BFBFBF] rounded-[4px]">
                                    <TextInput
                                        placeholder="SELECT A CITY"
                                        placeholderTextColor={"#010101s"}
                                        className="text-primaryBlk font-poppins text-[12px] w-[80%]"
                                    />
                                    <Ionicons
                                        name={"chevron-down-outline"}
                                        size={18}
                                        color="#010101"
                                    />
                                </View>
                            </View>
                            <View className="mt-4">
                                <Text className="#010101 font-semibold text-[16px] uppercase">
                                    TAGS{" "}
                                </Text>
                                <View className=" flex-row justify-between mt-[10px] items-center gap-[10px] px-[14px] py-[10px] border-[1px] border-[#BFBFBF] rounded-[4px]">
                                    <TextInput
                                        placeholder="RAGS"
                                        placeholderTextColor={"#010101s"}
                                        className="text-primaryBlk font-poppins text-[12px] w-[80%]"
                                    />
                                    <Ionicons size={18} color="#010101" />
                                </View>
                                <Text className="text-[#737373] text-[14px] font-poppins mt-[10px]">
                                    Enter the tags separated by commas."
                                </Text>
                            </View>
                        </View>
                    </View>
                    <View
                        style={styles.shadowBox}
                        className="p-6 rounded-[12px] border-[1px] border-transparent mt-[50px] bg-white"
                    >
                        <View className="flex-row items-center gap-1">
                            <Image
                                source={require("../../assets/images/men.png")}
                            />
                            <Text className="text-primary mt-[3px] text-[18px] font-poppins">
                                SELLER INFORMATION:
                            </Text>
                        </View>

                        <View className=" mt-5">
                            <Text className="#010101 font-semibold text-[16px] uppercase">
                                PHONE NUMBER
                            </Text>
                            <View className=" flex-row mt-[10px] items-center gap-[10px] px-[14px] py-[10px] border-[1px] border-[#BFBFBF] rounded-[4px]">
                                <TextInput
                                    keyboardType="numeric"
                                    placeholder="PHONE NUMBER"
                                    placeholderTextColor={"#999999"}
                                    className="text-primaryBlk font-poppins text-[12px]"
                                />
                            </View>
                        </View>
                        <View className="mt-3 flex-row items-center">
                            <TouchableOpacity
                                onPress={() =>
                                    setHidePhoneNumber(!hidePhoneNumber)
                                }
                                className="w-[18px] h-[18px] border-[1px] border-primary mr-2 items-center justify-center"
                            >
                                {hidePhoneNumber && (
                                    <View className="w-3 h-3 bg-[#000]" />
                                )}
                            </TouchableOpacity>
                            <Text className="text-[#010101] mt-[5px] font-poppins text-[12px] uppercase">
                                HIDE
                            </Text>
                        </View>

                        <View className="mt-4">
                            <Text className="#010101 font-semibold text-[16px] uppercase">
                                EMAIL*
                            </Text>
                            <View className=" flex-row mt-[10px] items-center gap-[10px] px-[14px] py-[10px] border-[1px] border-[#BFBFBF] rounded-[4px]">
                                <TextInput
                                    placeholder="EMAIL"
                                    placeholderTextColor={"#999999"}
                                    className="text-primaryBlk font-poppins text-[12px]"
                                />
                            </View>
                        </View>
                    </View>
                    <View
                        style={styles.shadowBox}
                        className="p-6 rounded-[12px] mt-[50px] border-[1px] border-transparent bg-white"
                    >
                        <View className="flex-row items-center gap-1">
                            <Image
                                source={require("../../assets/images/feature.png")}
                            />
                            <Text className="text-primary mt-[3px] text-[18px] font-poppins">
                                FEATURED ADS (20$ PER DAY):{" "}
                            </Text>
                        </View>

                        <View className=" mt-5">
                            <Text className="text-primary text-[20px] font-semibold uppercase">
                                PREMIUM AD*
                            </Text>
                            <Text className="text-[#565656] font-poppins leading-[24px] mt-[14px] text-[16px]">
                                WHEN SELECTING THE FEATURED ADS OPTIONS, YOUR AD
                                WILL APPEAR ON THE HOME PAGE OF THE WEBSITE.
                                WITH THIS HIGHER VISIBILITY YOU WILL BE ABLE TO
                                PROMOTE YOUR AD MORE EFFECTIVELY, ATTRACT MORE
                                BUYER AND SELL FASTER.
                            </Text>
                        </View>
                        <View className="mt-3 flex-row items-center">
                            <TouchableOpacity
                                onPress={() => setMakeFeature(!makeFeature)}
                                className="w-[18px] h-[18px] border-[1px] border-primary mr-2 items-center justify-center"
                            >
                                {makeFeature && (
                                    <View className="w-3 h-3 bg-[#000]" />
                                )}
                            </TouchableOpacity>
                            <Text className="text-[#010101] mt-[5px] font-semibold font-poppins text-[16px] uppercase">
                                MAKE THIS AD FEATURED
                            </Text>
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
            </View>
        </ScrollView>
    )
}

export default Advertise

const styles = {
    shadowBox: {
        shadowColor: "rgba(0, 0, 0, 0.1)",
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 1,
        shadowRadius: 20,
        elevation: 5,
    },
}
