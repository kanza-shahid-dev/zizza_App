import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native'
import  Icon from 'react-native-vector-icons/FontAwesome5'
import font from '../constants/font'

const{width,height}=Dimensions.get('window')
const AccountFooter = (props) => {
    return (
        <View style={styles.footerContainer}>
        <View style={{width:'100%',alignItems:'center'}}>
          <TouchableOpacity onPress={props.onPress}>
        <Text style={styles.font}>Don`t have an account? {props.title}</Text>
         </TouchableOpacity>
             <View style={{flex:1}}><Text style={styles.font}>OR</Text></View>
        <Text style={styles.font}>Login with Social Networks</Text>
        </View>
        <View style={{width:'100%',justifyContent:'center',flexDirection:'row'}}> 
         <Icon name="facebook" size={37} color="#4267B2" style={{marginRight:10}}/>
         <Icon name="google-plus" size={37} color="#D44638" style={{marginLeft:10}}/>
        </View>
    </View>
    )
}

const styles=StyleSheet.create({

    footerContainer:{
        flex:1,
        justifyContent:'flex-end',
        alignItems:'center',
        marginTop:height*0.04
    },
    font:{
        fontFamily:font.Medium,
        marginBottom:'3%'
    }


})
export default AccountFooter
