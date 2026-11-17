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
import { createStaticNavigation,useNavigation } from '@react-navigation/native';
import { Ionicons } from '@react-native-vector-icons/ionicons';
const Navbar =()=>
{
    const navigation=useNavigation();
    return(
         <View style={{
    position: 'absolute',
    bottom: 20,
    left: 10,
    right: 10,
    height: 60,
    backgroundColor: 'red',
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    elevation: 10,
    zIndex: 999,
   
}}>

    <TouchableOpacity onPress={() => navigation.navigate('Home')} style={{alignItems:'center'}}>
        <Ionicons name="home-outline" size={25} color="white" />
        <Text style={{color:'white',fontSize:10}}>Home</Text>
    </TouchableOpacity>

    <TouchableOpacity onPress={() => navigation.navigate('Aboutus')} style={{alignItems:'center'}}>
        <Ionicons name="information-circle-outline" size={25} color="white" />
        <Text style={{color:'white',fontSize:10}}>About Us</Text>
    </TouchableOpacity>

    <TouchableOpacity onPress={() => navigation.navigate('Doctor')} style={{alignItems:'center'}}>
        <Ionicons name="medkit-outline" size={25} color="white" />
        <Text style={{color:'white',fontSize:10}}>Doctor</Text>
    </TouchableOpacity>

    <TouchableOpacity onPress={() => navigation.navigate('OPD')} style={{alignItems:'center'}}>
        <Ionicons name="business-outline" size={25} color="white" />
        <Text style={{color:'white',fontSize:10}}>OPD</Text>
    </TouchableOpacity>

</View>
    )
}
export default Navbar;