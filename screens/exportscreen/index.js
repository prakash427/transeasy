import React, { useState } from 'react';
import { View, Text, TextInput, Image, StyleSheet, TouchableOpacity, ScrollView,Alert } from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import { launchCamera } from 'react-native-image-picker';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './styles'
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { setProduct, setProductDimensions } from '../redux/action';



const ExportScreen = () => {
  const dispatch = useDispatch();
  const [productName, setProductName] = useState('');
  const [dimensions, setDimensions] = useState('');
  const [image, setImage] = useState('');
  const [receiverName, setReceiverName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [address, setAddress] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedJourneyIcon, setSelectedJourneyIcon] = useState('Bike');
 

  const journeyIcons = [
    { title: 'Bike', icon: 'motorbike' },
    { title: 'Auto', icon: 'bell' },
    { title: 'Van', icon: 'van-utility' },
  ];

  const navigation = useNavigation();
  const transportlist = ()=>{
    navigation.navigate('Transportslist')
    dispatch(setProduct(productName));
    dispatch(setProductDimensions(dimensions));
  }


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

  const openGallery = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    })
      .then(image => {
        console.log(image);
        setSelectedImage({ uri: image.path });
      })
      .catch(error => {
        console.log(error);
      });
    
  };

  const openCamera = () => {
    const options = {
      mediaType: 'photo',
      quality: 1,
    };

    launchCamera(options, response => {
      if (response.didCancel) {
        console.log('User cancelled camera');
      } else if (response.error) {
        console.log('Camera Error: ', response.error);
      } else if (response.uri) {
        setSelectedImage({ uri: response.uri });
      }
    });
    
  };
  const validateInputs = () => {
    if (!productName.trim() || !dimensions.trim() || !receiverName.trim() || !mobileNumber.trim() || !address.trim() || !selectedImage || !selectedJourneyIcon) {
      Alert.alert('Validation Error', 'Please fill in all fields and select a journey icon.');
      return false;
    }

    return true;
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.mainHeading}>Enter Product Details</Text>

        <View style={styles.sectionContainer}>
          <Text style={styles.subHeading}>Product Details</Text>

          <TextInput
            style={styles.inputField}
            placeholder="Product Name"
            value={productName}
            onChangeText={(text) => setProductName(text)}
          />
          <TextInput
            style={styles.inputField}
            placeholder="Dimensions"
            value={dimensions}
            onChangeText={(text) => setDimensions(text)}
          />
          <View>
            <TouchableOpacity onPress={openGallery} style={styles.button}>
              <Text style={styles.buttonText}>Open Gallery</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={openCamera} style={styles.button}>
              <Text style={styles.buttonText}>Open Camera</Text>
            </TouchableOpacity>
            {selectedImage && <Image source={selectedImage} style={styles.selectedImage} />}
          </View>
        </View>

        <View style={styles.sectionContainer}>
          <Text style={styles.subHeading}>Receiver Details</Text>

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
            placeholder="Address"
            value={address}
            onChangeText={(text) => setAddress(text)}
          />
        </View>

        <Text style={styles.subHeading}>Select Vehicle</Text>
        <View style={styles.journeyIconsContainer}>
          {journeyIcons.map(renderJourneyIcon)}
        </View>

        <TouchableOpacity onPress={transportlist} style={styles.confirmLocationButton}>
          <Text style={styles.buttonText}>Slect Transport Service</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default ExportScreen;