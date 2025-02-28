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
import React, {useState} from 'react';
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, StatusBar, Platform, StyleSheet } from 'react-native';
import { Bars3CenterLeftIcon, MagnifyingGlassIcon } from 'react-native-heroicons/outline';
import TrendingMovies, { moviesData } from "./trendingMovies";
import MovieList,{upcomming} from "./MovieList";

/*import TrendingMovies, { moviesData } from './TrendingMovies'; // Import moviesData*/

export default function HomeScreen() {
    const [upcomingMovies, setUpcomingMovies] = useState([1,2,3])
    const [topRated, setTopRated] = useState([1,2,3])
    return (
        <View style={styles.container}>
            {/* Search bar and logo */}
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
                {/* Trending movies cards */}
                <TrendingMovies data={moviesData} /> {/* Pass the moviesData array */}
                <MovieList title="Upcoming" data={upcomming} />
                
            </ScrollView>
        </View>
    );
}

// Define the styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#262626', // Dark background color
    },
    iosSafeArea: {
        marginBottom: -8, // Adjust for iOS
    },
    androidSafeArea: {
        marginBottom: 12, // Adjust for Android
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 16,
        paddingTop: 10, // Added padding for spacing
        paddingBottom: 10, // Added padding for spacing
    },
    title: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold',
    },
    highlight: {
        color: 'yellow', // Example highlight color
    },
    scrollViewContent: {
        paddingBottom: 10,
    },
});