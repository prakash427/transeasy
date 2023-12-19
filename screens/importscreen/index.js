import React, { useState } from 'react';
import { View, Text, TextInput, Image, StyleSheet, TouchableOpacity, ScrollView,Alert } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';



const ImportScreen = () => {
  const [receiverName, setReceiverName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [id, setId] =useState('');
  const [selectedJourneyIcon, setSelectedJourneyIcon] = useState('Bike');
  const navigation = useNavigation();

  const journeyIcons = [
    { title: 'Bike', icon: 'motorbike' },
    { title: 'Auto', icon: 'bell' },
    { title: 'Van', icon: 'van-utility' },
  ];




  const renderJourneyIcon = (item) => {
    const isSelected = selectedJourneyIcon === item.title;
    return (
      <TouchableOpacity
        style={[
          styles.journeyIconContainer,
          { backgroundColor: isSelected ? '#61C9D3' : 'transparent' },
        ]}
        onPress={() => setSelectedJourneyIcon(isSelected ? null : item.title)}
        key={item.title}
      >
        <Icon name={item.icon} size={30} color={isSelected ? '#fff' : 'black'} />
        <Text style={[styles.journeyIconText, { color: isSelected ? '#fff' : 'black' }]}>
          {item.title}
        </Text>
      </TouchableOpacity>
    );
  };

 
  const validateInputs = () => {
    if ( !receiverName.trim() || !mobileNumber.trim() || !id.trim|| !selectedJourneyIcon) {
      Alert.alert('Validation Error', 'Please fill in all fields and select a journey icon.');
      return false;
    }


    return true;
  };


  const confirmLocation = () => {
    if (validateInputs()) {
      console.log('Location confirmed!');
    }

    console.log('Location confirmed!');
  };

  return (
    <>
    <ScrollView>
      <View style={styles.container}>
      <View style={styles.mainHeading}> 
        <View style={styles.back}>
         <TouchableOpacity onPress={()=>{navigation.navigate('HomeScreen')}}>
           <EvilIcons name='chevron-left' size={38} color={'white'} /> 
         </TouchableOpacity> 
         <Text style={styles.Headertext}>Go Back</Text>
        </View>
        <Text style={styles.Headertext} marginLeft = {10}>Receiver Details</Text>
       </View>

        <View style={styles.sectionContainer}>
          <Text style={styles.subHeading}>Complete the following Details</Text>

          <TextInput
            style={styles.inputField}
            placeholder="Receiver Name"
            value={receiverName}
            onChangeText={(text) => setReceiverName(text)}
          />

          <TextInput
            style={styles.inputField}
            placeholder="Mobile Number"
            value={mobileNumber}
            onChangeText={(text) => setMobileNumber(text)}
            keyboardType='number-pad'
          />

          <TextInput
          style={styles.inputField}
          placeholder='ID'
          value ={id}
          onChangeText={(Number) => setId(Number)}
          keyboardType='number-pad'
          />
        {/* </View>
        <View style={styles.sectionContainer}>  */}
        <Text style={styles.subHeading}>Select Vehicle</Text>
        <View style={styles.journeyIconsContainer}>
          {journeyIcons.map(renderJourneyIcon)}
        </View>
       </View>
      </View>
    </ScrollView>
    <TouchableOpacity onPress={confirmLocation} style={styles.confirmLocationButton}>
          <Text style={styles.buttonText}>Confirm Location</Text>
        </TouchableOpacity>
    </>
  );
};

export default ImportScreen;