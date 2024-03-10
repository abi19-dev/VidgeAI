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


const Home = () => {


    return (
        <ScrollView style={styles.container}>
            <View style={styles.headerContainer}>
                <Stack.Screen
                    options={{
                        headerTitle: "Character",
                        headerTitleAlign: 'center',
                        headerShadowVisible: false,
                        headerShown: true,

                        headerRight: () => (
                            <Image style={styles.profilePicture} source={require('../../transparentno.png')} />
                        )
                    }}
                />
            </View>
            <View style={{ display: 'flex', flexDirection: 'column', marginTop: 30, marginBottom: 30 }}>
                <View style={{ display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'space-between' }}>
                    <TouchableOpacity
                        onPress={() => router.push('pages/Publish/Publish')}
                    >
                        <View style={{ width: 158, height: 172, backgroundColor: '#E6EEFA', marginLeft: 20, borderRadius: 30 }}><Image style={styles.freeman} source={require('./images/morganfreeman.png')} />
                            <View style={{ width: 158, height: 50, bottom: 0, backgroundColor: '#5790DF', borderBottomLeftRadius: 30, borderBottomRightRadius: 30, opacity: 0.8, position: 'absolute' }}>
                                <Text style={{ color: "white", justifyContent: 'center', alignSelf: 'center', top: 13, fontWeight: 'bold' }}>Morgan Freeman</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={{ width: 158, height: 172, backgroundColor: '#E6EEFA', marginRight: 20, borderRadius: 30 }}><Image style={styles.spongebob} source={require('./images/spongebob.png')} />
                            <View style={{ width: 158, height: 50, bottom: 0, backgroundColor: '#5790DF', borderBottomLeftRadius: 30, borderBottomRightRadius: 30, opacity: 0.8, position: 'absolute' }}><Text style={{ color: "white", justifyContent: 'center', alignSelf: 'center', top: 13, fontWeight: 'bold' }}>Spongebob</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>

                <View style={{ display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'space-between', marginTop: 30 }}>
                    <TouchableOpacity>
                        <View style={{ width: 158, height: 172, backgroundColor: '#E6EEFA', marginLeft: 20, borderRadius: 30 }}><Image style={styles.jala} source={require('./images/jala.png')} />
                            <View style={{ width: 158, height: 50, bottom: 0, backgroundColor: '#5790DF', borderBottomLeftRadius: 30, borderBottomRightRadius: 30, opacity: 0.8, position: 'absolute' }}><Text style={{ color: "white", justifyContent: 'center', alignSelf: 'center', top: 13, fontWeight: 'bold' }}>Jala Brat</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={{ width: 158, height: 172, backgroundColor: '#E6EEFA', marginRight: 20, borderRadius: 30 }}><Image style={styles.biden} source={require('./images/bidenFinal.png')} /><View style={{ width: 158, height: 50, bottom: 0, backgroundColor: '#5790DF', borderBottomLeftRadius: 30, borderBottomRightRadius: 30, opacity: 0.8, position: 'absolute' }}><Text style={{ color: "white", justifyContent: 'center', alignSelf: 'center', top: 13, fontWeight: 'bold' }}>Joe Biden</Text>
                        </View>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{ display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'space-between', marginTop: 30 }}>
                    <TouchableOpacity>
                        <View style={{ width: 158, height: 172, backgroundColor: '#E6EEFA', marginLeft: 20, borderRadius: 30 }}><Image style={styles.spiderman} source={require('./images/spiderman.png')} /><View style={{ width: 158, height: 50, bottom: 0, backgroundColor: '#5790DF', borderBottomLeftRadius: 30, borderBottomRightRadius: 30, opacity: 0.8, position: 'absolute' }}><Text style={{ color: "white", justifyContent: 'center', alignSelf: 'center', top: 13, fontWeight: 'bold' }}>Spiderman</Text>
                        </View></View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={{ width: 158, height: 172, backgroundColor: '#E6EEFA', marginRight: 20, borderRadius: 30 }}><Image style={styles.ronaldo} source={require('./images/ronaldo.png')} /><View style={{ width: 158, height: 50, bottom: 0, backgroundColor: '#5790DF', borderBottomLeftRadius: 30, borderBottomRightRadius: 30, opacity: 0.8, position: 'absolute' }}><Text style={{ color: "white", justifyContent: 'center', alignSelf: 'center', top: 13, fontWeight: 'bold' }}>Cristiano Ronaldo</Text>
                        </View></View>
                    </TouchableOpacity>
                </View>
                <View style={{ display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'space-between', marginTop: 30 }}>
                    <TouchableOpacity>
                        <View style={{ width: 158, height: 172, backgroundColor: '#E6EEFA', marginLeft: 20, borderRadius: 30 }}><Image style={styles.ben10} source={require('./images/ben10.png')} /><View style={{ width: 158, height: 50, bottom: 0, backgroundColor: '#5790DF', borderBottomLeftRadius: 30, borderBottomRightRadius: 30, opacity: 0.8, position: 'absolute' }}><Text style={{ color: "white", justifyContent: 'center', alignSelf: 'center', top: 13, fontWeight: 'bold' }}>Ben10</Text>
                        </View></View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={{ width: 158, height: 172, backgroundColor: '#E6EEFA', marginRight: 20, borderRadius: 30 }}><Image style={styles.batman} source={require('./images/batman.png')} /><View style={{ width: 158, height: 50, bottom: 0, backgroundColor: '#5790DF', opacity: 0.8, borderBottomLeftRadius: 30, borderBottomRightRadius: 30, position: 'absolute' }}><Text style={{ color: "white", justifyContent: 'center', alignSelf: 'center', top: 13, fontWeight: 'bold' }}>Batman</Text>
                        </View></View>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    )
}

export default Home;