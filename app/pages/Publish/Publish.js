import React, { useState, useEffect } from 'react';
import {
    StyleSheet,
    Button,
    View,
    SafeAreaView,
    ScrollView,
    Text,
    Alert,
    Image,
    TouchableOpacity,
    ActivityIndicator,
    TextInput
} from 'react-native';
import { Stack, Link, router } from 'expo-router';
import { Modal, TouchableWithoutFeedback } from 'react-native';
import styles from './style/styles';
import { Video } from 'expo-av';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Home = () => {

    const [userData, setUserData] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            const data = await AsyncStorage.getItem('Prompt');
            setUserData(data);
        };

        fetchData();
    }, []);

    return (
        <ScrollView style={{ backgroundColor: 'white' }}>
            <View style={styles.container}>
                <View style={styles.headerContainer}>
                    <Stack.Screen
                        options={{
                            headerTitle: () => (
                                <View style={{ alignItems: 'center' }}>
                                    <Text style={{ fontSize: 18 }}>{userData}</Text>
                                    <Text style={{ fontSize: 18 }}>By Morgan Freeman</Text>
                                </View>
                            ),
                            headerTitleAlign: 'center',
                            headerShadowVisible: false,
                            headerShown: true,


                            headerRight: () => (
                                <Image style={styles.profilePicture} source={require('../../transparentno.png')} />
                            )
                        }}
                    />
                </View>
                <View style={styles.container}>
                    <View style={{ width: 350, height: 511, borderRadius: 30, alignContent: 'center', justifyContent: 'center', alignSelf: 'center' }}><Video
                        source={require('./images/MorganFreeman.mp4')} // Change the path to your video file
                        style={styles.video}
                        resizeMode="stretch"
                        controls={true}
                        shouldPlay={true}
                    /></View>
                </View>
                <View style={styles.buttonsContainer}>
                    <TouchableOpacity
                        style={styles.mainButton}
                        onPress={() => {

                            router.replace({ pathname: '../Home/HomeCopy', params: { pressed: 1 } });
                        }}>
                        <Text style={{ color: 'white' }}>Save and publish
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.secondaryButton}
                        onPress={() => {
                            Alert.alert("Successfully saved to Vidge library!")
                        }}>
                        <Text style={{ color: 'black' }}>Save</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView >
    )
}

export default Home;