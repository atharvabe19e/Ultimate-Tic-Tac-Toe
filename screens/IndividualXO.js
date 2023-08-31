import { StyleSheet, Text, View ,TouchableOpacity,Image} from 'react-native'
import React, { useEffect, useState } from 'react'
import {Dimensions} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
const windowWidth = Dimensions.get('window').width;
import { useStore } from '../components/GlobalVariables';


const IndividualXO = () => {
    var active_player = useStore(state => state.active_player);
  var setActive_player = useStore(state => state.setActive_player);
    //    const [active_player, setActive_player] = useState('X')
    const [markers, setMarkers] = useState([
        null, null, null,
        null, null, null,
        null, null, null
      ])    
    


    // Add marker on clicked position
    const markPosition = (position) => {
        if(!markers[position]){
          let temp = [...markers]
          temp[position] = active_player
          setMarkers(temp)
          if(active_player === 'X'){  //transfer chances to next player
            setActive_player('O')
          }else{
            setActive_player('X')
          }
        }
      }

  return (
  
<SafeAreaView style={styles.mainContainer}>
   {/* Top Left Cell */}
   <TouchableOpacity style={[styles.cell,styles.cellR,styles.cellD]} onPress={()=>markPosition(0)}>
          
   {markers[0] === 'X' && <Image source={require('../assets/img/cross.png')} style={styles.icon} />}
   {markers[0] === 'O' && <Image source={require('../assets/img/zero.png')} style={styles.icon} />}
   
 </TouchableOpacity>

 {/* Top Mid Cell */}
 <TouchableOpacity style={[styles.cell,styles.cellD]} onPress={()=>markPosition(1)}>
   {markers[1] === 'X' && <Image source={require('../assets/img/cross.png')} style={styles.icon} />}
   {markers[1] === 'O' && <Image source={require('../assets/img/zero.png')} style={styles.icon} />}
 </TouchableOpacity>

 {/* Top Right Cell */}
 <TouchableOpacity style={[styles.cell,styles.cellD,styles.cellL]} onPress={()=>markPosition(2)}>
   {markers[2] === 'X' && <Image source={require('../assets/img/cross.png')} style={styles.icon} />}
   {markers[2] === 'O' && <Image source={require('../assets/img/zero.png')} style={styles.icon} />}
 </TouchableOpacity>

 {/* Mid Left Cell */}
 <TouchableOpacity style={[styles.cell,styles.cellR]} onPress={()=>markPosition(3)}>
   {markers[3] === 'X' && <Image source={require('../assets/img/cross.png')} style={styles.icon} />}
   {markers[3] === 'O' && <Image source={require('../assets/img/zero.png')} style={styles.icon} />}
 </TouchableOpacity>

 {/* Mid Mid Cell */}
 <TouchableOpacity style={styles.cell} onPress={()=>markPosition(4)}>
   {markers[4] === 'X' && <Image source={require('../assets/img/cross.png')} style={styles.icon} />}
   {markers[4] === 'O' && <Image source={require('../assets/img/zero.png')} style={styles.icon} />}
 </TouchableOpacity>

 {/* Mid Right Cell */}
 <TouchableOpacity style={[styles.cell,styles.cellL]} onPress={()=>markPosition(5)}>
   {markers[5] === 'X' && <Image source={require('../assets/img/cross.png')} style={styles.icon} />}
   {markers[5] === 'O' && <Image source={require('../assets/img/zero.png')} style={styles.icon} />}
 </TouchableOpacity>

 {/* Bottom Left Cell */}
 <TouchableOpacity style={[styles.cell,styles.cellR,styles.cellU]} onPress={()=>markPosition(6)}>
   {markers[6] === 'X' && <Image source={require('../assets/img/cross.png')} style={styles.icon} />}
   {markers[6] === 'O' && <Image source={require('../assets/img/zero.png')} style={styles.icon} />}
 </TouchableOpacity>

 {/* Bottom Mid Cell */}
 <TouchableOpacity style={[styles.cell,styles.cellU]} onPress={()=>markPosition(7)}>
   {markers[7] === 'X' && <Image source={require('../assets/img/cross.png')} style={styles.icon} />}
   {markers[7] === 'O' && <Image source={require('../assets/img/zero.png')} style={styles.icon} />}
 </TouchableOpacity>

 {/* Bottom Right Cell */}
 <TouchableOpacity style={[styles.cell,styles.cellL,styles.cellU]} onPress={()=>markPosition(8)}>
   {markers[8] === 'X' && <Image source={require('../assets/img/cross.png')} style={styles.icon} />}
   {markers[8] === 'O' && <Image source={require('../assets/img/zero.png')} style={styles.icon} />}
 </TouchableOpacity>

 </SafeAreaView>

  
  )
}

export default IndividualXO

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  cell:{  width: windowWidth / (11),
  height: windowWidth / (11),
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',}
  ,
  cellR:{borderRightWidth:2},
  cellL:{borderLeftWidth:2},
  cellD:{borderBottomWidth:2},
  cellU:{borderTopWidth:2},

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
    height: 30,
    width: 30
  },
})