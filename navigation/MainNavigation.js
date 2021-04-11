import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen,{homeScreenOptions} from '../screens/HomeScreen';
import ProfileScreen,{profileScreenOptions} from '../screens/ProfileScreen';

const MainStack=createStackNavigator();

const MainNavigation = () => {
    return (
        <NavigationContainer>
        <MainStack.Navigator initialRouteName='HomeScreen'>
            <MainStack.Screen name='HomeScreen' component={HomeScreen} options={homeScreenOptions}/>
            <MainStack.Screen name='ProfileScreen' component={ProfileScreen} options={profileScreenOptions}/>
        </MainStack.Navigator>
        </NavigationContainer>
    )
}

export default MainNavigation;

const styles = StyleSheet.create({})
