import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    pageContainer: {
        backgroundColor: 'white',
        flex: 1
    },
    logoImageContainer: {
        backgroundColor: '#5790DF',
        paddingTop: 30,
        alignItems: 'center',
        paddingBottom: 25
    },
    logoImage: {
        resizeMode: 'cover',
        height: 273,
        width: 386,
    },
    bodyContainer: {
        backgroundColor: "white",
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        margin: 20,
        gap: 10
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold'
    },
    caption: {
        color: "#666",
        marginTop: 10
    },
    textInputContainer: {
        borderBottomColor: '#666',
        borderBottomWidth: 1,
        paddingTop: 15,
    },
    buttonsContainer: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 18,
    },
    mainButton: {
        marginTop: 30,
        backgroundColor: "#5790DF",
        alignItems: "center",
        borderRadius: 20,
        width: 332,
        height: 40,
        justifyContent: "center"
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
        justifyContent: "center"
    },
    textInputOTPContainer: {
        display: "flex",
        flexDirection: "row",
        gap: 10,
        marginTop: 10
    },
    textInputOTP: {
        borderWidth: 3,
        borderColor: "rgba(7, 8, 150, 0.2)",
        padding: 10,
        fontSize: 30,
        borderRadius: 5,
        backgroundColor: "rgba(7, 8, 150, 0.2)",
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        width: 50
    }



});

export default styles;