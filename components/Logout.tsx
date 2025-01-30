import { useEffect } from 'react';
import {Button, StyleSheet, View} from 'react-native';
import Animated, {
    useSharedValue,
    useAnimatedStyle,
    withTiming,
    withRepeat,
    withSequence,
} from 'react-native-reanimated';
import SecureStore from "expo-secure-store"

import { ThemedText } from '@/components/ThemedText';
import {router} from "expo-router";

export function HelloWave() {
    const rotationAnimation = useSharedValue(0);

    useEffect(() => {
        rotationAnimation.value = withRepeat(
            withSequence(withTiming(25, { duration: 150 }), withTiming(0, { duration: 150 })),
            4 // Run the animation 4 times
        );
    }, []);

    const animatedStyle = useAnimatedStyle(() => ({
        transform: [{ rotate: `${rotationAnimation.value}deg` }],
    }));

    async function handleLogout(){
        // await SecureStore.setItemAsync("EMAIL", null)
        // await SecureStore.setItemAsync("PASSWORD", null)
        // router.push("/(tabs)/index")
    }


    return (
        <View>
            <Button title="Logout" onPress={handleLogout} />
        </View>
    );
}

const styles = StyleSheet.create({
    text: {
        fontSize: 28,
        lineHeight: 32,
        marginTop: -6,
    },
});
