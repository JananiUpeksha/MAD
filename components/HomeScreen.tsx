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
// HomeScreen.js
import React, { useState } from 'react';
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, StatusBar, Platform, StyleSheet } from 'react-native';
import { Bars3CenterLeftIcon, MagnifyingGlassIcon } from 'react-native-heroicons/outline';
import TrendingMovies, { moviesData } from "./trendingMovies";
import MovieList, { upcoming } from "./MovieList";

export default function HomeScreen() {
    const [trendingMovies, setTrendingMovies] = useState([1, 2, 3]); // Initialize as an array
    const [upcomingMovies, setUpcomingMovies] = useState([1, 2, 3]);
    const [topRated, setTopRated] = useState([1, 2, 3]);

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
                <TrendingMovies data={moviesData} />
                <MovieList title="Upcoming" data={upcoming} />

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
});