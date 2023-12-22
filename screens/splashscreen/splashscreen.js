import React, { useEffect } from 'react';
import { View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { setUserName, setUserPhoneNumber } from '../redux/action';
import { useDispatch } from 'react-redux';
import SplashScreen from 'react-native-splash-screen';

const SplashScreenn = ({ navigation }) => {
  useEffect(() => {
    const splashTimeout = setTimeout(() => {
      checkLoginStatus();
    }, 500);

    return () => clearTimeout(splashTimeout);
  }, []);

  const dispatch = useDispatch();

  const checkLoginStatus = async () => {
    try {
      console.log('Checking login status...');
      const isLoggedIn = await AsyncStorage.getItem('isLoggedIn');
      const name = await AsyncStorage.getItem('name');
      const phone = await AsyncStorage.getItem('phone');
      console.log('IsLoggedIn:', isLoggedIn);

      if (isLoggedIn === 'true') {
        navigation.navigate('HomeScreen');
        dispatch(setUserName(name));
        dispatch(setUserPhoneNumber(phone));
        console.log('login', isLoggedIn);
      } else {
        navigation.navigate('UserDetailsScreen');
      }
    } catch (error) {
      console.error('Error checking login status:', error);
    } finally {
      SplashScreen.hide();
    }
  };

  return <View />;
};

export default SplashScreenn;

