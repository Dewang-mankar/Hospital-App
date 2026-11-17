/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React from 'react';
import { View, Text } from 'react-native';
import { createStaticNavigation,useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {Link} from '@react-navigation/native'
import { Button } from '@react-navigation/elements';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Hospital from './pages/Hospital'
import Hospital1 from './pages/Hospital1'
import Home from './pages/Home'
import Aboutus from './pages/Aboutus'

const RootStack = createNativeStackNavigator({
  initialRouteName: 'Home',

  screenOptions: {
    headerStyle: {
      backgroundColor: 'tomato',
    },
    headerTintColor: 'white',
  },

  screens: {
    Home: {
      screen: Home,
      options: {
        title: 'Home Page',
      },
    },

    Aboutus: {
      screen: Aboutus,
      options: {
        title: 'About Us',
      },
    },

    Doctor: {
      screen: Hospital,
      options: {
        title: 'Doctor',
      },
    },

    OPD: {
      screen: Hospital1,
      options: {
        title: 'OPD',
      },
    },
  },
});


const Navigation = createStaticNavigation(RootStack);

export default function App() {
  return(
    
     <Navigation/>
    
  )
}





