import React from "react"
import { View, Text, ScrollView, Linking } from "react-native"
import { styled } from "nativewind"
import AboutHero from "../../components/shared/about/AboutHero"

const terms = [
    {
        number: 1,
        text: "ANNOUNCEMENT: REFERS TO ALL THE ELEMENTS AND DATA (VISUAL, TEXTUAL, SOUND, PHOTOGRAPHS, DRAWINGS), PRESENTED BY AN ADVERTISER EDITORIAL UNDER HIS SOLE RESPONSIBILITY, IN ORDER TO BUY, RENT OR SELL A PRODUCT OR SERVICE AND BROADCAST ON THE WEBSITE AND MOBILE SITE.",
    },
    {
        number: 2,
        text: "ADVERTISER: MEANS ANY NATURAL OR LEGAL PERSON, A MAJOR, ESTABLISHED IN FRANCE, HOLDS AN ACCOUNT AND HAVING SUBMITTED AN ANNOUNCEMENT, FROM IT, ON THE WEBSITE. ANY ADVERTISER MUST BE CONNECTED TO THE PERSONAL ACCOUNT FOR DEPOSIT AND OR MANAGE ITS ADS. AD FIRST DEPOSIT AUTOMATICALLY ENTAILS THE ESTABLISHMENT OF A PERSONAL ACCOUNT TO THE ADVERTISER.",
    },
    {
        number: 3,
        text: "PERSONAL ACCOUNT: REFERS TO THE FREE SPACE THAN ANY ADVERTISER MUST CREATE AND WHICH IT SHOULD CONNECT FROM THE WEBSITE TO DISSEMINATE, MANAGE AND VIEW ITS ADS.",
    },
    {
        number: 4,
        text: "TRANZAXX: MEANS THE COMPANY THAT PUBLISHES AND OPERATES THE WEBSITE AND MOBILE SITE (YOURCOMPANY), REGISTERED AT THE TRADE AND COMPANIES REGISTER OF (YOURCITY) UNDER THE NUMBER (YOURCOMPANY REGISTRATION NUMBER) WHOSE REGISTERED OFFICE IS AT (YOURCOMPANY ADDRESS).",
    },
    {
        number: 5,
        text: "CUSTOMER SERVICE: TRANZAXX MEANS THE DEPARTMENT TO WHICH THE ADVERTISER MAY OBTAIN FURTHER INFORMATION. THIS SERVICE CAN BE CONTACTED VIA EMAIL BY CLICKING THE LINK ON THE WEBSITE AND MOBILE SITE.",
    },
    {
        number: 6,
        text: " WEBSITE: MEANS THE WEBSITE OPERATED BY TRANZAXX ACCESSED MAINLY FROM THE URL ",
        linkText: "HTTPS://TRANZAXX.COM",
        link: "HTTPS://TRANZAXX.COM",
        additionalText:
            "AND ALLOWING USERS AND ADVERTISERS TO ACCESS VIA THEIR MOBILE PHONE SERVICE (YOURSITENAME).",
    },
    {
        number: 7,
        text: "MOBILE SITE: IS THE MOBILE SITE OPERATED BY TRANZAXX ACCESSIBLE FROM THE URL",
        linkText: "HTTPS://TRANZAXX.COM ",
        link: "HTTPS://TRANZAXX.COM ",
        additionalText:
            "AND ALLOWING USERS AND ADVERTISERS TO ACCESS THE SERVICE VIA INTERNET TRANZAXX.",
    },
    {
        number: 8,
        text: "USER: ANY VISITOR WITH ACCESS TO TRANZAXX SERVICE VIA THE WEBSITE AND MOBILE SITE AND CONSULTANT SERVICE TRANZAXX ACCESSIBLE FROM DIFFERENT MEDIA.",
    },
    {
        number: 9,
        text: "HERE: MEANS THE SECTION IN WHICH THE USER CAN FIND MORE INFORMATION REGARDING TERMS, PRIVACY, AND COMPANY DETAILS.",
    },
]
const termFooter = [
    {
        header: "SUBJECT",
        text: "THESE TERMS AND CONDITIONS OF USE ESTABLISH THE CONTRACTUAL CONDITIONS APPLICABLE TO ANY SUBSCRIPTION BY AN ADVERTISER CONNECTED TO ITS PERSONAL ACCOUNT FROM THE WEBSITE AND MOBILE SITE.",
    },
    {
        header: "ACCEPTANCE",
        text: "ANY USE OF THE WEBSITE BY AN ADVERTISER IS FULL ACCEPTANCE OF THE CURRENT TERMS.",
    },
    {
        header: "RESPONSIBILITY",
        text: "RESPONSIBILITY FOR TRANZAXX CANNOT BE HELD LIABLE FOR NON-PERFORMANCE OR IMPROPER PERFORMANCE DUE TO FACTORS BEYOND THEIR CONTROL, EITHER BECAUSE OF THE ADVERTISER, OR A CASE OF MAJOR FORCE.",
    },
    {
        header: "MODIFICATION OF TERMS",
        text: "TRANZAXX RESERVES THE RIGHT, AT ANY TIME, TO MODIFY ALL OR PART OF THE TERMS AND CONDITIONS. ADVERTISERS ARE ADVISED TO CONSULT THE TERMS TO BE AWARE OF THE CHANGES.",
    },
    {
        header: "MISCELLANEOUS",
        text: "IF PART OF THE TERMS SHOULD BE ILLEGAL, INVALID OR UNENFORCEABLE FOR ANY REASON WHATSOEVER, THE PROVISIONS IN QUESTION WOULD BE DEEMED UNWRITTEN, WITHOUT QUESTIONING THE VALIDITY OF THE REMAINING PROVISIONS. THE TERMS APPLY BETWEEN ADVERTISERS AND TRANZAXX. ANY COMPLAINTS SHOULD BE ADDRESSED TO CUSTOMER SERVICE TRANZAXX.",
    },
]

