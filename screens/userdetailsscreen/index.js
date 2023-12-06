import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { setUserName, setUserPhoneNumber } from '../redux/action';
import styles from './styles';
import { findIndex, isEmpty, isObject } from "lodash";
import { useNavigation } from '@react-navigation/native';

const UserDetailsScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isNameFocused, setIsNameFocused] = useState(false);
  const [isPhoneNumberFocused, setIsPhoneNumberFocused] = useState(false);
  const [nameerror, setNameerror] = useState(false)
  const[phoneerror,setPhoneerror] = useState(false)
  const[phoneinstruction,setPhoneinstruction] = useState(false)

    const OTP = () => {
        navigation.navigate('OTPScreen'); 
      };

  const handle = () => {
    dispatch(setUserName(name));
    dispatch(setUserPhoneNumber(phoneNumber));
    console.log('dispatched', name)
    OTP();
  }

  const validation = () => {
    const numVal = /^[0-9]+$/;

    if(isEmpty(name)){
        setNameerror(true);
      }
      else if(isEmpty(phoneNumber)){
        setPhoneerror(true)
        setNameerror(false)
      }
      else if (
        !numVal.test(String(phoneNumber)) ||
        phoneNumber.length < 6 ||
        phoneNumber.length > 12
      ){
        setPhoneerror(false)
        setNameerror(false)
        setPhoneinstruction(true)
      }
      else if (
        numVal.test(String(phoneNumber)) ||
        phoneNumber.length < 6 ||
        phoneNumber.length > 12
      ){
        setPhoneerror(false)
        setNameerror(false)
        setPhoneinstruction(false)
        handle();
      }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>How we will call you</Text>

      <TextInput
        style={[
          styles.input,
          { borderColor: isNameFocused ? '#61C9D3' : 'black' },
        ]}
        placeholder="Name"
        value={name}
        onChangeText={(text) => setName(text)}
        onFocus={() => setIsNameFocused(true)}
        onBlur={() => setIsNameFocused(false)}
      />
      {nameerror?<View><Text style={styles.errormessage}>Please enter your name</Text></View>:null}

      <Text style={styles.title}>Give your number to contact you</Text>

      <TextInput
        style={[
          styles.input,
          { borderColor: isPhoneNumberFocused ? '#61C9D3' : 'black' },
        ]}
        placeholder="Phone Number"
        value={phoneNumber}
        onChangeText={(text) => setPhoneNumber(text)}
        keyboardType="phone-pad"
        onFocus={() => setIsPhoneNumberFocused(true)}
        onBlur={() => setIsPhoneNumberFocused(false)}
      />
      {phoneerror?<View><Text style={styles.errormessage}>Please enter your number</Text></View>:null}
      {phoneinstruction?<View><Text style={styles.errormessage}>Please enter valid number</Text></View>:null}

      <TouchableOpacity style={styles.button} onPress={validation}>
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

export default UserDetailsScreen;





