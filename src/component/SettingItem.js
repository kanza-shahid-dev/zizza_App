import React from 'react'
import { View, Text,StyleSheet,TouchableOpacity } from 'react-native'
import  Icon  from 'react-native-vector-icons/MaterialIcons'

const SettingItem = (props) => {
    return (
        <TouchableOpacity onPress={()=>props.onPress()}>
        <View style={{flexDirection:'row',marginTop:14,marginBottom:14}}>
            <Text style={styles.ItemText}>{props.title}</Text>
            <View style={styles.arrowContainer} ><Icon name="arrow-forward-ios" size={20}/></View>
        </View>
        </TouchableOpacity>
    )
}
const styles=StyleSheet.create({
  
    ItemText:{
        fontSize:18,
        fontWeight:'900'
    },
    arrowContainer:{
        flex:1,
        alignItems:'flex-end'
    }
})
export default SettingItem
