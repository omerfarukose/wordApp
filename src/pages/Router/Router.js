import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

// screens
import { HomeScreen } from '../HomeScreen';
import { navigationRef } from './RootNavigation';
import { QuizScreen } from '../Quiz/QuizScreen';
import { QuizResultScreen } from '../Quiz/QuizResultScreen';

export const Router = () => {

    const Stack = createNativeStackNavigator();
    const Drawer = createDrawerNavigator();

    const HomeStack = () => {
        return (
            <Stack.Navigator>
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
            </Stack.Navigator>
        );
    };

    return(
        <NavigationContainer ref={navigationRef}>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="HomeScreen" component={HomeScreen} />
                <Stack.Screen name="QuizResultScreen" component={QuizResultScreen} />
                <Stack.Screen name="QuizScreen" component={QuizScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )

    // return (
    //     <NavigationContainer>
    //       <Drawer.Navigator>
    //         <Drawer.Screen name="Article" component={HomeScreen} />
    //       </Drawer.Navigator>
    //     </NavigationContainer>
    //   );
} 