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
import AsyncStorage from '@react-native-async-storage/async-storage';


const Home = () => {
    const [isEnabled, setIsEnabled] = useState(false);
    const [textInputValue, setTextInputValue] = useState('');
    const [inputLen, setInputLen] = useState(0);



    const storeData = async () => {
        try {
            await AsyncStorage.setItem('Prompt', textInputValue)
        } catch (e) {

        }
    }
    const handleButtonPress = (text) => {
        setIsEnabled(true);
        const newText = text;
        setTextInputValue("");
        setTextInputValue(prevText => prevText + newText);
    };

    const handleChangeText = (text) => {
        setTextInputValue(text);
        setInputLen(textInputValue.length);
    };

    const onContinue = () => {
        if (inputLen > 7) {
            storeData()
            router.push('pages/Character/Character');
        }
        else {
            Alert.alert("Incomplete input!");
        }
    }
    return (

        <ScrollView style={styles.container}>
            <View style={styles.headerContainer}>
                <Stack.Screen
                    options={{
                        headerTitle: "Prompts",
                        headerTitleAlign: 'center',
                        headerShadowVisible: false,
                        headerShown: true,

                        headerRight: () => (
                            <Image style={styles.profilePicture} source={require('../../transparentno.png')} />
                        )
                    }}

                />
            </View>
            <View style={{ display: 'flex', flexDirection: 'column', gap: 32, marginTop: 10 }}>
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', gap: 28, marginLeft: 10, marginRight: 10 }}>
                    <TouchableOpacity
                        onPress={() => {
                            handleButtonPress('Show me how ');
                        }}
                    >
                        <Text style={styles.promptTextLong}>Show me how...</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => {
                            handleButtonPress('How to ');
                        }}
                    >
                        <Text style={styles.promptTextShort}>How to...</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', gap: 28, marginLeft: 10, marginRight: 10 }}>
                    <TouchableOpacity
                        onPress={() => {
                            handleButtonPress('When did ');
                        }}
                    >
                        <Text style={styles.promptTextShort}>When did...</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => {
                            handleButtonPress('Find me resources on ');
                        }}
                    >
                        <Text style={styles.promptTextLong}>Find me resources on...</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', gap: 28, marginLeft: 10, marginRight: 10 }}>
                    <TouchableOpacity
                        onPress={() => {
                            handleButtonPress('Give me tips for ');
                        }}
                    >
                        <Text style={styles.promptTextLong}>Give me tips for...</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => {
                            handleButtonPress('Why do ');
                        }}
                    >
                        <Text style={styles.promptTextShort}>Why do...</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', gap: 28, marginLeft: 10 }}>
                    <TouchableOpacity
                        onPress={() => {
                            handleButtonPress('What causes ');
                        }}
                    ><Text style={styles.promptTextShort}>What causes...</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => {
                            handleButtonPress('Can you explain ');
                        }}
                    ><Text style={styles.promptTextLong}>Can you explain...</Text></TouchableOpacity>
                </View>
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', gap: 28, marginLeft: 10, marginRight: 10 }}>
                    <TouchableOpacity
                        onPress={() => {
                            handleButtonPress('Give me an example of ');
                        }}
                    ><Text style={styles.promptTextLong}>Give me an example of...</Text></TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => {
                            handleButtonPress('What is ');
                        }}
                    >
                        <Text style={styles.promptTextShort}>What is...</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', gap: 28, marginLeft: 10, marginRight: 10 }}>
                    <TouchableOpacity
                        onPress={() => {
                            handleButtonPress('Where did ');
                        }}
                    >
                        <Text style={styles.promptTextShort}>Where did...</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => {
                            handleButtonPress('What is the result of ');
                        }}
                    >
                        <Text style={styles.promptTextLong}>What is the result of...</Text>
                    </TouchableOpacity>
                </View>

                <View style={{ marginLeft: 10, marginRight: 10, marginTop: 10 }}>
                    <View style={styles.textInputContainer}>

                        <TextInput style={{ marginTop: 3 }}
                            autoCapitalize='none'
                            value={textInputValue}
                            onChangeText={handleChangeText}
                            editable={isEnabled || textInputValue.length > 0 ? true : false}
                        />
                    </View>
                </View>
            </View>
            <View style={styles.buttonsContainer}>
                <TouchableOpacity
                    style={styles.mainButton}
                    onPress={() => {
                        onContinue();
                    }}>
                    <Text style={{ color: 'white' }}>Continue</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.secondaryButton}
                    onPress={() => {
                        router.replace('pages/Home/Home')
                    }}>
                    <Text style={{ color: 'black' }}>Cancel</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

export default Home;