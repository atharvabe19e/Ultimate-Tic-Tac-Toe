import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Modal } from 'react-native'
import React, { useState } from 'react'
import { Dimensions } from 'react-native';
const windowWidth = Dimensions.get('window').width;



const RulesModal=(visibles)=>{
  return(
    <>
    <Modal
      visible={visibles}
      animationType="slide"
      transparent={false}
      onRequestClose={() => {
        console.log("Modal has been closed");
      }}
      >
      <View style={styles.modalView}>
        <Text>Hello, this is working</Text>
      </View>
    </Modal>
  </>
  )
}



const StartScreen = (props) => {
  const [visibles,changeVisivle]=useState(false)

  const switchVisible=()=>{
    if visibles==t
  }
  


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
        <TouchableOpacity style={styles.startBoxButton} onPress={()=>{RulesModal()}}>
          <Text style={styles.startText}>
            How To Play
          </Text>
        </TouchableOpacity>
      </View>
      <RulesModal visibles={visibles}/>
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
    height: '60%'
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
  },
  modalView: {
    margin: 20,
    backgroundColor: '#DFF1FF',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    borderWidth:10,
    marginBottom:5,
    paddingTop:15,
    paddingBottom:10,
    flex:1,
    justifyContent:'center',
    
  },
})