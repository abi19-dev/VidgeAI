import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white"
    },
    profilePicture: {
        width: 58,
        height: 64,
    },
    gradient: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        backgroundColor: "white"
    },
    APIContainer: {
        marginLeft: 10,
        marginRight: 10,
        marginTop: '20%'
    },
    tournamentLabel: {
        fontSize: 25,
        fontWeight: 'bold',
        flex: 1,
        overflow: 'hidden',
        color: 'black'
    },
    seminarLabel: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black',
        textAlign: 'center',
    },
    tournamentScroll: {
        flexDirection: 'row',
        gap: 10,
    },
    objectContainer: {
        width: 175,
        height: 262,
        backgroundColor: 'white',
        borderRadius: 30,
        display: 'flex',
        flexDirection: 'column',
    },
    objectContainerNadolazeci: {
        width: 280,
        backgroundColor: 'white',
        borderRadius: 30,
        display: 'flex',
        flexDirection: 'column',
        height: 'auto',
        alignContent: 'center',
        alignItems: 'center',
        overflow: 'hidden'
    },
    APIImage: {
        width: 155,
        height: 155,
        borderRadius: 22,
        marginTop: 10,
        alignSelf: 'center'
    },
    APIImageNadolazeci: {
        height: 186,
        width: 280,
        borderRadius: 30,
    },
    SeminariContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    seminarContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
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
    spongebob: {
        width: 118,
        height: 111,
        marginTop: 30,
        alignSelf: 'center',
    },
    freeman: {
        width: 105,
        height: 160,
        marginTop: 10,
        alignSelf: 'center'
    },
    jala: {
        width: 163,
        height: 107,
        marginTop: 15,
        alignSelf: 'center'
    },
    spiderman: {
        width: 152,
        height: 152,
        marginTop: 10,
        alignSelf: 'center'
    },
    biden: {
        width: 122,
        height: 114,
        marginTop: 10,
        alignSelf: 'center',
    },
    ronaldo: {
        width: 140,
        height: 140,
        marginTop: 10,
        alignSelf: 'center',
    },
    batman: {
        width: 100,
        height: 150,
        marginTop: 10,
        alignSelf: 'center',
    },
    ben10: {
        width: 100,
        height: 150,
        marginTop: 10,
        alignSelf: 'center',
    }
});

export default styles;