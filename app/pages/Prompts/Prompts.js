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
    const [isEnabled, setIsEnabled] = useState(false);
    const [textInputValue, setTextInputValue] = useState('');


    const handleButtonPress = (text) => {
        setIsEnabled(true);
        const newText = text;
        setTextInputValue("");
        setTextInputValue(prevText => prevText + newText);
    };

    const handleChangeText = (text) => {

        setTextInputValue(text);
    };
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
            <View style={{ display: 'flex', flexDirection: 'column', gap: 32, marginTop: 10 }}>
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', gap: 28, marginLeft: 10, marginRight: 10 }}>
                    <TouchableOpacity
                        onPress={() => {
                            handleButtonPress('How does _ apply to ');
                        }}
                    >
                        <Text style={styles.promptTextLong}>How does _ apply to...</Text>
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
                            handleButtonPress('Can _ improve ');
                        }}
                    >
                        <Text style={styles.promptTextLong}>Can _ improve...</Text>
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
                            handleButtonPress('What causes ');
                        }}
                    ><Text style={styles.promptTextLong}>lksadsad</Text></TouchableOpacity>
                </View>
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', gap: 28, marginLeft: 10, marginRight: 10 }}>
                    <TouchableOpacity
                        onPress={() => {
                            handleButtonPress('What causes ');
                        }}
                    ><Text style={styles.promptTextLong}>lksadsad</Text></TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => {
                            handleButtonPress('What causes ');
                        }}
                    >
                        <Text style={styles.promptTextShort}>lksadsad</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', gap: 28, marginLeft: 10, marginRight: 10 }}>
                    <TouchableOpacity
                        onPress={() => {
                            handleButtonPress('What causes ');
                        }}
                    >
                        <Text style={styles.promptTextShort}>lksadsad</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => {
                            handleButtonPress('What causes ');
                        }}
                    >
                        <Text style={styles.promptTextLong}>lksadsad</Text>
                    </TouchableOpacity>
                </View>

                <View style={{ marginLeft: 10, marginRight: 10, marginTop: 10 }}>
                    <View style={styles.textInputContainer}>

                        <TextInput
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
                        router.push('pages/Character/Character');
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