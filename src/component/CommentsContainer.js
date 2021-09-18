import React from 'react'
import { View, Text,Image, StyleSheet } from 'react-native'
import colors from '../constants/colors'

const CommentsContainer = (props) => {
    return (
        <View style={{flexDirection:'row',paddingTop:'3%',paddingBottom:'3%',borderBottomWidth:1,borderColor:'grey'}}>
        
        <View style={{}}><Image source={require('../assets/images/girluser.jpg')} style={{height:80,width:80}} /></View>
       <View style={{flex:1,width:'100%',paddingLeft:'2%',paddingRight:'2%',justifyContent:'center'}}>
        {props.userName && <Text style={styles.HeaderText}>{props.userName}</Text>}
        <Text style={styles.descriptionText}>{props.description}</Text>
        </View>
          </View>

    )
}
const styles=StyleSheet.create({
    HeaderText:{
        fontSize:17,
        color:colors.primary,
        fontWeight:'bold',
        fontFamily:'Quicksand-Bold'
    },
    descriptionText:{
        fontSize:15,
        fontWeight:'900',
        fontFamily:'Quicksand-Bold',
        textAlign:'justify'
        
    }
})
export default CommentsContainer
