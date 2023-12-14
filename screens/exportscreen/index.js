
// import React, { useState } from 'react';
// import { View, Text, TextInput, Image, StyleSheet, TouchableOpacity, ScrollView, Alert } from 'react-native';
// import ImagePicker from 'react-native-image-crop-picker';
// import { launchCamera } from 'react-native-image-picker';
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
// import styles from './styles';
// import { useNavigation } from '@react-navigation/native';
// import { useDispatch } from 'react-redux';
// import { setProduct, setProductDimensions } from '../redux/action';

// const ExportScreen = () => {
//   const dispatch = useDispatch();
//   const [productName, setProductName] = useState('');
//   const [dimensions, setDimensions] = useState('');
//   const [image, setImage] = useState('');
//   const [receiverName, setReceiverName] = useState('');
//   const [mobileNumber, setMobileNumber] = useState('');
//   const [address, setAddress] = useState('');
//   const [selectedImage, setSelectedImage] = useState(null);
//   const [selectedJourneyIcon, setSelectedJourneyIcon] = useState('Bike');

//   const journeyIcons = [
//     { title: 'Bike', icon: 'motorbike' },
//     { title: 'Auto', icon: 'bell' },
//     { title: 'Van', icon: 'van-utility' },
//   ];

//   const navigation = useNavigation();

//   const validateAndNavigate = () => {
//     if (!productName.trim()) {
//       Alert.alert('Validation Error', 'Please enter Product Name');
//       return;
//     }

//     if (!dimensions.trim()) {
//       Alert.alert('Validation Error', 'Please enter Dimensions');
//       return;
//     }

//     if (!receiverName.trim()) {
//       Alert.alert('Validation Error', 'Please enter Receiver Name');
//       return;
//     }

//     if (!mobileNumber.trim()) {
//       Alert.alert('Validation Error', 'Please enter Mobile Number');
//       return;
//     }

//     if (!address.trim()) {
//       Alert.alert('Validation Error', 'Please enter Address');
//       return;
//     }

//     if (!selectedJourneyIcon) {
//       Alert.alert('Validation Error', 'Please select a Journey Icon');
//       return;
//     }

//     // All fields are valid, navigate to 'Transportslist'
//     navigation.navigate('Transportslist');
//     dispatch(setProduct(productName));
//     dispatch(setProductDimensions(dimensions));
//   };

//   const renderJourneyIcon = (item) => {
//     const isSelected = selectedJourneyIcon === item.title;
//     return (
//       <TouchableOpacity
//         style={[
//           styles.journeyIconContainer,
//           { backgroundColor: isSelected ? '#61C9D3' : 'transparent' },
//         ]}
//         onPress={() => setSelectedJourneyIcon(isSelected ? null : item.title)}
//         key={item.title}
//       >
//         <Icon name={item.icon} size={30} color={isSelected ? '#fff' : 'black'} />
//         <Text style={[styles.journeyIconText, { color: isSelected ? '#fff' : 'black' }]}>
//           {item.title}
//         </Text>
//       </TouchableOpacity>
//     );
//   };

//   const openGallery = () => {
//     ImagePicker.openPicker({
//       width: 300,
//       height: 400,
//       cropping: true,
//     })
//       .then(image => {
//         console.log(image);
//         setSelectedImage({ uri: image.path });
//       })
//       .catch(error => {
//         console.log(error);
//       });
//   };

//   const openCamera = () => {
//     const options = {
//       mediaType: 'photo',
//       quality: 1,
//     };

//     launchCamera(options, response => {
//       if (response.didCancel) {
//         console.log('User cancelled camera');
//       } else if (response.error) {
//         console.log('Camera Error: ', response.error);
//       } else if (response.uri) {
//         setSelectedImage({ uri: response.uri });
//       }
//     });
//   };

//   return (
//     <ScrollView>
//       <View style={styles.container}>
//         <Text style={styles.mainHeading}>Enter Product Details</Text>

//         <View style={styles.sectionContainer}>
//           <Text style={styles.subHeading}>Product Details</Text>

//           <TextInput
//             style={styles.inputField}
//             placeholder="Product Name"
//             value={productName}
//             onChangeText={(text) => setProductName(text)}
//           />
//           <TextInput
//             style={styles.inputField}
//             placeholder="Dimensions"
//             value={dimensions}
//             onChangeText={(text) => setDimensions(text)}
//           />
//           <View>
//             <TouchableOpacity onPress={openGallery} style={styles.button}>
//               <Text style={styles.buttonText}>Open Gallery</Text>
//             </TouchableOpacity>
//             <TouchableOpacity onPress={openCamera} style={styles.button}>
//               <Text style={styles.buttonText}>Open Camera</Text>
//             </TouchableOpacity>
//             {selectedImage && <Image source={selectedImage} style={styles.selectedImage} />}
//           </View>
//         </View>

//         <View style={styles.sectionContainer}>
//           <Text style={styles.subHeading}>Receiver Details</Text>

//           <TextInput
//             style={styles.inputField}
//             placeholder="Receiver Name"
//             value={receiverName}
//             onChangeText={(text) => setReceiverName(text)}
//           />

//           <TextInput
//             style={styles.inputField}
//             placeholder="Mobile Number"
//             value={mobileNumber}
//             onChangeText={(text) => setMobileNumber(text)}
//             keyboardType='number-pad'
//           />

//           <TextInput
//             style={styles.inputField}
//             placeholder="Address"
//             value={address}
//             onChangeText={(text) => setAddress(text)}
//           />
//         </View>

//         <Text style={styles.subHeading}>Select Vehicle</Text>
//         <View style={styles.journeyIconsContainer}>
//           {journeyIcons.map(renderJourneyIcon)}
//         </View>

//         <TouchableOpacity onPress={validateAndNavigate} style={styles.confirmLocationButton}>
//           <Text style={styles.buttonText}>Select Transport Service</Text>
//         </TouchableOpacity>
//       </View>
//     </ScrollView>
//   );
// };

// export default ExportScreen;

import React, { useState } from 'react';
import { View, Text, TextInput, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
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
  const [errors, setErrors] = useState({
    productName: '',
    dimensions: '',
    receiverName: '',
    mobileNumber: '',
    address: '',
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
    };

    setErrors(newErrors);

    if (Object.values(newErrors).every(error => !error)) {
      // No errors, proceed with navigation
      dispatch(setProduct(productName));
      dispatch(setProductDimensions(dimensions));
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
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.mainHeading}>Enter Product Details</Text>

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
        </View>

        <Text style={styles.subHeading}>Select Vehicle</Text>
        <View style={styles.journeyIconsContainer}>{journeyIcons.map(renderJourneyIcon)}</View>

        <TouchableOpacity onPress={validateInputs} style={styles.confirmLocationButton}>
          <Text style={styles.buttonText}>Select Transport Service</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default ExportScreen;
