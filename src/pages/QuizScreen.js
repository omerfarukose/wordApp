import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { MainLayout } from "../components/MainLayout";
import Swiper from 'react-native-deck-swiper';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";
import Feather from 'react-native-vector-icons/Feather';
import { MyColors } from "../values/Colors";
import { SampleWordList, WordListByLanguage } from "../values/SampleData";
import { useState } from "react";

export const QuizScreen = () => {

    let wordList = WordListByLanguage.en;

    const [rightList, setRightList] = useState([]);
    const [leftList, setLeftList] = useState([]);

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

            <View
                style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    paddingHorizontal: hp(3)
                }}>

                <View
                    style={{
                        flexDirection: "row",
                        gap: hp(1)
                    }}>

                    <Feather name="chevrons-left" size={30} color="white"/>
                    <Feather name="frown" size={30} color="white"/>

                </View>

                <View
                    style={{
                        flexDirection: "row",
                        gap: hp(1)
                    }}>

                    <Feather name="smile" size={30} color="white"/>
                    <Feather name="chevrons-right" size={30} color="white"/>

                </View>

            </View>

            <Swiper
                cards={wordList}
                onSwipedAll={() => {
                    console.log("right list : ", rightList);
                    console.log("left list : ", leftList);
                }}
                cardIndex={0}
                stackSize= {3}
                stackSeparation={25}
                containerStyle={{
                    position: "relative",
                    zIndex: 2,
                    width: '100%',
                    height: '70%',
                    justifyContent: "flex-end",
                    backgroundColor: "transparent"
                }}
                onSwipedRight={(index) => {
                    console.log("right log: ", wordList[index].word)
                    setRightList([...rightList, index]);
                }}
                onSwipedLeft={(index) => {
                    console.log("leftr log: ", wordList[index].word)
                    setLeftList([...leftList, index]);
                }}
                verticalSwipe={false}
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

                            <Text style={styles.text}>{card.word}</Text>

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