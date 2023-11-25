import { SafeAreaView } from "react-native"
import { MyColors } from "../values/Colors"

export const MainLayout = ( props ) => {

    return(
        <SafeAreaView
            style={{
                flex: 1,
                backgroundColor: MyColors.mainColor
            }}>

            { props.children }

        </SafeAreaView>
    )
}  