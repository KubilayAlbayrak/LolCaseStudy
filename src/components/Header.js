import React from 'react';
import { StyleSheet, Text, View,ImageBackground,Image} from 'react-native';
import { Avatar } from 'react-native-elements';
import { Fontisto } from '@expo/vector-icons'; 
import ezrealBackground from '../../assets/image/Ezreal.jpg'


const Header = () => {
    return (
        <View>
            <ImageBackground style= {styles.imagebg} source={ezrealBackground} > 
            <View style={styles.avatar}>
            <Avatar 
            size='large'
            rounded
            source={{uri:'https://avatarfiles.alphacoders.com/513/51336.jpg'}}
            >
            <Avatar.Accessory source={<Fontisto name="arrow-resize" size={28} color="black" />}/>  
            </Avatar>
            <View style={{flexDirection:'row'}}>
            <Text style={{color:'white',fontWeight:'bold',fontSize:18}}>Kötü Çocuk</Text>
            <Text style={{color:'grey',fontSize:14,textAlign:'center'}}>#EUW</Text>
            </View>
            </View>
            <View style={{alignItems:'center',marginLeft:25,marginTop:130}}>
            <Image style={styles.fntclogo} source={{uri:'https://img.fnatic.com/36d64b5e-c355-4da2-84ea-3ea52ebdff48.png'}} />
            <Text style={{color:'white',fontSize:14,fontWeight:'bold'}}>Fnatic</Text>
            </View>
            <View style={{ marginTop:155, marginLeft:45}}>
            <Image  style={styles.badge} source={{uri:'https://static.wikia.nocookie.net/leagueoflegends/images/7/7a/Golden_Dogs_vs_Cats_profileicon.png/revision/latest?cb=20190305234750'}}/>
            <Text style={{color:'grey',fontSize:14,width:100}}>100th Player Badge</Text>
            </View>
            </ImageBackground>
            <View style={styles.textContainer}>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    imagebg:{
        width:'100%',
        height:150,
        flexDirection:'row',
    },
    avatar:{
        marginTop:100,
        marginLeft:10,
    },
    fntclogo:{
        width:'95%',
        height:55,
    },
    badge:{
        width:'50%',
        height:40,
        borderRadius:40,
    },
    textContainer:{
        marginTop:80,
        flexDirection:'row'
    }
})

export default Header;


