import React,{useEffect} from 'react'
import { View, Text } from 'react-native'
import { launchCamera } from 'react-native-image-picker'

const CameraScreen = (props) => {
    useEffect(() => {
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
                  //  setImageSource(res.assets[0].uri)
                }
                props.navigation.goBack();
            })
    }, [])
    return (
        <View>
        </View>
    )
}

export default CameraScreen
