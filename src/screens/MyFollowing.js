import React,{useState,useEffect} from 'react'
import { View, Text, StyleSheet, Dimensions,Image } from 'react-native'
import ButtonComp from '../component/ButtonComp'
//import { Searchbar } from 'react-native-paper'
import  Icon  from 'react-native-vector-icons/FontAwesome5'
import { FlatList } from 'react-native-gesture-handler'
import { Searchbar } from 'react-native-paper'

const {width,height}=Dimensions.get('window')
const MyFollowing = ({navigation}) => {
    const [Data,setData]=useState([])
    const [SearchbarValue,setSearchbarValue]=useState('')
    const[numColumns,setNumColumns]=useState(4);
    useEffect(()=>{
        const a=parseInt(width*0.01)
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
            id:24,userName:"Maria",Image:"abv"
        },
        {
            id:25,userName:"Maria",Image:"abv"
        },
        {
            id:26,userName:"Maria",Image:"abv"
        },
        {
            id:25,userName:"Maria",Image:"abv"
        },
        {
            id:26,userName:"Maria",Image:"abv"
        },
    ]
        function Search(text)
        {
            const filteredData=data.filter((item)=>item.userName.includes(text))
            setData(filteredData)
            setSearchbarValue(text)
        }
    return (
        <View style={styles.container}>
           <Searchbar
            placeholder="Search"
            value={SearchbarValue}
            style={{borderRadius:30,backgroundColor:'#F5F5f5',height:52,marginBottom:10,marginTop:20}}
            icon={()=><Icon name="search" size={20} color="grey"></Icon>}
            onChangeText={(text)=>Search(text)} />
            
            
            <View style={{flexDirection:'row',marginBottom:'5%'}}>
                <View style={{flex:1}}><Text style={{fontSize:25,fontWeight:'800'}}>My Following</Text></View>
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

export default MyFollowing
