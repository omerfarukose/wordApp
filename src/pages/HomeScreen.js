import { Text, TouchableOpacity, View } from "react-native"
import { MainLayout } from "../components/MainLayout";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { MyColors } from "../values/Colors";
import { WordPairCard } from "../components/card/WordPairCard";
import { useState } from "react";
import Modal from "react-native-modal";
import { MyTextInput } from "../components/Input/MyTextInput";
import { MyButton } from "../components/Button/MyButton";
import { ContenCard } from "../components/ContentCard";
import { CreateWordModal } from "../components/Modal/CreateWordModal";

export const HomeScreen = () => {

    const [isAddModalVisible, setIsAddModalVisible] = useState(false);
    const [searchValue, setSearchValue] = useState("");
    const [selectedLanguage, setSelectedLanguage] = useState("English");
    const [selecetedSortType, setSelectedSortType] = useState("date-dec")


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

                <View
                    style={{
                        width: wp(100),
                        height: hp(5),
                        position: "absolute",
                        alignItems: "center",
                        justifyContent: "center"
                    }}>

                    <TouchableOpacity
                        style={{
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "center"
                        }}>

                        <Text
                            style={{
                                fontSize: hp(2.3),
                                fontWeight: "bold",
                                color: MyColors.white,
                                marginRight: hp(1)
                            }}>

                            { selectedLanguage }

                        </Text>

                        <FontAwesome5 name="exchange-alt" size={hp(2.5)} color={MyColors.white}/>

                    </TouchableOpacity>

                </View>

                <TouchableOpacity>

                    <Feather name="menu" size={30} color="white"/>

                </TouchableOpacity>

            </View>
        )
    }


    return(
        <MainLayout>

            {/* navbar */}   
            { _renderNavbar() }

            <ContenCard
                style={{
                    paddingTop: hp(3),
                    height: hp(85)
                }}>

                <View
                    style={{
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",
                        marginBottom: hp(2),
                        width: wp(90),
                    }}>

                    <View
                        style={{
                            width: wp(80),
                            borderRadius: 10,
                            borderWidth: 1,
                            borderColor: "#eceff1",
                            flexDirection: "row",
                            justifyContent: "space-between",
                            alignItems: "center",
                            paddingRight: hp(2)
                        }}>

                        <MyTextInput
                            placeholder={"Search"}
                            value={searchValue}
                            setValue={setSearchValue}
                            inputStyle={{
                                width: wp(60),
                            }}/>

                        {/* searh button */}
                        <TouchableOpacity
                            onPress={() => {}}>

                            <Ionicons name="search" size={30} color={MyColors.inputPlaceholderColor}/>

                        </TouchableOpacity>
                        
                    </View>

                    <TouchableOpacity
                        style={{
                            width: wp(10),
                            alignItems: "center",
                            justifyContent: "center"
                        }}>

                        <FontAwesome5 name="sort-alpha-down" size={hp(3)} color={MyColors.inputPlaceholderColor}/>

                    </TouchableOpacity>

                </View>



        

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
                        height: hp(7),
                        width: hp(7),
                        alignItems: "center",
                        justifyContent: "center",
                        position: "absolute",
                        bottom: hp(8),
                        right: hp(4.5)
                    }}>

                    <Feather name="plus" size={30} color="white"/>

                </TouchableOpacity>

            </ContenCard> 

            <CreateWordModal
                isVisible={isAddModalVisible}
                setIsVisible={setIsAddModalVisible}/>

        </MainLayout>
    )
}