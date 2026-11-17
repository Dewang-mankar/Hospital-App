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
const App = () => {
  const clinics = [
  {
    id: '1',
    name: 'KG Heart Clinic',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d',
    rating: '4.9',
    location: 'Race Course',
    distance: '1.2 km',
    status: 'Open till 9 PM',
    tags: ['Cardio', 'ECO', 'Lab'],
  },
  {
    id: '2',
    name: 'Vision Eye Care',
    image: 'https://images.unsplash.com/photo-1511174511562-5f7f18b874f8',
    rating: '4.8',
    location: 'Gandhipuram',
    distance: '2 km',
    status: 'Open till 9 PM',
    tags: ['Eye', 'Checkup', 'Lab'],
  },
  {
    id: '3',
    name: 'City Dental Clinic',
    image: 'https://images.unsplash.com/photo-1606811971618-4486d14f3f99',
    rating: '4.7',
    location: 'Main Road',
    distance: '3 km',
    status: 'Open till 8 PM',
    tags: ['Dental', 'Cleaning'],
  },
];
const doctors = [
  {
    id: '1',
    name: 'Dr. Kavya Iyer',
    initials: 'KI',
    specialization: 'Dermatologist',
    experience: '9 yrs',
    fees: '₹500',
  },
  {
    id: '2',
    name: 'Dr. Arvind Raman',
    initials: 'AR',
    specialization: 'Cardiologist',
    experience: '12 yrs',
    fees: '₹700',
  },
  {
    id: '3',
    name: 'Dr. Priya Sharma',
    initials: 'PS',
    specialization: 'Dentist',
    experience: '7 yrs',
    fees: '₹400',
  },
  {
    id: '4',
    name: 'Dr. Rahul Mehta',
    initials: 'RM',
    specialization: 'Neurologist',
    experience: '15 yrs',
    fees: '₹800',
  },
  {
    id: '5',
    name: 'Dr. Sneha Patil',
    initials: 'SP',
    specialization: 'Pediatrician',
    experience: '6 yrs',
    fees: '₹450',
  },
];

  const renderClinic = ({ item }) => {
    return (
      <TouchableOpacity
        style={styles.card}
        
      >

        {/* Clinic Image */}
        <Image
          source={{ uri: item.image }}
          style={styles.image}
        />

        {/* Open Status */}
        <View style={styles.status}>
          <Text style={styles.statusText}>
            ● {item.status}
          </Text>
        </View>

        {/* Clinic Details */}
        <View style={styles.details}>

          <View style={styles.row}>
            <Text style={styles.name}>
              {item.name}
            </Text>

            <Text style={styles.rating}>
              ⭐ {item.rating}
            </Text>
          </View>

          <Text style={styles.location}>
            📍 {item.location} · {item.distance}
          </Text>

          {/* Tags */}
          <View style={styles.tags}>
            {item.tags.map((tag, index) => (
              <Text key={index} style={styles.tag}>
                {tag}
              </Text>
            ))}
          </View>

        </View>

      </TouchableOpacity>
    );
  };
  const renderDoctor =({item})=>
  {
    return(
    <TouchableOpacity style={{height:60,marginRight:20,borderRadius:20,backgroundColor:'white',flexDirection:'row',alignItems:'center',paddingHorizontal:10,marginVertical:5,justifyContent: 'space-between',}}>
      <View style={{height: 50,width:50,borderRadius:25,backgroundColor:'#F2A065',justifyContent:'center',alignItems:'center'}}>
    <Text style={{fontSize:20}}>{item.initials }</Text>
      </View>
      <View style={{marginLeft:-100}}>
        <Text style={{fontWeight:'bold',fontSize:16}}>{item.name}</Text>
        <View style={{flexDirection:'row',gap:5}}>
        <Text >{item.specialization}</Text>
        <Text>{item.experience}</Text>
        </View>
      </View>
      <View>
      <Text style={{fontWeight:'bold',fontSize:16,}}>{item.fees}</Text>
      </View>
    </TouchableOpacity>
    )
  }



  return ( 
    <ScrollView style={{ flex:1,backgroundColor:'#F5F8FD',paddingBottom:100}}>
      <StatusBar barStyle="dark-content"/>
      <View style={{marginHorizontal:20}}>
      <View style={styles.header}>
        <View style={styles.circle}>
          <Text style={{fontSize:18,color:'white'}}>MS</Text>
        </View>
        <View style={styles.innertext}>
          <Text style={{fontSize:16,color:'#B1B7BF'}}>Hello, Meera</Text>
          <Text style={{fontSize:23,marginTop:-9,fontWeight:'bold'}}>How are you today?</Text>
        </View>
        <View style={styles.notification}>
          <TouchableOpacity>
            <Ionicons name="notifications-outline" size={30} color="black" />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.inputContainer }>
        <View style={{flexDirection:'row',alignItems:'center',}}>
        <Ionicons name="search" size={23} color="black" style={{marginLeft:10}} />
        <TextInput placeholder="Search doctor, clinic, symptom" placeholderTextColor={'black'} style={{color:'black'}} />
        </View>
        
        <View style={{height:45,width:45,backgroundColor:'#3170FB',borderRadius:20,margin:5,padding:5}}>
          <Ionicons name="list-outline" size={30} color="#D0F8FF" style={{alignSelf:'center'}}/>
        </View>
      </View>

      <View style={styles.doctorcard}>
        <View style={{flexDirection:'row',justifyContent:'space-between'}}>
          <View style={styles.circle}>
            <Text style={{fontSize:20,color:'#D0F8FF'}}>AR</Text>
          </View>
          <View style={{marginLeft:-50}}>
            <Text style={{fontWeight:'bold',fontSize:20,color:'#D0F8FF'}}>Dr. Arvind Raman</Text>
            <Text style={{color:'#D0F8FF'}}>Cardiologist.KG Heart Clinic</Text>
            
          </View>
          <View style={styles.notification}>
            <Ionicons name="videocam-outline" color="#000" size={24} />
          </View>
        </View>
        <View style={{height:45,borderRadius:25,alignItems:'center',flexDirection:'row',marginTop:15,backgroundColor:'#5383F1',justifyContent:'space-around'}}>
          <View style={{flexDirection:'row',gap:4}}>
            <Ionicons name="calendar-outline" color="#D0F8FF" size={24} />
            <Text style={{color:'#D0F8FF'}}>Fri, 3 Oct</Text>
          </View>
          <View style={{flexDirection:'row',gap:4}}>
            <Ionicons name="time-outline" color="#D0F8FF" size={24} />
            <Text style={{color:'#D0F8FF'}}>10:30 AM</Text>
          </View>
          <View style={{flexDirection:'row',gap:4,}}>
            <Ionicons name="checkmark-outline" color='#D0F8FF' size={24} />
            <Text style={{color:'#D0F8FF'}}>
              Confirmed
            </Text>
          </View>
        </View>
</View>
<View style={styles.specialityContainer}>

  <View style={styles.specialityHeader}>
    <Text style={styles.specialityTitle}>Specialities</Text>
    <Pressable>
      <Text style={styles.seeAllText}>See all</Text>
    </Pressable>
  </View>
  <View style={styles.specialityRow}>
    <Pressable style={styles.specialityItem}>
      <View style={[styles.specialityIconBox, {backgroundColor: '#FCE8E8'}]}>
        <Ionicons name="heart-outline" size={23} color="#E66B72" />
      </View>
      <Text style={styles.specialityName}>Cardio</Text>
    </Pressable>

    {/* Dental */}
    <Pressable style={styles.specialityItem}>
      <View style={[styles.specialityIconBox, {backgroundColor: '#E8F0FF'}]}>
        <Ionicons name="medical-outline" size={23} color="#6C91D9" />
      </View>
      <Text style={styles.specialityName}>Dental</Text>
    </Pressable>

    {/* Eye */}
    <Pressable style={styles.specialityItem}>
      <View style={[styles.specialityIconBox, {backgroundColor: '#E2F7F2'}]}>
        <Ionicons name="eye-outline" size={23} color="#55BBA5" />
      </View>
      <Text style={styles.specialityName}>Eye</Text>
    </Pressable>

    {/* Child */}
    <Pressable style={styles.specialityItem}>
      <View style={[styles.specialityIconBox, {backgroundColor: '#FFF2D9'}]}>
        <Ionicons name="happy-outline" size={23} color="#E6AD45" />
      </View>
      <Text style={styles.specialityName}>Child</Text>
    </Pressable>

  </View>
</View>

</View>
    <View style={styles.container}>

      <View style={styles.heading}>
        <Text style={styles.title}>Clinics near you</Text>

        <TouchableOpacity>
          <Text style={styles.map}>Map view</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={clinics}
        renderItem={renderClinic}
        keyExtractor={(item) => item.id}
        horizontal={true} 
      />
    </View>
    <View style={[styles.container,{marginRight:0}]}>

      <View style={styles.heading}>
        <Text style={styles.title}>Top Doctors</Text>

        <TouchableOpacity>
          <Text style={styles.map}>view all</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={doctors}
        renderItem={renderDoctor}
        keyExtractor={(item) => item.id}
         
      />
    </View>
    <Navbar/>
    
    </ScrollView>
  );
};



 

export default App;