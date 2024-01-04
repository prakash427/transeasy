import React, { useState, useRef } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, Alert } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import styles from './styles'
import { useNavigation } from '@react-navigation/native';

const OTPScreen = () => {
  const [otpFields, setOtpFields] = useState(['', '', '', '']);
  const otpInputRefs = useRef([]);

  const navigation = useNavigation();
  const LOCATION = () => {
    navigation.navigate('HomeScreen');
  };

  const handleOTPChange = (text, index) => {
    setOtpFields((prevOtpFields) => {
      const updatedOtpFields = [...prevOtpFields];
      updatedOtpFields[index] = text;
      return updatedOtpFields;
    });

    if (text !== '' && index < 3) {
      otpInputRefs.current[index + 1].focus();
    }
  };


  const handleSubmit = () => {
    const isOtpFilled = otpFields.every((field) => field !== '');

    if (isOtpFilled) {
      const isOtpValid = otpFields.join('') === '1234';

      if (isOtpValid) {
        Alert.alert('Verification Successful', 'OTP verified successfully!');
      } else {
        Alert.alert('Verification Failed', 'Incorrect OTP. Please try again.');
      }
    } else {
      Alert.alert('Error', 'Please fill all OTP fields.');
    }
  };

  const handleResendOTP = () => {
    Alert.alert('Resend OTP', 'New OTP sent to your phone number.');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => console.log('Left arrow pressed')}
        style={styles.leftArrow}
      >
        <AntDesign name="arrowleft" size={30} color={'orangered'} />
      </TouchableOpacity>

      <Image source={require('../assets/otp.jpg')} style={styles.image} />

      <Text style={styles.verifyText}>Verify with OTP sent to your mobile number</Text>
      <View style={styles.otpContainer}>
        {otpFields.map((otp, index) => (
          <TextInput
            key={index}
            style={styles.otpInput}
            value={otp}
            onChangeText={(text) => handleOTPChange(text, index)}
            keyboardType="numeric"
            maxLength={1}
            ref={(ref) => {
              otpInputRefs.current[index] = ref;
            }}
          />
        ))}
      </View>
      <TouchableOpacity style={styles.submitButton} onPress={LOCATION}>
        <Text style={styles.buttonText}>SUBMIT</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.resendButton} onPress={handleResendOTP}>
        <AntDesign name="reload1" size={20} color={'black'} />
        <Text style={styles.resend}> RESEND OTP</Text>
      </TouchableOpacity>
    </View>
  );
};


export default OTPScreen;
