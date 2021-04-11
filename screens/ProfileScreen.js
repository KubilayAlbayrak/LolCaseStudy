import React from 'react'
import { StyleSheet,View,FlatList,Text} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import Header from '../src/components/Header';
import Seperator from '../src/components/Seperator';
import Elo from '../src/components/Elo';
import MostPlayedChamps from '../src/components/MostPlayedChamps';
import LastPlayedGame from '../src/components/LastPlayedGame';

const ProfileScreen = () => {

    const lastplayedchamps = [{
        id:1,
        name:'Vayne',
        result:'Victory',
        duration:23.19,
        time:'10h ago',
        kill:'11',
        death:'1',
        assist:'11',
        minions:'113',
        gold:'6930',
        image:'https://static-cdn.jtvnw.net/jtv_user_pictures/b30828ba3efd51a5-profile_image-300x300.jpeg'
      },
      {
        id:2,
        name:'Lucian',
        result:'Victory',
        duration:20.29,
        time:'12h ago',
        kill:'11',
        death:'14',
        assist:'1',
        minions:'113',
        gold:'6930',
        image:'https://i1.sndcdn.com/artworks-000055452865-9bfth1-t500x500.jpg'
      },
      {
        id:3,
        name:'Kaisa',
        result:'Victory',
        duration:34.09,
        time:'10h ago',
        kill:'14',
        death:'12',
        assist:'13',
        minions:'113',
        gold:'6930',
        image:'https://static.senpai.gg/lol/img/champion/tiles/Kaisa_0.jpg'
      },
      {
        id:4,
        name:'Vayne',
        result:'Victory',
        duration:23.19,
        time:'10h ago',
        kill:'11',
        death:'1',
        assist:'11',
        minions:'113',
        gold:'6930',
        image:'https://static-cdn.jtvnw.net/jtv_user_pictures/b30828ba3efd51a5-profile_image-300x300.jpeg'
      },
      {
        id:5,
        name:'Vayne',
        result:'Victory',
        duration:23.19,
        time:'10h ago',
        kill:'11',
        death:'1',
        assist:'11',
        minions:'113',
        gold:'6930',
        image:'https://i1.sndcdn.com/artworks-000055452865-9bfth1-t500x500.jpg'
      },
     ];

    return (
    <FlatList 
    data={lastplayedchamps}
    keyExtractor={(item) => `${item.id}`}
    renderItem={({item}) => <LastPlayedGame champs={item}/>}
    showsVerticalScrollIndicator={false}
    ListHeaderComponent={() =>(
    <View style={{backgroundColor:'black'}}>
            <Header />
            <Seperator />
            <Elo />
            <Seperator />
            <MostPlayedChamps />
            <Seperator />
    </View>
    )}
    ListFooterComponent={() =>(
        <View style={{backgroundColor:'black',height:30,justifyContent:'center'}}>
        <Text style={{color:'white',fontWeight:'bold',textAlign:'center'}}>Match History</Text>
        </View>
    )}
    />
    )};


export const profileScreenOptions = () => {
    return{
        headerTitle:'League of Legends',
        headerTintColor: '#fff',
        headerStyle:{
            backgroundColor:'black'
        },
        headerRight:() => (
            <View >
            <MaterialCommunityIcons name="dots-horizontal" size={24} color="white" />
            </View>
        ),
    
}
}

const styles = StyleSheet.create({})

export default ProfileScreen;


