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

    const newPrompt = (text) => {



    }
    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Stack.Screen
                    options={{
                        headerTitle: "Prompts",
                        headerTitleAlign: 'center',
                        headerShadowVisible: false,
                        headerShown: true,

                    }}
                />
            </View>
            <View style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', gap: 28, marginLeft: 10, marginRight: 10 }}>
                    <Text style={styles.promptTextLong}>How does _ apply to...</Text>
                    <Text style={{ backgroundColor: "#E6EEFA", height: 40, width: 120, borderRadius: 20, textAlignVertical: 'center', paddingLeft: 10 }}>How to...</Text>
                </View>
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', gap: 28, marginLeft: 10, marginRight: 10 }}>
                    <Text style={{ backgroundColor: "#E6EEFA", height: 40, width: 120, borderRadius: 20, textAlignVertical: 'center', paddingLeft: 10 }}>When did...</Text>
                    <Text style={styles.promptTextLong}>Find me resources on...</Text>
                </View>
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', gap: 28, marginLeft: 10, marginRight: 10 }}>
                    <Text style={styles.promptTextLong}>Can _ improve...</Text>
                    <Text style={{ backgroundColor: "#E6EEFA", height: 40, width: 120, borderRadius: 20, textAlignVertical: 'center', paddingLeft: 10 }}>Why do...</Text>
                </View>
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', gap: 28, marginLeft: 10 }}>
                    <Text style={{ backgroundColor: "#E6EEFA", height: 40, width: 120, borderRadius: 20, textAlignVertical: 'center', paddingLeft: 10 }}>What causes...</Text>
                    <Text style={styles.promptTextLong}>lksadsad</Text>
                </View>
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', gap: 28, marginLeft: 10, marginRight: 10 }}>
                    <Text style={styles.promptTextLong}>lksadsad</Text>
                    <Text style={{ backgroundColor: "#E6EEFA", height: 40, width: 120, borderRadius: 20, textAlignVertical: 'center', paddingLeft: 10 }}>lksadsad</Text>
                </View>
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', gap: 28, marginLeft: 10, marginRight: 10 }}>
                    <Text style={{ backgroundColor: "#E6EEFA", height: 40, width: 120, borderRadius: 20, textAlignVertical: 'center', paddingLeft: 10 }}>lksadsad</Text>
                    <Text style={styles.promptTextLong}>lksadsad</Text>
                </View>

                <View style={{ marginLeft: 10, marginRight: 10, marginTop: 10 }}>
                    <View style={styles.textInputContainer}>
                        <TextInput
                            placeholder='How to...'
                            autoCapitalize='none' />
                    </View>
                </View>
            </View>
            <View style={styles.buttonsContainer}>
                <TouchableOpacity
                    style={styles.mainButton}
                    onPress={() => {
                        router.push('pages/Home/Home');
                    }}>
                    <Text style={{ color: 'white' }}>Continue</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.secondaryButton}
                    onPress={() => {

                    }}>
                    <Text style={{ color: 'black' }}>Cancel</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Home;