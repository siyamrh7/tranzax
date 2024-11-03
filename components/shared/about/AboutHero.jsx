import { View, Text } from "react-native"

const AboutHero = ({ firstText, secondText }) => {
    return (
        <View>
            <Text className="text-primaryBlk font-poppins font-semibold text-[44px] text-center">
                {firstText}
            </Text>
            <Text className="mt-[10px] text-nowrap font-poppins text-primary text-[34px] text-center">
                {secondText}
            </Text>
        </View>
    )
}

export default AboutHero
