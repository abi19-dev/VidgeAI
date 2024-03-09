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
import { Stack, Link, router } from 'expo-router';
import { Modal, TouchableWithoutFeedback } from 'react-native';
import styles from './style/styles';

const Home = () => {

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
                        <View style={{ width: 350, height: 268, borderRadius: 30, alignSelf: "center" }}><Image style={{ width: 350, height: 268, borderRadius: 30, alignSelf: "center" }} source={require('./images/panorama1.jpg')} /></View>
                    </View>
                    <View style={{ width: 370, height: 350, backgroundColor: "#E6EEFA", borderRadius: 40 }}>
                        <View style={{ display: "flex", flexDirection: "row", alignContent: "center", alignItems: "center", gap: 10 }}>
                            <View style={{}}><Image style={styles.profilePicture} source={require('../../avatar.png')} /></View>
                            <View style={{ display: "flex", flexDirection: "column" }}>
                                <Text style={{ fontWeight: "bold" }}>Farita Smith</Text>
                                <Text>@SmithFa</Text>
                            </View>
                        </View>
                        <View style={{ width: 350, height: 268, backgroundColor: "#5790DF", borderRadius: 30, alignSelf: "center" }}><Image style={{ width: 350, height: 268, borderRadius: 30, alignSelf: "center" }} source={require('./images/leonardo.webp')} /></View>
                    </View>
                    <View style={{ width: 370, height: 350, backgroundColor: "#E6EEFA", borderRadius: 40 }}>
                        <View style={{ display: "flex", flexDirection: "row", alignContent: "center", alignItems: "center", gap: 10 }}>
                            <View style={{}}><Image style={styles.profilePicture} source={require('../../avatar.png')} /></View>
                            <View style={{ display: "flex", flexDirection: "column" }}>
                                <Text style={{ fontWeight: "bold" }}>Farita Smith</Text>
                                <Text>@SmithFa</Text>
                            </View>
                        </View>
                        <View style={{ width: 350, height: 268, backgroundColor: "#5790DF", borderRadius: 30, alignSelf: "center" }}><Image style={{ width: 350, height: 268, borderRadius: 30, alignSelf: "center" }} source={require('./images/theRock.jpg')} /></View>
                    </View>
                    <View style={{ width: 370, height: 350, backgroundColor: "#E6EEFA", borderRadius: 40 }}>
                        <View style={{ display: "flex", flexDirection: "row", alignContent: "center", alignItems: "center", gap: 10 }}>
                            <View style={{}}><Image style={styles.profilePicture} source={require('../../avatar.png')} /></View>
                            <View style={{ display: "flex", flexDirection: "column" }}>
                                <Text style={{ fontWeight: "bold" }}>Farita Smith</Text>
                                <Text>@SmithFa</Text>
                            </View>
                        </View>
                        <View style={{ width: 340, height: 260, backgroundColor: "#5790DF", borderRadius: 30, alignSelf: "center", }}><Image style={{ width: 350, height: 268, borderRadius: 30, alignSelf: "center" }} source={require('./images/neil.jpg')} /></View>
                    </View>
                </View>
            </ScrollView >
            <View style={styles.footer}>
                <TouchableOpacity onPress={() => alert('Left Button Pressed')} style={styles.buttonHome}>
                    <Text style={styles.buttonTextHome}>Left</Text>
                </TouchableOpacity>
                <View style={{ backgroundColor: "white", height: 68, width: 68, borderRadius: 100, }}>
                    <TouchableOpacity onPress={() => router.push('pages/Prompts/Prompts')} style={styles.buttonCreate}>
                        <Text style={styles.buttonTextCreate}>+</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity onPress={() => alert('Right Button Pressed')} style={styles.buttonSearch}>
                    <Text style={styles.buttonTextSearch}>Right</Text>
                </TouchableOpacity>
            </View>
        </View>

    )
}

export default Home;