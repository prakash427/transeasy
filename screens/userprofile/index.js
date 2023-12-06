import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import styles from './styles'
import { setUserName, setUserPhoneNumber } from '../redux/action';
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import { useSelector, connect, useDispatch } from 'react-redux';

const UserProfileScreen = () => {
  const dispatch = useDispatch();
  const [isEditing, setEditing] = useState(false);

  const username = useSelector((state) => state.user.name);
  const phonenumber = useSelector((state) => state.user.phoneNumber);

  const [name, setName] = useState(username);
  const [phoneNumber, setPhoneNumber] = useState(phonenumber);

  const handleEditPress = () => {
    setEditing(true);
  };

  const handleSavePress = () => {
    dispatch(setUserName(name));
    dispatch(setUserPhoneNumber(phoneNumber));
    console.log('dispatched', name)
    setEditing(false);
  };

  return (
    <View style={styles.container}>
        <View style = {styles.headerpart}>
         <EvilIcons name='user' size={70} color = {'white'}/>
         <Text>{username}</Text>
        </View>
      <Text style={styles.label}>Name:</Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={(text) => setName(text)}
        editable={isEditing}
      />

      <Text style={styles.label}>Phonenumber:</Text>
      <TextInput
        style={styles.input}
        value={phoneNumber}
        onChangeText={(text) => setPhoneNumber(text)}
        editable={isEditing}
      />

      {isEditing ? (
        <TouchableOpacity style={styles.button} onPress={handleSavePress}>
          <Text style={styles.buttonText}>Save</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity style={styles.button} onPress={handleEditPress}>
          <Text style={styles.buttonText}>Edit</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default UserProfileScreen;
