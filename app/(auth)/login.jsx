import {
    View,
    Text,
    ScrollView,
    Image,
    TouchableOpacity,
    TextInput,
    Alert,
} from "react-native"
import React, { useState } from "react"
import { Ionicons } from "@expo/vector-icons"
import Btn from "../../components/shared/Btn"
import ForgetPassword from "../../components/ForgetPassword"
import { router } from "expo-router"
import axios from "axios"

const Login = () => {
    const [isLogin, setIsLogin] = useState(true)
    const [formData, setFormData] = useState({
        emailOrPhone: "",
        password: "",
    })
    const [isChecked, setIsChecked] = useState(false)
    const [passwordVisible, setPasswordVisible] = useState(false)

    const handleInputChange = (field, value) => {
        setFormData({ ...formData, [field]: value })
    }

    const validateForm = () => {
        const { emailOrPhone, password } = formData
        if (!emailOrPhone || !password) {
            Alert.alert("Validation Error", "Both fields are required.")
            return false
        }
        return true
    }

    const handleLogin = async () => {
        if (!validateForm()) return
        try {
            const response = await axios.post(
                `${process.env.EXPO_PUBLIC_BASE_URL}/api/auth/login`,
                {
                    login: formData.emailOrPhone,
                    password: formData.password,
                }
            )

            if (response.status === 200) {
                Alert.alert("Success", "Login successful!")
                router.replace("(root)/home")
            }
        } catch (error) {
            console.error("Login error:", error)

            if (error.response) {
                console.error("Response data:", error.response.data)

                const { message, errors } = error.response.data

                let alertMessage = message

                if (errors) {
                    const specificErrors = Object.entries(errors)
                        .map(
                            ([field, messages]) =>
                                `${field}: ${messages.join(", ")}`
                        )
                        .join("\n")

                    alertMessage += `\n\nDetails:\n${specificErrors}`
                }
                console.log(alertMessage, "e")
                if (
                    alertMessage ===
                    "These credentials do not match our records."
                ) {
                    return Alert.alert("Error", "invalid credentials")
                }
                Alert.alert("Error", alertMessage)
            } else if (error.request) {
                console.error("Request data:", error.request)
                Alert.alert(
                    "Error",
                    "No response received, please check your network."
                )
            } else {
                console.error("Error message:", error.message)
                Alert.alert("Error", error.message)
            }
        }
    }

    if (!isLogin) return <ForgetPassword setIsLogin={setIsLogin} />

    return (
        <ScrollView className="px-4">
            <View className="shadow-loginShadow rounded-[12px] bg-white pb-6 mt-[50px]">
                <View className="pt-6 pl-6 pr-6">
                    <Text className="text-capitalize font-poppins text-[#010101] font-semibold text-[24px] text-center uppercase">
                        Log in
                    </Text>
                    <View>
                        <Text className="text-[#010101] uppercase font-poppins text-[16px] font-medium mt-[50px]">
                            Login (Email or phone)
                        </Text>
                        <View className="px-[14px] py-[10px] border-[1px] border-[#BFBFBF] rounded-[4px] mt-2">
                            <View className="flex-row-reverse justify-end items-center gap-2">
                                <TextInput
                                    placeholder="EMAIL OR PHONE"
                                    className="placeholder:text-[#BFBFBF] font-poppins text-[16px]"
                                    value={formData.emailOrPhone}
                                    onChangeText={(value) =>
                                        handleInputChange("emailOrPhone", value)
                                    }
                                />
                                <Image
                                    source={require("../../assets/images/form/men.png")}
                                    resizeMode="cover"
                                />
                            </View>
                        </View>
                    </View>
                    <View>
                        <Text className="text-[#010101] uppercase font-poppins text-[16px] font-medium mt-5">
                            Password
                        </Text>
                        <View className="px-[14px] py-[10px] border-[1px] border-[#BFBFBF] rounded-[4px] mt-2">
                            <View className="flex-row items-center gap-2">
                                <Image
                                    source={require("../../assets/images/form/lock.png")}
                                    resizeMode="cover"
                                />
                                <TextInput
                                    placeholder="PASSWORD"
                                    className="placeholder:text-[#BFBFBF] font-poppins text-[16px] w-[80%]"
                                    secureTextEntry={!passwordVisible}
                                    value={formData.password}
                                    onChangeText={(value) =>
                                        handleInputChange("password", value)
                                    }
                                />
                                <TouchableOpacity
                                    onPress={() =>
                                        setPasswordVisible(!passwordVisible)
                                    }
                                >
                                    <Ionicons
                                        name={
                                            passwordVisible ? "eye-off" : "eye"
                                        }
                                        size={24}
                                        color="#999999"
                                    />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <TouchableOpacity
                        className="mt-4"
                        onPress={() => setIsLogin(false)}
                    >
                        <Text className="text-[14px] font-medium text-right text-[#999999]">
                            LOST YOUR PASSWORD?
                        </Text>
                    </TouchableOpacity>
                    <View className="mt-[38px] flex-row items-center justify-center">
                        <TouchableOpacity
                            onPress={() => setIsChecked(!isChecked)}
                            className="w-7 h-7 border-[1px] border-[#BFBFBF] mr-2 items-center justify-center"
                        >
                            {isChecked && (
                                <View className="w-3 h-3 bg-[#000]" />
                            )}
                        </TouchableOpacity>
                        <Text className="text-[#010101] font-poppins">
                            KEEP ME LOGGED IN
                        </Text>
                    </View>
                </View>
                <View className="mt-5">
                    <Btn title={"Login"} handler={handleLogin} />
                </View>
                <View className="mt-5 text-[#999] font-poppins flex-row items-center justify-center">
                    <Text>DO NOT HAVE AN ACCOUNT?</Text>
                    <TouchableOpacity
                        onPress={() => router.replace("/register")}
                    >
                        <Text className="text-[#010101] font-semibold text-[14px]">
                            SIGN UP
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    )
}

export default Login
