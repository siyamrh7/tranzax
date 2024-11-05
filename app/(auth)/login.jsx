import {
    View,
    Text,
    ScrollView,
    Image,
    TouchableOpacity,
    TextInput,
    Alert,
    StyleSheet,
} from "react-native"
import React, { useContext, useState } from "react"
import { Ionicons } from "@expo/vector-icons"
import Btn from "../../components/shared/Btn"
import ForgetPassword from "../../components/ForgetPassword"
import { router } from "expo-router"
import axios from "axios"
import * as SecureStore from "expo-secure-store"
import Toast from "react-native-toast-message"
import { AppContext } from "../../store/store"
// import { authShadowStyle } from "../../constant/style"

const Login = () => {
    const { user, setUser } = useContext(AppContext)
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

    const saveToken = async (token) => {
        await SecureStore.setItemAsync("userToken", token)
        // Alert.alert("Success", "Login successful!")
        router.replace("(root)/home")
    }
    const handleLogin = async () => {
        if (!validateForm()) {
            return Toast.show({
                type: "error",
                text1: "Login Error",
                text2: "Both fields are required",
            })
        }

        try {
            const response = await axios.post(
                `${process.env.EXPO_PUBLIC_BASE_URL}/api/auth/login`,
                {
                    login: formData.emailOrPhone,
                    password: formData.password,
                }
            )
            if (!response.data.success) {
                Toast.show({
                    type: "error",
                    text1: "Login Error",
                    text2: response.data.message,
                })
            }
            saveToken(response.data.extra.authToken)
            setUser(response.data)
            return Toast.show({
                type: "success",
                text1: "Login Successful",
                text2: "Welcome!",
            })
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
                    return Toast.show({
                        type: "error",
                        text1: "Error",
                        text2: error.message ?? "Please try again later",
                    })
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
            <View
                className="rounded-[12px] bg-[#fff] p-6 mt-[50px] border-[1px] border-transparent "
                style={authShadowStyle.box}
            >
                <View className="pt-6 pl-6 pr-6">
                    <Text className="text-capitalize font-poppins text-[#010101] font-bold text-[24px] text-center uppercase">
                        Log in
                    </Text>
                    <View>
                        <Text className="text-[#010101] uppercase font-poppins text-[16px] font-bold mt-[50px]">
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
                        <Text className="text-[#010101] uppercase font-poppins text-[16px] font-bold mt-5">
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
                        <Text className="text-[#010101] font-poppins font-bold">
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
                        <Text className="text-[#010101] text-[14px] font-bold">
                            {" "}
                            SIGN UP
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    )
}

export default Login

export const authShadowStyle = StyleSheet.create({
    box: {
        backgroundColor: "#fff",

        // Shadow for iOS
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.1,
        shadowRadius: 30,

        // Shadow for Android
        elevation: 10,
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 20,
    },
})
