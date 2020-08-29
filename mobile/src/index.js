import React, { useEffect, useState } from 'react';
import api from './services/api';
import { SafeAreaView, FlatList, StatusBar, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function App() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        api.get('projects').then(response => {
            console.log(response.data)
            setProjects(response.data)
        })
    }, [])

    async function handleAddProject() {
        const response = await api.post('projects', {
            title: `Novo projeto ${Date.now()}`,
            owner: 'Diego Fernandes'
        });

        const project = response.data;

        setProjects([...projects, project]);

    }

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

                <TouchableOpacity activeOpacity={0.6} style={styles.button} onPress={handleAddProject}>
                    <Text style={styles.buttonText}>Adicionar Projeto</Text>
                </TouchableOpacity>
            </SafeAreaView>
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
    },
    button: {
        backgroundColor: '#FFF',
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 20,
        borderRadius: 4
    },
    buttonText: {
        fontWeight: 'bold',
        fontSize: 20
    }
})