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
import Navbar from './Navbar'
const Home = () => {
    const navigation = useNavigation();
    return (
        <View style={{flex:1,backgroundColor:'white'}} >
            <View style={{alignItems:'center',justifyContent:'center',flex:1}}>
                <View >
                <Text style={{ fontSize: 20, fontWeight: 'bold', }}>
                HELLO WELCOME TO OUR HOSPITAL APP
            </Text>
            </View>
            </View>
            <Navbar/>
        </View>
    );
}
export default Home