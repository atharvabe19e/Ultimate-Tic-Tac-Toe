import { StyleSheet, Text, View ,SafeAreaView} from 'react-native'
import React from 'react'

const StartScreen = () => {
  return (
   <SafeAreaView style={styles.all}>
    <View style={styles.mainTextBox}>
      <Text style={styles.mainText}>UltimateXO</Text>
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
      mainTextBox:{flexDirection:'row',
      justifyContent:'center',
      flex:1
      }
      ,mainText:{
        textAlignVertical:'center',
fontSize:35,
color:'black',
fontWeight:'bold',

      }
})