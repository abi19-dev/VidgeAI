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
    ActivityIndicator
} from 'react-native';
import { Stack, Link, router, useLocalSearchParams } from 'expo-router';
import { Modal, TouchableWithoutFeedback } from 'react-native';
import styles from './style/styles';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Home = () => {
    const cond = useLocalSearchParams();
    return (
        <View style={{ alignItems: 'center', backgroundColor: 'white' }}>
            <ScrollView style={styles.container}>
                <View style={styles.headerContainer}>
                    <Stack.Screen
                        options={{
                            headerTitle: "Home",
                            headerTitleAlign: 'center',
                            headerShadowVisible: false,
                            headerShown: true,

                            headerRight: () => (
                                <Image style={styles.profilePicture} source={require('../../transparentno.png')} />
                            )
                        }}
                    />
                </View>

                <View style={{ display: "flex", flexDirection: "column", gap: 14, paddingBottom: 100, backgroundColor: "white" }}>
                    <View style={{ width: 370, height: 350, backgroundColor: "#E6EEFA", borderRadius: 40 }}>
                        <View style={{ display: "flex", flexDirection: "row", alignContent: "center", alignItems: "center", gap: 10 }}>
                            <View style={{}}><Image style={styles.profilePicture} source={require('../../avatar.png')} /></View>
                            <View style={{ display: "flex", flexDirection: "column" }}>
                                <Text style={{ fontWeight: "bold" }}>Dennis Hoffman</Text>
                                <Text>@dennisHoffman</Text>
                            </View>
                        </View>
                        <View style={{ width: 350, height: 268, borderRadius: 30, alignSelf: "center" }}><Image style={{ width: 350, height: 268, borderRadius: 30, alignSelf: "center" }} source={require('./images/MorganFreeman.jpg')} /><Ionicons style={{ position: 'absolute', marginLeft: "37%", marginTop: "20%" }} name="play" size={100} color="#E6EEFA" /><View style={{ width: 350, height: 50, bottom: 0, backgroundColor: '#E6EEFA', borderBottomLeftRadius: 30, borderBottomRightRadius: 30, opacity: 0.6, position: 'absolute' }}>
                            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                                <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start' }}><Ionicons style={{ marginTop: 7, marginLeft: 7 }} name="heart" size={30} color="red" /><Text>0</Text>
                                </View>
                                <Ionicons style={{ marginTop: 7, marginRight: 7 }} name="share" size={30} color="black" />
                            </View>
                        </View></View>
                    </View>
                    <View style={{ width: 370, height: 350, backgroundColor: "#E6EEFA", borderRadius: 40 }}>
                        <View style={{ display: "flex", flexDirection: "row", alignContent: "center", alignItems: "center", gap: 10 }}>
                            <View style={{}}><Image style={styles.profilePicture} source={require('../../avatar.png')} /></View>
                            <View style={{ display: "flex", flexDirection: "column" }}>
                                <Text style={{ fontWeight: "bold" }}>Dennis Hoffman</Text>
                                <Text>@dennisHoffman</Text>
                            </View>
                        </View>
                        <View style={{ width: 350, height: 268, borderRadius: 30, alignSelf: "center" }}><Image style={{ width: 350, height: 268, borderRadius: 30, alignSelf: "center" }} source={require('./images/panorama1.jpg')} /><Ionicons style={{ position: 'absolute', marginLeft: "37%", marginTop: "20%" }} name="play" size={100} color="#E6EEFA" /><View style={{ width: 350, height: 50, bottom: 0, backgroundColor: '#E6EEFA', borderBottomLeftRadius: 30, borderBottomRightRadius: 30, opacity: 0.6, position: 'absolute' }}>
                            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                                <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start' }}><Ionicons style={{ marginTop: 7, marginLeft: 7 }} name="heart" size={30} color="red" /><Text>126k</Text>
                                </View>
                                <Ionicons style={{ marginTop: 7, marginRight: 7 }} name="share" size={30} color="black" />
                            </View>
                        </View></View>
                    </View>
                    <View style={{ width: 370, height: 350, backgroundColor: "#E6EEFA", borderRadius: 40 }}>
                        <View style={{ display: "flex", flexDirection: "row", alignContent: "center", alignItems: "center", gap: 10 }}>
                            <View style={{}}><Image style={styles.profilePicture} source={require('../../avatar.png')} /></View>
                            <View style={{ display: "flex", flexDirection: "column" }}>
                                <Text style={{ fontWeight: "bold" }}>Farita Smith</Text>
                                <Text>@SmithFa</Text>
                            </View>
                        </View>
                        <View style={{ width: 350, height: 268, backgroundColor: "#5790DF", borderRadius: 30, alignSelf: "center" }}><Image style={{ width: 350, height: 268, borderRadius: 30, alignSelf: "center" }} source={require('./images/leonardo.webp')} /><Ionicons style={{ position: 'absolute', marginLeft: "37%", marginTop: "20%" }} name="play" size={100} color="#E6EEFA" /><View style={{ width: 350, height: 50, bottom: 0, backgroundColor: '#E6EEFA', borderBottomLeftRadius: 30, borderBottomRightRadius: 30, opacity: 0.6, position: 'absolute' }}>
                            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                                <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start' }}><Ionicons style={{ marginTop: 7, marginLeft: 7 }} name="heart" size={30} color="red" /><Text>126k</Text>
                                </View>
                                <Ionicons style={{ marginTop: 7, marginRight: 7 }} name="share" size={30} color="black" />
                            </View>
                        </View></View>
                    </View>
                    <View style={{ width: 370, height: 350, backgroundColor: "#E6EEFA", borderRadius: 40 }}>
                        <View style={{ display: "flex", flexDirection: "row", alignContent: "center", alignItems: "center", gap: 10 }}>
                            <View style={{}}><Image style={styles.profilePicture} source={require('../../avatar.png')} /></View>
                            <View style={{ display: "flex", flexDirection: "column" }}>
                                <Text style={{ fontWeight: "bold" }}>Farita Smith</Text>
                                <Text>@SmithFa</Text>
                            </View>
                        </View>
                        <View style={{ width: 350, height: 268, backgroundColor: "#5790DF", borderRadius: 30, alignSelf: "center" }}><Image style={{ width: 350, height: 268, borderRadius: 30, alignSelf: "center" }} source={require('./images/theRock.jpg')} /><Ionicons style={{ position: 'absolute', marginLeft: "37%", marginTop: "20%" }} name="play" size={100} color="#E6EEFA" /><View style={{ width: 350, height: 50, bottom: 0, backgroundColor: '#E6EEFA', borderBottomLeftRadius: 30, borderBottomRightRadius: 30, opacity: 0.6, position: 'absolute' }}>
                            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                                <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start' }}><Ionicons style={{ marginTop: 7, marginLeft: 7 }} name="heart" size={30} color="red" /><Text>126k</Text>
                                </View>
                                <Ionicons style={{ marginTop: 7, marginRight: 7 }} name="share" size={30} color="black" />
                            </View>
                        </View></View>
                    </View>
                    <View style={{ width: 370, height: 350, backgroundColor: "#E6EEFA", borderRadius: 40 }}>
                        <View style={{ display: "flex", flexDirection: "row", alignContent: "center", alignItems: "center", gap: 10 }}>
                            <View style={{}}><Image style={styles.profilePicture} source={require('../../avatar.png')} /></View>
                            <View style={{ display: "flex", flexDirection: "column" }}>
                                <Text style={{ fontWeight: "bold" }}>Farita Smith</Text>
                                <Text>@SmithFa</Text>
                            </View>
                        </View>
                        <View style={{ width: 350, height: 268, backgroundColor: "#5790DF", borderRadius: 30, alignSelf: "center", }}><Image style={{ width: 350, height: 268, borderRadius: 30, alignSelf: "center" }} source={require('./images/neil.jpg')} /><Ionicons style={{ position: 'absolute', marginLeft: "37%", marginTop: "20%" }} name="play" size={100} color="#E6EEFA" />
                            <View style={{ width: 350, height: 50, bottom: 0, backgroundColor: '#E6EEFA', borderBottomLeftRadius: 30, borderBottomRightRadius: 30, opacity: 0.6, position: 'absolute' }}>
                                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start' }}><Ionicons style={{ marginTop: 7, marginLeft: 7 }} name="heart" size={30} color="red" /><Text>126k</Text>
                                    </View>
                                    <Ionicons style={{ marginTop: 7, marginRight: 7 }} name="share" size={30} color="black" />
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView >
            <View style={styles.footer}>
                <TouchableOpacity onPress={() => alert('Left Button Pressed')} style={styles.buttonHome}>
                    <Ionicons style={{}} name="home" size={30} color="#5790DF" />
                </TouchableOpacity>
                <View style={{ backgroundColor: "white", height: 68, width: 68, borderRadius: 100, }}>
                    <TouchableOpacity onPress={() => router.push('pages/Prompts/Prompts')} style={styles.buttonCreate}>
                        <Text style={styles.buttonTextCreate}>+</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity onPress={() => alert('Right Button Pressed')} style={styles.buttonSearch}>
                    <Ionicons style={{}} name="search" size={30} color="#5790DF" />
                </TouchableOpacity>
            </View>
        </View>

    )
}

export default Home;