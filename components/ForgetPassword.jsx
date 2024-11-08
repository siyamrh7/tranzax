import {
    View,
    Text,
    ScrollView,
    TextInput,
    Image,
    TouchableOpacity,
    Alert,
    StyleSheet,
} from "react-native"
import Btn from "./shared/Btn"
import { useState } from "react"
import Toast from "react-native-toast-message"
import axios from "axios"
import { toastConfig } from "../constant/toastConfig"
import { router } from "expo-router"

const ForgetPassword = ({ setIsLogin }) => {
    const goLogin = () => {
        setIsLogin(true)
    }
    const [loading, setLoading] = useState(false)
    const [emailOrPhone, setEmailOrPhone] = useState("")
    const handleForgetPassword = async () => {
        setLoading(true)
        if (!emailOrPhone) {
            setLoading(false)
            return Toast.show({
                type: "error",
                text1: "Please type valid email or phone number",
            })
        }
        try {
            const response = await axios.post(
                "https://tranzaxx.com/api/auth/password/email",
                {
                    login: emailOrPhone,
                }
            )
            console.log(response.data)
            if (response.data.success) {
                setLoading(false)
                return Toast.show({
                    type: "success",
                    text1: "Success",
                    text2: response?.data?.message,
                })
            }
            if (!response.data.success) {
                setLoading(false)
                return Toast.show({
                    type: "error",
                    text1: response?.data?.message,
                    text2: response?.data?.message,
                })
            }
        } catch (error) {
            console.log(error.message)
            setLoading(false)
            Toast.show({
                type: "success",
                text2: error.message,
            })
        } finally {
            setLoading(false)
        }
    }
    return (
        <ScrollView className="px-4">
            <View
                className="rounded-[12px] bg-[#fff] p-6 mt-[50px]"
                style={authShadowStyle.box}
            >
                <View className="pt-6 pl-6 pr-6">
                    <Toast config={toastConfig} />
                    <Text className="text-capitalize font-poppins  text-[#010101] font-bold text-[24px] text-center uppercase">
                        Forgot Password
                    </Text>
                    <View className="flex-row items-center mt-[50px] mb-[10px]">
                        <Text className=" text-[#010101] uppercase font-poppins text-[16px] font-bold">
                            Login
                        </Text>
                        <Text className="uppercase font-poppins text-[14px] font-bold">
                            (Email or phone)
                        </Text>
                    </View>
                    <View className="px-[14px] py-[10px] border-[1px] border-[#BFBFBF] rounded-[4px]">
                        <View className="flex-row-reverse justify-end items-center gap-2 mt-[10px]">
                            <TextInput
                                placeholder="EMAIL OR PHONE"
                                className=" placeholder:text-[#BFBFBF] font-poppins text-[16px]"
                                value={emailOrPhone}
                                onChangeText={(text) => setEmailOrPhone(text)}
                            />
                            <Image
                                source={require("../assets/images/form/men.png")}
                                resizeMode="cover"
                            />
                        </View>
                    </View>
                    <View className="flex-1 gap-5 mt-5">
                        <Btn title={"submit"} handler={handleForgetPassword} />
                        <Btn title={"Back To Login"} handler={goLogin} />
                    </View>
                </View>
                <View className="mt-5">{/* <Btn title={Login} /> */}</View>
                <View className="mt-5 text-[#999] font-poppins flex-row items-center justify-center">
                    <Text>DO NOT HAVE AN ACCOUNT?</Text>
                    <Text> </Text>
                    <TouchableOpacity className="">
                        <Text
                            className="text-[#010101] text-[14px] font-bold"
                            onPress={() => router.push("(auth)/register")}
                        >
                            SIGN UP
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    )
}

export default ForgetPassword
export const authShadowStyle = StyleSheet.create({
    box: {
    
        backgroundColor: '#fff',
    
        // Shadow for iOS
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.1,
        shadowRadius: 30,
    
        // Shadow for Android
        elevation: 10,
        marginLeft:10,
        marginRight:10,
        marginBottom:20
    },
})