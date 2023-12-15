
import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Modal, Alert } from 'react-native';
import { setUserName, setUserPhoneNumber } from '../redux/action';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import { useSelector, useDispatch } from 'react-redux';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';

const UserProfileScreen = () => {
  const dispatch = useDispatch();
  const [isEditing, setEditing] = useState(false);
  const [label, setLabel] = useState(false);
  const [logoutModalVisible, setLogoutModalVisible] = useState(false);
  const navigation = useNavigation();

  const username = useSelector((state) => state.user.name);
  const phonenumber = useSelector((state) => state.user.phoneNumber);

  const [name, setName] = useState(username);
  const [phoneNumber, setPhoneNumber] = useState(phonenumber);

  useEffect(() => {
    const numVal = /^[0-9]+$/;

    if (numVal.test(String(phonenumber))) {
      setLabel(true);
    }
  }, [phonenumber]);

  const handleEditPress = () => {
    setEditing(true);
  };

  const handleSavePress = () => {
    dispatch(setUserName(name));
    dispatch(setUserPhoneNumber(phoneNumber));
    console.log('dispatched', name);
    setEditing(false);
  };

  const handleLogoutPress = () => {
    setLogoutModalVisible(true);
  };

  const handleLogout = () => {
    console.log('Logging out...');
    setLogoutModalVisible(false);
    navigation.navigate('UserDetailsScreen')
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerpart}>
        <EvilIcons name="user" size={65} color={'white'} style={styles.icon} />
        <Text style={styles.buttonText}>{username}</Text>
      </View>
      <Text style={styles.label}>Name:</Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={(text) => setName(text)}
        editable={isEditing}
      />

      <Text style={styles.label}>{label ? 'Phone Number:' : 'E-mail:'}</Text>
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
        <>
          <TouchableOpacity style={styles.button} onPress={handleEditPress}>
            <Text style={styles.buttonText}>Edit</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={handleLogoutPress}>
            <Text style={styles.buttonText}>Logout</Text>
          </TouchableOpacity>
        </>
      )}

      <Modal
        animationType="slide"
        transparent={true}
        visible={logoutModalVisible}
        onRequestClose={() => setLogoutModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>Are you sure you want to logout?</Text>
            <View style={styles.modalButtons}>
              <TouchableOpacity onPress={() => setLogoutModalVisible(false)} style = {styles.alertnuttons}>
                <Text style={styles.modalButtonText}>Close</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={handleLogout} style = {styles.alertnuttons}>
                <Text style={styles.modalButtonText}>Logout</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default UserProfileScreen;


