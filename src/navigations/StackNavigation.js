import React from 'react'
import { View, Text } from 'react-native'
import {createStackNavigator} from '@react-navigation/stack'
import Login from '../screens/Login';
import Signup from '../screens/Signup';
import ForgotPass from '../screens/ForgotPass';
import Resetpassword from '../screens/Resetpassword';
import EditProfile from '../screens/EditProfile';
import Verification from '../screens/Verification';
import Discover from '../screens/Discover';
import MyProfile from '../screens/MyProfile';
import NearBy from '../screens/NearBy';
import Notification from '../screens/Notification';
import MyFollowing from '../screens/MyFollowing';
import Setting from '../screens/Setting';
import BottomNavigation from './BottomNavigation';
import ManageCard from '../screens/ManageCard';

const StackNavigation = () => {
    const navigation=createStackNavigator();
    return (
        <navigation.Navigator initialRouteName="Login" screenOptions={{headerShown:false}}>
            <navigation.Screen name="Login" component={Login}/>
            <navigation.Screen name="Signup" component={Signup}/>
            <navigation.Screen name="ForgotPass" component={ForgotPass}/>
            <navigation.Screen name="Resetpassword" component={Resetpassword}/>
            <navigation.Screen name="Verification" component={Verification}/>
           
            <navigation.Screen name="BottomNavigation" component={BottomNavigation}/>

            <navigation.Screen name="Discover" component={Discover}/>
            <navigation.Screen name="Notification" component={Notification}/>
            <navigation.Screen name="MyProfile" component={MyProfile}/>
            <navigation.Screen name="EditProfile" component={EditProfile}/>
            <navigation.Screen name="NearBy" component={NearBy}/>
            <navigation.Screen name="MyFollowing" component={MyFollowing}/>
            <navigation.Screen name="Setting" component={Setting}/>
            <navigation.Screen name="ManageCard" component={ManageCard}/>
        </navigation.Navigator>
    )
}

export default StackNavigation
