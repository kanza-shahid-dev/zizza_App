import React from 'react'
import { View, Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { launchCamera } from 'react-native-image-picker'
import Icon  from 'react-native-vector-icons/Feather'

const AddButton = (props) => {
    function captureFromcamera()
    {
        let options={
            StorageOptions:{
                skipBackup:true
            }
        }
        launchCamera(options,res=>{
            if(res.error){
            }
            else if(res.didCancel){
            }
            else{
               props.navigation.goBack();
              //  setImageSource(res.assets[0].uri)
            }
        })
    }
    return (
        <View style={{ justifyContent:'center',height:'100%',
       width:'90%',borderRadius:90,alignItems:'center'}}>
            <View style={{shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 5,
},
shadowOpacity: 0.27,
shadowRadius: 4.65,}}>
            <TouchableOpacity>
                    <Icon name="camera" size={33} color="grey"/>
            </TouchableOpacity>
            </View>
        </View>
    )
}

export default AddButton
