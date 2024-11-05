import { TouchableOpacity } from "react-native"
import { View, Text } from "react-native"

export default function AdsSort({ arr, setSortedBy, setShowSort }) {
    return (
        <View className="flex gap-[6px]">
            {arr?.map((sortSlecotor, index) => (
                <TouchableOpacity
                    key={index}
                    onPress={() => {
                        setSortedBy(sortSlecotor)
                        setShowSort(false)
                    }}
                >
                    <Text className="font-poppins text-[12px] text-primaryBlk font-bold">
                        {sortSlecotor}
                    </Text>
                </TouchableOpacity>
            ))}
        </View>
    )
}
