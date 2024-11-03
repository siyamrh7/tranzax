import { View, Text, ScrollView } from "react-native"
import AboutHero from "../../components/shared/about/AboutHero"
import { Entypo } from "@expo/vector-icons"
const antiscamDetails = [
    {
        header: "OUR ADVICES",
        advices: [
            {
                text: "DOING BUSINESS WITH PEOPLE YOU CAN MEET IN PERSON.",
            },
            {
                text: "NEVER SEND MONEY OR PRODUCTS ABROAD.",
            },
            {
                text: "DO NOT ACCEPT CHECKS.",
            },
            {
                text: "ASK ABOUT THE PERSON YOU'RE DEALING WITH ANOTHER CONFIRMING SOURCE NAME, ADDRESS AND TELEPHONE NUMBER.",
            },
            {
                text: "KEEP COPIES OF ALL CORRESPONDENCE (EMAILS, ADS, LETTERS, ETC.) AND DETAILS OF THE PERSON.",
            },
            {
                text: "IF A DEAL SEEMS TOO GOOD TO BE TRUE, THERE IS EVERY CHANCE THAT THIS IS THE CASE. REFRAIN.",
            },
        ],
    },
    {
        header: "RECOGNIZE ATTEMPTED SCAM",
        advices: [
            {
                text: "THE MAJORITY OF SCAMS HAVE ONE OR MORE OF THESE",
            },
            {
                text: "CHARACTERISTICS:",
            },
            {
                text: "THE PERSON IS ABROAD OR TRAVELING ABROAD.",
            },
            {
                text: "THE PERSON REFUSES TO MEET YOU IN PERSON.",
            },
            {
                text: "PAYMENT IS MADE THROUGH WESTERN UNION, MONEY GRAM OR CHECK.",
            },
            {
                text: "THE MESSAGES ARE IN BROKEN LANGUAGE (ENGLISH OR FRENCH OR ...).",
            },
            {
                text: "THE TEXTS SEEM TO BE COPIED AND PASTED.",
            },
            {
                text: "THE DEAL SEEMS TO BE TOO GOOD TO BE TRUE.",
            },
        ],
    },
]

const antiscam = () => {
    return (
        <ScrollView className="p-4">
            <View className=" mb-20">
                <View className="mt-[50px] px-4 ">
                    <AboutHero
                        firstText={"ANTI-SCAM"}
                        secondText={"ANTI-SCAM"}
                    />
                    <View className="flex gap-[26px] mt-[30px]"></View>
                </View>
                <View>
                    <Text className=" mt-3 text-[22px] font-semibold font-poppins text-primaryBlk">
                        PROTECT YOURSELF AGAINST INTERNET FRAUD!
                    </Text>
                    <Text className=" mt-[9px] text-[16px] font-medium font-poppins text-[#565656]">
                        THE VAST MAJORITY OF ADS ARE POSTED BY HONEST PEOPLE AND
                        TRUST. SO YOU CAN DO EXCELLENT BUSINESS. DESPITE THIS,
                        IT IS IMPORTANT TO FOLLOW A FEW COMMON SENSE RULES
                        FOLLOWING TO PREVENT ANY ATTEMPT TO SCAM.
                    </Text>
                </View>
                <View className="mt-5 flex gap-5">
                    {antiscamDetails.map((details, index) => (
                        <View key={index}>
                            <Text className="text-[22px] font-semibold font-poppins text-primaryBlk">
                                {details.header}
                            </Text>
                            <View>
                                {details.advices.map((advice, index) => (
                                    <View
                                        key={index}
                                        className="flex-row items-start flex-wrap"
                                    >
                                        <Entypo
                                            name="dot-single"
                                            size={30}
                                            color="#565656"
                                            className="mt-3"
                                        />
                                        <Text
                                            className="mt-4 text-[16px] leading-[24px] font-medium font-poppins text-[#565656]"
                                            style={{ flex: 1 }}
                                        >
                                            {advice.text}
                                        </Text>
                                    </View>
                                ))}
                            </View>
                        </View>
                    ))}
                </View>
            </View>
        </ScrollView>
    )
}

export default antiscam
