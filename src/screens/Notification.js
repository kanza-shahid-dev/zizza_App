import React from 'react'
import { View, Text,StyleSheet,Image,Dimensions } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import colors from '../constants/colors'
import TabNavigation from '../navigations/TabNavigation'

const{width,height}=Dimensions.get('window')
const Notification = () => {
    
    return (
        <View style={styles.container}>
            <View style={styles.headingContainer}>
                  <Text style={styles.headingText}>Notification</Text>
            </View>
           <View style={{flexDirection:'row'}}>
               <View style={{flex:1,alignItems:'center'}}>
               <Image source={require('../assets/images/following.jpg')} style={{height:60,width:60}}/>
               </View>
               <View style={{flex:1,alignItems:'center'}}>
               <Image source={require('../assets/images/likes.jpg')} style={{height:60,width:60}}/>
               </View>
               <View style={{flex:1,alignItems:'center'}}>
               <Image source={require('../assets/images/comment.jpg')} style={{height:60,width:60}}/>
               </View>
           </View>

           <TabNavigation/>
        
        </View>
    )
}
const styles=StyleSheet.create({

    container:{
        flex:1,
        backgroundColor:'white',
        padding:width*0.05,
    },
    headingContainer:{
        marginTop:10,
        marginBottom:10,
        flexDirection:'row'
    },
    headingText:{
        color:colors.primary,
        fontWeight:'900',
        fontSize:23
    },
})

export default Notification
