import { View, Text } from "react-native"
import BtnWithArrow from "../shared/BtnWithArrow"
import BoostBrand from "../shared/BoostBrand"
import RotateText from "../shared/RotateText"

export default function AdsHeroSection() {
    return (
        <View className="px-10 flex gap-[30px] ">
            <BoostBrand text="Boost Your Brand with Engaging Videos!" />
            <View>
                <View className="flex-row items-center">
                    <Text className="font-Poppins text-primaryBlk uppercase font-BebasNeue  text-[34px]">
                        Promote Your
                    </Text>
                    <Text>
                        {" "}
                        <RotateText text={"Ads"} />{" "}
                    </Text>
                    <Text className="font-BebasNeue text-[34px] text-primaryBlk">
                        Instantly
                    </Text>
                </View>
                <View className="mt-[10px] ">
                    <Text className="font-poppins text-[#565656] text-center text-[12px]">
                        Reach more customers with targeted
                    </Text>
                    <Text className="font-poppins text-[#565656] text-center text-[12px]">
                        ad posts. Boost your visibility today!{" "}
                    </Text>
                </View>
            </View>
            <View className="flex-row items-center justify-center">
                <BtnWithArrow title={"Post Your Ad Now"} px={"px-4"} />
            </View>
        </View>
    )
}
