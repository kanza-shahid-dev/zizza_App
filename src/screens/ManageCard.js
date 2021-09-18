import React from 'react'
import { View, Text, StyleSheet, Dimensions } from 'react-native'
import { CreditCardInput, LiteCreditCardInput } from "react-native-input-credit-card";
import colors from '../constants/colors';
import CreditCard from 'react-native-credit-card';
import Icon  from 'react-native-vector-icons/FontAwesome5';
import ButtonComp from '../component/ButtonComp';



const{width,height}=Dimensions.get('window')
const ManageCard = () => {
    return (
        <View style={styles.container}>
            <View style={styles.headingContainer}>
                <Text style={styles.headingText}>Manage Card</Text>
            </View>

            <CreditCardInput
                name="Kanza"
                autoFocus
                requiresName
                requiresCVC
                validColor={"black"}
                invalidColor={"red"}
                placeholderColor={"darkgray"}
                cardBrandIcons={()=><Icon name="camera"/>}
                />

<CreditCard
    type="mastercard"
    shiny={false}
    bar={false}
    name="ABC"
    expiry="exp"
   />
             
             <View style={styles.headingContainer}>
                <Text style={styles.headingText}>Add New Card</Text>
            </View>


            <View style={{padding:20, flex:1}}>
            <ButtonComp title="Add Card"/>
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
export default ManageCard
