import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";
import { MainLayout } from "../components/MainLayout";
import Swiper from 'react-native-deck-swiper';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";
import Feather from 'react-native-vector-icons/Feather';
import { MyColors } from "../values/Colors";

export const QuizScreen = () => {

    const _renderNavbar = ( ) => {
        return(
            <View
                style={{
                    height: hp(10),
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

            <Swiper
                cards={['DO', 'MORE', 'OF', 'WHAT', 'MAKES', 'YOU', 'HAPPY']}
                onSwiped={(cardIndex) => {console.log(cardIndex)}}
                onSwipedAll={() => {console.log('onSwipedAll')}}
                cardIndex={0}
                stackSize= {3}
                containerStyle={{
                    backgroundColor: MyColors.mainColor,
                    position: "relative",
                    zIndex: 2,
                    width: '30%',
                    height: '40%'
                }}
                renderCard={(card) => {
                    return (
                        <View 
                            style={{
                                height: hp(40),
                                borderRadius: 20,
                                borderWidth: 2,
                                borderColor: "#E8E8E8",
                                justifyContent: "center",
                                backgroundColor: "white"
                            }}>

                            <Text style={styles.text}>{card}</Text>

                        </View>
                    )
                }}>
            </Swiper>

        </MainLayout>
    )
}

const styles = StyleSheet.create({
    card: {
      borderRadius: 4,
      borderWidth: 2,
      borderColor: "#E8E8E8",
      justifyContent: "center",
      backgroundColor: "white"
    },
    text: {
      textAlign: "center",
      fontSize: 50,
      backgroundColor: "transparent"
    }
  });