import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import { Dimensions } from 'react-native';
const windowWidth = Dimensions.get('window').width;

const StartScreen = (props) => {
  return (
    <SafeAreaView style={styles.all}>
      <View style={styles.mainTextBox}>
        <Text style={styles.mainText}>UltimateXO</Text>
      </View>
      <View style={[styles.startBox]}>
        <TouchableOpacity style={styles.startBoxButton} onPress={()=> props.navigation.navigate("Game")}>
          <Text style={styles.startText}>
            Start!!!
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.startBoxButton}>
          <Text style={styles.startText}>
            Rules
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default StartScreen

const styles = StyleSheet.create({
  all: {
    flex: 1,
    backgroundColor: '#fff'
  },
  mainTextBox: {
    flexDirection: 'row',
    justifyContent: 'center',
    height: '50%'
  }
  , mainText: {
    textAlignVertical: 'center',
    fontSize: 35,
    color: 'black',
    fontWeight: 'bold',
  },
  startBox: {
    justifyContent: 'center',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    height: 'auto',

  },
  startBoxButton:{
    padding:5,
    paddingHorizontal:15,
    backgroundColor: 'lightblue',
    borderRadius:20
  
  },
  startText: {
    textAlignVertical: 'center',
    fontSize: 35,
    color: 'black',
    fontWeight:'400'
  }
})