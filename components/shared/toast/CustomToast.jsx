import React from "react"
import { View, Text, TouchableOpacity } from "react-native"

const CustomToast = ({ text1, text2, onPressCancel, Component = false }) => {
    return (
        <View className="flex-row items-center justify-between bg-gray-800 p-4 rounded-lg min-w-[80%]">
            <View>
                <Text className="text-black font-bold">{text1}</Text>
                {text2 ? <Text className="text-white">{text2}</Text> : null}
                {Component && <Component />}
            </View>
            <TouchableOpacity
                onPress={onPressCancel}
                className="bg-white p-2 rounded"
            >
                <Text className="text-gray-800 font-bold">Cancel</Text>
            </TouchableOpacity>
        </View>
    )
}

export default CustomToast
