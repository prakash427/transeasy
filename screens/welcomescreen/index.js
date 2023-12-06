import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import Video from 'react-native-video';
import styles from './style';
import { useNavigation } from '@react-navigation/native'; 


const BackgroundVideo = () => {

    const navigation = useNavigation();

    const userdetails = () => {
        navigation.navigate('UserDetailsScreen'); 
      };

  return (
    <View style={styles.container}>
      <Video
        source={require('../assets/welcomevideo.mp4')}
        style={styles.backgroundVideo}
        repeat={true}
        resizeMode="cover"
      />
      <View style={styles.overlay}>
      <Text style={styles.title}>
          TRANSEASY
        </Text>
        <Text style={styles.overlayText}>
          Transport your goods where ever you want from your selcted Transport service
        </Text>
        <TouchableOpacity style={styles.startbutton} onPress={userdetails}>
        <Text style={styles.overlayTextButton}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};


export default BackgroundVideo;
