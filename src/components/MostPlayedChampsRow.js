import React from 'react';
import { StyleSheet, Text, View ,Image} from 'react-native';
import ProgressCircle from 'react-native-progress-circle';

const MostPlayedChampsRow = ({champs}) => {
    return (
        <View style={{marginLeft:25}}>
        <ProgressCircle
        percent={champs.win/(champs.lose+champs.win)*100}
        radius={50}
        borderWidth={4}
        color="green"
        shadowColor="#999"
        >
        <Image source={{uri:champs.imageLink}} style={styles.imageInCircle}/>
        </ProgressCircle>
        <Text style={{color:'white',textAlign:'center'}}>{champs.kill}/{champs.death}/{champs.assist}</Text>
        <Text style={{color:'grey',textAlign:'center'}}>KDA</Text>
        </View>
    )
}

export default MostPlayedChampsRow

const styles = StyleSheet.create({
    imageInCircle:{
        width:'100%',
        height:'100%'
    }
})
