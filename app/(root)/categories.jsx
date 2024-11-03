import { useContext } from "react"
import { View, Text, ScrollView, StyleSheet } from "react-native"
import { AppContext } from "../../store/store"
import { Image } from "react-native"
import { Entypo } from "@expo/vector-icons"

const subCategories = [
    {
        name: "HOUSES & APARTMENTS FOR RENT",
    },
    {
        name: "HOUSES & APARTMENTS FOR SALE",
    },
    {
        name: "LAND & PLOTS FOR RENT",
    },
]

const categories = () => {
    const { allCategories, cityLists } = useContext(AppContext)
    return (
        <ScrollView className="px-4">
            <View>
                <Text className="text-[30px] font-poppins text-center font-bold mt-[66px]">
                    Categories
                </Text>
                <Text className="font-poppins text-[16px] text-[#061B3B] font-semibold mt-2 text-center uppercase">
                    LIST OF CATEGORIES AND SUB-CATEGORIES
                </Text>
                <View
                    className="border-[1px] p-4 flex gap-5 rounded-[8px] mt-10"
                    style={{
                        borderColor: "rgba(0, 0, 0, 0.2)",
                        borderRightWidth: 1,
                    }}
                >
                    {allCategories.map((category) => (
                        <View key={category.id} className="py-4">
                            <View
                                className="flex items-center gap-5 rounded-[12px] py-[26px] px-3 justify-center"
                                style={styles.shadowBox}
                            >
                                <Image
                                    source={{
                                        uri: `${process.env.EXPO_PUBLIC_IMAGE_CATEGORY_URL}/${category.picture}`,
                                    }}
                                    className="w-[70px] h-[70px]"
                                />
                                <Text className="text-[18px] font-poppins text-primaryBlk font-bold">
                                    {category.name}
                                </Text>
                            </View>
                            <View className="flex gap-[10px] mt-6">
                                {subCategories.map((subCat, index) => (
                                    <View
                                        key={index}
                                        className=" flex-row items-center gap-1"
                                    >
                                        <Entypo
                                            name="dot-single"
                                            size={30}
                                            color="#737373"
                                        />
                                        <Text className="text-[16px] font-semibold text-[#737373]">
                                            {subCat.name}
                                        </Text>
                                    </View>
                                ))}
                            </View>
                        </View>
                    ))}
                    <View
                        className="mt-[30px] rounded-[8px]"
                        style={{
                            borderColor: "rgba(0, 0, 0, 0.2)",
                            borderWidth: 1,
                        }}
                    >
                        <Text className="text-center font-poppins text-[22px] mt-5 text-[#061B3B] font-bold">
                            List cities of US
                        </Text>
                        <View className="flex gap-[10px] py-5 mt-5 px-4">
                            {cityLists.map((city) => (
                                <View
                                    key={city.id}
                                    className="flex-row items-center justify-between"
                                >
                                    <Text className="w-[46%] flex-1 text-[16px] font-semibold font-poppins">
                                        {city.name}
                                    </Text>
                                    <Text className="w-[46%] flex-1 text-[16px] font-semibold font-poppins">
                                        {city.name}
                                    </Text>
                                </View>
                            ))}
                        </View>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

export default categories

{
    /* <View className="flex-col gap-5">
                {Object.values(categories?.data?.categories).map(
                    (category, index) => (
                        <TouchableOpacity
                            key={category?.name}
                            className="flex items-center justify-center gap-12 border-[1px] border-[#EBEBEB] shadow-custom
                    px-6 py-[42px]
                    "
                            onPress={() =>
                                router.push({
                                    pathname: `/ads`,
                                    params: {
                                        category: category.name,
                                        categoryId: category.id,
                                    },
                                })
                            }
                        >
                            <Image
                                source={{
                                    uri: `${process.env.EXPO_PUBLIC_IMAGE_CATEGORY_URL}/${category.picture}`,
                                }}
                                className="w-[70px] h-[70px]"
                            />
                            <Text className="text-[#010101] text-[28px] font-medium font-poppins">
                                {category.name}
                            </Text>
                        </TouchableOpacity>
                    )
                )}
            </View>
            */
}
const styles = StyleSheet.create({
    shadowBox: {
        backgroundColor: "white", // Set background color
        padding: 16, // Add padding or size as needed
        // Shadow for iOS
        shadowColor: "rgba(72, 72, 72, 1)", // Define the color
        shadowOffset: { width: 0, height: 2 }, // Offset similar to CSS (0px 2px)
        shadowOpacity: 0.1, // Match the opacity from rgba
        shadowRadius: 10, // Approximation of blur
        // Shadow for Android
        elevation: 10, // Similar to shadow depth
    },
})
