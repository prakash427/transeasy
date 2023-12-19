// import React, { useEffect } from 'react';
// import { View, Text } from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { setUserName, setUserPhoneNumber } from '../redux/action';
// import { useDispatch } from 'react-redux';
// import SplashScreen from 'react-native-splash-screen';

// const SplashScreenn = ({ navigation }) => {
//   useEffect(() => {
//     checkLoginStatus();
//   }, []);

//   // useEffect(() => {
//   //   SplashScreen.hide();
//   //  },[])

//   const dispatch = useDispatch();
//   const checkLoginStatus = async () => {
//     try {
//       console.log('Checking login status...');
//       const isLoggedIn = await AsyncStorage.getItem('isLoggedIn');
//       const name = await AsyncStorage.getItem('name');
//       const phone = await AsyncStorage.getItem('phone');
//       console.log('IsLoggedIn:', isLoggedIn);

//       if (isLoggedIn === 'true') {
//         navigation.navigate('HomeScreen');
//         dispatch(setUserName(name));
//         dispatch(setUserPhoneNumber(phone));

//         console.log ('login', isLoggedIn)
//       } else {
//         navigation.navigate('UserDetailsScreen');
//       }
//     } catch (error) {
//       console.error('Error checking login status:', error);
//     }
//   };

//   return (
//     <View>
//       {SplashScreen.hide()}
//     </View>
//   );
// };

// export default SplashScreenn;

import React, { useEffect } from 'react';
import { View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { setUserName, setUserPhoneNumber } from '../redux/action';
import { useDispatch } from 'react-redux';
import SplashScreen from 'react-native-splash-screen';

const SplashScreenn = ({ navigation }) => {
  useEffect(() => {
    // Add a delay of 2 seconds (2000 milliseconds) before checking login status
    const splashTimeout = setTimeout(() => {
      checkLoginStatus();
    }, 500);

    // Clear the timeout when the component is unmounted
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
      // Hide the splash screen after checking login status
      SplashScreen.hide();
    }
  };

  return <View />;
};

export default SplashScreenn;

