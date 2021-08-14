import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import ISSLocationScreen from './screens/ISSLocationScreen';
import MeteorScreen from './screens/MeteorScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator() 

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName = "Home" screenOptions = {{headerShown : false}}>
    <Stack.Screen name = "Home" component = {HomeScreen}/>
    <Stack.Screen name = "ISSLocation" component = {ISSLocationScreen}/>
    <Stack.Screen name = "Meteor" component = {MeteorScreen}/>
    </Stack.Navigator>
    </NavigationContainer>
  );
}


