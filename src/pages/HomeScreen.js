import { Text, View } from "react-native"
import { MainLayout } from "../components/MainLayout";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { MyColors } from "../values/Colors";
import { WordPairCard } from "../components/card/WordPairCard";

export const HomeScreen = () => {

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

                <Feather name="menu" size={30} color="white"/>

            </View>

            <View 
                style={{
                    flex: 1,
                    backgroundColor: "white",
                    height: hp(70),
                    width: wp(100),
                    borderTopLeftRadius: 30,
                    borderTopRightRadius: 30,
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
                
            </View>

        </MainLayout>
    )
}