
import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Modal, Alert } from 'react-native';
import { setUserName, setUserPhoneNumber } from '../redux/action';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import { useSelector, useDispatch } from 'react-redux';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';

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
      <LinearGradient style={styles.headerpart}
        colors={['#7070d9', '#24a1c9']}
        start={{ x: 1, y: 0 }}
        end={{ x: 0, y: 1 }}
      >
        <EvilIcons name="user" size={65} color={'white'} style={styles.icon} />
        <Text style={styles.buttonText}>{username}</Text>
      </LinearGradient>
      <View style={styles.information}>
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
          <LinearGradient style={styles.button}
            colors={['#7070d9', '#24a1c9']}
            start={{ x: 1, y: 0 }}
            end={{ x: 0, y: 1 }}
          >
            <TouchableOpacity onPress={handleSavePress}>
              <Text style={styles.buttonText}>Save</Text>
            </TouchableOpacity>
          </LinearGradient>
        ) : (
          <>
            <LinearGradient style={styles.button}
              colors={['#7070d9', '#24a1c9']}
              start={{ x: 1, y: 0 }}
              end={{ x: 0, y: 1 }}
            >
              <TouchableOpacity onPress={handleEditPress}>
                <Text style={styles.buttonText}>Edit</Text>
              </TouchableOpacity>
            </LinearGradient>
            <LinearGradient style={styles.button}
              colors={['#7070d9', '#24a1c9']}
              start={{ x: 1, y: 0 }}
              end={{ x: 0, y: 1 }}
            >
              <TouchableOpacity onPress={handleLogoutPress}>
                <Text style={styles.buttonText}>Logout</Text>
              </TouchableOpacity>
            </LinearGradient>
          </>
        )}
      </View>
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
              <LinearGradient style={styles.alertnuttons}
                colors={['#7070d9', '#24a1c9']}
                start={{ x: 1, y: 0 }}
                end={{ x: 0, y: 1 }}
              >
                <TouchableOpacity onPress={() => setLogoutModalVisible(false)}>
                  <Text style={styles.modalButtonText}>Close</Text>
                </TouchableOpacity>
              </LinearGradient>
              <LinearGradient style={styles.alertnuttons}
                colors={['#7070d9', '#24a1c9']}
                start={{ x: 1, y: 0 }}
                end={{ x: 0, y: 1 }}
              >
                <TouchableOpacity onPress={handleLogout}>
                  <Text style={styles.modalButtonText}>Logout</Text>
                </TouchableOpacity>
              </LinearGradient>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default UserProfileScreen;


