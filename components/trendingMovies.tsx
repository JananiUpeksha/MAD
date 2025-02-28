import React, { useState, useRef } from 'react';
import {
    View,
    Text,
    ScrollView,
    TouchableOpacity,
    Dimensions,
    Image,
    StyleSheet,
} from 'react-native';
import { useRouter } from "expo-router";
import { ChevronLeftIcon, ChevronRightIcon } from 'react-native-heroicons/outline';

const { width, height } = Dimensions.get('window');

type MovieItem = {
    imdbID: string;
    Title: string;
    Poster: string;
};

type TrendingMoviesProps = {
    data: MovieItem[];
};

export default function TrendingMovies({ data }: TrendingMoviesProps) {
    const router = useRouter();
    const scrollViewRef = useRef<ScrollView>(null);
    const [currentIndex, setCurrentIndex] = useState(2);

    const scrollToCard = (index: number) => {
        const cardWidth = width * 0.30 + 16;
        let offset = index * cardWidth;
        if (index >= 2) {
            offset -= 2 * cardWidth;
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
            <Text style={styles.headerText}>Trending</Text>

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
                    {data.map((item) => (
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
        marginBottom: 20,
    },
    headerText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#FFF',
        marginLeft: 16,
        marginBottom: 20,
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
        height: height * 0.25,
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

