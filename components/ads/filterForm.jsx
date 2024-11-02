import { View, Text, TextInput, TouchableOpacity } from "react-native"
import { AntDesign } from "@expo/vector-icons"

const YourComponent = ({ itemIn ,search,setSearch}) => {
    return (
        <View className="px-4">
            <View className="flex-row items-center gap-2">
                <View className="border-[1px] border-[#8E8E8E] rounded-lg flex-1">
                    <TextInput
                        placeholder="LOOKING FOR SOMETHING"
                        className="font-poppins px-3 py-2 h-12"
                        onChangeText={(e)=>setSearch(e)}
                        value={search}
                    />
                </View>
                <View className="max-w-[96px] w-full">
                    <TouchableOpacity className="bg-[#00ADEF] rounded-[12px] flex-row items-center justify-center h-12">
                        <Text className="font-poppins text-[12px] text-white uppercase font-semibold text-center">
                            find
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View className="flex-row items-center gap-2 mt-3">
                <View className="border-[1px] border-[#8E8E8E] rounded-lg flex-1">
                    <View className="flex-row items-center px-3 h-12">
                        <Text className="uppercase font-semibold font-poppins text-[14px] text-primary">
                            ALL ADS
                        </Text>
                        {itemIn !== "ALL ADS" && (
                            <View className="flex-row items-center">
                                <Text className="uppercase text-primaryBlk font-semibold font-poppins text-[14px]">
                                    {" "}
                                    IN{" "}
                                </Text>
                                <Text className="uppercase font-semibold text-primary font-poppins text-[14px]">
                                    {itemIn}
                                </Text>
                            </View>
                        )}
                    </View>
                </View>
                <View className="max-w-[96px] w-full">
                    <TouchableOpacity className="bg-[#00ADEF] rounded-[12px] flex-row items-center justify-center h-12">
                        <Text className="font-poppins text-[12px] text-white uppercase font-semibold text-center">
                            Sort by
                        </Text>
                        <AntDesign name="caretdown" size={8} color="white" />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default YourComponent
