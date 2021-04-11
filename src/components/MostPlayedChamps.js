import React from 'react'
import { StyleSheet, Text, View,Image,FlatList } from 'react-native';
import MostPlayedChampsRow from './MostPlayedChampsRow';


const MostPlayedChamps = () => {

    const champs = [{
        id:1,
        name:'Ashe',
        kill:12.8,
        death:5.6,
        assist:7.8,
        win:7,
        lose:13,
        imageLink:'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ashe_0.jpg'
      },
      {
        id:2,
        name:'Rengar',
        kill:12.8,
        death:5.6,
        assist:7.8,
        win:12,
        lose:8,
        imageLink:'https://img.redbull.com/images/c_crop,w_1075,h_717,x_140,y_0,f_auto,q_auto/c_scale,w_1500/redbullcom/2017/08/22/b2dd2094-b679-42c2-a1d4-8e0740286c6b/lol-hero-rengar'
      },
      {
        id:3,
        name:'Tryndamere',
        kill:12.8,
        death:5.6,
        assist:7.8,
        win:10,
        lose:10,
        imageLink:'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Tryndamere_0.jpg'
      },
     ];


    return (
        <View>
        <FlatList 
        horizontal
        data={champs}
        keyExtractor={(item) => `${item.id}`}
        renderItem={({item}) => <MostPlayedChampsRow champs={item}/>}
        showsVerticalScrollIndicator={false}
        />
        <View style={{height:17}}>
        <Text style={{color:'white',fontWeight:'bold',textAlign:'center'}}>Most Played Champs</Text>
        </View>
        </View>
    )
}



const styles = StyleSheet.create({
   
})

export default MostPlayedChamps
