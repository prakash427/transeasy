
import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, PermissionsAndroid, Alert } from 'react-native';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import Geolocation from '@react-native-community/geolocation';


const LocationScreen = () => {
  const [selectedButton, setSelectedButton] = useState(null);
  const navigation = useNavigation();

  const HOME = () => {
    navigation.navigate('HomeScreen');
  };

  const handleButtonPress = async (buttonName) => {
    setSelectedButton(buttonName);

    if (buttonName === 'allow') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          {
            title: 'Location Permission',
            message: 'We need your location to show available delivery places.',
            buttonPositive: 'OK',
          }
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          console.log('Location permission granted');
          HOME();
        } else {
          console.log('Location permission denied');
          Alert.alert('Permission Denied', 'Please enable location permission to use this feature.');
        }
      } catch (err) {
        console.warn('Permission request error:', err);
      }
    } else {
        HOME();
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>What's your location?</Text>
      <Text style={styles.description}>
        We need your location to show available delivery places.
      </Text>

      <Image
        source={require('../assets/Locationnn.jpg')}
        style={styles.image}
        resizeMode="cover"
      />
      <TouchableOpacity
        style={[
          styles.button,
          {
            backgroundColor: selectedButton === 'allow' ? '#61C9D3' : 'white',
          },
        ]}
        onPress={() => handleButtonPress('allow')}
      >
        <Text
          style={{
            color: selectedButton === 'allow' ? 'white' : '#61C9D3',
            fontWeight: 'bold',
            fontSize: 22,
            textAlign: 'center', 
          }}
        >
          Allow Location Access
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          styles.button,
          {
            backgroundColor:
              selectedButton === 'enterManually' ? '#61C9D3' : 'white',
          },
        ]}
        onPress={() => handleButtonPress('enterManually')}
      >
        <Text
          style={{
            color: selectedButton === 'enterManually' ? 'white' : '#61C9D3',
            fontWeight: 'bold',
            fontSize: 22,
            textAlign: 'center', 
          }}
        >
          Enter Location Manually
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default LocationScreen;

