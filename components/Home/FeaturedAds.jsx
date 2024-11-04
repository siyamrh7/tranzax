import { AntDesign, Entypo } from "@expo/vector-icons"
import { View, Text, Image, TouchableOpacity } from "react-native"
import { featuresAdsData } from "../../constant/data"
import { useContext, useEffect, useState } from "react"
import { AppContext } from "../../store/store"
const FeaturedAds = ({ featuresAdsData: datamissing }) => {
    // const adsData = Object.values(featuresAdsData.posts)
    const { allPosts } = useContext(AppContext)
    const [fpost, setFpost] = useState([])
    function getFeaturedPosts(posts) {
        const currentDate = new Date();

        return posts.filter(post => {
            // Check if the post is featured
            if (post.featured !== "1") return false;

            // Convert featured start and end dates to Date objects
            const featuredStart = new Date(post.featured_start);
            const featuredEnd = new Date(post.featured_end);

            // Check if the current date is within the featured date range
            return currentDate >= featuredStart && currentDate <= featuredEnd;
        });
    }
    useEffect(() => {
        if (allPosts) {
            const data = getFeaturedPosts(allPosts)
            setFpost(data)
        }
    }, [allPosts])

    return (
        <View className="mt-[50px]">
            <View className="flex-row justify-between">
                <Text
                    className="text-[28px] text-[#061B3B]
            font-semibold"
                >
                    FeaturedAds
                </Text>
                <TouchableOpacity>
                    <Text className="text-[16px] font-semibold text-primary font-poppins">
                        See all
                    </Text>
                </TouchableOpacity>
            </View>
            {
                fpost.length == 0 ? (
                    <Text className="text-[16px] font-semibold text-primary font-poppins mt-20 mb-20 text-center">
                        No Featured Ads found
                    </Text>
                ) : (

                    <View className="flex gap-5 mt-5">
                        {featuresAdsData.map((feature) => {
                            // {
                            //     calculatedPrice,
                            //     title,
                            //     created_a,
                            //     city,
                            //     category,
                            // }
                            // const { name, description, picture } = category
                            // console.log(parseInt(calculatedPrice), title, "d")
                            // console.log(title, title)
                            return (
                                <View
                                    key={feature.name}
                                    className="p-6 border-[1px] border-[#BFBFBF] rounded-[20px]"
                                >
                                    <Image
                                        source={feature?.img}
                                        className="h-[195px] w-full rounded-xl"
                                    />
                                    <View className="">
                                        <Text className="text-[#00AEF0] text-[12px] tracking-[-0.5px] font-poppins mt-[18px]">
                                            {feature.name}
                                        </Text>
                                        <Text className="tracking-[0.5px] font-poppins text-[#010101] text-[16px] font-semibold mt-[14px]">
                                            {feature.title}
                                        </Text>
                                        <Text className="text-[#999] text-[10px] leading-[20px] font-poppins mt-[30px]">
                                            {feature.description}
                                        </Text>
                                        <View className="flex-row items-center justify-between mt-5">
                                            <View className="flex-row items-center gap-[3px]">
                                                <Image
                                                    source={require("../../assets/images/home/FeatureAds//date.png")}
                                                    className="w-[14px] h-[14px]"
                                                />
                                                <Text className=" font-poppins text-[14px] tracking-[-.5px] h-[21px] text-[#999]">
                                                    {feature.date}
                                                </Text>
                                            </View>

                                            <View className="flex-row items-center gap-[3px]">
                                                <Entypo
                                                    name="location-pin"
                                                    size={18}
                                                    color="#00AEF0"
                                                />
                                                <Text className=" font-poppins text-[14px] tracking-[-.5px] h-[21px] text-[#999]">
                                                    {feature.place}
                                                </Text>
                                            </View>
                                            <View className="flex-row items-center gap-[3px]">
                                                <Entypo
                                                    name="eye"
                                                    size={18}
                                                    color="#00AEF0"
                                                />
                                                <Text className=" font-poppins text-[14px] tracking-[-.5px] h-[21px] text-[#999]">
                                                    {feature.view} views
                                                </Text>
                                            </View>
                                        </View>
                                    </View>
                                    <View className="flex-row justify-between items-center mt-5 ">
                                        <TouchableOpacity
                                            className="px-4 py-3 font-semibold text-[12px]
                        border-[1px] border-primary rounded-[10px] font-poppins flex-row gap-2"
                                        >
                                            <Text className="text-uppercase text-[#010101]">
                                                Learn more
                                            </Text>
                                            <AntDesign
                                                name="arrowright"
                                                size={24}
                                                color="black"
                                            />
                                        </TouchableOpacity>
                                        <Text className="text-[18px] font-semibold text-primary tracking-[-.5px]">
                                            {feature.price}
                                        </Text>
                                    </View>
                                </View>
                            )
                        })}
                    </View>
                )
            }
        </View>
    )
}

export default FeaturedAds
