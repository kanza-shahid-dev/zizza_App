import React from 'react'
import { View, Text,StyleSheet,Image, Dimensions } from 'react-native'
import colors from '../constants/colors'
import font from '../constants/font'

const{width,height}=Dimensions.get('window')
const LogoContainer = () => {
    return (
        <View style={styles.headerContainer}>
        <View style={{alignItems:'center'}}><Image source={require('../assets/images/logo.jpg')} style={styles.logo}/></View>
        <View style={{justifyContent:'center',flexDirection:'row'}}> 
         <Text style={styles.font}>Zig </Text>
         <Text style={[styles.font,{color:colors.primary}]}>Za </Text>
         </View>
         </View>
    )
}
const styles=StyleSheet.create({

  
    headerContainer:{
        flex:1,
        marginBottom:height*0.04,
    },
    logo:{
        height:height*0.1,
        width:width*0.2
    },
    font:{
        fontSize:45,
        fontWeight:'bold',
        fontFamily:font.Regular
    }
})

export default LogoContainer
