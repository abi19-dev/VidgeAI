import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'column',
        gap: 5,
    },
    profilePicture: {
        width: 58,
        height: 64,
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        padding: 10,
        backgroundColor: 'transparent', // Change as per your design
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: "rgba(230, 238, 250, 1)",
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
    },
    buttonHome: {
        backgroundColor: 'transparent', // Bootstrap primary button color
        height: 50,
        width: 50,
        justifyContent: "center",
    },
    buttonSearch: {
        backgroundColor: 'transparent', // Bootstrap primary button color
        height: 50,
        width: 50,
        justifyContent: "center",
    },
    buttonCreate: {
        backgroundColor: 'white', // Bootstrap primary button color
        height: 68,
        width: 68,
        borderRadius: 100,
        justifyContent: "center",
        marginBottom: 70
    },
    buttonTextCreate: {
        color: '#5790DF',
        fontSize: 40,
        alignSelf: "center",
        fontWeight: "bold"
    },
    buttonTextHome: {
        color: 'transparent',
        fontSize: 10,
        alignSelf: "center"
    },
    buttonTextSearch: {
        color: 'transparent',
        fontSize: 10,
        alignSelf: "center"
    },
    buttonsContainer: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 18,
        paddingBottom: 50
    },
    mainButton: {
        backgroundColor: "#5790DF",
        alignItems: "center",
        borderRadius: 20,
        width: 332,
        height: 40,
        justifyContent: "center",
        shadowColor: '#5790DF',
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.5,
        shadowRadius: 10,
        // Drop shadow for Android
        elevation: 10,
    },
    secondaryButton: {
        backgroundColor: "#FFFFFF",
        borderColor: "rgba(0, 0, 0, 0.2)",
        borderWidth: 2,
        alignItems: "center",
        borderRadius: 20,
        width: 332,
        height: 40,
        alignSelf: "center",
        justifyContent: "center",
        shadowColor: '#000000',
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.8,
        shadowRadius: 10,
        // Drop shadow for Android
        elevation: 10,
    },
    video: {
        height: 511,
        width: 350,
        borderRadius: 30,
        maxHeight: 400
    },
    headerContainer: {
        backgroundColor: "red"
    }
});

export default styles;