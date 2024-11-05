import { AntDesign, Ionicons } from "@expo/vector-icons"
import { useState } from "react"
import {
    View,
    Text,
    TouchableOpacity,
    TextInput,
    Image,
    StyleSheet,
} from "react-native"

export default function Advertise() {
    const [thumbnail, setThumbnail] = useState(null)
    const [video, setVideo] = useState(false)
    const [makeFeature, setMakeFeature] = useState(false)

    const [receiveNegation, setReceiveNegotiation] = useState(false)
    const [hidePhoneNumber, setHidePhoneNumber] = useState(false)
    return (
        <View>
            <View className="px-6">
                <View>
                    <Text className="text-primaryBlk text-[16px] font-bold font-poppins">
                        TITLE*
                    </Text>
                    <View className="mt-[10px] py-[10px] px-[10px] border-[1px] border-[#BFBFBF] rounded-[4px]">
                        <TextInput
                            placeholder="ADD A TITLE"
                            placeholderTextColor={"#999"}
                        />
                    </View>
                </View>
                <Text className="uppercase font-bold mt-[10px] text-[13px] font-poppins">
                    A GREAT TITLE NEEDS AT LEAST 60 CHARACTERS.*
                </Text>
                <View className="mt-[26px]">
                    <Text className="text-[16px] font-poppins text-primaryBlk font-bold ">
                        DESCRIPTION*
                    </Text>
                    <TextInput
                        multiline={true}
                        numberOfLines={3}
                        placeholderTextColor={"TELL US ABOUT YOUR PROJECT..."}
                        className="px-[14px] py-[10px] rounded-[4px] border-[1px] border-[#BFBFBF] mt-[10px]"
                        placeholder="TELL US ABOUT YOUR PROJECT..."
                    />
                </View>
                <View className="">
                    <Text className="text-[16px] font-poppins text-primaryBlk font-bold mt-[44px] ">
                        THUMBNAIL
                    </Text>
                    <View className="mt-[10px] py-[50px] flex items-center justify-center border-[1px] border-[#BFBFBF] rounded-[4px]">
                        <Image
                            source={require("../../assets/images/fileImg.png")}
                            className="w-[50px] h-[50px]"
                        />

                        <Text className="font-poppins text-[14px] text-[#737373] tracking-[.56px] mt-5 text-center">
                            ADD 1 APPEALING THUMBNAIL FOR MAXIMUM VISUAL IMPACT
                            (OPTIONAL).
                        </Text>
                    </View>
                </View>
                <View className="mt-[]">
                    <Text className="text-[16px] font-poppins text-primaryBlk font-bold mt-[44px] ">
                        VIDEO*
                    </Text>
                    <View className="mt-[10px] py-[50px] flex items-center justify-center border-[1px] border-[#BFBFBF] rounded-[4px]">
                        <Image
                            source={require("../../assets/images/fileImg.png")}
                            className="w-[50px] h-[50px]"
                        />

                        <Text className="font-poppins text-[#737373] tracking-[.56px] mt-5 text-center">
                            ADD UP TO 1 VIDEOS. USE REAL VIDEOS OF YOUR PRODUCT.
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
                                placeholderTextColor={"#010101"}
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
                                placeholder="TASGS"
                                placeholderTextColor={"#010101"}
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
                    <Image source={require("../../assets/images/men.png")} />
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
                        onPress={() => setHidePhoneNumber(!hidePhoneNumber)}
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
                        WHEN SELECTING THE FEATURED ADS OPTIONS, YOUR AD WILL
                        APPEAR ON THE HOME PAGE OF THE WEBSITE. WITH THIS HIGHER
                        VISIBILITY YOU WILL BE ABLE TO PROMOTE YOUR AD MORE
                        EFFECTIVELY, ATTRACT MORE BUYER AND SELL FASTER.
                    </Text>
                </View>
                <View className="mt-3 flex-row items-center">
                    <TouchableOpacity
                        onPress={() => setMakeFeature(!makeFeature)}
                        className="w-[18px] h-[18px] border-[1px] border-primary mr-2 items-center justify-center"
                    >
                        {makeFeature && <View className="w-3 h-3 bg-[#000]" />}
                    </TouchableOpacity>
                    <Text className="text-[#010101] mt-[5px] font-semibold font-poppins text-[16px] uppercase">
                        MAKE THIS AD FEATURED
                    </Text>
                </View>
            </View>
            <TouchableOpacity
                className={`bg-[#00ADEF] mt-5 rounded-[12px] justify-center py-[10px] flex-row items-center gap-1 `}
                onPress={() => router.push("(add)/packages")}
            >
                <Text
                    className={`font-poppins text-[16px] text-white font-semibold text-center uppercase`}
                >
                    NEXT
                </Text>
                <AntDesign name="arrowright" size={20} color="white" />
            </TouchableOpacity>
        </View>
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
