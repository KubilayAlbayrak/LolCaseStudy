import React from 'react'
import { StyleSheet, Text, View,Image, TouchableOpacity} from 'react-native';
import logo from '../assets/image/lol-logo.jpg';


const HomeScreen = ({navigation}) => {
    return (
        <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('ProfileScreen')}>
            <Image source={logo} style={styles.logo}/>
        </TouchableOpacity>
    )
};

export const homeScreenOptions = () => {
    return{
        headerTitle:'Lol Case Study',
        headerTitleAlign:'center'
    }
}



const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    logo:{
        width:'70%',
        height:150,
        resizeMode:'contain',
        borderRadius:150
    }
})

export default HomeScreen;


