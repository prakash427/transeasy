import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import ImagePicker from 'react-native-image-crop-picker';
import { launchCamera } from 'react-native-image-picker';
import styles from './styles';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import ProductReceiverDetails from './ProductReceiverDetails';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import { setProduct, setProductDimensions, setImage } from '../redux/action';
const ExportScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [sections, setSections] = useState([{}]);
  const statesList = ["Andhra Pradesh", "Telangana", "Karnataka"];
  const citiesList = {
    "Andhra Pradesh": ["Vijayawada", "Vizag", "Rajahmundry"],
    Telangana: ["Hyderabad", "Zheerabad", "Medchal"],
    Karnataka: ["Bengaluru", "Mangaluru", "Kalaburagi"],
  };
  const [products, setProducts] = useState([
    { productName: '', dimensions: '', receiverName: '', mobileNumber: '', state: '', city : '', selectedImage: null },
  ]);
  const [productName, setProductName] = useState('');
  const [dimensions, setDimensions] = useState('');
  const [receiverName, setReceiverName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [address, setAddress] = useState('');
  const [state, setState] = useState('');
  const [city, setCity] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedJourneyIcon, setSelectedJourneyIcon] = useState('Bike');
  const [selectedImages, setSelectedImages] = useState(Array(products.length).fill([]));



  const [errors, setErrors] = useState({
    productName: '',
    dimensions: '',
    receiverName: '',
    mobileNumber: '',
    state: '',
    city : '',
    image: ''
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

    const productSections = [...products];
    productSections.splice(index, 1);
    setProducts(productSections);
  };

  const addProduct = () => {
    setSections([...sections, {}]);
    setProducts([...products, { productName: '', dimensions: '', receiverName: '', mobileNumber: '', state: '', city: '' }]);
    setSelectedImages([...selectedImages, []]);
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
      multiple: true,
      width: 300,
      height: 400,
      cropping: true,
    })
      .then((images) => {
        console.log('Selected images from gallery:', images);
        const updatedImages = [...selectedImages];
        updatedImages[productIndex] = images.map(image => ({ uri: image.path, isVisible: true }));
        setSelectedImages(updatedImages);

        setProducts((prevProducts) => {
          const updatedProducts = [...prevProducts];
          updatedProducts[productIndex].selectedImage = updatedImages[productIndex];
          return updatedProducts;
        });
        dispatch(setImage(updatedImages));
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
      } else if (response.error) {
      } else if (response.assets && response.assets.length > 0) {

        const updatedImages = [...selectedImages];
        const cameraImage = response.assets[0];
        if (updatedImages[productIndex]) {
          updatedImages[productIndex].push({ uri: cameraImage.uri, isVisible: true });
        } else {
          updatedImages[productIndex] = [{ uri: cameraImage.uri, isVisible: true }];
        }
        setSelectedImages(updatedImages);

        setProducts((prevProducts) => {
          const updatedProducts = [...prevProducts];
          updatedProducts[productIndex].selectedImage = updatedImages[productIndex];
          return updatedProducts;
        });
        dispatch(setImage(updatedImages));
      }
    });
  };
  const removeImage = (productIndex, index) => {
    console.log('productIndex:', productIndex);
    console.log('index:', index);
    const updatedImages = [...selectedImages];
    if (updatedImages[productIndex]) {
      const updatedProductImages = [...updatedImages[productIndex]];
      updatedProductImages.splice(index, 1);
      updatedImages[productIndex] = updatedProductImages;
      console.log('After Removal - updatedImages:', index);
      console.log('After Removal - updatedImages:', updatedImages);

      setSelectedImages(updatedImages);

      setProducts((prevProducts) => {
        const updatedProducts = [...prevProducts];
        updatedProducts[productIndex] = {
          ...updatedProducts[productIndex],
          selectedImage: updatedProductImages,
        };
        return updatedProducts;
      });
    }
  };
  const validateInputs = () => {
    const newErrors = products.map((product) => {
      const dimensionPattern = /^\d+\*\d+$/;
      const namePattern = /^[a-zA-Z\s]*$/;
      const phonePattern = /^\d{10}$/;

      console.log('Product:', product);
      console.log('Selected Image:', product.selectedImage);
      console.log('Selected Image URI:', product.selectedImage && product.selectedImage.uri);
      return {
        productName: (product.productName.trim() && namePattern.test(product.productName.trim())) ? '' : 
        (product.productName.trim() ? 'Product Name should only contain letters' : 'Product Name is required'),
        dimensions: (product.dimensions.trim() && dimensionPattern.test(product.dimensions.trim())) ? '' : 
        (product.dimensions.trim() ? 'Please enter valid dimensions (e.g., 6*8)' : 'Dimensions are required'),
        receiverName : (product.receiverName.trim() && namePattern.test(product.receiverName.trim())) ? '' :
        (product.receiverName.trim()?'please enter valid Receiver Name' : 'Receiver Name is required'),
        mobileNumber : (product.mobileNumber.trim() && phonePattern.test(product.mobileNumber.trim())) ? '':
        (product.mobileNumber.trim()?'please enter valid Mobile Number' : 'Mobile NUmber is required'),
        state : product.state.trim()? '' : 'state is required',
        city : product.city.trim()? '' : 'city is required',
        image: product.selectedImage ? '' : 'Image is required',
      }
    });

    console.log('newErrors:', newErrors);
    setErrors(newErrors);

    if (newErrors.every((productErrors) => Object.values(productErrors).every((error) => !error))) {
      console.log('All products are valid');
      dispatch(setProduct(products));
      navigation.navigate('Transportslist');
      console.log('dispatched', products)
      return true;
    } else {
      console.log('Some products have errors');
      return false;
    }
  };

  return (
    <View style={styles.container}>
      <LinearGradient
        style={styles.mainHeading}
        colors={['#7070d9', '#24a1c9']}
        start={{ x: 1, y: 0 }}
        end={{ x: 0, y: 1 }}
      >
      </LinearGradient>
      <View style={styles.back}>
        <TouchableOpacity onPress={() => { navigation.navigate('HomeScreen') }}>
          <EvilIcons name='chevron-left' size={45} color={'white'} style={styles.iconn} />
        </TouchableOpacity>
        <Text style={styles.Headertext}>Product Details</Text>
      </View>
      <ScrollView>
        {sections.map((section, index) => (
          <ProductReceiverDetails
            key={index}
            productIndex={index}
            product={products[index]}
            additionalStyle={{ marginTop: index !== 0 ? 10 : 100 }}
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
            state = {state}
            setState = {setState}
            city = {city}
            setCity = {setCity}
            statesList = {statesList}
            citiesList = {citiesList}
            openGallery={() => openGallery(index)}
            openCamera={() => openCamera(index)}
            removeImage={() => removeImage(index)}
            selectedImage={selectedImages[index]}
            renderError={(field) => renderError(field, index)}
            onDeleteProduct={onDeleteProduct}
          />
        ))}
        <TouchableOpacity onPress={addProduct} style={styles.addbutton}>
          <Text style={styles.buttonText}>Add </Text>
          <MaterialCommunityIcons name='plus-box' size={25} color="#24a1c9" />
        </TouchableOpacity>
        <View>
          <Text style={[styles.subHeading, { marginLeft: 20, paddingTop: 10 }]}>Select Vehicle</Text>
          <View style={styles.journeyIconsContainer}>
            {journeyIcons.map(renderJourneyIcon)}
          </View>
        </View>
        <LinearGradient
          style={styles.confirmLocationButton}
          colors={['#7070d9', '#24a1c9']}
          start={{ x: 1, y: 0 }}
          end={{ x: 0, y: 1 }}
        >
          <TouchableOpacity onPress={() => validateInputs(products[0])}>
            <Text style={styles.Headertext}>Select Transport Service</Text>
          </TouchableOpacity>
        </LinearGradient>
      </ScrollView>
    </View>
  );
};

export default ExportScreen;