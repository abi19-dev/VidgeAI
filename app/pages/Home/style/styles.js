import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
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
        fontWeight: "bold",
        marginBottom: 5
    },
    buttonTextHome: {
        color: 'transparent',
        fontSize: 10,
        alignSelf: "center",
        marginLeft: 5
    },
    buttonTextSearch: {
        color: 'transparent',
        fontSize: 10,
        alignSelf: "center"
    },

});

export default styles;