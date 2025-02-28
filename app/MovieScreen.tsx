import React, { useState, useEffect } from 'react';
import {
    View, Text, Image, TouchableOpacity, StyleSheet, ScrollView, Dimensions, Platform
} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { ArrowLeftIcon, HeartIcon } from 'react-native-heroicons/outline';
import { LinearGradient } from 'expo-linear-gradient';
import {getMovieDetails} from "../api/MovieDB";
import { fetchTrendingMovies } from "../api/MovieDB";

export default function MovieScreen() {
    const navigation = useNavigation();
    const route = useRoute();
    const { movieName } = route.params as { movieName: string; image: any };
    const [isFavourite, toggleFavourite] = useState(false);


    useEffect(() => {
        // call the movie details api
        // item
    }, [route.params]);
    const [movieDetails, setMovieDetails] = useState(null); // Initialize state


    const { width, height } = Dimensions.get('window');
    const ios = Platform.OS === 'ios';
    const topMargin = ios ? '' : 'mt-3';

    return (
        <ScrollView style={styles.container} contentContainerStyle={styles.scrollViewContent}>
            <View style={styles.fullWidth}>
                <View style={styles.safeArea}>
                    <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButtonContainer}>
                        <View style={styles.backButton}>
                            <ArrowLeftIcon size={30} color="black" />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => toggleFavourite(!isFavourite)} style={styles.heartButton}>
                        <HeartIcon size={35} color={isFavourite ? 'red' : 'white'} fill={isFavourite ? 'red' : 'transparent'} />
                    </TouchableOpacity>
                </View>
                <View>
                    <Image source={require('../assets/login.jpg')} style={styles.posterImage} />
                    <LinearGradient
                        colors={['transparent', 'rgba(23, 23, 23, 0.8)', 'rgba(23, 23, 23, 1)']}
                        style={styles.linearGradient}
                        start={{ x: 0.5, y: 0 }}
                        end={{ x: 0.5, y: 1 }}
                    />
                </View>
            </View>

            <View style={styles.movieDetails}>
                <Text style={styles.title}>
                    {movieName}
                </Text>
                <Text style={styles.status}>
                    Released • 2020 • 170 min
                </Text>
                <View style={styles.genres}>
                    <Text style={styles.genreText}>Action •</Text>
                    <Text style={styles.genreText}>Thrill •</Text>
                    <Text style={styles.genreText}>Comedy</Text>
                </View>
                <Text style={styles.description}>
                    Super-Hero partners Scott Lang and Hope van Dyne, along with Hope's parents
                    and Scott's daughter Cassie, find themselves exploring the Quantum Realm.
                    The creatures they encounter will push them beyond what they thought was possible.
                </Text>
            </View>

            {/* cast */}
            {/* <Cast /> */}

        </ScrollView>
    );
}

// Styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#171717',
    },
    scrollViewContent: {
        paddingBottom: 20,
    },
    fullWidth: {
        width: '100%',
    },
    safeArea: {
        position: 'absolute',
        zIndex: 20,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: 40,
    },
    backButtonContainer: {
        marginLeft: 16,
    },
    backButton: {
        backgroundColor: 'yellow',
        padding: 8,
        borderRadius: 8,
    },
    heartButton: {
        marginRight: 16,
    },
    posterImage: {
        width: '100%',
        height: Dimensions.get('window').height * 0.65,
    },
    linearGradient: {
        width: '100%',
        height: Dimensions.get('window').height * 0.45,
        position: 'absolute',
        bottom: 0,
    },
    movieDetails: {
        marginTop: -(Dimensions.get('window').height * 0.14),
        paddingHorizontal: 16,
    },
    title: {
        color: 'white',
        textAlign: 'center',
        fontSize: 24,
        fontWeight: 'bold',
        letterSpacing: 2,
        marginBottom: 8,
    },
    status: {
        color: '#A0A0A0',
        fontSize: 14,
        fontWeight: '600',
        textAlign: 'center',
        marginBottom: 8,
    },
    genres: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 8,
    },
    genreText: {
        color: '#A0A0A0',
        fontSize: 14,
        fontWeight: '600',
        marginHorizontal: 4,
    },
    description: {
        color: '#A0A0A0',
        fontSize: 14,
        lineHeight: 20,
    },
});