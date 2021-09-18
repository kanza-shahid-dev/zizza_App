import React,{useState,useEffect} from 'react'
import { View, Text,TouchableOpacity } from 'react-native'

const ButtonComp = (props) => {
    const[textColor,setTextColor]=useState(null)
    const[BGColor,setBGColor]=useState(null)
    const[fontSize,setFontSize]=useState(null)
    const[fontWeight,setfontWeight]=useState(null)
    const[padding,setpadding]=useState(null)
    const[width,setWidth]=useState('100%')
    
    useEffect(() => {
       if(props.type=="circle-outline")
       {
            setTextColor('#fc941d')
            setBGColor('#ffffff')
            setFontSize(15)
            setpadding(5)
            setfontWeight('900')
            
       }
       else if(props.type=="circle")
       {
            setTextColor('#ffffff')
            setBGColor('#fc941d')
            setFontSize(15)
            setpadding(5)
            setfontWeight('900')
            setWidth(84)
       }
       else
       {
            setTextColor('#ffffff')
            setBGColor('#fc941d')
            setFontSize(20)
            setpadding(17)
            setfontWeight('600')
       }
    }, [])

   
    return (
        <TouchableOpacity  onPress={props.onPress}>
        <View style={{ backgroundColor:BGColor,width:width,padding:padding,borderRadius:20,alignItems:'center',justifyContent:'center', borderColor:'#fc941d',borderWidth:2}}>
            <Text style={{color:textColor,fontSize:fontSize,fontWeight:fontWeight}}>{props.title}</Text>
        </View>
        </TouchableOpacity>
    )
}

export default ButtonComp
