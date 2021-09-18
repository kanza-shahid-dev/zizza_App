import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { View, Text, StyleSheet, Dimensions } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/MaterialIcons'
import ButtonComp from '../component/ButtonComp'
import SettingItem from '../component/SettingItem'
import colors from '../constants/colors'


const {width,height}=Dimensions.get('window')
const Setting = ({navigation}) => {
   
    return (
        <View style={styles.container}>
            <View style={styles.headingContainer}>
            <Text style={styles.headingText}>Setting</Text>
            </View>

            <SettingItem title="Edit Profile" onPress={()=>navigation.navigate("EditProfile")}/>
          
            <SettingItem title="Manage Card" onPress={()=>navigation.navigate("ManageCard")}/>
          
            <SettingItem title="Wallet" onPress={()=>navigation.navigate("EditProfile")}/>
          
            <SettingItem title="Help Center" onPress={()=>navigation.navigate("EditProfile")}/>
          
            <SettingItem title="ABout Us" onPress={()=>navigation.navigate("EditProfile")}/>

            <View style={{flex:1,justifyContent:'flex-end'}}><ButtonComp title="Logout" /></View>
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white',
        padding:width*0.06,
    },
    headingContainer:{
        marginTop:10,
        marginBottom:15
    },
    headingText:{
        color:colors.primary,
        fontWeight:'900',
        fontSize:23
    },
   
})
export default Setting
