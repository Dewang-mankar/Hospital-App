import { StyleSheet,Dimensions } from 'react-native';
import React from 'react';
 const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;
const design = StyleSheet.create({
   
    card: { height: 40, width: (windowWidth - 40) / 3.2, borderRadius: 10, backgroundColor: '#FEFFFF', justifyContent: 'center', alignItems: 'center' }
})
export default design;