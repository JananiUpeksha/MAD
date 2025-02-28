import React from 'react';
import {
    View, Text, Image, TouchableOpacity, StyleSheet, ScrollView
} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { ArrowLeftIcon } from 'react-native-heroicons/outline';

export default function MovieScreen() {
    const navigation = useNavigation();
    const route = useRoute();
    const { movieName, image } = route.params as { movieName: string; image: any };

    return (
        <View style={styles.container}>
            {/* Back Button */}
            <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                <ArrowLeftIcon size={30} color="white" />
            </TouchableOpacity>

            {/* Movie Details */}
            <ScrollView contentContainerStyle={styles.scrollViewContent}>
                <Image source={image} style={styles.movieImage} />
                <Text style={styles.movieTitle}>{movieName}</Text>
                <Text style={styles.movieDescription}>
                    This is a placeholder description for {movieName}. The movie details, storyline,
                    cast, and reviews can be displayed here.
                </Text>
            </ScrollView>
        </View>
    );
}

// Styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#262626',
        paddingTop: 40,
    },
    backButton: {
        position: 'absolute',
        top: 50,
        left: 20,
        zIndex: 10,
    },
    scrollViewContent: {
        alignItems: 'center',
        paddingHorizontal: 16,
    },
    movieImage: {
        width: '90%',
        height: 350,
        borderRadius: 12,
        marginVertical: 20,
    },
    movieTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        marginBottom: 10,
    },
    movieDescription: {
        fontSize: 16,
        color: '#CCC',
        textAlign: 'center',
        paddingHorizontal: 10,
        marginBottom: 20,
    },
});
