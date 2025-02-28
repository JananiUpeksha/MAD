/*
import React from 'react';
import {
    Dimensions,
    ScrollView,
    TouchableOpacity,
    View,
    Text,
    Image,
    StyleSheet,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get('window');

type MovieItem = {
    id: number;
    movieName: string;
    image: any; // Use `any` for local image imports
};

const upcomming: MovieItem[] = [
    {
        id: 1,
        movieName: 'Movie 1',
        image: require('../assets/login.jpg'), // Replace with actual image path
    },
    {
        id: 2,
        movieName: 'Movie 2',
        image: require('../assets/login.jpg'), // Replace with actual image path
    },
    {
        id: 3,
        movieName: 'Movie 3',
        image: require('../assets/login.jpg'), // Replace with actual image path
    },

];

export default function MovieList() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Upcoming Movies</Text>
            </View>

            <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.scrollViewContent}
            >
                {upcomming.map((item, index) => (
                    <TouchableOpacity
                        key={index}
                        onPress={() => navigation.navigate('Movies', item)}
                    >
                        <View style={styles.movieCard}>
                            <Image source={item.image} style={styles.movieImage} />
                            <Text style={styles.movieTitle}>{item.movieName}</Text>
                        </View>
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </View>
    );
}

// Define styles
const styles = StyleSheet.create({
    container: {
        marginBottom: 32,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'center', // Center the header text
        alignItems: 'center',
        marginHorizontal: 16,
        marginBottom: 16,
        marginTop: 25,
    },
    headerText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#FFF', // Changed to white color
    },
    scrollViewContent: {
        flexDirection: 'row',
        alignItems: 'center',
        flexGrow: 1,
        paddingHorizontal: 15,
    },
    movieCard: {
        marginRight: 16,
        alignItems: 'center', // Center movie title
    },
    movieImage: {
        width: width * 0.28, // Reduced width
        height: height * 0.32, // Increased height
        borderRadius: 12,
    },
    movieTitle: {
        color: '#FFF', // White color
        textAlign: 'center', // Center the movie name
        marginTop: 8,
        fontSize: 16, // Slightly increased font size
        fontWeight: 'bold',
    },
});
*/



import React from 'react';
import {
    Dimensions,
    ScrollView,
    TouchableOpacity,
    View,
    Text,
    Image,
    StyleSheet,
} from 'react-native';
import { useRouter } from "expo-router";

const { width, height } = Dimensions.get('window');

const upcoming = [
    {
        id: 1,
        movieName: 'Movie 1',
        image: require('../assets/login.jpg'),
    },
    {
        id: 2,
        movieName: 'Movie 2',
        image: require('../assets/login.jpg'),
    },
    {
        id: 3,
        movieName: 'Movie 3',
        image: require('../assets/login.jpg'),
    },
];

export default function MovieList() {
    const router = useRouter();

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Upcoming Movies</Text>
            </View>

            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.scrollViewContent}
            >
                {upcoming.map((item) => (
                    <TouchableOpacity
                        key={item.id}
                        onPress={() => router.push({ pathname: "/MovieScreen", params: item })}
                    >
                        <View style={styles.movieCard}>
                            <Image source={item.image} style={styles.movieImage} />
                            <Text style={styles.movieTitle}>{item.movieName}</Text>
                        </View>
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </View>
    );
}

// Styles
const styles = StyleSheet.create({
    container: {
        marginBottom: 32,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 16,
        marginBottom: 16,
        marginTop: 25,
    },
    headerText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#FFF',
    },
    scrollViewContent: {
        flexDirection: 'row',
        alignItems: 'center',
        flexGrow: 1,
        paddingHorizontal: 15,
    },
    movieCard: {
        marginRight: 16,
        alignItems: 'center',
    },
    movieImage: {
        width: width * 0.28,
        height: height * 0.32,
        borderRadius: 12,
    },
    movieTitle: {
        color: '#FFF',
        textAlign: 'center',
        marginTop: 8,
        fontSize: 16,
        fontWeight: 'bold',
    },
});
