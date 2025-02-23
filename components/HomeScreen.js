import React, { useState, useEffect, useCallback } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, ImageBackground, ScrollView, RefreshControl, Dimensions } from 'react-native';
import { useFonts, Poppins_400Regular, Poppins_700Bold, Poppins_500Medium } from '@expo-google-fonts/poppins';
import { useNavigation } from '@react-navigation/native';
import { Video } from 'expo-av';
import Animated, { useSharedValue, withTiming, useAnimatedStyle, Easing } from 'react-native-reanimated';
import { useFocusEffect } from '@react-navigation/native';

const { width, height } = Dimensions.get("window");

const HomeScreen = ({ navigation }) => {
    const navigate = useNavigation();

    const textOpacity = useSharedValue(0);
    const buttonOpacity = useSharedValue(0);
    const buttonTranslateY = useSharedValue(50);

    useFocusEffect(
        useCallback(() => {  
            textOpacity.value = 0;
            buttonOpacity.value = 0;
            buttonTranslateY.value = 50;

            // textOpacity.value = withTiming(1, { duration: 1000, easing: Easing.out(Easing.exp) });

            setTimeout(() => {
                textOpacity.value = withTiming(1, { duration: 1000, easing: Easing.out(Easing.exp) });
            }, 500);

            setTimeout(() => {
                buttonOpacity.value = withTiming(1, { duration: 1000, easing: Easing.out(Easing.exp) });
                buttonTranslateY.value = withTiming(0, { duration: 1000, easing: Easing.out(Easing.exp) });
            }, 700)
            

        }, [])
    );

    const animatedTextStyle = useAnimatedStyle(() => ({
        opacity: textOpacity.value,
    }));

    const animatedButtonStyle = useAnimatedStyle(() => ({
        transform: [{ translateY: buttonTranslateY.value }],
    }));

    const [fontsLoaded] = useFonts({
        Poppins_400Regular,
        Poppins_700Bold,
        Poppins_500Medium
    })
    
    if (!fontsLoaded) {
        return null;
    } 

    const video = require('../assets/Video1.mp4');

    return (
        <View style={styles.container}>
            <Video
                source={video}
                rate={1.0}
                volume={1.0}
                isMuted={true}
                resizeMode="cover"
                shouldPlay
                isLooping
                style={styles.videoBackground}
            />
               
            <View style={styles.overlay}>
                <View style={styles.containerHeader}>
                    <Animated.View style={[animatedTextStyle]}>
                        <Text style={styles.text}>
                            Welcome To Phra Pathom Chedi
                        </Text>
                    </Animated.View>
                    <Animated.View style={animatedButtonStyle}> 
                        <TouchableOpacity
                            style={styles.buttonGetStart}
                            onPress={() => navigation.navigate("Details")}
                        >
                            <Text style={styles.buttonText}>Get Started</Text>
                        </TouchableOpacity>
                    </Animated.View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    backgroudImage: {
        width: "100%",
        height: "100%",
        flex: 1,
        position: "relative",
    },
    videoBackground: {
        width: "100%",
        height: "100%",
        position: "absolute",
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },
    overlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        zIndex: 1,
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    containerHeader: {
        // flex: 5,
        marginTop: 150,
        alignItems: 'center',
        marginLeft: 5,
        zIndex: 1,
    },
    text: {
        fontFamily: "Poppins_500Medium",
        fontSize: 45,
        fontWeight: '700',
        maxWidth: 500,
        width: 300,
        color: 'white',
        textShadowColor: "rgba(0, 0, 0, 0.4)",
        textShadowOffset: { width: 4, height: 4 },
        textShadowRadius: 4,
    },
    buttonGetStart: {
        width: width * 0.6,
        paddingVertical: height * 0.02,
        paddingHorizontal: 30,
        marginTop: height * 0.15,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: "center",
        borderWidth: 2,
        borderRadius: 30,
        borderColor: "#c18f32",
        backgroundColor: "#c18f32",
        elevation: 15,
    },
    buttonText: {
        fontSize: width * 0.05,
        color: 'white',
    }
});

export default HomeScreen