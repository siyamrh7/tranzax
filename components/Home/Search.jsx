import { AntDesign } from "@expo/vector-icons"
import { router } from "expo-router"
import { useState } from "react"
import { View, Text, Image, TouchableOpacity, TextInput } from "react-native"

const Search = ({ showCategories, setShowCategories }) => {
    const [searchValues, setSearchValues] = useState({
        product: "",
        city: "",
    })
    return (
        <View className="mt-[30px] w-full flex gap-5">
            <View className="flex-row gap-5">
                <View className="px-4 py-3 border-[1px] flex flex-1 border-primary rounded-[10px] gap-3 flex-row font-poppins">
                    <Image
                        source={require("../../assets/images/home/search/productSearch.png")}
                        className="w-5 h-5"
                        resizeMode="cover"
                    />
                    <TextInput
                        placeholder="SEARCH PRODUCTS"
                        className="text-[12px] text-primaryBlk font-semibold"
                        value={searchValues.product}
                        onChangeText={(txt) =>
                            setSearchValues({ ...searchValues, product: txt })
                        }
                    />
                </View>
                <View className="px-4 py-3 flex-1 border-[1px] border-primary rounded-[10px] gap-3 flex-row font-poppins">
                    <Image
                        source={require("../../assets/images/home/search/markup.png")}
                        className="w-[15px] h-[21px] "
                        resizeMode="cover"
                    />
                    <TextInput
                        className="text-[#010101] font-semibold text-[12px]"
                        placeholder="Search City/State"
                        value={searchValues.city}
                        onChangeText={(txt) =>
                            setSearchValues({ ...searchValues, city: txt })
                        }
                    />
                </View>
            </View>
            <TouchableOpacity
                className="flex-row rounded-[10px] gap-[6px] py-3 justify-center w-full bg-primary"
                onPress={() =>
                    router.push({
                        name: "(root)/ads",
                        params: {
                            searchValues,
                        },
                    })
                }
            >
                <AntDesign name="search1" size={17} color="white" />
                <Text className="font-poppins text-[15px] font-medium text-white">
                    SEARCH
                </Text>
            </TouchableOpacity>
            <View className="flex-row justify-between items-center">
                <TouchableOpacity
                    className="px-4 py-3 flex-row 
            items-center gap-[10px] bg-primary rounded-[10px]"
                    onPress={() => setShowCategories(!showCategories)}
                >
                    <Image
                        source={require("../../assets/images/home/search/Group.png")}
                        className="w-5 h-5"
                    />
                    <Text className="font-poppins text-[16px] text-white">
                        Browse by Category
                    </Text>
                    <Image
                        source={require("../../assets/images/home/search/selectIndicator.png")}
                        className={`h-[8px] w-[8px] transition-transform duration-300 ${
                            showCategories ? "rotate-0" : "rotate-180"
                        }`}
                    />
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => router.push("(root)/categories")}
                >
                    <Text className="text-[16px] font-semibold font-poppins text-primary">
                        View more
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Search
