import { AntDesign } from "@expo/vector-icons"
import { useContext, useEffect, useState } from "react"
import { TouchableOpacity } from "react-native"
import { View, Text, Image } from "react-native"
import { WebView } from "react-native-webview"
import { AppContext } from "../../store/store"
import { router } from "expo-router"

//
/*  

 {
        category: "automobile",
        title: "cars",
        img: car,
        icon: carIcon,
        place: "MONTREAL",
        price: "125,000",
        name: "VOITURE DE SPORT EXCEPTIONNELLE",
    },

*/
const AdsCard = ({ ads }) => {
    const [isLiked, setIsLiked] = useState(false)
    const [cat, setCat] = useState({})
    const { allCategories } = useContext(AppContext)

    useEffect(() => {
        const data = allCategories.find((c) => c.id == ads.category.parent_id)
        setCat(data)
    }, [allCategories])

    return (
        <View className="p-5 border-[1px] bg-white border-transparent shadow-custom-blue">
            <View className="relative">
                {/* <Image source={ads.img} className="w-full rounded-[4px]" /> */}
                <WebView
                    source={{
                        uri: `https://iframe.mediadelivery.net/embed/${ads.videos[0].url}`,
                    }}
                    // style={styles.video}
                    allowsInlineMediaPlayback
                    style={{ width: "100%", height: 200 }}
                    mediaPlaybackRequiresUserAction={false} // Automatically play if possible
                />
                <TouchableOpacity
                    className="absolute bg-white right-[15px] p-[6px] rounded-[2px] top-3"
                    onPress={() => setIsLiked(!isLiked)}
                >
                    <AntDesign
                        name="heart"
                        size={20}
                        color={`${isLiked ? "red" : "#00AEF0"}`}
                    />
                </TouchableOpacity>
            </View>
            <View className="mt-6 flex-row items-center gap-2">
                <Image
                    source={{
                        uri: `${process.env.EXPO_PUBLIC_IMAGE_CATEGORY_URL}/${cat?.picture}`,
                    }}
                    className="w-[24px] h-[40px]"
                />
                <Text className="text-primaryBlk font-bold  text-[12px] font-poppins uppercase ">
                    {cat?.name}
                </Text>
                <View className="bg-primaryBlk w-[5px] h-[2px]"></View>
                <Text className="text-primaryBlk text-[12px] font-poppins font-medium uppercase ">
                    {ads?.category?.name}
                </Text>
            </View>
            <View className="mt-[5px] font-poppins text-primaryBlk text-[20px] font-semibold uppercase">
                <TouchableOpacity
                    onPress={() =>
                        router.push({
                            pathname: "(root)/exceptionnelle",
                            params: {
                                categoryId: ads.id,
                            },
                        })
                    }
                >
                    <Text className="text-primaryBlk text-[20px] font-bold font-poppins">
                        {ads?.title}
                    </Text>
                </TouchableOpacity>
                <View className="mt-2 flex-row gap-2 items-center">
                    <Image
                        source={require("../../assets/images/ads/place.png")}
                    />
                    <Text className="text-primaryBlk font-semibold font-poppins text-[16px] tracking-[-.5px]">
                        {ads?.city?.name}
                    </Text>
                </View>
                <View className="mt-2 flex-row gap-2 items-center">
                    <Image
                        source={require("../../assets/images/ads/price.png")}
                    />
                    <Text className="text-primary font-semibold font-poppins text-[20px] tracking-[-.5px]">
                        {ads?.price !== undefined && parseInt(ads?.price)} $
                    </Text>
                </View>
            </View>
        </View>
    )
}

export default AdsCard
