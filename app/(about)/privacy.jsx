import { View, Text, ScrollView } from "react-native"
import AboutHero from "../../components/shared/about/AboutHero"

export default function privacy() {
    return (
        <ScrollView>
            <View className="mt-[50px] px-4 mb-20">
                <AboutHero firstText={"PRIVACY"} secondText={"PRIVACY"} />
                <View className="flex gap-[26px] mt-[30px]">
                    <Text className="font-poppins font-semibold text-[#565656] text-[16px]">
                        YOUR PRIVACY IS AN IMPORTANT PART OF OUR RELATIONSHIP
                        WITH YOU. PROTECTING YOUR PRIVACY IS ONLY PART OF OUR
                        MISSION TO PROVIDE A SECURE WEB ENVIRONMENT. WHEN USING
                        OUR SITE, INCLUDING OUR SERVICES, YOUR INFORMATION WILL
                        REMAIN STRICTLY CONFIDENTIAL. CONTRIBUTIONS MADE ON OUR
                        BLOG OR ON OUR FORUM ARE OPEN TO PUBLIC VIEW: SO PLEASE
                        DO NOT POST ANY PERSONAL INFORMATION IN YOUR DEALINGS
                        WITH OTHERS. WE ACCEPT NO LIABILITY FOR THOSE ACTIONS
                        BECAUSE IT IS YOUR SOLE RESPONSIBILITY TO ADEQUATE AND
                        SAFE POST CONTENT ON OUR SITE. WE WILL NOT SHARE, RENT
                        OR SHARE YOUR INFORMATION WITH THIRD PARTIES.
                    </Text>
                    <Text className="font-poppins font-semibold text-[#565656] text-[16px]">
                        WHEN YOU VISIT OUR SITE, WE COLLECT TECHNICAL
                        INFORMATION ABOUT YOUR COMPUTER AND HOW YOU ACCESS OUR
                        WEBSITE AND ANALYZE THIS INFORMATION SUCH AS INTERNET
                        PROTOCOL (IP) ADDRESS OF YOUR COMPUTER. THE OPERATING
                        SYSTEM USED BY YOUR COMPUTER, THE BROWSER (EG, CHROME,
                        FIREFOX, INTERNET EXPLORER OR OTHER) YOUR COMPUTER USES,
                        THE NAME OF YOUR INTERNET SERVICE PROVIDER (ISP), THE
                        UNIFORM RESOURCE LOCATOR (URL) OF THE WEBSITE FROM WHICH
                        YOU COME AND THE URL TO WHICH YOU GO NEXT AND CERTAIN
                        OPERATING METRICS SUCH AS THE NUMBER OF TIMES YOU USE
                        OUR WEBSITE. THIS GENERAL INFORMATION CAN BE USED TO
                        HELP US BETTER UNDERSTAND HOW OUR SITE IS VIEWED AND
                        USED. WE MAY SHARE THIS GENERAL INFORMATION ABOUT OUR
                        SITE WITH OUR BUSINESS PARTNERS OR THE GENERAL PUBLIC.
                        FOR EXAMPLE, WE MAY SHARE THE INFORMATION ON THE NUMBER
                        OF DAILY UNIQUE VISITORS TO OUR SITE WITH POTENTIAL
                        CORPORATE PARTNERS OR USE THEM FOR ADVERTISING PURPOSES.
                        THIS INFORMATION DOES CONTAIN ANY OF YOUR PERSONAL DATA
                        THAT CAN BE USED TO CONTACT YOU OR IDENTIFY YOU.
                    </Text>
                    <Text className="font-poppins font-semibold text-[#565656] text-[16px]">
                        WHEN WE PLACE LINKS OR BANNERS TO OTHER SITES OF OUR
                        WEBSITE, PLEASE NOTE THAT WE DO NOT CONTROL THIS KIND OF
                        CONTENT OR PRACTICES OR PRIVACY POLICIES OF THOSE SITES.
                        WE DO NOT ENDORSE OR ASSUME NO RESPONSIBILITY FOR THE
                        PRIVACY POLICIES OR INFORMATION COLLECTION PRACTICES OF
                        ANY OTHER WEBSITE OTHER THAN MANAGED SITES TRANZAXX.
                    </Text>
                    <Text className="font-poppins font-semibold text-[#565656] text-[16px]">
                        WE USE THE HIGHEST SECURITY STANDARD AVAILABLE TO
                        PROTECT YOUR IDENTIFIABLE INFORMATION IN TRANSIT TO US.
                        ALL DATA STORED ON OUR SERVERS ARE PROTECTED BY A SECURE
                        FIREWALL FOR THE UNAUTHORIZED USE OR ACTIVITY CAN NOT
                        TAKE PLACE. ALTHOUGH WE MAKE EVERY EFFORT TO PROTECT
                        YOUR PERSONAL INFORMATION AGAINST LOSS, MISUSE OR
                        ALTERATION BY THIRD PARTIES, YOU SHOULD BE AWARE THAT
                        THERE IS ALWAYS A RISK THAT LOW-INTENTIONED MANAGE TO
                        FIND A WAY TO THWART OUR SECURITY SYSTEM OR THAT
                        INTERNET TRANSMISSIONS COULD BE INTERCEPTED.
                    </Text>
                    <Text className="font-poppins font-semibold text-[#565656] text-[16px]">
                        WE RESERVE THE RIGHT, WITHOUT NOTICE, TO CHANGE, MODIFY,
                        ADD OR REMOVE PORTIONS OF OUR PRIVACY POLICY AT ANY TIME
                        AND FROM TIME TO TIME. THESE CHANGES WILL BE POSTED
                        PUBLICLY ON OUR WEBSITE. WHEN YOU VISIT OUR WEBSITE, YOU
                        ACCEPT ALL THE TERMS OF OUR PRIVACY POLICY. YOUR
                        CONTINUED USE OF THIS WEBSITE CONSTITUTES YOUR CONTINUED
                        AGREEMENT TO THESE TERMS.IF YOU DO NOT AGREE WITH THE
                        TERMS OF OUR PRIVACY POLICY, YOU SHOULD CEASE USING OUR
                        WEBSITE.
                    </Text>
                </View>
            </View>
        </ScrollView>
    )
}
