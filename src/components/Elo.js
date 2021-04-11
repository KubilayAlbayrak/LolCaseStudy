import React from 'react'
import { StyleSheet, Text, View ,Image} from 'react-native';
import gold from '../../assets/image/gold-elo.png';
import plat from '../../assets/image/plat-elo.png';
import ProgressCircle from 'react-native-progress-circle';
import { AntDesign } from '@expo/vector-icons'; 

const Elo = () => {

    const count ={
        wincount:12,
        losecount:8
    };

    return (
        <View style={{flexDirection:'row'}}>
            <View style={{marginLeft:20,alignItems:'center',marginTop:20}}>
            <Image source={plat} style={styles.eloimage}/>
            <Text style={styles.text2}> Solo / Duo </Text>
            </View>
            <View style={{marginLeft:30,alignItems:'center',marginTop:20}}>
            <Image source={gold} style={styles.eloimage}/>
            <Text style={styles.text2}> Flex </Text>
            </View>
            <View style={styles.progressCircle}>
            <ProgressCircle
            percent={(count.wincount)/(count.wincount+count.losecount)*100}
            radius={50}
            borderWidth={12}
            color="green"
            shadowColor="#999"
            bgColor="black"
            
        >
        <Text style={{ fontSize: 18,color:'white'}}>{'60%'}</Text>
        </ProgressCircle>
        <Text style={styles.text2}>{count.wincount}W {count.losecount}L</Text>
        </View>
        <View style={styles.rightContainer}>
        <Text style={{...styles.text2,fontSize:10}}>Most Recent 20 Games</Text>
        <Text style={{fontSize: 18,color:'white',marginTop:10}}>12.8/2.7/24.3</Text>
        <View style={{flexDirection:'row',justifyContent:'space-around',marginTop:20}}>
        <AntDesign name="caretleft" size={24} color="white" />
        <AntDesign name="caretright" size={24} color="white" />
        <AntDesign name="caretdown" size={24} color="white" />
        </View>
        <Text style={{fontSize:14,color:'grey',textAlign:'center',marginTop:10}}>KDA</Text>
        </View>
        </View>
    )
}


const styles = StyleSheet.create({
    eloimage:{
        width:60,
        height:60
    },
    text2:{
        color:'grey',
        fontSize:14,
        textAlign:'center'
    },
    progressCircle:{
        marginLeft:20
    }

})

export default Elo;

