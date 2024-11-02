import { View, Text, ScrollView } from "react-native"
import { useContext, useEffect, useState } from "react"
import HeroSection from "../../components/Home/HeroSection"
import Categories from "../../components/Home/Categories"
import FeaturedAds from "../../components/Home/FeaturedAds"
import RegisterNow from "../../components/Home/RegisterNow"
import Search from "../../components/Home/Search"
import axios from "axios"
import SellersDetails from "../../components/Home/SellersDetails"
import { AppContext } from "../../store/store"

export default function Home() {
    // const [categories, setCategories] = useState([])
    const [error, setError] = useState([])
    const { categories } = useContext(AppContext)

    if (categories.length <= 0) {
        return null
    }
    return (
        <ScrollView>
            <View>
                {/* <HeroSection /> */}
                <View>
                    <View className="px-4">
                        <Search />
                    </View>
                    <View className="px-4">
                        <Categories categories={categories.getCategories} />
                    </View>
                    <View className="px-4">
                        <FeaturedAds
                            featuresAdsData={
                                categories?.getLatestPosts?.data?.latest
                            }
                        />
                    </View>
                    <SellersDetails stats={categories?.getStats?.data} />
                    <View className="px-4">
                        <RegisterNow />
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}
