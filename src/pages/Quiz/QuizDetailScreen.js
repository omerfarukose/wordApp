import { Text, TouchableOpacity, View } from "react-native"
import { MainLayout } from "../../components/MainLayout"
import { widthPercentageToDP as wp, heightPercentageToDP as hp} from "react-native-responsive-screen"
import { useContext, useState } from "react"
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { MyColors } from "../../values/Colors";
import { LanguageList } from "../../values/SampleData";
import { CommonContext } from "../../contexts/CommonContext";
import { SelectLanguageModal } from "../../components/Modal/SelectLanguageModal";
import { navigate } from "../Router/RootNavigation";

export const QuizDetailScreen = ( ) => {

    const [isLanguageModalVisible, setIsLanguageModalVisible] = useState(false);

    const {selectedLanguage} = useContext(CommonContext);

    function handleButtonClick (type) {
        switch (type) {
            case 1:
                navigate("QuizScreen");
                break;
            default:
                break;
        }
    }

    const _renderButton = ( text, type ) => {
        return(
            <TouchableOpacity
                onPress={() => handleButtonClick(type)} 
                style={{
                    backgroundColor: "white",
                    width: wp(70),
                    padding: hp(1),
                    borderRadius: 20,
                    marginBottom: hp(2)
                }}>

                <View>
                    <Text>
                        {text}
                    </Text>
                </View>

            </TouchableOpacity>
        )
    }

    return(
        <MainLayout>

                {/* change language */}
                <View
                    style={{
                        width: wp(100),
                        alignItems: "center",
                        marginVertical: hp(2),
                    }}>

                    <TouchableOpacity
                        onPress={() => setIsLanguageModalVisible(true)}
                        style={{
                            width: hp(15),
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "center",
                            backgroundColor: MyColors.border,
                            height: hp(4),
                            paddingHorizontal: 15,
                            borderRadius: 100,
                            borderColor: MyColors.white,
                            borderWidth: 1,
                        }}>

                        <Text
                            style={{
                                fontSize: hp(1.8),
                                fontWeight: "bold",
                                color: MyColors.mainColor,
                                marginRight: hp(1),
                            }}>

                            { LanguageList[selectedLanguage] }

                        </Text>

                        <FontAwesome5 name="exchange-alt" size={hp(2)} color={MyColors.mainColor}/>

                    </TouchableOpacity>

                </View>

            <View
                style={{
                    flex: 1,
                    paddingTop: hp(10),
                    alignItems: "center",
                    width: wp(100),
                }}>

                { _renderButton("New Quiz", 1)}
                { _renderButton("Quiz History", 2)}

            </View>

            <SelectLanguageModal
                isVisible={isLanguageModalVisible}
                setIsVisible={setIsLanguageModalVisible}/>

        </MainLayout>
    )
}