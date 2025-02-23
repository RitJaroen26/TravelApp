import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

import HomeScreen from './HomeScreen';
import DetailScreen from './DetailScreen';
import Maps from './Maps';
import ActivitiesScreen from './ActivitiesScreen';

const Tab = createBottomTabNavigator();

const Sidebar = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ color, size }) => {
                let iconName;
                if (route.name === "Home") {
                    iconName = "home-outline";
                } else if (route.name === "Details") {
                    iconName = "list-outline";
                } else if (route.name === "Map") {
                    iconName = "map";
                } else if (route.name === "Albums") {
                    iconName = "albums";
                } else if (route.name === "Activities") {
                    iconName = "heart-circle";
                }
                return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: "#c18f32",
                tabBarInactiveTintColor: "gray",
                tabBarStyle: { backgroundColor: "white", height: 60 },
            })}
        >
            <Tab.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
            <Tab.Screen name="Details" component={DetailScreen} options={{ headerShown: false }} />
            <Tab.Screen name="Map" component={Maps} />
            <Tab.Screen name="Activities" component={ActivitiesScreen} options={{ headerShown: false }} />
        </Tab.Navigator>
    )
}
  

export default Sidebar