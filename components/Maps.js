import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { useFonts, Poppins_400Regular, Poppins_700Bold, Poppins_500Medium } from '@expo-google-fonts/poppins';
import MapView, { Marker, UrlTile } from 'react-native-maps';

const Maps = () => {
  
    return (
    <View>
        <MapView
            style={styles.map}
            initialRegion={{
                latitude: 13.8199,
                longitude: 100.0601,
                latitudeDelta: 0.05,
                longitudeDelta: 0.05,
            }}
        >
            <Marker
                coordinate={{ latitude: 13.8199, longitude: 100.0601 }}
                title="วัดพระปฐมเจดีย์ราชวรมหาวิหาร"
                description="อำเภอเมืองนครปฐม จังหวัดนครปฐม ประเทศไทย"
            />
            <UrlTile 
                urlTemplate="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" 
                maximumZ={19} 
            />
        </MapView>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    map: {
        width: "100%",
        height: "100%",
        borderWidth: 1,
    },
});

export default Maps