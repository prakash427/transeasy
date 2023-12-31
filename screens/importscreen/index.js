import React, { useState } from 'react';
import { View, Text, TextInput, Image, StyleSheet, TouchableOpacity, ScrollView, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import CustomLinearGradient from '../customlineargradient/lineargradient';
import styles from './styles';

const ImportScreen = () => {
  const [receiverName, setReceiverName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [id, setId] = useState('');
  const [selectedJourneyIcon, setSelectedJourneyIcon] = useState('Bike');
  const navigation = useNavigation();

  const journeyIcons = [
    { title: 'Bike', icon: 'motorbike' },
    { title: 'Auto', icon: 'bell' },
    { title: 'Van', icon: 'van-utility' },
  ];

  const [errors, setErrors] = useState({
    receiverName: '',
    mobileNumber: '',
    id: ''
  });

  const renderError = (field) => {
    const productErrors = errors;
    if (productErrors && productErrors[field]) {
      const errorMessage = productErrors[field];
      return <Text style={styles.errorText}>{errorMessage}</Text>;
    }
    return null;
  };

  const validateInputs = () => {
    const newErrors = (() => {
      const namePattern = /^[a-zA-Z\s]*$/;
      const phonePattern = /^\d{10}$/;
      const idPattern = /^\d{6}$/;
      return {
        receiverName : (receiverName.trim() && namePattern.test(receiverName.trim())) ? '' :
        (receiverName.trim()?'please enter valid Receiver Name' : 'Receiver Name is required'),
        mobileNumber : (mobileNumber.trim() && phonePattern.test(mobileNumber.trim())) ? '':
        (mobileNumber.trim()?'please enter valid Mobile Number' : 'Mobile NUmber is required'),
        id : (id.trim() && idPattern.test(id.trim()))?'':
        (id.trim()?'please enter valid id' : 'Id is required')
      }
    });
    setErrors(newErrors);
  };
  const renderJourneyIcon = item => {
    const imageMapping = {
      Bike: require('../assets/bike.jpg'),
      Auto: require('../assets/auto.jpg'),
      Van: require('../assets/van1.jpg'),
    };
    return (
      <TouchableOpacity
        style={[
          styles.journeyIconContainer,
          selectedJourneyIcon === item.title ? styles.selectedJourneyIconStyle : styles.unselectedJourneyIconStyle,
        ]}
        onPress={() => setSelectedJourneyIcon(selectedJourneyIcon === item.title ? null : item.title)}
        key={item.title}
      >
        <Image
          source={imageMapping[item.title]}
          style={{ width: 80, height: 60, borderRadius: 5 }}
        />
        <Text style={[styles.journeyIconText, { color: selectedJourneyIcon === item.title ? 'black' : 'grey' }]}>
          {item.title}
        </Text>
      </TouchableOpacity>
    )
  };
  return (
    <>
      <ScrollView>
        <View style={styles.container}>
          <LinearGradient
            style={styles.mainHeading}
            colors={['#7070d9', '#24a1c9']}
            start={{ x: 1, y: 0 }}
            end={{ x: 0, y: 1 }}
          >
            <View style={styles.back}>
              <TouchableOpacity onPress={() => { navigation.navigate('HomeScreen') }}>
                <EvilIcons name='chevron-left' size={38} color={'white'} />
              </TouchableOpacity>
              <Text style={styles.Headertext}>Go Back</Text>
            </View>
          </LinearGradient>
          <View style={styles.sectionContainer}>
            <Text style={styles.subHeading}>Receiver Details</Text>
            <TextInput
              style={styles.inputField}
              placeholder="Receiver Name"
              value={receiverName}
              onChangeText={(text) => setReceiverName(text)}
            />
              {renderError('receiverName')}
            <TextInput
              style={styles.inputField}
              placeholder="Mobile Number"
              value={mobileNumber}
              onChangeText={(text) => setMobileNumber(text)}
              keyboardType='number-pad'
            />
             {renderError('mobileNumber')}
            <TextInput
              style={styles.inputField}
              placeholder='ID'
              value={id}
              onChangeText={(Number) => setId(Number)}
              keyboardType='number-pad'
            />
             {renderError('id')}
            <Text style={styles.subHeading}>Select Vehicle</Text>
            <View style={styles.journeyIconsContainer}>
              {journeyIcons.map(renderJourneyIcon)}
            </View>
          </View>
        </View>
      </ScrollView>
      <LinearGradient
        style={styles.confirmLocationButton}
        colors={['#7070d9', '#24a1c9']}
        start={{ x: 1, y: 0 }}
        end={{ x: 0, y: 1 }}
      >
        <TouchableOpacity onPress={validateInputs}>
          <Text style={styles.buttonText}>Confirm Location</Text>
        </TouchableOpacity>
      </LinearGradient>
    </>
  );
};

export default ImportScreen;