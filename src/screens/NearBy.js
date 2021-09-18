import React,{useState,useEffect} from 'react'
import { View, Text, FlatList,Image,StyleSheet, Dimensions } from 'react-native'
import { Searchbar } from 'react-native-paper'
import Icon from 'react-native-vector-icons/FontAwesome5'

const {width,height}=Dimensions.get('window')
const NearBy = () => {
    const [Data,setData]=useState([])
    const [SearchbarValue,setSearchbarValue]=useState('')
    const[numColumns,setNumColumns]=useState(4);
    
    useEffect(()=>{
        const a=parseInt(width*0.01)
        console.log(a)
        setNumColumns(a)
        setData(data)
        console.log(data)
    },[])
    const data=[
        {
            id:1,userName:"Alina",Image:"require('../assets/images/user.jpg')"
        },
        {
            id:2,userName:"Alexi",Image:"require('../assets/images/user2.jpg')"
        },
        {
            id:3,userName:"Kevin",Image:"require('../assets/images/user.jpg')"
        },
        {
            id:4,userName:"Sarah",Image:"require('../assets/images/user.jpg')"
        },
        {
            id:5,userName:"Sana",Image:"require('../assets/images/user.jpg')"
        },
        {
            id:6,userName:"Ali",Image:"require('../assets/images/user.jpg')"
        },
        {
            id:7,userName:"Umar",Image:"require('../assets/images/user.jpg')"
        },
        {
            id:8,userName:"Maria",Image:"require('../assets/images/user.jpg')"
        },
        {
            id:9,userName:"Maria",Image:"require('../assets/images/user.jpg')"
        },
        {
            id:12,userName:"Maria",Image:"require('../assets/images/user.jpg')"
        },
        {
            id:21,userName:"Maria",Image:"require('../assets/images/user.jpg')"
        },
        {
            id:22,userName:"Maria",Image:"require('../assets/images/user.jpg')"
        },
        {
            id:24,userName:"Maria",Image:"require('../assets/images/user.jpg')"
        },
        {
            id:25,userName:"Maria",Image:"require('../assets/images/user.jpg')"
        },
        {
            id:26,userName:"Maria",Image:"require('../assets/images/user.jpg')"
        },
        {
            id:27,userName:"Maria",Image:"require('../assets/images/user.jpg')"
        },
        {
            id:28,userName:"Maria",Image:"require('../assets/images/user.jpg')"
        },
        {
            id:29,userName:"Maria",Image:"require('../assets/images/user.jpg')"
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
        
        <View style={{flexDirection:'row'}}>
            <View style={{flex:1}}><Text style={{fontSize:25,fontWeight:'800'}}>Near By</Text></View>
        </View>


        <View style={{justifyContent:'center',alignItems:'center'}}>
        <FlatList
        data={Data}
        key={numColumns}
        numColumns={3}
        keyExtractor={(item)=>item.id}
        renderItem={({item})=>{
            return <View style={{alignItems:'center',padding:5}}>
                <Image source={require('../assets/images/user.jpg')} style={{height:100,width:100}}/>
                <Text style={{fontSize:18,fontWeight:'800'}}>{item.userName}</Text>
                </View>
        }}
        />
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

export default NearBy
