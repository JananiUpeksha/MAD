/*
import {
    View,
    Text,
    SafeAreaView,
    ScrollView,
    TouchableOpacity,
    StatusBar,
    Platform,
    StyleSheet,
} from "react-native";
import { Bars3CenterLeftIcon, MagnifyingGlassIcon } from "react-native-heroicons/outline";
import { useState } from "react";
import TrendingMovies from "./trendingMovies";


export default function HomeScreen() {
    const [trending, setTrending] = useState([1, 2, 3]); // Initialize as an array

    return (
        <View style={styles.container}>
            {/!* Search bar and logo *!/}
            <SafeAreaView style={Platform.OS === "ios" ? styles.iosSafeArea : styles.androidSafeArea}>
                <StatusBar style="light" />
                <View style={styles.header}>
                    <Bars3CenterLeftIcon size={30} strokeWidth={2} color="white" />
                    <Text style={styles.title}>
                        <Text style={styles.highlight}>M</Text>ovies
                    </Text>
                    <TouchableOpacity>
                        <MagnifyingGlassIcon size={30} strokeWidth={2} color="white" />
                    </TouchableOpacity>
                </View>
            </SafeAreaView>

            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.scrollViewContent}
            >
                {/!* Trending movies carousel *!/}
                <TrendingMovies data={trending} /> {/!* Use proper JSX syntax *!/}
            </ScrollView>
        </View>
    );
}

// Define the styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#262626", // Dark background color
    },
    iosSafeArea: {
        marginBottom: -8, // Adjust for iOS
    },
    androidSafeArea: {
        marginBottom: 12, // Adjust for Android
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginHorizontal: 16,
        paddingTop: 10, // Added padding for spacing
        paddingBottom: 10, // Added padding for spacing
    },
    title: {
        color: "white",
        fontSize: 24,
        fontWeight: "bold",
    },
    highlight: {
        color: "yellow", // Example highlight color
    },
    scrollViewContent: {
        paddingBottom: 10,
    },
});*/


/*
// HomeScreen.tsx
import React, { useEffect, useState } from 'react';
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, StatusBar, Platform, StyleSheet } from 'react-native';
import { Bars3CenterLeftIcon, MagnifyingGlassIcon } from 'react-native-heroicons/outline';
import TrendingMovies, { moviesData } from "./trendingMovies";

import { fetchTrendingMovies } from "../api/MovieDB";
import MovieList from "./MovieList"; // Adjust the import path

export default function HomeScreen() {
    const [trendingMovies, setTrendingMovies] = useState([]); // Initialize as an empty array
    const [upcomingMovies, setUpcomingMovies] = useState([1, 2, 3]);
    const [topRated, setTopRated] = useState([1, 2, 3]);

    useEffect(() => {
        getTrendingMovies();
        getUpcommingMovies();
    }, []);

    const getTrendingMovies = async () => { // Make the function async
        try {
            const data = await fetchTrendingMovies();
            if (data && data.length > 0) {
                setTrendingMovies(data); // Set the array directly
            }
        } catch (error) {
            console.error("Error fetching trending movies:", error);
        }
    };
    const getUpcommingMovies = async () => { // Make the function async
        try {
            const movies = await fetchTrendingMovies();
            if (movies && movies.length > 0) {
                setTrendingMovies(movies); // Set the array directly
            }
        } catch (error) {
            console.error("Error fetching trending movies:", error);
        }
    };

    return (
        <View style={styles.container}>
            <SafeAreaView style={Platform.OS === 'ios' ? styles.iosSafeArea : styles.androidSafeArea}>
                <StatusBar style="light" />
                <View style={styles.header}>
                    <Bars3CenterLeftIcon size={30} strokeWidth={2} color="white" />
                    <Text style={styles.title}>
                        <Text style={styles.highlight}>M</Text>ovies
                    </Text>
                    <TouchableOpacity>
                        <MagnifyingGlassIcon size={30} strokeWidth={2} color="white" />
                    </TouchableOpacity>
                </View>
            </SafeAreaView>

            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.scrollViewContent}
            >
                {trendingMovies.length > 0 && <TrendingMovies data={trendingMovies} />}
                {upcomingMovies.length > 0 && <MovieList title="Upcoming" data={upcomingMovies} />}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#262626',
    },
    iosSafeArea: {
        marginBottom: -8,
    },
    androidSafeArea: {
        marginBottom: 12,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 16,
        paddingTop: 10,
        paddingBottom: 10,
    },
    title: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold',
    },
    highlight: {
        color: 'yellow',
    },
    scrollViewContent: {
        paddingBottom: 10,
    },
});*/
import React, { useEffect, useState } from 'react';
import { StyleSheet, ScrollView, View, Text, TouchableOpacity, SafeAreaView, Platform, StatusBar } from "react-native";
import { fetchTrendingMovies, fetchUpcomingMovies } from "../api/MovieDB";
import TrendingMovies from "./trendingMovies";
import MovieList from "./MovieList";
import { Bars3CenterLeftIcon, MagnifyingGlassIcon } from 'react-native-heroicons/outline';

export default function HomeScreen() {
    const [trendingMovies, setTrendingMovies] = useState([]);
    const [upcomingMovies, setUpcomingMovies] = useState([]);
    const [topRated, setTopRated] = useState([1, 2, 3]);

    useEffect(() => {
        getTrendingMovies();
        getUpcomingMovies();
    }, []);

    const getTrendingMovies = async () => {
        try {
            const data = await fetchTrendingMovies();
            if (data && data.length > 0) {
                setTrendingMovies(data);
            }
        } catch (error) {
            console.error("Error fetching trending movies:", error);
        }
    };

    const getUpcomingMovies = async () => {
        try {
            const data = await fetchUpcomingMovies();
            console.log("Upcoming Movies Data:", data);
            if (data && data.length > 0) {
                setUpcomingMovies(data);
                console.log("Upcoming Movies State:", upcomingMovies);
            } else {
                console.log("Upcoming Movies Data is empty or null");
            }
        } catch (error) {
            console.error("Error fetching upcoming movies:", error);
        }
    };

    return (
        <View style={styles.container}>
            <SafeAreaView style={Platform.OS === 'ios' ? styles.iosSafeArea : styles.androidSafeArea}>
                <StatusBar style="light" />
                <View style={styles.header}>
                    <TouchableOpacity>
                        <Bars3CenterLeftIcon size={30} strokeWidth={2} color="white" />
                    </TouchableOpacity>
                    <Text style={styles.title}>Movie Review</Text>
                    <TouchableOpacity>
                        <MagnifyingGlassIcon size={30} strokeWidth={2} color="white" />
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.scrollViewContent}
            >
                {trendingMovies.length > 0 && <TrendingMovies data={trendingMovies} />}
                {upcomingMovies.length > 0 && <MovieList title="Upcoming" data={upcomingMovies} />}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#262626',
    },
    iosSafeArea: {
        marginBottom: -8,
    },
    androidSafeArea: {
        marginBottom: 12,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 16,
        paddingTop: 10,
        paddingBottom: 20, // Added gap below header
    },
    title: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold',
    },
    highlight: {
        color: 'yellow',
    },
    scrollViewContent: {
        paddingBottom: 10,
    },
});