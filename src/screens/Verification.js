import React from 'react'
import { View, Text, StyleSheet,Image,TouchableOpacity, Dimensions } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import CodeInput from 'react-native-confirmation-code-input';
import ButtonComp from '../component/ButtonComp'
import InputComp from '../component/InputComp'

const{width,height}=Dimensions.get('window')

const Verification = ({navigation}) => {
   
    function onCodeInput(value){
        console.log(value)
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

            
            <View style={{marginTop:'7%',marginBottom:'6%',alignItems:'center'}}>
                <Text style={{fontSize:25,fontWeight:'700'}}>Verification</Text>
                <Text style={{fontSize:15}}>Enter Code Below</Text>
            </View>
          
          
            <CodeInput
            className='border-circle'
            activeColor='black'
            inactiveColor='black'
            size={50}
            fontSize={28}
            color='grey'//input color
            codeLength={4}
            space={27}
            keyboardType='phone-pad'
            onFulfill={(value)=>onCodeInput(value)}
           />
           
            

           
           {/* Footer*/}
            <View style={styles.footerContainer}>
            <ButtonComp title="VERIFY" onPress={()=>navigation.navigate("Resetpassword")}/>

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
export default Verification
