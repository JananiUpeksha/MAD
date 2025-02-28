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
*/
/*
import React, { useState, useRef } from 'react';
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
import { ChevronLeftIcon, ChevronRightIcon } from 'react-native-heroicons/outline';

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
    {
        id: 4,
        movieName: 'Movie 4',
        image: require('../assets/login.jpg'),
    },
    {
        id: 5,
        movieName: 'Movie 5',
        image: require('../assets/login.jpg'),
    },
    {
        id: 6,
        movieName: 'Movie 6',
        image: require('../assets/login.jpg'),
    },
];

export default function MovieList() {
    const router = useRouter();
    const scrollViewRef = useRef<ScrollView>(null);
    const [currentIndex, setCurrentIndex] = useState(3);

    const scrollToCard = (index: number) => {
        const cardWidth = width * 0.28 + 16;
        const offset = index * cardWidth - (width / 2 - cardWidth / 2);
        scrollViewRef.current?.scrollTo({ x: offset, animated: true });
        setCurrentIndex(index);
    };

    const scrollLeft = () => {
        if (currentIndex > 0) {
            scrollToCard(currentIndex - 1);
        }
    };

    const scrollRight = () => {
        if (currentIndex < upcoming.length - 1) {
            scrollToCard(currentIndex + 1);
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Upcoming Movies</Text>
            </View>

            <View style={styles.scrollContainer}>
                <TouchableOpacity style={styles.arrowButton} onPress={scrollLeft} disabled={currentIndex === 0}>
                    <ChevronLeftIcon size={30} color={currentIndex === 0 ? 'gray' : '#FFF'} />
                </TouchableOpacity>

                <ScrollView
                    ref={scrollViewRef}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.scrollViewContent}
                    scrollEnabled={false}
                >
                    {upcoming.map((item, index: number) => (
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

                <TouchableOpacity style={styles.arrowButton} onPress={scrollRight} disabled={currentIndex === upcoming.length - 1}>
                    <ChevronRightIcon size={30} color={currentIndex === upcoming.length - 1 ? 'gray' : '#FFF'} />
                </TouchableOpacity>
            </View>
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
    scrollContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    scrollViewContent: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: width / 2 - (width * 0.28 / 2),
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
    arrowButton: {
        padding: 10,
    },
});*/


/*
import React, { useState, useRef } from 'react';
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
import { ChevronLeftIcon, ChevronRightIcon } from 'react-native-heroicons/outline';

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
    {
        id: 4,
        movieName: 'Movie 4',
        image: require('../assets/login.jpg'),
    },
    {
        id: 5,
        movieName: 'Movie 5',
        image: require('../assets/login.jpg'),
    },
    {
        id: 6,
        movieName: 'Movie 6',
        image: require('../assets/login.jpg'),
    },
];

export default function MovieList() {
    const router = useRouter();
    const scrollViewRef = useRef<ScrollView>(null);
    const [currentIndex, setCurrentIndex] = useState(2);

    const scrollToCard = (index: number) => {
        const cardWidth = width * 0.28 + 16;
        const offset = index * cardWidth - (width / 2 - cardWidth / 2);
        scrollViewRef.current?.scrollTo({ x: offset, animated: true });
        setCurrentIndex(index);
    };

    const scrollLeft = () => {
        if (currentIndex > 0) {
            scrollToCard(currentIndex - 1);
        }
    };

    const scrollRight = () => {
        if (currentIndex < upcoming.length - 1) {
            scrollToCard(currentIndex + 1);
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Upcoming Movies</Text>
            </View>

            <View style={styles.scrollContainer}>
                <TouchableOpacity style={styles.arrowButton} onPress={scrollLeft} disabled={currentIndex === 0}>
                    <ChevronLeftIcon size={30} color={currentIndex === 0 ? 'gray' : '#FFF'} />
                </TouchableOpacity>

                <ScrollView
                    ref={scrollViewRef}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.scrollViewContent}
                    scrollEnabled={false}
                >
                    {upcoming.map((item, index: number) => (
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

                <TouchableOpacity style={styles.arrowButton} onPress={scrollRight} disabled={currentIndex === upcoming.length - 1}>
                    <ChevronRightIcon size={30} color={currentIndex === upcoming.length - 1 ? 'gray' : '#FFF'} />
                </TouchableOpacity>
            </View>
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
    scrollContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    scrollViewContent: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: (width - (width * 0.28)) / 2, // Corrected padding
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
    arrowButton: {
        padding: 10,
    },
});
*/
// MovieList.js
import React, { useState, useRef } from 'react';
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
import { ChevronLeftIcon, ChevronRightIcon } from 'react-native-heroicons/outline';

const { width, height } = Dimensions.get('window');

export default function MovieList({ title, data }) { // Receive data as prop
    const router = useRouter();
    const scrollViewRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(2);

    const scrollToCard = (index) => {
        const cardWidth = width * 0.30 + 16;
        let offset = index * cardWidth; // Basic offset
        if (index >= 2) { // If it is the third card or later.
            offset = offset - 2 * cardWidth; // Adjust for the first 2 cards.
        }
        scrollViewRef.current?.scrollTo({ x: offset, animated: true });
        setCurrentIndex(index);
    };

    const scrollLeft = () => {
        if (currentIndex > 0) {
            scrollToCard(currentIndex - 1);
        }
    };

    const scrollRight = () => {
        if (currentIndex < data.length - 1) {
            scrollToCard(currentIndex + 1);
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>{title}</Text>
            </View>

            <View style={styles.scrollContainer}>
                <TouchableOpacity style={styles.arrowButton} onPress={scrollLeft} disabled={currentIndex === 0}>
                    <ChevronLeftIcon size={30} color={currentIndex === 0 ? 'gray' : '#FFF'} />
                </TouchableOpacity>

                <ScrollView
                    ref={scrollViewRef}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.scrollViewContent}
                    scrollEnabled={false}
                >
                    {data.map((item, index) => (
                        <TouchableOpacity
                            key={item.imdbID}
                            onPress={() => router.push({ pathname: "/MovieScreen", params: { id: item.imdbID, title: item.Title, image: item.Poster } })}
                        >
                            <View style={styles.movieCard}>
                                <Image source={{ uri: item.Poster }} style={styles.movieImage} />
                                <Text style={styles.movieTitle}>{item.Title}</Text>
                            </View>
                        </TouchableOpacity>
                    ))}
                </ScrollView>

                <TouchableOpacity style={styles.arrowButton} onPress={scrollRight} disabled={currentIndex === data.length - 1}>
                    <ChevronRightIcon size={30} color={currentIndex === data.length - 1 ? 'gray' : '#FFF'} />
                </TouchableOpacity>
            </View>
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
        marginTop: 28,
    },
    headerText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#FFF',
    },
    scrollContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    scrollViewContent: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    movieCard: {
        marginRight: 16,
        alignItems: 'center',
    },
    movieImage: {
        width: width * 0.30,
        height: height * 0.35,
        borderRadius: 12,
    },
    movieTitle: {
        color: '#FFF',
        textAlign: 'center',
        marginTop: 8,
        fontSize: 16,
        fontWeight: 'bold',
    },
    arrowButton: {
        padding: 10,
    },
});