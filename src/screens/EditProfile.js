import React,{useState,useEffect} from 'react'
import { View, Text,Image,Modal,TouchableOpacity,ScrollView,StyleSheet, Dimensions ,TouchableWithoutFeedback} from 'react-native'
import { launchCamera, launchImageLibrary } from 'react-native-image-picker'
import ButtonComp from '../component/ButtonComp'
import InputComp from '../component/InputComp'

const{width,height}=Dimensions.get('window')
const EditProfile = () => {
    const [modalVisibility,setModalVisibility]=useState(false)
    const [imageSource,setImageSource]=useState('https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-social-media-user-portrait-176256935.jpg')

    function captureFromcamera()
    {
        setModalVisibility(false)
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
                setImageSource(res.assets[0].uri)
            }
        })
    }
    function selectFromGallery()
    {
        setModalVisibility(false)
        let options={
            StorageOptions:{
                skipBackup:true
            }
        }
        launchImageLibrary(options,res=>{
            if(res.error){
            }
            else if(res.didCancel){
            }
            else{
                setImageSource(res.assets[0].uri)
            }
        })
    }

    return (
        <ScrollView contentContainerStyle={{flexGrow:1}}>
        <View style={styles.container}>
            {/* Header*/}
            <View style={styles.headerContainer}>

            <TouchableOpacity onPress={()=>setModalVisibility(true)}>   
            <View style={{alignItems:'center'}}>
                <Image source={{uri:imageSource}} style={styles.ProfileImage}/>
            </View>
            </TouchableOpacity>
            
             </View>
            {/* End of Header*/}

            {/*Modal*/}
            <Modal
            visible={modalVisibility}
            transparent={true}
            onRequestClose={()=>setModalVisibility(false)}>
            {/** To close modal on background touch */}
            <TouchableWithoutFeedback onPress={()=>setModalVisibility(false)}> 
            <View style={styles.modalContainer}>
                <View style={{height:height/6,width:width/1.5,alignItems:'center',justifyContent:'center',backgroundColor:'white'}}>
                   <TouchableOpacity onPress={captureFromcamera}> 
                       <Text style={{fontSize:20,borderBottomWidth:1,padding:10}}>Capture Image</Text>
                   </TouchableOpacity>
                   <TouchableOpacity onPress={selectFromGallery}>
                        <Text style={{fontSize:20,padding:10}}>Select from Gallery</Text>
                    </TouchableOpacity>
                </View>
            </View>
            </TouchableWithoutFeedback>

            </Modal>

            {/* End of Modal*/}

             <View style={{marginTop:'2%', marginBottom:'1%'}}>
                 <InputComp placeholder="Username" icon="user"/>
             </View>
             <View style={{marginBottom:'1%'}}>
                 <InputComp placeholder="Email" keyboardType="email-address" icon="user"/>
             </View>
             <View style={{marginBottom:'1%'}}>
                 <InputComp placeholder="Password" secureTextEntry={true} icon="lock"/>
             </View>
             <View style={{marginBottom:'1%'}}>
                 <InputComp placeholder="Phone No" keyboardType="number-pad" icon="phone"/>
             </View>
             <View style={{marginBottom:'6%'}}>
                 <InputComp placeholder="Bio" type="description-input"/>
             </View>
           
           {/* Footer*/}
            <View style={styles.footerContainer}>
            <ButtonComp title="Update Profile"/>
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
        flex:1,
        marginBottom:height*0.04,
    },
    ProfileImage:{
        height:height*0.16,
        width:width*0.32,
        borderRadius:width
    },
    footerContainer:{
        flex:1,
        justifyContent:'flex-end',
    },
    modalContainer:{
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.7)',
        alignItems: 'center',
        justifyContent: 'center',
    },


})
export default EditProfile
