import { Text, TouchableOpacity, View } from "react-native"
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen"
import { MyColors } from "../../values/Colors"


export const WordPairCard = (props) => {

    let { firstWord, secondWord} = props; 

    return(
        <TouchableOpacity
            style={{
                width: wp(90),
                height: hp(5),
                flexDirection: "row",
                alignSelf: "center",
                borderRadius: 100,
                marginBottom: hp(1),
                backgroundColor: MyColors.white,
                borderColor: MyColors.mainColor,
                borderWidth: 1,
            }}>

            <View
                style={{
                    flex: 1,
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: MyColors.mainColor,
                    borderTopLeftRadius: 100,
                    borderBottomLeftRadius: 100,
                }}>

                <Text
                    style={{
                        color: MyColors.white,
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
                    backgroundColor: MyColors.white,
                    borderTopRightRadius: 100,
                    borderBottomRightRadius: 100,
                }}>

                <Text
                    style={{
                        color: "white",
                        fontSize: hp(2),
                        fontWeight: "bold",
                        color: MyColors.mainColor
                    }}>

                    { secondWord } 

                </Text>

            </View>

        </TouchableOpacity>
    )
} 