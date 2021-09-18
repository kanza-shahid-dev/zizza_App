import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react'
import { View, Text } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5';
import AddButton from '../component/AddButton';
import colors from '../constants/colors';
import CameraScreen from '../screens/CameraScreen';
import Discover from '../screens/Discover';
import Home from '../screens/Home';
import MyProfile from '../screens/MyProfile';
import Notification from '../screens/Notification';
import Setting from '../screens/Setting';

const BottomNavigation = () => {
    const Tab = createBottomTabNavigator();
    return (
      <Tab.Navigator initalRouteName="Home" screenOptions={{headerShown:false,tabBarStyle:{height:65,borderTopWidth:2,paddingTop:2,paddingBottom:5},tabBarLabelStyle:{fontSize:14},tabBarColor:'white',tabBarActiveTintColor:colors.primary,borderTopWidth:20}}  >
        <Tab.Screen name="Home" component={Home} options={{tabBarIcon:({color})=><Icon name="home" size={22} color={color}/>}}/>
        <Tab.Screen name="Discover" component={Discover} options={{tabBarIcon:({color})=><Icon name="search" size={23} color={color} />}} />

        <Tab.Screen name="CameraScreen" component={CameraScreen} options={{tabBarLabel:()=>null,tabBarIcon:()=><AddButton/>}} />

        <Tab.Screen name="Notification" component={Notification} options={{tabBarIcon:({color})=><Icon name="bell" size={23}  color={color}/>}}/>
        <Tab.Screen name="Profile" component={MyProfile}  options={{tabBarIcon:({color})=><Icon name="user" size={23} color={color}/>}}/>
      </Tab.Navigator>
    )
}

export default BottomNavigation
