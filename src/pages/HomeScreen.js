import { Button, Text, TouchableOpacity, View } from "react-native"
import { MainLayout } from "../components/MainLayout";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { MyColors } from "../values/Colors";
import { WordPairCard } from "../components/card/WordPairCard";
import { useContext, useState } from "react";
import { MyTextInput } from "../components/Input/MyTextInput";
import { ContenCard } from "../components/ContentCard";
import { CreateWordModal } from "../components/Modal/CreateWordModal";
import { LanguageList, SortTpyes } from "../values/SampleData";
import { SelectLanguageModal } from "../components/Modal/SelectLanguageModal";
import { CommonContext } from "../contexts/CommonContext";

export const HomeScreen = () => {

    const {selectedLanguage} = useContext(CommonContext);

    const [isAddModalVisible, setIsAddModalVisible] = useState(false);
    const [isLanguageModalVisible, setIsLanguageodalVisible] = useState(false);

    const [searchValue, setSearchValue] = useState("");
    const [selecetedSortTypeIndex, setSelectedSortTypeIndex] = useState(0);

    const _renderSortType = ( ) => {
        return(
            <TouchableOpacity
                onPress={() => {
                    setSelectedSortTypeIndex(selecetedSortTypeIndex < 3 ? selecetedSortTypeIndex + 1 : 0)    
                }}
                style={{
                    width: wp(10),
                    alignItems: "center",
                    justifyContent: "center"
                }}>

                <FontAwesome5 name={SortTpyes[selecetedSortTypeIndex]} size={hp(3)} color={MyColors.border}/>

            </TouchableOpacity>
        )
    } 

    const _renderNavbar = ( ) => {
        return(
            <View>

                {/* change language */}
                <View
                    style={{
                        width: wp(100),
                        alignItems: "center",
                        marginVertical: hp(2),
                    }}>

                    <TouchableOpacity
                        onPress={() => setIsLanguageodalVisible(true)}
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

                {/* search bar */}
                <View
                    style={{
                        flexDirection: "row",
                        alignItems: "center",
                        marginLeft: wp(15),
                        marginBottom: hp(2),
                        width: wp(100),
                    }}>

                    <View
                        style={{
                            width: wp(70),
                            borderRadius: 100,
                            borderWidth: 1,
                            borderColor: "#eceff1",
                            flexDirection: "row",
                            justifyContent: "space-between",
                            alignItems: "center",
                            paddingRight: hp(2),
                            backgroundColor: MyColors.white
                        }}>

                        <MyTextInput
                            placeholder={"Search"}
                            value={searchValue}
                            setValue={setSearchValue}
                            inputStyle={{
                                borderTopLeftRadius: 100,
                                borderBottomLeftRadius: 100,
                                backgroundColor: "transparent",
                                width: wp(60),
                                height: hp(4),
                                paddingLeft: 20
                            }}/>

                        {/* searh button */}
                        <TouchableOpacity
                            style={{
                                
                            }}
                            onPress={() => {}}>

                            <Ionicons name="search" size={hp(2.3)} color={MyColors.inputPlaceholderColor}/>

                        </TouchableOpacity>
                        
                    </View>

                    {/* { _renderSortType() } */}

                </View>

            </View>
        )
    }

    const _renderContent = ( ) => {
        return(
            <ContenCard
                style={{
                    paddingTop: hp(3),
                    height: hp(75),
                    backgroundColor: MyColors.border
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
        )
    }  

    return(
        <MainLayout>

            {/* navbar */}   
            { _renderNavbar() }

            { _renderContent() }

            <CreateWordModal
                isVisible={isAddModalVisible}
                setIsVisible={setIsAddModalVisible}/>

            <SelectLanguageModal
                isVisible={isLanguageModalVisible}
                setIsVisible={setIsLanguageodalVisible}/>

        </MainLayout>
    )
}