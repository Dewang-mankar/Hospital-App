import { StyleSheet } from 'react-native';
import React from 'react';
const styles = StyleSheet.create({

  container: {
    marginTop: 20,
    //paddingHorizontal: 15,
    marginLeft: 20
  


  },

  heading: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
    marginRight:20
  },

  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#172033',
  },

  map: {
    color: '#2864DC',
    fontWeight: 'bold',
    fontSize:16
  },

  card: {
    width: 280,
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    overflow: 'hidden',
    marginRight: 15,
    elevation: 4,
    marginBottom: 10,
  },

  image: {
    width: '100%',
    height: 125,
  },

  status: {
    position: 'absolute',
    top: 12,
    left: 12,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 15,
  },

  statusText: {
    color: '#159B70',
    fontSize: 11,
    fontWeight: 'bold',
  },

  details: {
    padding: 12,
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  name: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#172033',
  },

  rating: {
    fontSize: 13,
    fontWeight: 'bold',
  },

  location: {
    color: '#858585',
    marginTop: 8,
    fontSize: 13,
  },

  tags: {
    flexDirection: 'row',
    marginTop: 10,
    gap: 8,
  },

  tag: {
    backgroundColor: '#EAF1FF',
    color: '#3868B8',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 8,
    fontSize: 11,
  },
  header: {
    flexDirection: 'row',
    justifyContent:'space-between',
    marginTop: 50,
    alignItems:'center',


  },
  circle: { height: 50, width: 50, borderRadius: 25, backgroundColor: '#588CF3', justifyContent: 'center', alignItems: 'center' },
  notification:{
    borderRadius:20,
    height:45,
    width:45,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'#FFFEFD'
  },
  innertext:{
    marginLeft:-60,
},
inputContainer:{
  height:50,
  backgroundColor:'#FFFFFF',
  justifyContent:'center',
  flexDirection:'row',
  alignItems:'center',
  marginTop:20,
  borderRadius:20,
  justifyContent:'space-between',
 
},
doctorcard:{
  marginTop:20,
  //marginHorizontal:10,
  borderRadius:20,
  height:140,
  backgroundColor:'#306DEB',
  padding:15
},

  // Specialities Section

  specialityContainer: {
    marginTop: 20,
  },

  specialityHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },

  specialityTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#172033',
  },

  seeAllText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#4779D1',
  },

  specialityRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  specialityItem: {
    alignItems: 'center',
  },

  specialityIconBox: {
    height: 58,
    width: 58,
    borderRadius: 17,
    justifyContent: 'center',
    alignItems: 'center',
  },

  specialityName: {
    fontSize: 12,
    fontWeight: '600',
    color: '#333333',
    marginTop: 7,
  },


});
export default styles;