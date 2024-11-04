import { View, Text, ScrollView } from "react-native"
import FilterForm from "../../components/ads/filterForm"
import { adsCategories } from "../../constant/data"
import AdsCard from "../../components/ads/AdsCard"
import { useLocalSearchParams } from "expo-router"
import { useContext, useEffect, useState } from "react"
import { AppContext } from "../../store/store"

const ads = () => {
    const { categoryId, category } = useLocalSearchParams()
    const { allPosts } = useContext(AppContext)
    const [ads, setAds] = useState([])
    const [search, setSearch] = useState("")
    // console.log(allPosts, "allPosts")
    // const []
    // console.log(allPosts.length)
    // console.log(category)
    // let data = allallPosts
    // if (category === "All Ads") {
    //     data = allPosts // Return all items
    // } else {
    //     data = allPosts.filter((cate) =>
    //         cate.name?.toUpperCase().includes(category?.toUpperCase())
    //     )
    // }
    useEffect(() => {
        if (search) {
            const data = allPosts.filter((d) =>
                d.title.toLowerCase().includes(search.toLowerCase())
            )
            setAds(data)
        } else if (categoryId) {
            const data = allPosts.filter(
                (d) => d.category.parent_id === categoryId
            )
            setAds(data)
        } else {
            setAds(allPosts)
        }
    }, [categoryId, search, allPosts])
    return (
        <ScrollView className="mt-[14px]">
            <FilterForm
                itemIn={category}
                search={search}
                setSearch={setSearch}
            />
            <View className="px-4 flex gap-5 mt-5 mb-20">
                {ads.map((ads) => (
                    <AdsCard key={ads.id} ads={ads} />
                ))}
            </View>
        </ScrollView>
    )
}

export default ads
