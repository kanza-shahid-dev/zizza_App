import { NavigationContainer } from '@react-navigation/native'
import React,{useState} from 'react'
import { View, Text, StyleSheet,Image,TouchableOpacity, Dimensions } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/FontAwesome5'
import ButtonComp from '../component/ButtonComp'
import InputComp from '../component/InputComp'

const{width,height}=Dimensions.get('window')


const Resetpassword = ({navigation}) => {
    const [passwordError,setPasswordError]=useState(null);
   
    function ValidatePassword(value)
    {
        if(value.length==0)
        {
            setPasswordError("password Required")
        }
        else
        setPasswordError(null)
    }
    function ValidateConformPassword(value)
    {
        if(value.length==0)
        {
            setPasswordError("Conform password Required")
        }
        else
        setPasswordError(null)
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
                <Text style={{fontSize:25,fontWeight:'700'}}>Reset Password</Text>
            </View>
          

             <View style={{marginTop:height*0.03, marginBottom:'2%'}}>
                 <InputComp placeholder="New Password" isPassword="true" onChangeText={(value)=>ValidatePassword(value)}  icon="lock" error={passwordError}/>
             </View>

             <View style={{ marginBottom:height*0.03}}>
                 <InputComp placeholder="Confirm New Password" isPassword="true" onChangeText={(value)=>ValidateConformPassword(value)}  icon="lock" error={passwordError}/>
             </View>
            

           
           {/* Footer*/}
            <View style={styles.footerContainer}>
            <ButtonComp title="Continue" onPress={()=>navigation.navigate("BottomNavigation")}/>

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
export default Resetpassword
