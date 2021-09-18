import React,{useState} from 'react'
import { View, Text,StyleSheet,Image, Dimensions, TouchableOpacity } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import ButtonComp from '../component/ButtonComp'
import InputComp from '../component/InputComp'
import LogoContainer from '../component/LogoContainer'
import AccountFooter from '../component/AccountFooter'

const{width,height}=Dimensions.get('window')
const Login = ({navigation}) => {

    const [emailError,setEmailError]=useState(null);
    const [passwordError,setPasswordError]=useState(null);
    function ValidateEmail(value)
    {
        if(value.length==0)
        {
            setEmailError("Email Required")
        }
        else if(!(value.includes("@") && (value.includes(".com"))))
        {
            setEmailError("Invalid Email")
        }
        else
          setEmailError(null)
    }
    function ValidatePassword(value)
    {
        if(value.length==0)
        {
            setPasswordError("password Required")
        }
        else
        setPasswordError(null)
    }
    return (
        <ScrollView contentContainerStyle={{flexGrow:1}}>
        <View style={styles.container}>
            
            {/* Header*/}
             <LogoContainer/>
            {/* End of Header*/}

             <View style={{marginTop:height*0.03, marginBottom:'2%'}}>
                 <InputComp placeholder="Email" onChangeText={(value)=>ValidateEmail(value)} error={emailError} keyboardType="email-address" icon="user" />
             </View>
             <View style={{marginBottom:'6%'}}>
                 <InputComp placeholder="Password" isPassword="true" onChangeText={(value)=>ValidatePassword(value)}  icon="lock" error={passwordError}/>
             </View>

             <ButtonComp title="LOGIN" onPress={()=>navigation.navigate("BottomNavigation")}/>
             <TouchableOpacity onPress={()=>{navigation.navigate("ForgotPass")}}>
             <View style={{marginTop:height*0.02,alignItems:'flex-end'}}><Text>Forgot Password?</Text></View>
             </TouchableOpacity>
           
            {/* Footer*/}
            <AccountFooter title="Sign Up" onPress={()=>navigation.navigate("Signup")}/>
            {/* End of Footer*/}

        </View>
        </ScrollView>
    )
}
const styles=StyleSheet.create({

    container:{
        flex:1,
        backgroundColor:'white',
        padding:width*0.1,

    },
    footerContainer:{
        flex:1,
        justifyContent:'flex-end',
        alignItems:'center',
        marginTop:height*0.04
    },


})
export default Login
