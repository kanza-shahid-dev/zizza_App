import React from 'react'
import { View, Text ,Image, StyleSheet, Dimensions,TouchableOpacity} from 'react-native'
import  Icon  from 'react-native-vector-icons/AntDesign'
import ButtonComp from '../component/ButtonComp'
import colors from '../constants/colors'

const {width,height}=Dimensions.get('window')
const MyProfile = ({navigation}) => {
    return (
        <View style={styles.container}>
            
            <View style={styles.headingContainer}>
                <Text style={styles.headingText}>My Profile</Text>


                <View style={{flex:1,alignItems:'flex-end'}}>
                    <TouchableOpacity onPress={()=>navigation.navigate("Setting")}>
                        <Icon name="setting" size={32}></Icon>
                    </TouchableOpacity>
                </View>

            </View>

            <View style={{flexDirection:'row'}}>
                <View style={{}}>
                    <Image source={require('../assets/images/girluser.jpg')} style={{height:height*0.16,width:width*0.26,borderRadius:10}}/></View>
                <View style={{flex:1,marginLeft:width*0.015}}>
                    <View style={{flex:1,marginTop:'5%',marginBottom:'5%',flexDirection:'row',alignItems:'center'}}>
                        <View style={{flex:1}}>
                        <Text style={{fontSize:20,fontWeight:'900'}}>Devmusam</Text>
                        <Text style={{fontSize:17,color:'grey'}}>ID:418471481</Text>
                        </View>
                        <View style={{flex:1,alignItems:'flex-end',justifyContent:'center'}}>
                       <ButtonComp title="Edit Profile" type="circle-outline" onPress={()=>navigation.navigate("EditProfile")}/>
                        </View>
                    </View>
                    <View style={{flex:1, flexDirection:'column'}}>
                        <Text style={{fontSize:15}}>decirption decirption decirption decirption decirption decirption</Text>
                    </View>
                </View>
            </View>
            <View style={{marginTop:'10%',flexDirection:'row'}}>
                <View style={{flex:1,flexDirection:'row'}}> 
                <Text style={{fontSize:22,color:'#fc941d',fontWeight:'800',marginRight:10}}>56</Text>
                <Text style={{fontSize:20,color:'grey',fontWeight:'800'}}>Following</Text>
                </View>
                <View style={{flex:1,flexDirection:'row'}}>
                <Text style={{fontSize:22,color:'#fc941d',fontWeight:'800',marginRight:10}}>56</Text>
                <Text style={{fontSize:20,color:'grey',fontWeight:'800'}}>Follower</Text>
                </View>
                <View style={{flexDirection:'row'}}>
                <Text style={{fontSize:22,color:'#fc941d',fontWeight:'800',marginRight:10}}>56</Text>
                <Text style={{fontSize:20,color:'grey',fontWeight:'800'}}>Gifts</Text>
                </View>
                </View>

        </View>
    )
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white',
        padding:width*0.05,
    },
    headingContainer:{
        marginTop:10,
        marginBottom:15,
        flexDirection:'row'
    },
    headingText:{
        color:colors.primary,
        fontWeight:'900',
        fontSize:23
    },

})

export default MyProfile
