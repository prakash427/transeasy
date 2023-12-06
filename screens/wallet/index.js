import React from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import { SearchBar, ListItem } from 'react-native-elements';
import { TouchableOpacity } from 'react-native-gesture-handler';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign'

const Wallet = () => {
    const navigation = useNavigation();
    const payment = () => {
        navigation.navigate('Paymentslist')
      }

  return (
    <View style={styles.container}>
      <View style={styles.heading}>
        <Text style={styles.headingtext}>Your Wallet</Text>
      </View>
     <View style={styles.wallet}>
     <AntDesign style={styles.icon} size={40} name ='wallet'/>
     <Text style={styles.money}>₹0</Text>
     </View>
     <TouchableOpacity style={styles.addmoney} onPress={payment}>
        <Text style={styles.addmoneytext}>Add Money</Text>
      </TouchableOpacity>
    </View>
  );  
};


export default Wallet;

