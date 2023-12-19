
import React, { useState } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, ScrollView } from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import { launchCamera } from 'react-native-image-picker';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import styles from './styles'
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { setProduct, setProductDimensions, setImage } from '../redux/action';

const ExportScreen = () => {
  const dispatch = useDispatch();
  const [productName, setProductName] = useState('');
  const [dimensions, setDimensions] = useState('');
  const [receiverName, setReceiverName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [address, setAddress] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedJourneyIcon, setSelectedJourneyIcon] = useState('Bike');
  const [errors, setErrors] = useState({
    productName: '',
    dimensions: '',
    receiverName: '',
    mobileNumber: '',
    address: '',
    image :''
  });

  const journeyIcons = [
    { title: 'Bike', icon: 'motorbike' },
    { title: 'Auto', icon: 'bell' },
    { title: 'Van', icon: 'van-utility' },
  ];

  const navigation = useNavigation();

  const validateInputs = () => {
    const newErrors = {
      productName: productName.trim() ? '' : 'Product Name is required',
      dimensions: dimensions.trim() ? '' : 'Dimensions are required',
      receiverName: receiverName.trim() ? '' : 'Receiver Name is required',
      mobileNumber: mobileNumber.trim() ? '' : 'Mobile Number is required',
      address: address.trim() ? '' : 'Address is required',
      image: selectedImage ? '' : 'Image is required',
    };
    console.log('newErrors:', newErrors);
    setErrors(newErrors);

    if (Object.values(newErrors).every(error => !error)) {
      dispatch(setProduct(productName));
      dispatch(setProductDimensions(dimensions));
      dispatch(setImage(selectedImage.uri));
      navigation.navigate('Transportslist');
    }
  };

  const renderError = field => (
    <Text style={styles.errorText}>{errors[field]}</Text>
  );

  const openGallery = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    })
      .then(image => {
        console.log(image);
        setSelectedImage({ uri: image.path, isVisible: true });
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
        setSelectedImage({ uri: response.uri, isVisible: true });
      }
    });
  };
  const removeImage = () => {
    setSelectedImage(null);
  };


  const renderJourneyIcon = item => (
    <TouchableOpacity
      style={[
        styles.journeyIconContainer,
        { backgroundColor: selectedJourneyIcon === item.title ? '#61C9D3' : 'transparent' },
      ]}
      onPress={() => setSelectedJourneyIcon(selectedJourneyIcon === item.title ? null : item.title)}
      key={item.title}
    >
      <Icon name={item.icon} size={30} color={selectedJourneyIcon === item.title ? '#fff' : 'black'} />
      <Text style={[styles.journeyIconText, { color: selectedJourneyIcon === item.title ? '#fff' : 'black' }]}>
        {item.title}
      </Text>
    </TouchableOpacity>
  );

  return (
      <View style={styles.container}>
       <View style={styles.mainHeading}> 
        <View style={styles.back}>
         <TouchableOpacity onPress={()=>{navigation.navigate('HomeScreen')}}>
           <EvilIcons name='chevron-left' size={38} color={'white'} /> 
         </TouchableOpacity> 
         <Text style={styles.Headertext}>Go Back</Text>
        </View>
        <Text style={styles.Headertext} marginLeft = {10}>Enter Product Details</Text>
       </View>
        <ScrollView>
        <View style={styles.sectionContainer}>
          <Text style={styles.subHeading}>Product Details</Text>

          <TextInput
            style={styles.inputField}
            placeholder="Product Name"
            value={productName}
            onChangeText={text => setProductName(text)}
          />
          {renderError('productName')}

          <TextInput
            style={styles.inputField}
            placeholder="Dimensions"
            value={dimensions}
            onChangeText={text => setDimensions(text)}
          />
          {renderError('dimensions')}

          <View>
            <View style={styles.back}>
            <TouchableOpacity onPress={openGallery} style={styles.button}>
              <Text style={styles.buttonText}>Gallery</Text>
              <MaterialIcons name='photo-library' size={30} color={'white'} /> 
            </TouchableOpacity>
            <TouchableOpacity onPress={openCamera} style={styles.button}>
              <Text style={styles.buttonText}>Camera</Text>
              <MaterialIcons name='photo-camera' size={30} color={'white'} />
            </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.imageplace}>
             {selectedImage && selectedImage.isVisible ? (
              <View>
                 <TouchableOpacity onPress={removeImage} style={styles.removeImageButton}>
                  <Icon name="close" size={20} color="white"/>
                </TouchableOpacity>
                <Image source={selectedImage} style={styles.selectedImage} />
              </View>
            ) : null}  
            </TouchableOpacity>
          </View>
          {renderError('image')}
        {/* </View>

        <View style={styles.sectionContainer}> */}
          <Text style={styles.subHeading}>Receiver Details</Text>

          <TextInput
            style={styles.inputField}
            placeholder="Receiver Name"
            value={receiverName}
            onChangeText={text => setReceiverName(text)}
          />
          {renderError('receiverName')}

          <TextInput
            style={styles.inputField}
            placeholder="Mobile Number"
            value={mobileNumber}
            onChangeText={text => setMobileNumber(text)}
            keyboardType="number-pad"
          />
          {renderError('mobileNumber')}

          <TextInput
            style={styles.inputField}
            placeholder="Address"
            value={address}
            onChangeText={text => setAddress(text)}
          />
          {renderError('address')}
        {/* </View> */}

        <Text style={styles.subHeading}>Select Vehicle</Text>
        <View style={styles.journeyIconsContainer}>
          {journeyIcons.map(renderJourneyIcon)}
          </View>
          </View>
          </ScrollView>
        <TouchableOpacity onPress={validateInputs} style={styles.confirmLocationButton}>
          <Text style={styles.buttonText}>Select Transport Service</Text>
        </TouchableOpacity>
      </View>
  );
};

export default ExportScreen;
