import { Text, View } from "react-native"
import Icon from 'react-native-vector-icons/Ionicons';

export const HomeScreen = () => {

    return(
        <View 
            style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center"
            }}>

            <Icon name="home" size={30} color="#4F8EF7" />

        </View>
    )
}