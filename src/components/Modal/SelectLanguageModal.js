import { FlatList, TouchableOpacity, View } from "react-native";
import Modal from "react-native-modal";
import { Text } from "react-native-paper";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";
import { LanguageList } from "../../values/SampleData";
import Feather from 'react-native-vector-icons/Feather';
import { MyColors } from "../../values/Colors";
import { useContext } from "react";
import { CommonContext } from "../../contexts/CommonContext";

export const SelectLanguageModal = ( props ) => {

    const {setSelectedLanguage} = useContext(CommonContext);

    let {isVisible, setIsVisible} = props;

    const _renderLanguageItem = (language, index) => {

        return(
            <TouchableOpacity
                onPress={() => {
                    setSelectedLanguage(index);
                    setIsVisible(false);
                }}
                style={{
                    marginBottom: hp(1),
                    alignItems: "center",
                    flexDirection: "row",
                }}>

                <Text
                    style={{
                        fontSize: hp(2.5),
                        fontWeight: "bold",
                        color: MyColors.mainColor
                    }}>

                    { language }

                </Text>


                {
                    index === 0 &&

                    <Feather name="check" size={hp(3)} color={MyColors.mainColor}/>
                }

            </TouchableOpacity>
        )
    }

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
                        height: hp(50),
                        width: wp(93),
                        borderRadius: 20,
                        alignItems: "center",
                        padding: hp(2)
                    }}>

                    <FlatList
                        overScrollMode={"never"}
                        data={LanguageList}
                        showsVerticalScrollIndicator={false}
                        showsHorizontalScrollIndicator={false}
                        keyExtractor={(item, index) => item}
                        renderItem={({item, index}) => _renderLanguageItem(item, index)}/>
                    
                    <TouchableOpacity
                        style={{
                            flexDirection: "row",
                            backgroundColor: MyColors.mainColor,
                            borderRadius: 20,
                            padding: hp(1),
                            paddingHorizontal: hp(1.5)
                        }}>

                        <Feather name="plus" size={hp(2.5)} color={MyColors.white}/>

                        <Text
                            style={{
                                fontSize: hp(2),
                                fontWeight: "bold",
                                marginLeft: hp(0.7 ),
                                color: MyColors.white
                            }}>
                            Add Language
                        </Text>

                    </TouchableOpacity>

                </View>

            </View>

        </Modal>
    )
}