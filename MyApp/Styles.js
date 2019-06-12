import { StyleSheet } from "react-native"

export default StyleSheet.create({
    myState: {
        marginTop: 20,
        textAlign: 'center',
        color: 'blue',
        fontWeight: 'bold',
        fontSize: 20
    },
    container: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        backgroundColor: 'grey',
        height: 600
     },
     redbox: {
        width: 100,
        height: 100,
        backgroundColor: 'red'
     },
     bluebox: {
        width: 100,
        height: 100,
        backgroundColor: 'blue'
     },
     blackbox: {
        width: 100,
        height: 100,
        backgroundColor: 'black'
     },
     listContainer: {
        padding: 10,
        marginTop: 3,
        backgroundColor: '#d9f9b1',
        alignItems: 'center',
     },
     text: {
        color: '#4f603c'
     }
})