export default function TermsScreen() {
    const openLink = (url) => {
        Linking.openURL(url).catch((err) =>
            console.error("Couldn't load page", err)
        )
    }

    return (
        <ScrollView className="flex-1 p-4">
            <View className="mb-20">
                <View className="mt-[50px]">
                    <AboutHero
                        firstText={"TERMS"}
                        secondText={"TERMS & CONDITIONS"}
                    />
                </View>

                <View className="mt-3">
                    <Text className="uppercase font-poppins text-primaryBlk text-[22px] font-bold">
                        DEFINITIONS
                    </Text>
                    <Text className="font-poppins text-[#565656] text-[16px] font-medium leading-[24px]">
                        EACH OF THE TERMS MENTIONED BELOW HAVE IN THESE
                        CONDITIONS OF SALE TRANZAXX SERVICE (HEREINAFTER THE
                        "CONDITIONS") THE FOLLOWING MEANINGS:
                    </Text>
                </View>
                <View className="flex gap-2 mt-5">
                    {terms.map((item, index) => (
                        <View key={item.number} className="flex-row ">
                            <Text className="text-[16px] text-[#565656] leading-6 mb-4">
                                <Text className="font-bold text-[#565656]">
                                    {item.number}.{" "}
                                </Text>
                            </Text>
                            <Text className="text-base leading-6 mb-4 font-poppins text-[16px] text-[#565656] font-medium">
                                {item.text}
                                {item.link && (
                                    <Text
                                        className="text-primary underline text-[16px]  font-poppins font-medium"
                                        onPress={() => openLink(item.link)}
                                    >
                                        {item.linkText}
                                    </Text>
                                )}
                                {item.additionalText && (
                                    <Text>{item.additionalText}</Text>
                                )}
                            </Text>
                        </View>
                    ))}
                </View>
                <View className="mt-5 flex gap-4">
                    {termFooter.map((footer, index) => (
                        <View className="flex gap-[9px]" key={index}>
                            <Text className="text-primaryBlk text-[22px] font-bold font-poppins">
                                {footer.header}
                            </Text>
                            <Text className="text-[#565656] text-[16px] font-medium font-poppins leading-[24px]">
                                {footer.text}
                            </Text>
                        </View>
                    ))}
                </View>
            </View>
        </ScrollView>
    )
}
