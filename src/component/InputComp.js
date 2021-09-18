import React,{useState,useEffect} from 'react'
import { View, Text } from 'react-native'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler'
import  Icon  from 'react-native-vector-icons/FontAwesome5'

const InputComp = (props) => {
    const type=props.type;
    const secure=props.isPassword;
    const [passVisibility,setpassVisibility]=useState(false)
    const [EyeIcon,setEyeIcon]=useState(false)
   
    useEffect(()=>{
        if(props.isPassword)
        {
            setpassVisibility(true)
            setEyeIcon("eye-slash")
        }
    },[])
   
    function togglePassword()
    {
        if(passVisibility==true)
        {
            setpassVisibility(false)
            setEyeIcon("eye")
        }
        else
        {
            setpassVisibility(true)
            setEyeIcon("eye-slash")
        }
    }
    return (
        <View >
      {
          type==="description-input"?
        <View style={{flexDirection:'row',height:160,justifyContent:'center', borderWidth:1,padding:3,borderRadius:26}}>
            <View style={{flex:1}}><TextInput multiline={true} keyboardType={props.keyboardType}  secureTextEntry={props.secureTextEntry} placeholder={props.placeholder} style={{ paddingLeft:18,fontSize:16,fontWeight:'900'}}/></View>
        </View>
        : 
        <View>
        <View style={{flexDirection:'row',justifyContent:'center', borderWidth:1,padding:3,borderRadius:26}}>
            <View style={{justifyContent:'center',paddingLeft:15}}><Icon name={props.icon} size={18}/></View>
            <View style={{flex:1}}><TextInput onChangeText={props.onChangeText} keyboardType={props.keyboardType} secureTextEntry={passVisibility} placeholder={props.placeholder} style={{ paddingLeft:18,fontSize:17,fontWeight:'900'}}/></View>
                {/** For password */}
            {props.isPassword?
                <View style={{justifyContent:'center',paddingRight:15}}>
                <TouchableOpacity onPress={()=>togglePassword()}>
                    <Icon name={EyeIcon} size={18}/>
                </TouchableOpacity>
                </View>:null
            }  
          
        </View>
         {/** For error message */}
        <View style={{paddingLeft:20,marginTop:2}}> 
             <Text style={{color:'red',fontSize:15,fontWeight:'700'}}>{props.error}</Text>   
        </View>
        </View>
    
    }
    </View>
    )
}

export default InputComp
