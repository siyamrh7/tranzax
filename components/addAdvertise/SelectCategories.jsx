import { useContext, useState } from "react"
import { TouchableOpacity } from "react-native"
import { View, Text, Image } from "react-native"
import { AppContext } from "../../store/store"
import { Ionicons } from "@expo/vector-icons"

const SelectCategories = () => {
    const [selectedCategory, setSelectedCategory] = useState(null)
    const [showLists, setShowLists] = useState(false)

    const handleCategorySelect = (category) => {
        setSelectedCategory(category)
        setShowLists(false)
    }
    const { allCategories } = useContext(AppContext)
    return (
        <View>
            <View className="">
                <Text className="font-poppins text-[16px] font-bold mt-[30px]">
                    CATEGORY*
                </Text>
                <TouchableOpacity
                    className="flex-row items-center justify-between border-[1px] border-[#BFBFBF] rounded-xl px-[14px] py-[10px] mt-[10px]"
                    onPress={() => setShowLists(!showLists)}
                >
                    <Text className="text-base font-poppins text-[#999] ">
                        {selectedCategory
                            ? selectedCategory
                            : "SELECT A CATEGORY"}
                    </Text>
                    <Ionicons
                        name={
                            showLists
                                ? "chevron-up-outline"
                                : "chevron-down-outline"
                        }
                        size={18}
                        color="#999"
                    />
                </TouchableOpacity>

                {showLists && (
                    <View className="flex p-4 mt-[10px] style={styles.shadowBox} ">
                        <View className="rounded-lg">
                            <View className="flex-row justify-between items-center mb-4">
                                <Text className="text-[16px] font-poppins font-bold ">
                                    Select a category
                                </Text>
                                <TouchableOpacity
                                    onPress={() => setShowLists(false)}
                                    className="bg-primary w-[24px] h-[24px] rounded-full"
                                >
                                    <Ionicons
                                        name="close-outline"
                                        size={24}
                                        color="white"
                                    />
                                </TouchableOpacity>
                            </View>
                            <View className="flex gap-[10px]">
                                {allCategories.map((category) => (
                                    <TouchableOpacity
                                        className="flex-row border-b-[1px] border-[#BFBFBF] items-center gap-[2px]"
                                        key={category.id}
                                        onPress={() =>
                                            handleCategorySelect(category.name)
                                        }
                                    >
                                        <Image
                                            source={{
                                                uri: `https://phplaravel-1332132-4876372.cloudwaysapps.com/storage/${category.picture}`,
                                            }}
                                            className="w-[40px] h-[40px]"
                                        />
                                        <Text className="font-poppins text-[14px] text-primaryBlk">
                                            {category.name}
                                        </Text>
                                    </TouchableOpacity>
                                ))}
                            </View>
                        </View>
                    </View>
                )}
            </View>
        </View>
    )
}

export default SelectCategories
