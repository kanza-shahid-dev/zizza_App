import React from 'react'
import { View, Text,StyleSheet,Image,FlatList, Dimensions } from 'react-native'
import CommentsContainer from '../component/CommentsContainer'
import colors from '../constants/colors'


const {width,height}=Dimensions.get('window')
const Likes = () => {
    const data=[
        {
            userName:'@devmusama',description:'pagarapgh pagarapgh pagarapgh pagarapgh pagarapgh pagarapgh pagarapgh'
        },
        {
            userName:'@devmusama',description:'pagarapgh pagarapgh pagarapgh pagarapgh pagarapgh pagarapgh pagarapgh'
        },
        {
            userName:'@devmusama',description:'pagarapgh pagarapgh pagarapgh pagarapgh pagarapgh pagarapgh pagarapgh'
        },
        {
            userName:'@devmusama',description:'pagarapgh pagarapgh pagarapgh pagarapgh pagarapgh pagarapgh pagarapgh'
        },
        {
            userName:'@devmusama',description:'pagarapgh pagarapgh pagarapgh pagarapgh pagarapgh pagarapgh pagarapgh'
        },
        {
            userName:'@devmusama',description:'pagarapgh pagarapgh pagarapgh pagarapgh pagarapgh pagarapgh pagarapgh'
        },
    ]
    return (
        <View style={styles.container}>
              <FlatList
           data={data}
           renderItem={({item})=>{
            return <CommentsContainer userName={item.userName} description={item.description}/>
              
           }} />
        </View>
    )
}
const styles=StyleSheet.create({

    container:{
        flex:1,
        backgroundColor:'white',
    },
})

export default Likes
