import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Sidebar from './components/Sidebar';
import { NavigationContainer } from "@react-navigation/native";

export default function App() {

  return (
    <NavigationContainer>
      <Sidebar />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
