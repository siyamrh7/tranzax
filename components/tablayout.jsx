import { View, Text, TouchableOpacity } from "react-native"
import { useRouter } from "expo-router"
import { useState } from "react"

const TabLayout = () => {
    const router = useRouter()
    const [activeTab, setActiveTab] = useState("advertise")

    const handleTabPress = (tab) => {
        setActiveTab(tab)
        router.push(`/${tab}`)
    }

    const getTabStyle = (tab) => ({
        text: `text-lg font-semibold ${
            activeTab === tab ? "text-primary" : "text-gray-500"
        } uppercase`,
        separator:
            activeTab === tab ? "bg-primary h-[2px]" : "h-[2px] bg-transparent",
    })

    return (
        <View className="flex-row justify-center items-center mt-5 px-4">
            <TouchableOpacity onPress={() => handleTabPress("advertise")}>
                <Text className={getTabStyle("advertise").text}>Advertise</Text>
                <View className={getTabStyle("advertise").separator} />
            </TouchableOpacity>

            <View className="w-[1px] h-5 bg-[#BFBFBF] mx-4" />

            <TouchableOpacity onPress={() => handleTabPress("packages")}>
                <Text className={getTabStyle("packages").text}>Packages</Text>
                <View className={getTabStyle("packages").separator} />
            </TouchableOpacity>

            <View className="w-[1px] h-5 bg-[#BFBFBF] mx-4" />

            <TouchableOpacity onPress={() => handleTabPress("payments")}>
                <Text className={getTabStyle("payments").text}>Payments</Text>
                <View className={getTabStyle("payments").separator} />
            </TouchableOpacity>
        </View>
    )
}

export default TabLayout
