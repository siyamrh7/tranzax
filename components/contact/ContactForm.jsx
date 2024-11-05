import { View, Text, TextInput } from "react-native"
import { contactUsForm } from "../../constant/data"
import { useState } from "react"
import BtnWithArrow from "../shared/BtnWithArrow"
import axios from "axios"
import Toast from "react-native-toast-message"
import { toastConfig } from "../../constant/toastConfig"

const ContactForm = () => {
    const [loading, setLoading] = useState(false)
    const [values, setValues] = useState({
        first_name: "",
        last_name: "",
        email: "",
        message: "",
        country_code: "us",
        country_name: "usa",
    })

    const isValidEmail = (email) => {
        return (
            typeof email === "string" &&
            email.trim() !== "" &&
            /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)
        )
    }
    const handleSendContact = async () => {
        setLoading(true)

        if (Object.values(values).some((val) => !val.trim())) {
            setLoading(false)
            return Toast.show({
                type: "error",
                text1: "Error",
                text2: "All fields are required.",
                position: "top",
            })
        }

        if (!isValidEmail(values.email)) {
            setLoading(false)
            return Toast.show({
                type: "error",
                text1: "Error",
                text2: "Please enter a valid email address.",
                position: "top",
            })
        }

        try {
            const response = await axios.post(
                "https://tranzaxx.com/api/contact",

                {
                    ...values,
                }
            )

            if (!response.data.success) {
                setLoading(false)
                return Toast.show({
                    type: "error",
                    text1: "Error",
                    text2: response.data.message,
                    position: "top",
                })
            }

            Toast.show({
                type: "success",
                text1: "Success",
                text2: response.data.message,
                position: "top",
            })
        } catch (error) {
            console.error("Error:", error)
            Toast.show({
                type: "error",
                text1: "Error",
                text2: error.message,
                position: "top",
            })
        } finally {
            setLoading(false)
        }
    }

    return (
        <View className="flex-1 gap-4">
            {/* Toast component wrapped in an absolutely positioned container */}

            {contactUsForm.map((data, index) => (
                <View key={index}>
                    <Text className="text-[16px] text-primaryBlk font-semibold font-poppins">
                        {data.placeholder}
                    </Text>
                    <TextInput
                        className="border-[1px] mt-[10px] border-primary rounded px-[14px] py-[10px] placeholder:text-[#999] text-[16px] font-poppins"
                        placeholder={data.placeholder}
                        value={values[data.name]}
                        onChangeText={(text) => {
                            setValues((prevValues) => ({
                                ...prevValues,
                                [data.name]: text,
                            }))
                        }}
                        multiline={data.name === "message"}
                        numberOfLines={data.name === "message" ? 4 : 1}
                    />
                </View>
            ))}

            <View className="mt-4 flex-row items-center justify-center">
                <BtnWithArrow
                    handler={handleSendContact}
                    loading={loading}
                    title={"Send message"}
                    px={"px-[100px]"}
                    py={"py-[10px]"}
                />
            </View>
        </View>
    )
}

export default ContactForm
