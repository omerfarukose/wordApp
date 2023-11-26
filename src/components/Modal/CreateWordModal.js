import { View } from "react-native";
import Modal from "react-native-modal";
import { Text } from "react-native-paper";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";
import { MyTextInput } from "../Input/MyTextInput";
import { useState } from "react";
import { MyButton } from "../Button/MyButton";

export const CreateWordModal = ( props ) => {

    let {isVisible, setIsVisible} = props;

    const [wordOne, setWordOne] = useState("");
    const [wordTwo, setWordTwo] = useState("");
    const [sampleUsage, setSampleUsage] = useState("");


    return(
        <Modal
            isVisible={isVisible}
            swipeDirection="down"
            onBackdropPress={() => setIsVisible(false)}
            onSwipeComplete={() => setIsVisible(false)}
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
                            onPress={() => setIsVisible(false)}
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
    )
}