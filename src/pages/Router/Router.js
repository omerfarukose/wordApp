import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from 'react-native-vector-icons/FontAwesome5';

// screens
import { HomeScreen } from '../HomeScreen';
import { navigationRef } from './RootNavigation';
import { QuizScreen } from '../Quiz/QuizScreen';
import { QuizResultScreen } from '../Quiz/QuizResultScreen';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { MyColors } from '../../values/Colors';
import { QuizDetailScreen } from '../Quiz/QuizDetailScreen';
import { ProfileScreen } from '../ProfileScreen';
import { SettingsScreen } from '../SettingsScreen';

export const Router = () => {

    const Stack = createNativeStackNavigator();
    const Drawer = createDrawerNavigator();
    const Tab = createBottomTabNavigator();

    const getTabBarIcon = ( routeName ) => {
        let iconName;

        switch (routeName) {
            case 'HomeScreen':
                iconName = 'home';
                break;
            case 'QuizStack':
                iconName = 'bolt';
                break;
            case 'ProfileScreen':
                iconName = 'user';
                break;
            case 'SettingsScreen':
                iconName = 'cog';
                break;
            default:
                iconName: "greater-than-equal";
                break;
        }

        return iconName;
    }

    function QuizStack(){
        return(
            <Stack.Navigator
                screenOptions={{ headerShown: false }}>

                <Stack.Screen name={"QuizDetailScreen"} component={QuizDetailScreen}/>

                <Stack.Screen name={"QuizScreen"} component={QuizScreen}/>

                <Stack.Screen name={"QuizResultScreen"} component={QuizResultScreen}/>

            </Stack.Navigator>
        )
    }

    return(
        <NavigationContainer ref={navigationRef}>

            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ color, size }) => <Icon name={getTabBarIcon(route.name)} size={size} color={color}/>,
                    headerShown: false,
                    tabBarShowLabel: false,
                    tabBarActiveTintColor: MyColors.activeTab,
                    tabBarInactiveTintColor: 'white',
                    tabBarStyle:{
                        backgroundColor: MyColors.mainColor,
                        height: Platform.OS === "ios" ? hp(9) : hp(6.3),
                    }
                })}>

                <Tab.Screen name="QuizStack" component={QuizStack}/>
                
                <Tab.Screen name="HomeScreen" component={HomeScreen}/>

                <Tab.Screen name="ProfileScreen" component={ProfileScreen}/>

                <Tab.Screen name="SettingsScreen" component={SettingsScreen}/>
                
            </Tab.Navigator>

        </NavigationContainer>
    )
} 