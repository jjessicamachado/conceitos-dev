import React, { useEffect, useState } from 'react';
import api from './services/api';
import { SafeAreaView, FlatList, StatusBar, Text, StyleSheet } from 'react-native';

export default function App() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        api.get('projects').then(response => {
            console.log(response.data)
            setProjects(response.data)
        })
    }, [])

    return (
        <>
            <StatusBar backgroundColor="#000"></StatusBar>
            
            <SafeAreaView style={styles.container}>
                <FlatList
                    data={projects}
                    keyExtractor={project => project.id}
                    renderItem={({ item: project }) => (
                        <Text style={styles.title}>{project.title}</Text>
                    )}
                />
            </SafeAreaView>
            {/* <ScrollView style={styles.container}>
                {projects.map(project => <Text style={styles.title} key={project.id}>{project.title}</Text>)}
            </ScrollView> */}
        </>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#7159c1',
    },
    title: {
        color: '#FFF',
        fontSize: 30
    }
})