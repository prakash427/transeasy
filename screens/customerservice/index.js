import React, { useState } from "react";
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Image } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import IoIcon from "react-native-vector-icons/Ionicons";
import Feather from "react-native-vector-icons/Feather";
import styles from './styles'
import { useNavigation } from "@react-navigation/native";

export const ChatScreen = () => {
    const navigation = useNavigation();
  const [isExpanded, setIsExpanded] = useState(false);

   const back = () => {
    navigation.navigate('HomeScreen')
  };

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };
  

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.headerContainer} onPress={back}>
        <AntDesign name="leftcircleo" size={30} color="black" style={styles.icon} />
      </TouchableOpacity>
      <Text style={styles.headerText}>Customer Services</Text>
      <View style={styles.middleImageContainer}>
        
        <Text style={styles.queryText}>Send Your Query Here</Text>
      </View>
      {isExpanded && (
        <View style={styles.iconsContainer}>
          <View style={styles.iconsRow}>
            <TouchableOpacity style={[styles.iconContainer, styles.circleIcon]}>
              <IoIcon name="camera-outline" size={18} color='#ffffff' />
            </TouchableOpacity>
            <TouchableOpacity style={[styles.iconContainer, styles.circleIcon]}>
              <IoIcon name="images-outline" size={18} color='#ffffff' />
            </TouchableOpacity>
            <TouchableOpacity style={[styles.iconContainer, styles.circleIcon]}>
              <IoIcon name="documents-outline" size={18} color='#ffffff' />
            </TouchableOpacity>
          </View>
        </View>
      )}
      <View style={styles.messageInputContainer}>
        <TouchableOpacity style={styles.plusIconContainer} onPress={toggleExpand}>
          <AntDesign name={isExpanded ? "closecircle" : "pluscircle"} size={30} color = '#0caffd' />
        </TouchableOpacity>
        <TextInput
          style={styles.messageInput}
          placeholder="Type An Answer"
          placeholderTextColor="#000000"
        />
        <TouchableOpacity style={[styles.telegramIconContainer,{backgroundColor:'#ffff'}]}>
          <Feather name="send" size={20} color='#0caffd' />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ChatScreen;