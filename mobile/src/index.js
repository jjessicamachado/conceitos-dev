import React from 'react';
import { View, StatusBar, Text, StyleSheet } from 'react-native';

export default function App() {
    return (
        <>
            <StatusBar backgroundColor="#000"></StatusBar>
            <View style={styles.container}>
                <Text style={styles.title}>Hello GoStack</Text>
            </View>
        </>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#7159c1',
        justifyContent: 'center',
        alignItems: 'center'

    },
    title: {
        color: '#FFF',
        fontSize: 32,
        fontWeight: 'bold'
    }
})