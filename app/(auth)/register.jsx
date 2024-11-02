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
import Btn from "../../components/shared/Btn"
import { registerInputData } from "../../constant/data"
import { router } from "expo-router"
import axios from "axios"

const Register = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        phone: "",
        confirmPassword: "",
    })
    const [agree, setAgree] = useState(false)
    const [hidePhoneNumber, setHidePhoneNumber] = useState(false)
    const [receiveMarketingEmail, setReceiveMarketingEmail] = useState(false)
    const [passwordVisible, setPasswordVisible] = useState(false)
    const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false)

    const handleInputChange = (field, value) => {
        setFormData({ ...formData, [field]: value })
    }

    const validateForm = () => {
        const { name, email, password, confirmPassword } = formData
        const errors = {}

        if (!name) {
            errors.name = "Name is required."
        }
        if (!email) {
            errors.email = "Email is required."
        }
        if (!password) {
            errors.password = "Password is required."
        }
        if (!confirmPassword) {
            errors.confirmPassword = "Confirm Password is required."
        }
        if (password !== confirmPassword) {
            errors.passwordMismatch = "Passwords do not match."
        }
        if (!agree) {
            errors.agree = "You must agree to the terms and conditions."
        }
        if (!formData.email && !formData.phone) {
            errors.contact =
                "You must provide either an email address or a phone number."
        }

        return errors
    }

    const handleRegister = async () => {
        let userIpAddress
        try {
            const ipResponse = await axios.get(
                "https://api.ipify.org?format=json"
            )
            userIpAddress = ipResponse.data.ip
        } catch (error) {
            console.error("Error fetching IP address:", error)
            Alert.alert(
                "Error",
                "Could not fetch IP address. Proceeding with default."
            )
            userIpAddress = "0.0.0.0"
        }
        const errors = validateForm()
        if (Object.keys(errors).length > 0) {
            Alert.alert("Validation Error", Object.values(errors).join("\n"))
            return
        }

        const formDataToSend = new FormData()
        Object.keys(formData).forEach((key) => {
            formDataToSend.append(key, formData[key])
        })

        formDataToSend.append("country_code", "US")
        formDataToSend.append("language_code", "en")
        formDataToSend.append("user_type_id", 1)
        formDataToSend.append("gender_id", 1)
        formDataToSend.append("phone_hidden", hidePhoneNumber)
        formDataToSend.append("accept_terms", agree)
        formDataToSend.append("accept_marketing_offers", receiveMarketingEmail)
        formDataToSend.append("password_confirmation", formData.confirmPassword)
        formDataToSend.append("ip_addr", userIpAddress)

        try {
            const response = await axios.post(
                `${process.env.EXPO_PUBLIC_BASE_URL}/api/users`,
                formDataToSend,
                {
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "multipart/form-data", // Important for FormData
                        "X-AppApiToken":
                            "Uk1DSFlVUVhIRXpHbWt6d2pIZjlPTG15akRPN2tJTUs=",
                        "X-AppType": "docs",
                    },
                }
            )

            if (response.status === 200) {
                Alert.alert("Success", "User registered successfully!")
                router.replace("(root)/home")
            } else {
                Alert.alert("Error", "Registration failed. Please try again.")
            }
        } catch (error) {
            console.error("Registration error:", error)

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

    return (
        <ScrollView className="px-4">
            <View className="shadow-loginShadow rounded-[12px] bg-white pb-6 mt-[50px]">
                <View className="pt-6 pl-6 pr-6">
                    <Text className="text-capitalize font-poppins text-[#010101] font-semibold text-[16px] text-center uppercase">
                        CREATE YOUR ACCOUNT, IT'S 100% FREE
                    </Text>
                    <View className="flex gap-5 py-[] mt-[50px]">
                        {registerInputData.map((data, index) => (
                            <View key={index}>
                                <Text className="uppercase text-[#010101] font-poppins text-[16px] font-medium">
                                    {data.name}
                                </Text>
                                <View className="px-[14px] py-[10px] border-[1px] border-[#BFBFBF] mt-[10px] rounded-[4px]">
                                    <View className="flex-row items-center gap-2">
                                        <Image source={data.firstIcon} />
                                        <TextInput
                                            placeholder={data.placeholder}
                                            placeholderTextColor="#BFBFBF"
                                            className="text-[#495057] text-[16px] font-poppins min-w-[80%]"
                                            value={formData[data.key]}
                                            onChangeText={(value) =>
                                                handleInputChange(
                                                    data.key,
                                                    value
                                                )
                                            }
                                            keyboardType={
                                                data.key === "phone" ||
                                                data.key === "numericField"
                                                    ? "numeric"
                                                    : "default"
                                            }
                                            secureTextEntry={
                                                data.key === "password"
                                                    ? !passwordVisible
                                                    : data.key ===
                                                      "confirmPassword"
                                                    ? !confirmPasswordVisible
                                                    : false
                                            }
                                        />
                                        {data.thirdIcon !== "" && (
                                            <TouchableOpacity
                                                onPress={() => {
                                                    if (
                                                        data.key === "password"
                                                    ) {
                                                        setPasswordVisible(
                                                            !passwordVisible
                                                        )
                                                    } else if (
                                                        data.key ===
                                                        "confirmPassword"
                                                    ) {
                                                        setConfirmPasswordVisible(
                                                            !confirmPasswordVisible
                                                        )
                                                    }
                                                }}
                                            >
                                                <Image
                                                    source={data.thirdIcon}
                                                />
                                            </TouchableOpacity>
                                        )}
                                    </View>
                                </View>
                            </View>
                        ))}
                    </View>
                </View>
                <View className="px-4">
                    <View className="mt-4 flex-row items-center">
                        <TouchableOpacity
                            onPress={() => setAgree(!agree)}
                            className="w-7 h-7 border-[1px] border-[#BFBFBF] mr-2 items-center justify-center"
                        >
                            {agree && <View className="w-3 h-3 bg-[#000]" />}
                        </TouchableOpacity>
                        <Text className="text-[#010101] font-poppins text-[12px] uppercase">
                            I HAVE READ AND AGREE TO THE
                            <Text className="text-primary font-poppins text-[12px] uppercase">
                                {" "}
                                TERMS & CONDITIONS
                            </Text>
                        </Text>
                    </View>
                </View>
                <View className="px-4">
                    <View className="mt-3 flex-row items-center">
                        <TouchableOpacity
                            onPress={() => setHidePhoneNumber(!hidePhoneNumber)}
                            className="w-7 h-7 border-[1px] border-[#BFBFBF] mr-2 items-center justify-center"
                        >
                            {hidePhoneNumber && (
                                <View className="w-3 h-3 bg-[#000]" />
                            )}
                        </TouchableOpacity>
                        <Text className="text-[#010101] font-poppins text-[12px] uppercase">
                            HIDE THE PHONE NUMBER ON THE ADS.
                        </Text>
                    </View>
                </View>
                <View className="px-4">
                    <View className="mt-3 flex-row items-center">
                        <TouchableOpacity
                            onPress={() =>
                                setReceiveMarketingEmail(!receiveMarketingEmail)
                            }
                            className="w-7 h-7 border-[1px] border-[#BFBFBF] mr-2 items-center justify-center"
                        >
                            {receiveMarketingEmail && (
                                <View className="w-3 h-3 bg-[#000]" />
                            )}
                        </TouchableOpacity>
                        <Text className="text-[#010101] font-poppins text-[12px] uppercase">
                            I ACCEPT TO RECEIVE MARKETING EMAILS
                        </Text>
                    </View>
                    <View className="mt-5">
                        <Btn title={"Register"} handler={handleRegister} />
                        <View className="mt-5 text-[#999] font-poppins flex-row items-center justify-center">
                            <Text>Already Have Account?</Text>
                            <TouchableOpacity
                                onPress={() => router.replace("/login")}
                            >
                                <Text className="text-[#010101] font-semibold text-[14px]">
                                    Login
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

export default Register
