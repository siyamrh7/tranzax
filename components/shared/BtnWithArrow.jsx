import { AntDesign } from "@expo/vector-icons"
import { TouchableOpacity } from "react-native"
import { Text } from "react-native"

const BtnWithArrow = ({
    title,
    handler,
    px,
    py,
    txtClass,
    loading = false,
}) => {
    return (
        <TouchableOpacity
            disabled={loading ? true : false}
            className={`bg-[#00ADEF] rounded-[12px] flex-row items-center gap-1 ${
                px ? px : "px-4"
            } ${py ? py : "py-3"}`}
            onPress={handler}
        >
            <Text
                className={`font-poppins text-[16px] text-white font-semibold text-center ${txtClass}`}
            >
                {title}
            </Text>
            <AntDesign name="arrowright" size={20} color="white" />
        </TouchableOpacity>
    )
}

export default BtnWithArrow
