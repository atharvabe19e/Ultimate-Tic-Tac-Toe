import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Modal, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { Dimensions } from 'react-native';
const windowWidth = Dimensions.get('window').width;



const RulesModal = ({ visibles1, onClose }) => {
  return (
    <>
      <Modal
        visible={visibles1}
        animationType="slide"
        transparent={true}
        onRequestClose={() => {
          onClose
        }}

      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>

           <Text style={[styles.infoFont,{textAlign:'center',fontWeight:'600',fontSize:18}]}>The Game is simple!!!

            </Text>
            <Text style={styles.infoFont}>
              {"\n"}Like in regular tic-tac-toe, the two players (X and O) take turns, starting with X.
              {"\n"}     The game starts with X playing wherever they want in any of the 81 empty spots.
              {"\n"}     Next the opponent plays, however they are forced to play in the small board indicated by the relative location of the
              previous move.
              {"\n"}     For example, if X plays in the top right square of a small (3 × 3) board, then O has to play in the small board
              located at the top right of the larger board. Playing any of the available spots decides in which small board the next
              player plays.

              {"\n"}     If a move is played so that it is to win a small board by the rules of normal tic-tac-toe, then the entire small board
              is marked as won by the player in the larger board. 
              {"\n"}     Once a small board is won by a player or it is filled completely, no more moves may be played in that board. 
              {"\n"}     If a player is sent to such a board, then that player may play in any other board. 
              {"\n"}     Game play ends when either a player wins the larger board or there are no legal moves remaining, in which case the game is a draw.
            </Text>
            <TouchableOpacity style={styles.closeBtn} onPress={onClose}>
              <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 20 }}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </>
  )
}



const StartScreen = (props) => {
  const [visibles, changeVisible] = useState(false)

  return (
    <SafeAreaView style={styles.all}>
      <View style={styles.mainTextBox}>
        <Text style={styles.mainText}>UltimateXO</Text>
      </View>
      <View style={[styles.startBox]}>
        <TouchableOpacity style={styles.startBoxButton} onPress={() => props.navigation.navigate("Game")}>
          <Text style={styles.startText}>
            Start!!!
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.startBoxButton} onPress={() => { changeVisible(visibles => !visibles) }}>
          <Text style={styles.startText}>
            How To Play
          </Text>
        </TouchableOpacity>
        <RulesModal visibles1={visibles} onClose={() => { changeVisible(visibles => !visibles) }} />

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
    height: '60%'
  }
  , mainText: {
    textAlignVertical: 'center',
    fontSize: 35,
    color: '#283B51',
    fontWeight: 'bold',
    
  },
  startBox: {
    justifyContent: 'center',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    height: 'auto',

  },
  startBoxButton: {
    padding: 5,
    paddingHorizontal: 15,
    backgroundColor: 'lightblue',
    borderRadius: 20

  },
  startText: {
    textAlignVertical: 'center',
    fontSize: 35,
    color: 'black',
    fontWeight: '400'
  },
  modalView: {
    margin: 20,
    backgroundColor: '#DFF1FF',
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
    borderWidth: 5,
    paddingTop: 35,
    paddingBottom: 10,
    justifyContent: 'center',

  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding:10,
    margin:5

  },
  closeBtn: {
    backgroundColor: '#283B51',
    padding: 10,
    marginTop: 15,
    borderRadius: 15,
    marginBottom: 15,
  },
  
  infoFont:{fontSize:14, color:'black',paddingBottom:2,fontWeight:'400'}
})