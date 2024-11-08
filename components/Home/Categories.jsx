import { View, Text, Image, TouchableOpacity } from "react-native"
import { productsCategories } from "../../constant/data"
import { useEffect, useState } from "react"
import axios from "axios"
import { router } from "expo-router"

const subCategories = [
    { name: "HOUSES & APARTMENTS FOR RENT" },
    {
        name: "LAND & PLOTS FOR RENT",
    },
    {
        name: "COMMERCIAL PROPERTY FOR RENT",
    },
    {
        name: "COMMERCIAL PROPERTY FOR SALE",
    },
    {
        name: "EVENT CENTRES, VENUES AND WORKSTATIONS",
    },
]

const Categories = ({ categories }) => {
    return (
        <View className="flex-col gap-5">
            {Object.values(categories?.data?.categories).map(
                (category, index) => (
                    <TouchableOpacity
                        key={category?.name}
                        className="flex items-center justify-center gap-12 border-[1px] border-[#EBEBEB] shadow-custom
                    px-6 py-[42px]
                    "
                        onPress={() =>
                            router.push({
                                pathname: `(root)/ads`,
                                params: {
                                    category: category.name,
                                    categoryId: category.id,
                                },
                            })
                        }
                    >
                        <View className="bg-[#D6FEFF] w-[70px] h-[70px] rounded-full flex-row items-center justify-center relative">
                            <Image
                                source={{
                                    uri: `${process.env.EXPO_PUBLIC_IMAGE_CATEGORY_URL}/${category.picture}`,
                                }}
                                className="w-[70px] h-[70px]"
                            />
                            <View className="bg-[#d6feffb4] w-[70px] h-[70px] rounded-full absolute"></View>
                        </View>
                        <Text className="text-[#010101] text-[28px] font-medium font-poppins">
                            {category.name}
                        </Text>
                    </TouchableOpacity>
                )
            )}
        </View>
    )
}

export default Categories
