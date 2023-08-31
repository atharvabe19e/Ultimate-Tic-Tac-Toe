import { Image, TouchableOpacity, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import {Dimensions} from 'react-native';
import IndividualXO from './IndividualXO';
import { useStore } from '../components/GlobalVariables';
const windowWidth = Dimensions.get('window').width;


const GameScreen = () => {
  var active_player = useStore(state => state.active_player);
  var setActive_player = useStore(state => state.setActive_player);
 //  const [active_player, setActive_player] = useState('X')
 /*    const [markers, setMarkers] = useState([
      null, null, null,
      null, null, null,
      null, null, null
    ]) */

    var markers=useStore(state => state.markers);
    var setMarkers=useStore(state => state.setMarkers);
    var setWholeMarkers=useStore(state => state.setWholeMarkers);

    // Add marker on clicked position
    const markPosition = (position) => {
      if(!markers[position][0]){
        let temp = [...markers]
        temp[position][0] = active_player
        setWholeMarkers(temp)
        if(active_player === 'X'){  //transfer chances to next player
          setActive_player('O')
        }else{
          setActive_player('X')
        }
      }
    }

    // Clear entire board
    const resetMarkers = () => {
      temp=
    [    [null, null, null, null, null, null, null, null, null],
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
    }

    //Function to calculate winner
    const calculateWinner = (squares) => {
      const lines = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
      ];
      for(let i = 0; i < lines.length; i++){
        const [a,b,c] = lines[i];
        if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]){
          return squares[a];
        }
      }
      return null;
    }
    

    //UseEffect to call each time any player plays 
    useEffect(() => {
      const winner = calculateWinner(markers);
      if(winner === 'X'){
        alert("Player X Won!")
        resetMarkers()
      }else if(winner === 'O'){
        alert("Player O Won!")
        resetMarkers()
      }
    }, [markers])


  return (
    <SafeAreaView style={styles.all}>
        <View style={[styles.playerInfo,{backgroundColor:active_player==='X'?'#007FF4':'#F40075'}]}>
            <Text style={styles.playerTxt}>
                Player X's turn            
            </Text>
        </View>    
        <View style={styles.mainContainer}> 
        
        {/* Top Left Cell */}
        <View style={[styles.cell,styles.cellD,styles.cellR]}>
        {IndividualXO()}
        </View>

        {/* Top Mid Cell */}
        <View style={[styles.cell,styles.cellD,styles.cellR]}>
        <IndividualXO />
        </View>

        {/* Top Right Cell */}
        <View style={[styles.cell,styles.cellD]}>
        <IndividualXO />
        </View>

        {/* Mid Left Cell */}
        <View style={[styles.cell,styles.cellD,styles.cellR]}>
        <IndividualXO />
        </View>

        {/* Mid Mid Cell */}
        <View style={[styles.cell,styles.cellD,styles.cellR]}>
        <IndividualXO />
        </View>

        {/* Mid Right Cell */}
        <View style={[styles.cell,styles.cellD]}>
        <IndividualXO />
        </View>

        {/* Bottom Left Cell */}
        <View style={[styles.cell,styles.cellR]}>
        <IndividualXO />
        </View>

        {/* Bottom Mid Cell */}
        <View style={[styles.cell,styles.cellR]}>
        <IndividualXO />
        </View>

        {/* Bottom Right Cell */}
        <View style={[styles.cell]}>
        <IndividualXO />
        </View>
        </View>

        <TouchableOpacity style={styles.cancleBTN} onPress={resetMarkers}>
          <Image source={require('../assets/img/replay.png')} style={styles.cancelIcon}/>
        </TouchableOpacity>

    </SafeAreaView>
  )
}

export default GameScreen

const styles = StyleSheet.create({all:{
    flex:1,
    backgroundColor:'#fff'
},
playerInfo: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 20,
    paddingVertical: 20,
    marginTop: 30,
    borderRadius:40
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
  cell:{  width: windowWidth / 3.2,
  height: windowWidth / 3.2,
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',}
  ,
  cellR:{borderRightWidth:6},
  cellL:{borderLeftWidth:6},
  cellD:{borderBottomWidth:6},
  cellU:{borderTopWidth:6},

  /* cell_top_left: {
    width: windowWidth / 3.2,
    height: windowWidth / 3.2,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRightWidth: 6,
    borderBottomWidth: 6,
  },
  cell_top_mid: {
    width: windowWidth / 3.2,
    height: windowWidth / 3.2,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 6
  },
  cell_top_right: {
    width: windowWidth / 3.2,
    height: windowWidth / 3.2,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 6,
    borderLeftWidth: 6,
  },
  cell_mid_left: {
    width: windowWidth / 3.2,
    height: windowWidth / 3.2,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRightWidth: 6,
  },
  cell_mid_mid: {
    width: windowWidth / 3.2,
    height: windowWidth / 3.2,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cell_mid_right: {
    width: windowWidth / 3.2,
    height: windowWidth / 3.2,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderLeftWidth: 6,
  },
  cell_bottom_left: {
    width: windowWidth / 3.2,
    height: windowWidth / 3.2,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRightWidth: 6,
    borderTopWidth: 6,
  },
  cell_bottom_mid: {
    width: windowWidth / 3.2,
    height: windowWidth / 3.2,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopWidth: 6,
  },
  cell_bottom_right: {
    width: windowWidth / 3.2,
    height: windowWidth / 3.2,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderLeftWidth: 6,
    borderTopWidth: 6,
  } */
  
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