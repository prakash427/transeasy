
import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import styles from './styles';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const ProductReceiverDetails = ({
  productIndex,
  product,
  setProduct,
  additionalStyle,
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
  state,
  setState,
  city,
  setCity,
  renderError,
  openGallery,
  openCamera,
  removeImage,
  selectedImage,
  selectedImages,
  onDeleteProduct,
  statesList,
  citiesList,
}) => {
  const heading = `Product ${productIndex + 1}`;


  return (
    <View style={[styles.sectionContainer, additionalStyle]}>
      <View style={styles.row}>
        <Text style={styles.subHeading}>{heading}</Text>
        {productIndex !== 0 ? <TouchableOpacity onPress={() => onDeleteProduct(productIndex)}>
          <MaterialIcons name="delete" size={24} color="red" />
        </TouchableOpacity> : null}
      </View>
      <View style={styles.columnContainer}>
        <View style={styles.rowContainer}>
          <View style={styles.inputWithIcon}>
            <MaterialCommunityIcons name='cart-arrow-up' size={20} color="#24a1c9" style={styles.icon} />
            <TextInput
              style={styles.inputField}
              placeholder="Product"
              value={product?.productName || ''}
              onChangeText={(text) => {
                setProduct({ ...product, productName: text });
              }}
              onFocus={() => console.log('TextInput focused')}
            />
          </View>
          {renderError('productName', productIndex)}
        </View>

        <View style={styles.rowContainer}>

          <View style={styles.inputWithIcon}>
            <FontAwesome name='cubes' size={20} color="#24a1c9" style={styles.icon} />
            <TextInput
              style={styles.inputField}
              placeholder="Dimension"
              value={product.dimensions}
              onChangeText={(text) => setProduct({ ...product, dimensions: text, selectedImage })}
            />
          </View>
          {renderError('dimensions', productIndex)}
        </View>
      </View>
      <Text style={styles.subHeading}>Receiver </Text>
      <View style={styles.columnContainer}>
        <View style={styles.rowContainer}>
          <View style={styles.inputWithIcon}>
            <FontAwesome6 name='house-user' size={20} color="#24a1c9" style={styles.icon} />
            <TextInput
              style={styles.inputField}
              placeholder="Name"
              value={product.receiverName}
              onChangeText={(text) => setProduct({ ...product, receiverName: text })}
            />
          </View>
          {renderError('receiverName', productIndex)}
        </View>

        <View style={styles.rowContainer}>

          <View style={styles.inputWithIcon}>
            <FontAwesome6 name='mobile-screen-button' size={23} color="#24a1c9" style={styles.icon} />
            <TextInput
              style={styles.inputField}
              placeholder="Mobile"
              value={product.mobileNumber}
              onChangeText={(text) => setProduct({ ...product, mobileNumber: text })}
              keyboardType="number-pad"
            />
          </View>
          {renderError('mobileNumber', productIndex)}
        </View>
      </View>
      <Text style={styles.subHeading}>Address</Text>
      <View style={styles.columnContainer}>
        <View style={styles.rowContainer}>
          <View style={styles.inputWithIcon}>
          <View style={styles.dropdownContainer}>
            <Picker
              style={styles.dropdownField}
              selectedValue={product.state}
              onValueChange={(itemValue) => {setProduct({...product, state : itemValue});
              setCity('');
            }}
            >
              <Picker.Item label="State" value="" color='black'/>
              {statesList.map((state) => (
                <Picker.Item key={state} label={state} value={state} color='black'/>
              ))}
            </Picker>
            </View>
          </View>
          {renderError('state', productIndex)}
        </View>

        <View style={styles.rowContainer}>

          <View style={styles.inputWithIcon}>
          <View style={styles.dropdownContainer}>
            <Picker
              style={styles.dropdownField}
              selectedValue={product.city}
              onValueChange={(itemValue) => {setProduct({...product,city : itemValue});
              console.log('city',setCity)
              }}
              enabled={product.state!== ''}
            >
              <Picker.Item label="City" value="" color='black'/>
              {product.state && citiesList[product.state] ? (
                citiesList[product.state].map((city) => (
                  <Picker.Item key={city} label={city} value={city} color='black'/>
                ))
              ) : null}
            </Picker>
            </View>
          </View>
          {renderError('city', productIndex)}
        </View>
      </View>
      <Text style={styles.subHeading}>Upload Photo</Text>
      <View>
        <View style={styles.columnContainer}>
          <TouchableOpacity onPress={openGallery} style={styles.button}>
            <MaterialIcons name="photo-library" size={30} color='#24a1c9' />
            <Text style={styles.buttonText}>Gallery</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={openCamera} style={styles.button}>
            <MaterialIcons name="photo-camera" size={30} color='#24a1c9' />
            <Text style={styles.buttonText}>Camera</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.imageplace}>
          <View style={styles.imageRow}>
            {selectedImages[productIndex] && selectedImages[productIndex].length > 0 ? (
              selectedImages[productIndex]?.map((image, index) => (
                <View key={index} style={styles.imageContainer}>
                  <TouchableOpacity onPress={() => removeImage(productIndex, index)} style={styles.removeImageButton}>
                    <Icon name="close" size={20} color="white" />
                  </TouchableOpacity>
                  <Image source={{ uri: image.uri }} style={styles.selectedImage} />
                </View>
              ))
            ) : null}
          </View>
        </TouchableOpacity>
      </View>
      {renderError('image', productIndex)}
    </View>
  );
}

export default ProductReceiverDetails;
