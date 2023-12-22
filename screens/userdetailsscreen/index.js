import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, TextInput, Image} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch } from 'react-redux';
import { setUserName, setUserPhoneNumber } from '../redux/action';
import styles from './styles';
import { isEmpty } from 'lodash';
import auth from '@react-native-firebase/auth';
import { GoogleSignin, GoogleSigninButton } from '@react-native-google-signin/google-signin';

const UserDetailsScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isNameFocused, setIsNameFocused] = useState(false);
  const [isPhoneNumberFocused, setIsPhoneNumberFocused] = useState(false);
  const [nameerror, setNameerror] = useState(false);
  const [phoneerror, setPhoneerror] = useState(false);
  const [phoneinstruction, setPhoneinstruction] = useState(false);

  useEffect(() => {
    GoogleSignin.configure({
      webClientId: '1085204628340-3gjjc8tv85fhrg0ffq630krm6badc8sr.apps.googleusercontent.com',
    });
  }, []);

  const onGoogleButtonPress = async () => {
    try {
      await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });

      const { idToken, user } = await GoogleSignin.signIn();

      const googleCredential = auth.GoogleAuthProvider.credential(idToken);

      await auth().signInWithCredential(googleCredential);
      dispatch(setUserName(user.name))
      dispatch(setUserPhoneNumber(user.email));
      console.log('dispatched', user.name);
      await AsyncStorage.setItem('isLoggedIn','true');
      await AsyncStorage.setItem('name',user.name)
      await AsyncStorage.setItem('phone',user.email)
      console.log('isLoggedIn set to true');
      navigation.navigate('HomeScreen');

      console.log('Signed in with Google!');
      console.log('User Object:', user);

      const userEmail = user?.email || 'Email not available';
      console.log('User Email:', userEmail);
    } catch (error) {
      console.error('Google Sign-In Error:', error);
    }
  };

  const OTP = () => {
    navigation.navigate('OTPScreen');
  };

  const handle = async () => {
    try {
      dispatch(setUserName(name));
      dispatch(setUserPhoneNumber(phoneNumber));
      console.log('dispatched', name);
      await AsyncStorage.setItem('isLoggedIn','true');
      await AsyncStorage.setItem('name',name)
      await AsyncStorage.setItem('phone',phoneNumber)
      console.log('isLoggedIn set to true'); 
      OTP();
    } catch (error) {
      console.error('AsyncStorage Error:', error);
    }
  };

  const validation = () => {
    const numVal = /^[0-9]+$/;
  
    if (isEmpty(name)) {
      setNameerror(true);
      return;
    }
  
    if (isEmpty(phoneNumber)) {
      setPhoneerror(true);
      setNameerror(false);
      return;
    }
  
    if (!numVal.test(String(phoneNumber)) || phoneNumber.length < 6 || phoneNumber.length > 12) {
      setPhoneerror(false);
      setNameerror(false);
      setPhoneinstruction(true);
      return;
    }
  
    setPhoneerror(false);
    setNameerror(false);
    setPhoneinstruction(false);
    handle();
  };
  

  return (
    <View style={styles.container}>
      <Image source={require('../assets/loginimage.jpg')} style={styles.image} />
      <Text style={styles.title}>How we will call you</Text>

      <TextInput
        style={[styles.input, { borderColor: isNameFocused ? '#61C9D3' : 'black' }]}
        placeholder="Name"
        value={name}
        onChangeText={(text) => setName(text)}
        onFocus={() => setIsNameFocused(true)}
        onBlur={() => setIsNameFocused(false)}
      />
      {nameerror ? <View><Text style={styles.errormessage}>Please enter your name</Text></View> : null}

      <Text style={styles.title}>Give your number to contact you</Text>

      <TextInput
        style={[styles.input, { borderColor: isPhoneNumberFocused ? '#61C9D3' : 'black' }]}
        placeholder="Phone Number"
        value={phoneNumber}
        onChangeText={(text) => setPhoneNumber(text)}
        keyboardType="phone-pad"
        onFocus={() => setIsPhoneNumberFocused(true)}
        onBlur={() => setIsPhoneNumberFocused(false)}
      />
      {phoneerror ? <View><Text style={styles.errormessage}>Please enter your number</Text></View> : null}
      {phoneinstruction ? <View><Text style={styles.errormessage}>Please enter a valid number</Text></View> : null}

      <TouchableOpacity style={styles.button} onPress={validation}>
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>
      <View style={styles.or}>
        <Text style={styles.ortext}>--------   (OR)   -------</Text>
      </View>

      <View style={styles.signincontainer}>
        <GoogleSigninButton
          style={styles.googleSignInButton}
          size={GoogleSigninButton.Size.Wide}
          color={GoogleSigninButton.Color.Dark}
          onPress={onGoogleButtonPress}
        />
      </View>
    </View>
  );
};

export default UserDetailsScreen;