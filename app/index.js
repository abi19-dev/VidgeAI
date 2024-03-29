import {
    StyleSheet,
    Button,
    SafeAreaView,
    View,
    Text,
    Alert,
    Image
} from 'react-native';
import {
    GestureHandlerRootView,
} from 'react-native-gesture-handler';
import { TouchableOpacity } from 'react-native';
import { Stack, Link, router, useRouter } from 'expo-router';

const styles = StyleSheet.create({
    wholePage: {
        backgroundColor: "white",
        flex: 1
    },
    btn: {
        marginTop: 120,
        backgroundColor: "#5790DF",
        alignItems: "center",
        borderRadius: 20,
        width: 332,
        paddingVertical: 10,
        height: 40
    },
    mojView: {
        top: 60,
        display: "flex",
        flexDirection: "column",
        justifyContent: "column",
        alignItems: "center",
        backgroundColor: "white",
    },
    myText: {
        color: "white",
        height: 100
    },
    karateLogo: {
        width: 550,
        height: 500,
    }
})
const Home = () => {

    return (
        <GestureHandlerRootView style={{ height: "100%", width: "100%", backgroundColor: "white", }}>
            <View style={styles.wholePage}>
                <Stack.Screen
                    options={{
                        headerTitle: "",
                        headerShadowVisible: false
                    }}
                />
                <View style={styles.mojView}>
                    <TouchableOpacity onPress={() => {
                        router.push('pages/Login/Login');
                    }}>
                        <Image style={styles.karateLogo} source={require('./transparentno.png')} />
                    </TouchableOpacity>
                </View>
            </View>
        </GestureHandlerRootView>
    )
}

export default Home;