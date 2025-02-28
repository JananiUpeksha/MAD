import React from 'react';
import { View, Text, TouchableWithoutFeedback, Dimensions, Image, ScrollView, StyleSheet } from 'react-native';

const { width, height } = Dimensions.get('window');

type MovieItem = {
    id: number;
    title: string;
    image: any; // Use `any` for local image imports
};

type TrendingMoviesProps = {
    data: MovieItem[];
};

type MovieCardProps = {
    item: MovieItem;
    handleClick: () => void;
};

export default function TrendingMovies({ data }: TrendingMoviesProps) {
    const handleClick = (item: MovieItem) => {
        console.log('Clicked on:', item);
        // Add your custom logic here, e.g., navigate to a details screen
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
                    source={item.image} // Use the imported image
                    style={styles.cardImage}
                />
                <Text style={styles.cardTitle}>{item.title}</Text>
            </View>
        </TouchableWithoutFeedback>
    );
};

// Example data with local images
export const moviesData: MovieItem[] = [
    {
        id: 1,
        title: 'Movie 1',
        image: require('../assets/login.jpg'), // Use require for local images
    },
    {
        id: 2,
        title: 'Movie 2',
        image: require('../assets/login.jpg'), // Use require for local images
    },
    {
        id: 3,
        title: 'Movie 3',
        image: require('../assets/login.jpg'), // Use require for local images
    },
];

// Define styles
const styles = StyleSheet.create({
    rowContainer: {
        flexDirection: 'row', // Display items in a row
        justifyContent: 'space-between', // Space items evenly
        paddingHorizontal: 16, // Add horizontal padding
    },
    cardContainer: {
        width: width * 0.3, // Adjust width to fit three images in a row
        height: height * 0.2, // Adjust height proportionally
        borderRadius: 20,
        overflow: 'hidden',
        position: 'relative',
        marginRight: 8, // Add margin between cards
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