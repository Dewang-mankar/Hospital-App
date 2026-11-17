import React from 'react';
import {
  View,
  Text,
  Image,
  Dimensions,
  ScrollView,
  StatusBar,
  TouchableOpacity,
  FlatList,
  TextInput,
  useWindowDimensions,
  Pressable
} from 'react-native';
import styles from '../styling/style';
import {Ionicons} from '@react-native-vector-icons/ionicons';
import Navbar from './Navbar';

const Aboutus =()=>
{
    return(
        <View style={{flex:1,justifyContent:'center',alignItems:'center',backgroundColor:'#EBEDF4'}}>
            <Text style={{fontSize:20,fontWeight:'bold'}}>This is Our About us page</Text>
             <Navbar/>
        </View>
    )
}
export default Aboutus;