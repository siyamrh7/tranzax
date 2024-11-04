import {
    View,
    Text,
    ScrollView,
    TextInput,
    Image,
    TouchableOpacity,
    Alert,
} from "react-native"
import Btn from "./shared/Btn"
import { useState } from "react"
import Toast, { BaseToast } from "react-native-toast-message"
import axios from "axios"

const ForgetPassword = ({ setIsLogin }) => {
    const goLogin = () => {
        setIsLogin(true)
    }
    const [loading, setLoading] = useState(false)
    const [emailOrPhone, setEmailOrPhone] = useState("")
    const handleForgetPassword = async () => {
        setLoading(true)
        if (!emailOrPhone) {
            return Toast.show({
                type: "error", // You can use 'success', 'error', or 'info'
                text1: "Please type valid email or phone",
            })
            setLoading(false)
        }
        try {
            // Call your API to reset password
            // For simplicity, let's assume it's a POST request
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
                    type: "success", // You can use 'success', 'error', or 'info'
                    text1: response?.data?.message,
                    text2: response?.data?.message,
                })
            }
            if (!response.data.success) {
                setLoading(false)
                return Toast.show({
                    type: "error", // You can use 'success', 'error', or 'info'
                    text1: response?.data?.message,
                    text2: response?.data?.message,
                })
            }
        } catch (error) {
            console.log(error.message)
            setLoading(false)
            Toast.show({
                type: "success", // You can use '
                text: error.message,
                text2: error.message,
            })
        } finally {
            setLoading(false)
        }
    }
    return (
        <ScrollView className="px-4">
            <View className="shadow-loginShadow rounded-[12px]  bg-white pb-6 mt-[50px]">
                <View className="pt-6 pl-6 pr-6">
                    <Toast
                        config={{
                            success: (props) => (
                                <BaseToast
                                    {...props}
                                    style={{
                                        borderLeftColor: "black",
                                        backgroundColor: "black",
                                    }}
                                    contentContainerStyle={{
                                        backgroundColor: "black",
                                    }}
                                    text1Style={{ color: "white" }}
                                    text2Style={{ color: "white" }}
                                />
                            ),
                        }}
                    />
                    <Text className="text-capitalize font-poppins  text-[#010101] font-semibold text-[24px] text-center uppercase">
                        Forgot Password
                    </Text>
                    <View className="flex-row items-center mt-[50px]">
                        <Text className=" text-[#010101] uppercase font-poppins text-[16px] font-medium">
                            Login
                        </Text>
                        <Text className="uppercase font-poppins text-[14px]">
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
                    <TouchableOpacity className="">
                        <Text className="text-[#010101] font-semibold text-[14px]">
                            SIGN UP
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    )
}

export default ForgetPassword
