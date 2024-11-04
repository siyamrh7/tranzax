import { useContext, useEffect, useState } from "react"
import { View, Text, ScrollView, StyleSheet } from "react-native"
import { AppContext } from "../../store/store"
import formatDate from "../../utils/formateData"
import { Image } from "react-native"
import WebView from "react-native-webview"
import RenderHTML from "react-native-render-html"
import { useWindowDimensions } from "react-native"
import { TouchableOpacity } from "react-native"
import { useLocalSearchParams } from "expo-router"

const safetyTipsForBuyer = [
    {
        name: "MEET SELLER AT A PUBLIC PLACE",
    },
    {
        name: "CHECK THE ITEM BEFORE YOU BUY",
    },
    {
        name: "CHECK THE ITEM BEFORE YOU BUY",
    },
]
const exceptionnelle = () => {
    const { categoryId, ...rest } = useLocalSearchParams()

    const { allPosts } = useContext(AppContext)
    const [ads, setAds] = useState()
    const { width } = useWindowDimensions()

    useEffect(() => {
        const targetAds = allPosts.find(
            (post) => parseInt(post.id) === parseInt(categoryId)
        )
        setAds(targetAds)
    }, [allPosts, categoryId])
    if (ads?.length <= 0) {
        return (
            <View className="flex-1 items-center justify-center">
                <Text className="text-primaryBlk text-[22px] font-semibold">
                    No Ads Available
                </Text>
            </View>
        )
    }
    return (
        <ScrollView className="px-4">
            <View className="flex gap-5">
                <View className="mt-[50px]">
                    <Text>
                        <Text className="font-poppins text-[14px]">
                            ALL CATEGORIES
                        </Text>
                        <Text className="font-poppins text-[14px] font-bold">
                            / {ads?.category?.name}
                        </Text>
                    </Text>
                </View>
                <View>
                    <Text className="font-poppins text-[22px] font-bold">
                        {ads?.title}
                    </Text>
                </View>
                <View className="flex-row items-center gap-4">
                    <Text className="font-poppins text-[22px] font-semibold text-primaryBlk">
                        {ads?.created_at !== undefined &&
                            formatDate(ads?.created_at)}
                    </Text>
                    <View className="bg-[#BFBFBF] w-[1px] h-[16px]"></View>
                    <View className="flex-row items-center gap-[11px] flex-1">
                        <Image
                            source={require("../../assets/images/form/eye.png")}
                            className="w-5 h-5 mb-[5px]"
                        />
                        <Text className="text-primaryBlk text-[16px] flex-1 font-poppins font-semibold">
                            {ads?.videos[0]?.views}
                        </Text>
                    </View>
                </View>
            </View>
            <View className="mt-10 flex gap-[30px] ">
                <Image
                    source={require("../../assets/images/forward.png")}
                    className="w-5 h-5"
                />
                <View>
                    <View className="relative">
                        <WebView
                            source={{
                                uri: `https://iframe.mediadelivery.net/embed/${ads?.videos[0]?.url}`,
                            }}
                            allowsInlineMediaPlayback
                            style={{ width: "100%", height: 200 }}
                            mediaPlaybackRequiresUserAction={false}
                        />
                    </View>
                </View>
            </View>

            <View className="mt-[50px]">
                <Text className="text-[22px] text-primaryBlk font-poppins uppercase font-bold">
                    AD DETAILS
                </Text>
                <View className="flex-row mt-3 items-center gap-[14px]">
                    <Text className="text-[#999999] text-[18px] font-semibold font-poppins">
                        PRICE:
                    </Text>
                    <View className="flex-row gap-[6px]">
                        <Image
                            source={require("../../assets/images/addprcing.png")}
                            className="mt-1"
                        />
                        <Text className="text-[#00AEF0] font-poppins text-[18px] font-semibold">
                            {ads?.price !== undefined
                                ? parseInt(ads?.price)
                                : "0"}{" "}
                            $
                        </Text>
                    </View>
                </View>
                <View className="mt-[20px]">
                    <Text className="text-[22px] font-bold font-poppins text-primaryBlk">
                        {ads?.title}
                    </Text>
                    <View className="flex-row items-center mt-4 gap-[7px]">
                        <Image
                            source={require("../../assets/images/ads/place.png")}
                            className="w-5 h-5"
                        />
                        <Text className="text-[#061B3B] text-[18px] font-poppins  font-bold">
                            {ads?.city?.name}
                        </Text>
                    </View>
                </View>
                <View>
                    {ads?.description !== undefined && (
                        <RenderHTML
                            contentWidth={width || 300} // Default to 300 if width is undefined
                            source={{
                                html:
                                    ads?.description ||
                                    "<p>No description available</p>",
                            }}
                        />
                    )}
                </View>
                <View className="mt-[30px] flex-row gap-[30px]">
                    <View>
                        <Text className="text-[22px] font-bold font-poppins">
                            TAGS:
                        </Text>
                    </View>
                    <View className="flex-row gap-4 flex-wrap flex-1">
                        {ads?.tags !== undefined &&
                            ads.tags.split(",").map((tag, index) => (
                                <View
                                    className="px-[15px] py-[10px] bg-primary rounded-[4px]"
                                    key={index}
                                >
                                    <Text
                                        className="text-[14px]  text-primaryBlk font-poppins  rounded-[4px]"
                                        key={index}
                                    >
                                        {tag}
                                    </Text>
                                </View>
                            ))}
                    </View>
                </View>
                <View
                    className="px-6 py-5 mt-[30px] rounded-[12px]"
                    style={styles.boxShadow}
                >
                    <View className="flex-row items-center justify-between py-[15px] border-t-[1px] border-b-[1px] border-[#BFBFBF]">
                        <Text className="text-[18px] font-poppins font-semibold text-[#8F8F8F]">
                            FEATURES:
                        </Text>
                        <Text className="text-[18px]  text-primaryBlk font-semibold font-poppins">
                            MAY 17TH, 2022 AT 19:11
                        </Text>
                    </View>
                    <View className="flex gap-[10px] mt-5">
                        <TouchableOpacity className="py-[15px] rounded-[4px] bg-primary">
                            <Text className="text-white font-poppins text-center">
                                Phone
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity className="py-[15px] flex-row rounded-[4px] items-center justify-center gap-[10px] bg-primary">
                            <View className="">
                                <Image
                                    source={require("../../assets/images/message.png")}
                                />
                            </View>
                            <Text className="text-white font-poppins text-center">
                                Send a message
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View className="px-6 py-5 mt-[50px]" style={styles.boxShadow}>
                    <Text className="text-[22px] font-bold font-poppins text-center flex gap-[30px]">
                        SAFETY TIPS FOR BUYERS
                    </Text>
                    <View className="mt-[30px]">
                        {safetyTipsForBuyer.map((tip, index) => (
                            <View
                                key={index}
                                className="flex-row gap-[10px] items-center"
                            >
                                <Image
                                    source={require("../../assets/images/tik.png")}
                                />
                                <Text className="text-[18px] flex-1 font-semibold font-poppins">
                                    {tip.name}
                                </Text>
                            </View>
                        ))}
                    </View>
                </View>
                <TouchableOpacity className="mt-[50px] mb-[100px] flex-row justify-center items-center gap-[10px]">
                    <Image
                        source={require("../../assets/images/report.png")}
                        className="w-5 h-5"
                    />
                    <Text className="text-primary text-[18px] font-poppins">
                        REPORT ABUSE
                    </Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

export default exceptionnelle

const styles = StyleSheet.create({
    boxShadow: {
        backgroundColor: "white",
        shadowColor: "rgba(0, 174, 240, 1)", // Base color
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.2,
        shadowRadius: 35,
        elevation: 10,
    },
})
