import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import {NavigationContainer} from '@react-navigation/native'
import GameScreen from './screens/GameScreen'
import StartScreen from './screens/StartScreen'

const Stack=createNativeStackNavigator();

const App = () => {
  return (
    <>
    <SafeAreaView style={styles.all}>
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}} >
        <Stack.Screen name='Game' component={GameScreen}  />
      <Stack.Screen name='Home' component={StartScreen}  />
      </Stack.Navigator>
    </NavigationContainer>
    </SafeAreaView>
    </>
  )

}

export default App

const styles = StyleSheet.create({all:{
  flex:1
}})