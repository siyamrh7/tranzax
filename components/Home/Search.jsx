import { AntDesign } from "@expo/vector-icons"
import { router } from "expo-router"
import { View, Text, Image, TouchableOpacity } from "react-native"

const Search = ({ showCategories, setShowCategories }) => {
    return (
        <View className="mt-[30px] w-full flex gap-5">
            <View className="flex-row gap-5">
                <View className="px-4 py-3 border-[1px] flex flex-1 border-primary rounded-[10px] gap-3 flex-row font-poppins">
                    <Image
                        source={require("../../assets/images/home/search/productSearch.png")}
                        className="w-5 h-5"
                        resizeMode="cover"
                    />
                    <TouchableOpacity onPress={() => router.push("(root)/ads")}>
                        <Text className="text-[#010101] font-semibold text-[12px]">
                            SEARCH PRODUCTS
                        </Text>
                    </TouchableOpacity>
                </View>
                <View className="px-4 py-3 flex-1 border-[1px] border-primary rounded-[10px] gap-3 flex-row font-poppins">
                    <Image
                        source={require("../../assets/images/home/search/markup.png")}
                        className="w-[15px] h-[21px]"
                        resizeMode="cover"
                    />
                    <Text className="text-[#010101] font-semibold text-[12px]">
                        Search City/State
                    </Text>
                </View>
            </View>
            <TouchableOpacity
                className="flex-row rounded-[10px] gap-[6px] py-3 justify-center w-full bg-primary"
                onPress={() => router.push("(root)/ads")}
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
                <TouchableOpacity>
                    <Text className="text-[16px] font-semibold font-poppins text-primary">
                        View more
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Search
