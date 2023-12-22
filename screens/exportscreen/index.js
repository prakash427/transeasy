import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import ImagePicker from 'react-native-image-crop-picker';
import { launchCamera } from 'react-native-image-picker';
import styles from './styles';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import ProductReceiverDetails from './ProductReceiverDetails';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';
import { setProduct, setProductDimensions, setImage } from '../redux/action';
const ExportScreen = () => {
  const dispatch = useDispatch();

  const navigation = useNavigation();
  const [sections, setSections] = useState([{}]);
  const [products, setProducts] = useState([
    { productName: '', dimensions: '', receiverName: '', mobileNumber: '', address: '', selectedImage: null},
  ]);
  const [productName, setProductName] = useState('');
  const [dimensions, setDimensions] = useState('');
  const [receiverName, setReceiverName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [address, setAddress] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedJourneyIcon, setSelectedJourneyIcon] = useState('Bike');
  const [selectedImages, setSelectedImages] = useState([]);


 
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

    const onDeleteProduct = (index) => {
          const updatedSections = [...sections];
          updatedSections.splice(index, 1);
          setSections(updatedSections);
        };

  const renderProductReceiverDetails = (section, index) => (
    <ProductReceiverDetails
      key={index}
      productIndex={index}
      product={products[index]}
      setProduct={(updatedProduct) => {
        const updatedProducts = [...products];
        updatedProducts[index] = updatedProduct;
        setProducts(updatedProducts);
      }}
      validateInputs={validateInputs}
      productName={productName}
      setProductName={setProductName}
      dimensions={dimensions}
      setDimensions={setDimensions}
      receiverName={receiverName}
      setReceiverName={setReceiverName}
      mobileNumber={mobileNumber}
      setMobileNumber={setMobileNumber}
      address={address}
      setAddress={setAddress}
      openGallery={openGallery}
      openCamera={openCamera}
      removeImage={removeImage}
      selectedImage={products[index].selectedImage}
      renderError={(field) => renderError(field,index)}
      onDeleteProduct={onDeleteProduct}
    />
  );

  const addProduct = () => {
    setSections([...sections, {}]);
    setProducts([...products, { productName: '', dimensions: '', receiverName: '', mobileNumber: '', address: '', selectedImage: null}]);
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

  const renderError = (field, productIndex) => {
    const productErrors = errors[productIndex];
    if (productErrors && productErrors[field]) {
      const errorMessage = productErrors[field];
      return <Text style={styles.errorText}>{errorMessage}</Text>;
    }
    return null;
  };

  const openGallery = (productIndex) => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    })
      .then((image) => {
        console.log('Selected image from gallery:', image);
        const updatedImages = [...selectedImages];
        updatedImages[productIndex] = { uri: image.path, isVisible: true };
        setSelectedImages(updatedImages);
        setProducts((prevProducts) => {
          const updatedProducts = [...prevProducts];
          updatedProducts[productIndex].selectedImage = updatedImages[productIndex];
          return updatedProducts;
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  
  const openCamera = (productIndex) => {
    const options = {
      mediaType: 'photo',
      quality: 1,
    };
  
    launchCamera(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled camera');
      } else if (response.error) {
        console.log('Camera Error: ', response.error);
      } else if (response.uri) {
        console.log('Selected image from camera:', response.uri);
        const updatedImages = [...selectedImages];
        updatedImages[productIndex] = { uri: response.uri, isVisible: true };
        setSelectedImages(updatedImages);
        setProducts((prevProducts) => {
          const updatedProducts = [...prevProducts];
          updatedProducts[productIndex].selectedImage = updatedImages[productIndex];
          return updatedProducts;
        });
      }
    });
  };
  
  const removeImage = (productIndex) => {
    const updatedImages = [...selectedImages];
  updatedImages[productIndex] = null;
  setSelectedImages(updatedImages);

  setProducts((prevProducts) => {
    const updatedProducts = [...prevProducts];
    updatedProducts[productIndex].selectedImage = null;
    return updatedProducts;
  });
  };
  
  const validateInputs = () => {
    const newErrors = products.map((product) => {
      console.log('Product:', product);
    console.log('Selected Image:', product.selectedImage);
    console.log('Selected Image URI:', product.selectedImage && product.selectedImage.uri);
    
    return {
      productName: product.productName.trim() ? '' : 'Product Name is required',
      dimensions: product.dimensions.trim() ? '' : 'Dimensions are required',
      receiverName: product.receiverName.trim() ? '' : 'Receiver Name is required',
      mobileNumber: product.mobileNumber.trim() ? '' : 'Mobile Number is required',
      address: product.address.trim() ? '' : 'Address is required',
      image:  product.selectedImage? '' : 'Image is required',
    }});
  
    console.log('newErrors:', newErrors);
    setErrors(newErrors);
  
    if (newErrors.every((productErrors) => Object.values(productErrors).every((error) => !error))) {
      console.log('All products are valid');
      dispatch(setProduct(products));
      navigation.navigate('Transportslist');
      console.log('dispatched',products)
      return true;
    } else {
      console.log('Some products have errors');
      return false;
    }
  };

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
      {sections.map((section, index) => (
          <ProductReceiverDetails
            key={index}
            productIndex={index}
            product={products[index]}
            selectedImages={selectedImages}
            setProduct={(updatedProduct) => {
              const updatedProducts = [...products];
              updatedProducts[index] = updatedProduct;
              setProducts(updatedProducts);
            }}
            validateInputs={validateInputs}
            productName={productName}
            setProductName={setProductName}
            dimensions={dimensions}
            setDimensions={setDimensions}
            receiverName={receiverName}
            setReceiverName={setReceiverName}
            mobileNumber={mobileNumber}
            setMobileNumber={setMobileNumber}
            address={address}
            setAddress={setAddress}
            openGallery={() => openGallery(index)}
            openCamera={() => openCamera(index)}
            removeImage={() => removeImage(index)}
            selectedImage={selectedImages[index]}
            renderError={(field) => renderError(field, index)}
            onDeleteProduct={onDeleteProduct}
          />
        ))}

      <TouchableOpacity
        onPress={addProduct}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Add Product</Text>
      </TouchableOpacity>
      <View>
      <Text style={styles.subHeading}>Select Vehicle</Text>
      <View style={styles.journeyIconsContainer}>
           {journeyIcons.map(renderJourneyIcon)}
      </View>
      </View>

      <TouchableOpacity onPress={() => validateInputs(products[0])} style={styles.confirmLocationButton}>
        <Text style={styles.buttonText}>Select Transport Service</Text>
      </TouchableOpacity>
    </ScrollView>
    </View>
  );
};

export default ExportScreen;
