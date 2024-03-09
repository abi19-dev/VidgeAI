import {
    StyleSheet,
    Button,
    View,
    SafeAreaView,
    ScrollView,
    Text,
    Alert,
    Image
} from 'react-native';
import {
    GestureHandlerRootView,
} from 'react-native-gesture-handler';
import { Switch, TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { Stack, Link, router } from 'expo-router';
import styles from './style/styles';


const Login = ({ }) => {

    return (
        <GestureHandlerRootView style={{ height: "100%", width: "100%" }}>
            <ScrollView style={styles.pageContainer}>
                <Stack.Screen
                    options={{
                        headerTitle: "",
                        headerShadowVisible: false,
                        headerStyle: { backgroundColor: '#5790DF' }
                    }}
                />
                <View style={styles.logoImageContainer}><Image style={styles.logoImage} source={require('./images/illustration.png')} /></View>
                <View style={styles.bodyContainer}>
                    <Text style={styles.title}>Log in</Text>
                    <View style={styles.textInputContainer}>
                        <TextInput
                            placeholder='Email Address'
                            autoCapitalize='none' />
                    </View>
                    <View style={styles.textInputContainer}>
                        <TextInput
                            placeholder='Password'
                            autoCapitalize='none' />
                    </View>
                    <Text style={{ fontWeight: 'bold' }} onPress={() => {

                    }}>Forgot Password?</Text>
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
                            <Text style={{ color: 'black' }}>Register</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </GestureHandlerRootView>
    )
}

export default Login;