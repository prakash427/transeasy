
import React from 'react';
import { View, Image, Text, TouchableOpacity, FlatList } from 'react-native';
import { ListItem } from 'react-native-elements';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';

const History = () => {

const navigation = useNavigation();  
const home = () => {
  navigation.navigate('HomeScreen')
}

const getStatusColor = (status) => {
    return status === 'Pending' ? 'orange' : 'green';
  };

const dummyData = [
    { id: '1', title:'CLEANTECH', rating: 'Ordered:', number:'12-7-22',offer:'Delivered', image: require('../assets/cleantech.png') },
    { id: '2', title:'ALL COUNTRY',rating: 'Ordered:', number:'14-8-22', offer:'Pending',image: require('../assets/allcountry.png') },
    { id: '3', title:'ATC',rating: 'Ordered:', number:'17-9-23', offer:'Delivered',image: require('../assets/atc.jpg') },
    { id: '4', title:'DELIVER',rating: 'Ordered:', number:'12-10-23', offer:'Pending',image: require('../assets/deliver.jpg') },
    { id: '5', title:'EXPRESS',rating: 'Ordered:', number:'05-11-22', offer:'Delivered',image: require('../assets/express.jpg') },
    
  ];

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.Header}>
        <TouchableOpacity onPress={home}>
          <EvilIcons name='chevron-left' size={40} color={'white'} />
        </TouchableOpacity>
        <Text style={styles.Headertext}>History</Text>
      </View>
      <View style ={styles.rewards}>
        <Text style={styles.rewardstext}>YOUR ORDERS</Text>
      </View>
      <FlatList
        data={dummyData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity>
            <ListItem bottomDivider style={styles.listItem}>
              <Image source={item.image} style={styles.images} />
              <ListItem.Content style={styles.content}>
                <View style={styles.incontent}>
                  <ListItem.Title style={styles.title}>{item.title}</ListItem.Title>
                </View>
                <View style={styles.incontent}>
                  <ListItem.Title style={styles.rating}>{item.rating}</ListItem.Title>
                  <ListItem.Title style={styles.number}>{item.number}</ListItem.Title>
                </View>
                <View style={styles.incontent}>
                  <ListItem.Title style= {[styles.offer, { color: getStatusColor(item.offer) }]}>
                    {item.offer}
                  </ListItem.Title>
                </View>
              </ListItem.Content>
            </ListItem>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};


export default History;
