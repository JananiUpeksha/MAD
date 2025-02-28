import { View, Text, Button, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

export default function DashboardScreen() {
    const router = useRouter();

    return (
        <View style={styles.container}>
            <Text style={styles.text}>This is the Dashboard</Text>
            <Button title="Go Back" onPress={() => router.back()} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    text: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 20,
    },
});
