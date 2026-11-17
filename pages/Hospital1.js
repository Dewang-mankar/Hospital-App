
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

    Pressable
} from 'react-native';
import React, { useState } from 'react';
import design from '../styling/design';
import { Ionicons } from '@react-native-vector-icons/ionicons';
import MapView, { Marker } from 'react-native-maps';
const Hospital1 = () => {
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;
    const [selectedDate, setSelectedDate] = useState(null);
    const renderDates = () => {
        const dates = [];

        for (let i = 1; i <= 31; i++) {
            const date = new Date(2026, 9, i);

            dates.push(
                <Pressable
                    key={i}
                    onPress={() => setSelectedDate(i)}
                    style={{
                        backgroundColor: selectedDate === i ? 'blue' : '#FCFCFE',
                        height: 80, width: 65, borderRadius: 20, justifyContent: 'center', alignItems: 'center'
                    }}
                >

                    <Text style={{ color: selectedDate === i ? 'white' : 'black', fontSize: 16 }}>
                        {date.toLocaleDateString('en-US', { weekday: 'short' })}
                    </Text>

                    <Text style={{ color: selectedDate === i ? 'white' : 'black', fontSize: 18, fontWeight: 'bold' }}>{i}</Text>
                </Pressable>
            );
        }

        return dates;
    };
    return (
        <View style={{ backgroundColor: '#EBEDF4', flex: 1 }}>
            <ScrollView >
                <View>
                    <View style={{ height: windowHeight / 3, backgroundColor: '#CED4E2' }}>
                        <Image source={require('../images/hospital.png')} style={{ height: windowHeight / 3, width: windowWidth }}></Image>
                        <View style={{ position: 'absolute', left: 20, right: 20, flexDirection: 'row', justifyContent: 'space-between', marginTop: 50 }}>
                            <View style={{ height: 40, width: 40, borderRadius: 10, backgroundColor: 'white' }}>
                                <Ionicons name="chevron-back-outline" size={22} color="black" style={{ margin: 9 }} />
                            </View>
                            <View style={{ height: 40, width: 40, borderRadius: 10, backgroundColor: 'white' }}>
                                <Ionicons name="heart-sharp" size={22} color="#EB4749" style={{ margin: 9 }} />
                            </View>
                        </View>
                        <View style={{ position: 'absolute', top: 220, left: 20, right: 20, height: windowHeight / 5.5, backgroundColor: '#FFFFFF', borderRadius: 20, padding: 10 }}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', }}>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <View style={{ width: 50, height: 50, borderRadius: 100, backgroundColor: '#7198FB', justifyContent: 'center', alignItems: 'center' }}>
                                        <Text style={{ fontSize: 20, color: '#C4D9F0' }}>AR</Text>
                                    </View>
                                    <View style={{ marginLeft: 10 }}>
                                        <Text style={{ fontSize: 19, fontWeight: 'bold' }}>Dr. Arvind Raman</Text>
                                        <Text style={{ fontSize: 16, color: 'gray' }}>Cardiologist.MBBS,MD,DM</Text>
                                    </View>
                                </View>
                                <View style={{ height: 40, width: 40, borderRadius: 10, backgroundColor: '#EBF4FE' }}>
                                    <Ionicons name="chatbubble-ellipses-outline" size={22} style={{ margin: 9 }} />
                                </View>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 19 }}>
                                <View>
                                    <Text style={{ fontSize: 18, fontWeight: 'bold' }}>2.4k+</Text>
                                    <Text style={{ color: 'gray' }}>Patients</Text>
                                </View>
                                <View>
                                    <Text style={{ fontSize: 18, fontWeight: 'bold' }}>14 yrs</Text>
                                    <Text style={{ color: 'gray' }}>Experience</Text>
                                </View>
                                <View>
                                    <Text style={{ fontSize: 18, fontWeight: 'bold' }}>4.9</Text>
                                    <Text style={{ color: 'gray' }}>Rating</Text>
                                </View>
                                <View>
                                    <Text style={{ fontSize: 18, fontWeight: 'bold' }}>860</Text>
                                    <Text style={{ color: 'gray' }}>Reviews</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={{ marginTop: 100, }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginLeft: 20 }}>
                            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>October 2026</Text>
                            <View style={{ flexDirection: 'row', }}>
                                <Ionicons name="chevron-back" size={20} style={{ margin: 10 }} />
                                <Ionicons name="chevron-forward" size={20} style={{ margin: 10, marginLeft: -2 }} />
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', }}>
                            <ScrollView horizontal={true}>
                                <View style={{ gap: 10, flexDirection: 'row', paddingLeft: 20, }}>
                                    {renderDates()}
                                </View>
                            </ScrollView>
                        </View>
                        <View style={{ marginTop: 10, marginLeft: 20, marginRight: 20 }}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Available slots</Text>
                                <Text>6 open</Text>
                            </View>
                            <View style={{ marginTop: 10, flexDirection: 'row', gap: 10, flexWrap: 'wrap' }}>
                                <View style={design.card}>
                                    <Text style={{ fontSize: 17, fontWeight: 'bold' }}>09:30 AM</Text>
                                </View>
                                <View style={[design.card, { opacity: 0.4, }]}>
                                    <Text style={{ fontSize: 17, textDecorationLine: 'line-through' }}>10:00 AM</Text>
                                </View>
                                <View style={[design.card, { backgroundColor: '#EEF4FF', borderColor: '#A9B7C9', borderWidth: 2 }]}>
                                    <Text style={{ fontSize: 17, fontWeight: 'bold', color: '#7A9CC6' }}>10:30 AM</Text>
                                </View>
                                <View style={design.card}>
                                    <Text style={{ fontSize: 17, fontWeight: 'bold' }}>11:30 AM</Text>
                                </View>
                                <View style={design.card}>
                                    <Text style={{ fontSize: 17, fontWeight: 'bold' }}>04:30 PM</Text>
                                </View>
                                <View style={design.card}>
                                    <Text style={{ fontSize: 17, fontWeight: 'bold' }}>05:00 PM</Text>
                                </View>

                            </View>
                        </View>

                        <View style={{
                            marginHorizontal: 20,
                            marginTop: 10,
                            backgroundColor: 'white',
                            borderRadius: 15,
                            overflow: 'hidden',
                            elevation: 3,

                        }}>



                            <Image
                                source={require('../images/map.png')}
                                style={{
                                    width: '100%',
                                    height: 130
                                }}
                                resizeMode="cover"
                            />

                            <View style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                padding: 12
                            }}>

                                <View>
                                    <Text style={{
                                        fontSize: 15,
                                        fontWeight: 'bold',
                                        color: '#222'
                                    }}>
                                        KG Heart Clinic, Race Course
                                    </Text>

                                    <Text style={{
                                        fontSize: 12,
                                        color: 'gray',
                                        marginTop: 3
                                    }}>
                                        1.2 km · 6 min drive
                                    </Text>
                                </View>


                                <Pressable
                                    onPress={() => console.log('Directions pressed')}
                                    style={{
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                        backgroundColor: '#EBF3FF',
                                        paddingHorizontal: 12,
                                        paddingVertical: 9,
                                        borderRadius: 10
                                    }}
                                >
                                    <Ionicons
                                        name="navigate"
                                        size={15}
                                        color="#2878F0"
                                    />

                                    <Text style={{
                                        color: '#2878F0',
                                        fontWeight: 'bold',
                                        marginLeft: 5,
                                        fontSize: 13
                                    }}>
                                        Directions
                                    </Text>
                                </Pressable>

                            </View>

                        </View>
                    </View>
                </View>
            </ScrollView>

            <View style={{
                backgroundColor: 'white',
                paddingHorizontal: 20,
                paddingVertical: 15,

                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                elevation: 10,
            }}>

                <View>
                    <Text style={{
                        fontSize: 13,
                        color: '#777'
                    }}>
                        Consultation Fee
                    </Text>

                    <Text style={{
                        fontSize: 24,
                        fontWeight: 'bold',
                        color: '#222'
                    }}>
                        ₹800
                    </Text>
                </View>

                <Pressable
                    onPress={() => alert('Appointment Booked')}
                    style={{
                        backgroundColor: '#2878F0',
                        paddingVertical: 15,
                        paddingHorizontal: 25,
                        borderRadius: 12,
                        width: 200,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                >
                    <Text style={{
                        color: 'white',
                        fontWeight: 'bold',
                        fontSize: 18
                    }}>
                        Book Appointment
                    </Text>
                </Pressable>

            </View>
        </View>



    );
}
export default Hospital1;