import { MainLayout } from "../../components/MainLayout"
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen"
import { Text, TouchableOpacity, View } from "react-native"
import Feather from 'react-native-vector-icons/Feather';
import { ContenCard } from "../../components/ContentCard";
import { MyColors } from "../../values/Colors";


 export const QuizResultScreen = ( props ) => {

    let { quizResult } = props;

    console.log("quizResult : ", quizResult);

    const _renderNavbar = ( ) => {
        return(
            <View
                style={{
                    height: hp(5),
                    flexDirection: "row",
                    justifyContent: "flex-end",
                    paddingTop: hp(1),
                    paddingHorizontal: wp(5)
                }}>

                <TouchableOpacity>

                    <Feather name="menu" size={30} color="white"/>

                </TouchableOpacity>

            </View>
        )
    }

    return(
        <MainLayout>

            { _renderNavbar() }

            <View
                style={{
                    width: wp(100),
                    alignItems: "center",
                }}>

                <Text
                    style={{
                        color: MyColors.white,
                        fontSize: hp(3),
                        fontWeight: "bold"
                    }}>
                    Quiz Result
                </Text>

            </View>

            <ContenCard
                style={{
                    paddingTop: hp(3),
                    height: hp(83)
                }}>


            </ContenCard>

        </MainLayout>
    )
 }