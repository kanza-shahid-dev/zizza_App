import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import React from 'react'
import { ListViewBase, StyleSheet } from 'react-native';
import MyFollowing from '../screens/MyFollowing';
import Live from '../screens/Live';
import Icon from 'react-native-vector-icons/FontAwesome5';
import colors from '../constants/colors';
import Comments from '../screens/Comments';
import Likes from '../screens/Likes';
import Following from '../screens/Following';

const TabNavigation = () => {
    const Tab = createMaterialTopTabNavigator();
    return (
        <Tab.Navigator initialRouteName="MyFollowing" 
        screenOptions={{tabBarLabelStyle:{fontSize:14,fontWeight:'700'},tabBarInactiveTintColor:'black',
        tabBarActiveTintColor:colors.primary,tabBarPressColor:'white',
        tabBarIndicatorStyle:{backgroundColor:colors.primary}}} >
        <Tab.Screen name="Following" component={Following} />
        <Tab.Screen name="Likes" component={Likes} />
        <Tab.Screen name="Comments" component={Comments} />
      </Tab.Navigator>
    )
}


export default TabNavigation
