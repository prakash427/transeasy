import React from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import { SearchBar, ListItem } from 'react-native-elements';
import { TouchableOpacity } from 'react-native-gesture-handler';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';

const Paymentslist = () => {
  const dummyData = [
    { id: '1', link:'Link Your Account', image: require('../assets/PhonePe-Logo.jpg') },
    { id: '2', link:'Link Your Account',image: require('../assets/paytm.jpg') },
    { id: '3', link:'Link Your Account',image: require('../assets/cred-logo.jpg') },
    { id: '4', link:'Link Your Account',image: require('../assets/amazon-pay-logo.jpg') },
    { id: '5', link:'Link Your Account',image: require('../assets/gpay-logo.jpg') },
    { id: '6', link:'Debit Card',image: require('../assets/debitcard-logo.png') },
    { id: '7', link:'Credit Card',image: require('../assets/debitcard-logo.png') },
    
  ];

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.heading}>
        <Text style={styles.headingtext}>Available Payment Options</Text>
      </View>
      <FlatList style={styles.flatlist}
        data={dummyData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity >
          <ListItem bottomDivider style={styles.listItem}>
            <Image source={item.image} style={styles.image} />
            <ListItem.Content style={styles.content}>
              <View style={styles.incontent}>
              <ListItem.Title style={styles.link}>{item.link}</ListItem.Title>
              </View>
            </ListItem.Content>
          </ListItem>
          </TouchableOpacity>
        )}
      />
    </View>
  );  
};


export default Paymentslist;

