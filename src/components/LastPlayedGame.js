import React from 'react'
import { Image } from 'react-native'
import { StyleSheet, Text, View } from 'react-native'

const LastPlayedGame = ({champs}) => {
    return (
        <View style={{flexDirection:'row',
        backgroundColor: champs.id %2==0 ? 'maroon' : 'teal'}}>
        <View>
            <Text style={styles.text}>{champs.result}</Text>
            <Text style={styles.text}>{champs.duration}</Text>
            <Text style={styles.text}>{champs.time}</Text>
        </View>
        <Image source={{uri:champs.image}} style={styles.champsimage}/>
        <Text style={styles.text2}>{champs.kill}/{champs.death}/{champs.assist}</Text>
        <View style={{marginLeft:40}}>
            <Text>İtems</Text>
        </View>
        <Text style={styles.text2}>{champs.minions}</Text>
        <Text style={styles.text2}>{champs.gold}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    text:{
        color:'white',
        fontWeight:'bold'
    },
    champsimage:{
        width:50,
        height:50,
        borderRadius:25,
        marginLeft:10
    },
    text2:{
        color:'white',
        marginLeft:20,
        marginTop:10
    }
})


export default LastPlayedGame;


