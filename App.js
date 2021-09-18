
import React,{useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native'
import StackNavigation from './src/navigations/StackNavigation';
import GlobalFont from 'react-native-global-font'

const App = () => {
 useEffect(() => {
  let fontName = 'Quicksand-Regular'
  GlobalFont.applyGlobal(fontName)
 }, [])
  return (
    <NavigationContainer>
     <StackNavigation/>
    </NavigationContainer>
  );
};



export default App;
