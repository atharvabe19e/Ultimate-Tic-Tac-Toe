import { Image, TouchableOpacity, SafeAreaView, StyleSheet, Text, View, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Dimensions } from 'react-native';
import IndividualXO from './IndividualXO';
import { useStore } from '../components/GlobalVariables';
const windowWidth = Dimensions.get('window').width;


const GameScreen = () => {
  var active_player = useStore(state => state.active_player);
  var setActive_player = useStore(state => state.setActive_player);
  var markers = useStore(state => state.markers);
  var setWholeMarkers = useStore(state => state.setWholeMarkers);
  var boxStatus = useStore(state => state.boxStatus);
  const [gameStatus, setGameStatus] = useState(false)
  var setWholeBoxStatus = useStore(state => state.setWholeBoxStatus);
  var super_reset_Active_Block = useStore(state => state.super_reset_Active_Block);
  var active_block = useStore(state => state.active_block);

  // Clear entire board
  const resetMarkers = () => {
    temp =
      [[null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null],]

    setWholeMarkers(temp)
    setActive_player('X')
    temp = [null, null, null, null, null, null, null, null, null]
    setWholeBoxStatus(temp)
    setGameStatus(false)
    super_reset_Active_Block()
  }

  //Function to calculate winner
  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c] && !gameStatus) {
        setGameStatus(true)
        return squares[a];
      }
    }
    return null;
  }


  //UseEffect to call each time any player plays 
  useEffect(() => {
    console.log("I am called otoooo")
    const winner = calculateWinner(boxStatus);
    if (winner === 'XWon') {
      Alert.alert('GAME OVER', 'Player X Won', [
        {
          text: 'New Game',
          onPress: () => resetMarkers(),
          style: 'cancel',
        }])
    } else if (winner === 'OWon') {
      Alert.alert('GAME OVER', 'Player O Won the Game', [
        {
          text: 'New Game',
          onPress: () => resetMarkers(),
          style: 'cancel',
        }])
    }
  }, [markers, boxStatus])

  return (
    <SafeAreaView style={styles.all}>
      <View style={[styles.playerInfo, { backgroundColor: active_player === 'X' ? '#007FF4' : '#F40075' }]}>
        <Text style={styles.playerTxt}>
          Player {active_player}'s turn
        </Text>
      </View>
      <View style={styles.mainContainer}>

        {/* Top Left Cell */}
        {
          <View style={[styles.cell, styles.cellD, styles.cellR]}>
            {IndividualXO(0, active_block)}
          </View>
        }

        {/* Top Mid Cell */}
        <View style={[styles.cell, styles.cellD, styles.cellR]}>
          {IndividualXO(1, active_block)}
        </View>

        {/* Top Right Cell */}
        <View style={[styles.cell, styles.cellD]}>
          {IndividualXO(2, active_block)}
        </View>

        {/* Mid Left Cell */}
        <View style={[styles.cell, styles.cellD, styles.cellR]}>
          {IndividualXO(3, active_block)}
        </View>

        {/* Mid Mid Cell */}
        <View style={[styles.cell, styles.cellD, styles.cellR]}>
          {IndividualXO(4, active_block)}
        </View>

        {/* Mid Right Cell */}
        <View style={[styles.cell, styles.cellD]}>
          {IndividualXO(5, active_block)}
        </View>

        {/* Bottom Left Cell */}
        <View style={[styles.cell, styles.cellR, styles.cellD, { borderBottomColor: '#fff' }]}>
          {IndividualXO(6, active_block)}
        </View>

        {/* Bottom Mid Cell */}
        <View style={[styles.cell, styles.cellR, styles.cellD, { borderBottomColor: '#fff' }]}>
          {IndividualXO(7, active_block)}
        </View>

        {/* Bottom Right Cell */}
        <View style={[styles.cell, styles.cellD, { borderBottomColor: '#fff' }]}>
          {IndividualXO(8, active_block)}
        </View>
      </View>

      <TouchableOpacity style={styles.cancleBTN} onPress={resetMarkers}>
        <Image source={require('../assets/img/replay.png')} style={styles.cancelIcon} />
      </TouchableOpacity>

    </SafeAreaView>
  )
}

export default GameScreen

const styles = StyleSheet.create({
  all: {
    flex: 1,
    backgroundColor: '#fff'
  },
  playerInfo: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 20,
    paddingVertical: 20,
    marginTop: 30,
    borderRadius: 40
  },
  playerTxt: {
    fontSize: 20,
    fontWeight: '700',
    letterSpacing: 1.2,
    color: '#fff'
  },
  mainContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
    marginTop: 60
  },
  cell: {
    width: windowWidth / 3.2,
    height: windowWidth / 3.2,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  }
  ,
  cellR: { borderRightWidth: 6 },
  cellD: { borderBottomWidth: 6 },
  icon: {
    height: 62,
    width: 62
  },
  cancleBTN: {
    position: 'absolute',
    bottom: 20,
    right: 20
  },
  cancelIcon: {
    height: 80,
    width: 80
  }
})