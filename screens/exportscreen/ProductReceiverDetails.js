
import React,{useState, useEffect} from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import styles from './styles';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const ProductReceiverDetails = ({
  productIndex,  
  product,
  setProduct,
  validateInputs,
  productName,
  setProductName,
  dimensions,
  setDimensions,
  receiverName,
  setReceiverName,
  mobileNumber,
  setMobileNumber,
  address,
  setAddress,
  renderError,
  openGallery,
  openCamera,
  removeImage,
  selectedImage,
  selectedImages,
  onDeleteProduct,
}) => {
    const heading = `Product ${productIndex + 1}`;  


return(
  <View style={styles.sectionContainer}>
    <View style={styles.headingContainer}>
        <Text style={styles.subHeading}>{heading}</Text>
        <TouchableOpacity onPress={() => onDeleteProduct(productIndex)}>
          <MaterialIcons name="delete" size={24} color="red" />
        </TouchableOpacity>
      </View>
    <TextInput
      style={styles.inputField}
      placeholder="Product Name"
      value={product?.productName || ''}
      onChangeText={(text) => {
        setProduct({ ...product, productName: text });
      }}
      onFocus={() => console.log('TextInput focused')}
    />
    {renderError('productName', productIndex)}

    <TextInput
      style={styles.inputField}
      placeholder="Dimensions"
      value={product.dimensions}
      onChangeText={(text) => setProduct({ ...product, dimensions: text, selectedImage })}

    />
    {renderError('dimensions',productIndex)}

    <View>
      <View style={styles.back}>
        <TouchableOpacity onPress={openGallery} style={styles.button}>
          <Text style={styles.buttonText}>Gallery</Text>
          <MaterialIcons name="photo-library" size={30} color={'white'} />
        </TouchableOpacity>
        <TouchableOpacity onPress={openCamera} style={styles.button}>
          <Text style={styles.buttonText}>Camera</Text>
          <MaterialIcons name="photo-camera" size={30} color={'white'} />
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.imageplace}>
         {selectedImage && selectedImage.isVisible ? (
            <View>
              <TouchableOpacity onPress={removeImage} style={styles.removeImageButton}>
                <Icon name="close" size={20} color="white" />
              </TouchableOpacity>
              <Image source={{uri: selectedImages[productIndex]?.uri}} style={styles.selectedImage} />
            </View>
          ) : null}
      </TouchableOpacity>
    </View>
    {renderError('image',productIndex)}

    <Text style={styles.subHeading}>Receiver Details</Text>

    <TextInput
      style={styles.inputField}
      placeholder="Receiver Name"
      value={product.receiverName}
      onChangeText={(text) => setProduct({ ...product, receiverName: text })}
    />
     {renderError('receiverName',productIndex)}

    <TextInput
      style={styles.inputField}
      placeholder="Mobile Number"
      value={product.mobileNumber}
      onChangeText={(text) => setProduct({ ...product, mobileNumber: text })}
      keyboardType="number-pad"
    />
    {renderError('mobileNumber',productIndex)}

    <TextInput
      style={styles.inputField}
      placeholder="Address"
      value={product.address}
      onChangeText={(text) => setProduct({ ...product, address: text })}
    />
    {renderError('address',productIndex)}
  </View>
);
        }

export default ProductReceiverDetails;
