// trendingMovies.js
import React from 'react';
import { View, Text, TouchableWithoutFeedback, Dimensions, Image, ScrollView, StyleSheet } from 'react-native';
import { useRouter } from "expo-router";

const { width, height } = Dimensions.get('window');

type MovieItem = {
    id: number;
    title: string;
    image: any;
};

type TrendingMoviesProps = {
    data: MovieItem[];
};

type MovieCardProps = {
    item: MovieItem;
    handleClick: () => void;
};

export default function TrendingMovies({ data }: TrendingMoviesProps) {
    const router = useRouter();

    const handleClick = (item: MovieItem) => {
        router.push({
            pathname: '/MovieScreen',
            params: { id: item.id, title: item.title, image: item.image }
        });
    };

    return (
        <View style={{ marginBottom: 20 }}>
            <Text style={{ color: 'white', fontSize: 24, marginLeft: 16, marginBottom: 20 }}>Trending</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <View style={styles.rowContainer}>
                    {data.map((item) => (
                        <MovieCard key={item.id} item={item} handleClick={() => handleClick(item)} />
                    ))}
                </View>
            </ScrollView>
        </View>
    );
}

const MovieCard = ({ item, handleClick }: MovieCardProps) => {
    return (
        <TouchableWithoutFeedback onPress={handleClick}>
            <View style={styles.cardContainer}>
                <Image
                    source={item.image}
                    style={styles.cardImage}
                />
                <Text style={styles.cardTitle}>{item.title}</Text>
            </View>
        </TouchableWithoutFeedback>
    );
};

export const moviesData: MovieItem[] = [
    {
        id: 1,
        title: 'Movie 1',
        image: require('../assets/login.jpg'),
    },
    {
        id: 2,
        title: 'Movie 2',
        image: require('../assets/login.jpg'),
    },
    {
        id: 3,
        title: 'Movie 3',
        image: require('../assets/login.jpg'),
    },
];

const styles = StyleSheet.create({
    rowContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
    },
    cardContainer: {
        width: width * 0.3,
        height: height * 0.2,
        borderRadius: 20,
        overflow: 'hidden',
        position: 'relative',
        marginRight: 8,
    },
    cardImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
    cardTitle: {
        position: 'absolute',
        bottom: 16,
        left: 16,
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
});