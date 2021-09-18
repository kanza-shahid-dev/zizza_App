import React,{useState} from 'react'
import { View, Text, StyleSheet,Image,TouchableOpacity, Dimensions } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import ButtonComp from '../component/ButtonComp'
import InputComp from '../component/InputComp'

const{width,height}=Dimensions.get('window')

const ForgotPass = ({navigation}) => {
    const [emailError,setEmailError]=useState(null);
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
    return (
        <ScrollView contentContainerStyle={{flexGrow:1}}>
        <View style={styles.container}>
            {/* Header*/}
            <View style={styles.headerContainer}>
            <View style={{alignItems:'center'}}><Image source={require('../assets/images/logo.jpg')} style={styles.logo}/></View>
            <View style={{justifyContent:'center',flexDirection:'row'}}> 
             <Text style={{fontSize:40}}>Zig </Text>
             <Text style={{fontSize:40}}>Za </Text>
             </View>
             </View>
            {/* End of Header*/}

            
            <View style={{marginTop:height*0.02,marginBottom:'18%',alignItems:'center'}}>
                <Text style={{fontSize:25,fontWeight:'700'}}>Forgot Password?</Text>
            </View>
          
            <View style={{marginTop:height*0.02,alignItems:'center'}}>
                <Text>Enter Enail for Verification Code</Text>
            </View>


             <View style={{marginTop:height*0.03, marginBottom:height*0.03}}>
                 <InputComp placeholder="Email" keyboardType="email-address" icon="user" onChangeText={(value)=>ValidateEmail(value)} error={emailError}/>
             </View>
            

           
           {/* Footer*/}
            <View style={styles.footerContainer}>
            <ButtonComp title="SEND CODE" onPress={()=>navigation.navigate("Verification")}/>

            </View>
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
    headerContainer:{
        marginBottom:'7%',
    },
    logo:{
        height:height*0.1,
        width:width*0.2,
    },
    footerContainer:{
        flex:1,
        justifyContent:'flex-end',
        marginTop:height*0.04
    }


})
export default ForgotPass
