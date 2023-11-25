import { Text, TouchableOpacity, View } from "react-native"
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen"
import { MyColors } from "../../values/Colors"


export const WordPairCard = (props) => {

    let { firstWord, secondWord} = props; 

    return(
        <TouchableOpacity
            style={{
                width: wp(90),
                height: hp(7),
                flexDirection: "row",
                backgroundColor: "red",
                alignSelf: "center",
                borderRadius: 20,
                marginBottom: hp(1)
            }}>

            <View
                style={{
                    flex: 1,
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: MyColors.secondColor,
                    borderTopLeftRadius: 20,
                    borderBottomLeftRadius: 20,
                }}>

                <Text
                    style={{
                        color: MyColors.mainColor,
                        fontSize: hp(2),
                        fontWeight: "bold"
                    }}>
                    
                    { firstWord }

                </Text>

            </View>

            <View
                style={{
                    flex: 1,
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: MyColors.mainColor,
                    borderTopRightRadius: 20,
                    borderBottomRightRadius: 20,
                }}>

                <Text
                    style={{
                        color: "white",
                        fontSize: hp(2),
                        fontWeight: "bold"
                    }}>

                    { secondWord } 

                </Text>

            </View>

        </TouchableOpacity>
    )
} 