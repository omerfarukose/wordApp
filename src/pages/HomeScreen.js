import { Text, TouchableOpacity, View } from "react-native"
import { MainLayout } from "../components/MainLayout";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { MyColors } from "../values/Colors";
import { WordPairCard } from "../components/card/WordPairCard";
import { useState } from "react";
import Modal from "react-native-modal";
import { MyTextInput } from "../components/Input/MyTextInput";
import { MyButton } from "../components/Button/MyButton";

export const HomeScreen = () => {

    const [isAddModalVisible, setIsAddModalVisible] = useState(false);
    const [wordOne, setWordOne] = useState("");
    const [wordTwo, setWordTwo] = useState("");
    const [sampleUsage, setSampleUsage] = useState("");


    return(
        <MainLayout>

            {/* navbar */}   
            <View
                style={{
                    height: hp(10),
                    flexDirection: "row",
                    justifyContent: "space-between",
                    paddingTop: hp(1),
                    paddingHorizontal: wp(5)
                }}>

                <FontAwesome5 name="flag" size={30} color="white"/>


                <TouchableOpacity>

                    <Feather name="menu" size={30} color="white"/>

                </TouchableOpacity>

            </View>

            {/* content */}
            <View 
                style={{
                    flex: 1,
                    backgroundColor: "white",
                    height: hp(70),
                    width: wp(100),
                    borderTopLeftRadius: 30,
                    borderTopRightRadius: 30,
                    paddingTop: hp(3),
                    marginBottom: -hp(10)
                }}>

                <WordPairCard
                    firstWord="araba"
                    secondWord="car"/>


                <WordPairCard
                    firstWord="ev"
                    secondWord="home"/>


                <WordPairCard
                    firstWord="telefon"
                    secondWord="phone"/>

                
                <TouchableOpacity
                    onPress={() => {
                        setIsAddModalVisible(true)
                    }}
                    style={{
                        backgroundColor: MyColors.mainColor,
                        borderRadius: 100,
                        height: hp(6),
                        width: hp(6),
                        alignItems: "center",
                        justifyContent: "center",
                        position: "absolute",
                        bottom: hp(15),
                        right: hp(6)
                    }}>

                    <Feather name="plus" size={30} color="white"/>

                </TouchableOpacity>
                
            </View>


            <Modal
                isVisible={isAddModalVisible}
                swipeDirection="down"
                onBackdropPress={() => setIsAddModalVisible(false)}
                onSwipeComplete={() => setIsAddModalVisible(false)}
                propagateSwipe
                swipeThreshold={100}
                backdropOpacity={0.2}
                style={{
                    justifyContent: 'flex-end',
                    margin: 0,
                }}>

                <View
                    style={{
                        flex: 1,
                        alignSelf: "center",
                        justifyContent: "center",
                    }}>

                    <View
                        style={{
                            backgroundColor: "white",
                            height: hp(60),
                            width: wp(93),
                            borderRadius: 20,
                            alignItems: "center",
                            padding: hp(2)
                        }}>

                        <Text
                            style={{
                                fontWeight: "bold",
                                fontSize: hp(2)
                            }}>

                            Create New Word

                        </Text>

                        {/* word one */}
                        <MyTextInput
                            placeholder={"Word one"}
                            value={wordOne}
                            setValue={setWordOne}
                            inputStyle={{
                                width: wp(80),
                                borderRadius: 10,
                                borderWidth: 1,
                                borderColor: "#eceff1",
                                marginVertical: hp(2)
                            }}/>

                        {/* word two */}
                        <MyTextInput
                            placeholder={"Word two"}
                            value={wordTwo}
                            setValue={setWordTwo}
                            inputStyle={{
                                width: wp(80),
                                borderRadius: 10,
                                borderWidth: 1,
                                borderColor: "#eceff1",
                                marginBottom: hp(2)
                            }}/>

                        {/* sample usage */}
                        <MyTextInput
                            placeholder={"Sample usage"}
                            value={sampleUsage}
                            setValue={setSampleUsage}
                            multiline
                            inputStyle={{
                                width: wp(80),
                                height: hp(20),
                                borderRadius: 10,
                                borderWidth: 1,
                                borderColor: "#eceff1",
                                justifyContent: "flex-start",
                                padding: hp(1)
                            }}/>

                        <View
                            style={{
                                width: "100%",
                                flexDirection: "row",
                                justifyContent: "space-evenly",
                                height: hp(15),
                                alignItems: "center"
                            }}>

                            <MyButton
                                title={"Create"}
                                color={"#2ba84a"}
                                onPress={() => {}}
                                textStyle={{
                                    fontSize: hp(1.7),
                                    fontWeight: "700",
                                    color: "white",
                                }}
                                style={{
                                    width: wp(30),
                                    alignItems: "center",
                                    borderRadius: 100,
                                }}/>

                            <MyButton
                                title={"İptal"}
                                color={"#2C2C30"}
                                onPress={() => setIsAddModalVisible(false)}
                                textStyle={{
                                    fontSize: hp(1.7),
                                    fontWeight: "700",
                                    color: "white",
                                }}
                                style={{
                                    width: wp(30),
                                    alignItems: "center",
                                    borderRadius: 100,
                                }}/>


                        </View>

                    </View>

                </View>

            </Modal>

        </MainLayout>
    )
}