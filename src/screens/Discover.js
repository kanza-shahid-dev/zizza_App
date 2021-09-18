import React,{useState,useEffect} from 'react'
import { View, Text, StyleSheet, Dimensions,Image } from 'react-native'
import ButtonComp from '../component/ButtonComp'
//import { Searchbar } from 'react-native-paper'
import  Icon  from 'react-native-vector-icons/FontAwesome5'
import { FlatList } from 'react-native-gesture-handler'
import { Searchbar } from 'react-native-paper'
import VideoPlayer from 'react-native-video-controls'

const {width,height}=Dimensions.get('window')
const Discover = ({navigation}) => {
    const [Data,setData]=useState([])
    const [SearchbarValue,setSearchbarValue]=useState('')
    const[numColumns,setNumColumns]=useState(4);
    useEffect(()=>{
        const a=parseInt(width*0.013)
        console.log(a)
        setNumColumns(a)
        setData(data)
    },[])
    const data=[
        {
            id:21,userName:"Maria",Image:"abv"
        },
        {
            id:22,userName:"Alexis",Image:"abv"
        },
        {
            id:23,userName:"Kevin",Image:"abv"
        },
        {
            id:24,userName:"Sarah",Image:"abv"
        },
        {
            id:25,userName:"Jordan",Image:"abv"
        },
        {
            id:26,userName:"Sana",Image:"abv"
        },
        {
            id:25,userName:"Sarah",Image:"abv"
        },
        {
            id:26,userName:"Maria",Image:"abv"
        },
    ]
        function Search(text)
        {
            const filteredData=data.filter((item)=>item.userName.toLowerCase().includes(text.toLowerCase()))
            setData(filteredData)
            setSearchbarValue(text)
        }
    return (
        <View style={styles.container}>
           <Searchbar
            placeholder="Search"
            value={SearchbarValue}
            style={{borderRadius:30,backgroundColor:'#F5F5f5',height:52,marginBottom:20,marginTop:20}}
            icon={()=><Icon name="search" size={20} color="grey"></Icon>}
            onChangeText={(text)=>Search(text)} />
            
            <View style={{flexDirection:'row',marginBottom:'2%'}}>
                <View style={{flex:1}}><Text style={{fontSize:25,fontWeight:'800'}}>Near By</Text></View>
                <View style={{flex:1,alignItems:'flex-end'}}>
                    <ButtonComp title="See All" type="circle" onPress={()=>navigation.navigate("NearBy")}/>
                </View>
            </View>

            <View style={{alignItems:'center'}}> 
            <FlatList
            key={numColumns}
            numColumns={numColumns}
            data={Data}
            keyExtractor={(item)=>item.id}
            renderItem={({item})=>{
                return <View style={{flexDirection:'row'}}>
                    <View style={{alignItems:'center',padding:5}}>
                    <Image source={require('../assets/images/user.jpg')} style={{height:width/5,width:width/5}}/>
                    <Text style={{fontSize:16}}>{item.userName}</Text>
                    </View>
                    </View>
            }}
            />
            </View>

            <View style={{flexDirection:'row',marginTop:'5%',marginBottom:'5%'}}>
                <View style={{flex:1}}><Text style={{fontSize:25,fontWeight:'800'}}>My Following</Text></View>
                <View style={{flex:1,alignItems:'flex-end'}}>
                    <ButtonComp title="See All" type="circle" onPress={()=>navigation.navigate("NearBy")}/>
                </View>
            </View>
            
            <View style={{flexDirection:'row',margin:5,alignItems:'center'}}>
                <View style={{ width:width/2,height:height/3}}>
                    <VideoPlayer
                        source={{ uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4' }}
                        resizeMode={"cover"}
                        toggleResizeModeOnFullscreen={true}
                        thumbnail={{ uri: 'https://i.ytimg.com/vi/aqz-KE-bpKQ/maxresdefault.jpg' }}
                        disableBack
                        disableVolume
                        style={{borderRadius:30}}
                    />
                </View>
                <View style={{flex:1,paddingLeft:10}}>
                    <Text>{data[0].description}</Text>
                </View>
                </View>

            <View style={{flexDirection:'row',marginBottom:'5%'}}>
                <View style={{flex:1}}><Text style={{fontSize:25,fontWeight:'800'}}>Live</Text></View>
                <View style={{flex:1,alignItems:'flex-end'}}>
                    <ButtonComp title="See All" type="circle" onPress={()=>navigation.navigate("NearBy")}/>
                </View>
            </View>

        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white',
        padding:width*0.06,

    },
})

export default Discover
