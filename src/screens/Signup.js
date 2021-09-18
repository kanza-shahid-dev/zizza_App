import React,{useState} from 'react'
import { View,Text,Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import Icon  from 'react-native-vector-icons/FontAwesome5'
import AccountFooter from '../component/AccountFooter'
import ButtonComp from '../component/ButtonComp'
import InputComp from '../component/InputComp'
import LogoContainer from '../component/LogoContainer'
import colors from '../constants/colors'

const{width,height}=Dimensions.get('window')
function Signup({navigation}) {

    const [nameError,setNameError]=useState(null);
    const [emailError,setEmailError]=useState(null);
    const [passwordError,setPasswordError]=useState(null);
    const [phoneNoError,setPhoneNoError]=useState(null);
    function ValidateUserName(value)
    {
        if(value.length==0)
        {
            setNameError("User Name Required")
        }
        else if(value.length<6)
        {
            setNameError("Length should be greater than 6")
        }
        else
            setNameError(null)
    }
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
    function ValidatePhoneNo(value)
    {
        if(value.length==0)
        {
            setPhoneNoError("Phone No Required")
        }
        else
        setPhoneNoError(null)
    }
    return (
        <ScrollView contentContainerStyle={{flexGrow:1}}>
        <View style={styles.container}>
           
            {/* Header*/}
             <LogoContainer/>
            {/* End of Header*/}

             <View style={{marginTop:height*0.03, marginBottom:'2%'}}>
                 <InputComp placeholder="Username" icon="user" onChangeText={(value)=>ValidateUserName(value)} error={nameError}/>
             </View>
             <View style={{marginBottom:'2%'}}>
                 <InputComp placeholder="Email" keyboardType="email-address" icon="user" onChangeText={(value)=>ValidateEmail(value)} error={emailError}/>
             </View>
             <View style={{marginBottom:'2%'}}>
                 <InputComp placeholder="Password" isPassword="true" icon="lock" onChangeText={(value)=>ValidatePassword(value)} error={passwordError}/>
             </View>
             <View style={{marginBottom:'2%'}}>
                 <InputComp placeholder="Phone No" keyboardType="number-pad" icon="phone" onChangeText={(value)=>ValidatePhoneNo(value)} error={phoneNoError}/>
             </View>

             <ButtonComp title="SIGNUP"/>
           
            {/* Footer*/}
            <AccountFooter title="Login" onPress={()=>navigation.navigate("Login")}/>
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

})
export default Signup
