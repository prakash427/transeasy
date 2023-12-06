import React from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import { SearchBar, ListItem } from 'react-native-elements';
import { TouchableOpacity } from 'react-native-gesture-handler';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';

const Transportslist = () => {
  const dummyData = [
    { id: '1', title:'CLEANTECH', rating: '4.7', number:'8,794', originalPrice:'2,000',discountPrice:'1600',offer:'20', image: require('../assets/cleantech.png') },
    { id: '2', title:'ALL COUNTRY',rating: '4.5', number:'7,904', originalPrice:'1,800',discountPrice:'1530',offer:'15',image: require('../assets/allcountry.png') },
    { id: '3', title:'ATC',rating: '3.0', number:'5,394', originalPrice:'2,500',discountPrice:'2250',offer:'10',image: require('../assets/atc.jpg') },
    { id: '4', title:'DELIVER',rating: '3.5', number:'4,394', originalPrice:'3,000',discountPrice:'2700',offer:'10',image: require('../assets/deliver.jpg') },
    { id: '5', title:'EXPRESS',rating: '3.0', number:'5,394', originalPrice:'1,800',discountPrice:'1440',offer:'20',image: require('../assets/express.jpg') },
    
  ];

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <SearchBar
        placeholder="Search..."
        containerStyle={styles.searchBar}
        inputContainerStyle={styles.searchInput}
      />
      <FlatList
        data={dummyData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity  onPress={() => navigation.navigate('ItemDetailsScreen', item)}>
          <ListItem bottomDivider style={styles.listItem}>
            <Image source={item.image} style={styles.image} />
            <ListItem.Content style={styles.content}>
            <View style={styles.incontent}>
              <ListItem.Title style={styles.title}>{item.title}</ListItem.Title>
              </View>
              <View style={styles.incontent}>
              <ListItem.Title style={styles.rating}>{item.rating}★</ListItem.Title>
              <ListItem.Title style={styles.number}>({item.number})</ListItem.Title>
              </View>
              <View style={styles.incontent}>
              <ListItem.Title style={styles.originalprice}>₹{item.originalPrice}</ListItem.Title>
              <ListItem.Title style={styles.discountprice}>₹{item.discountPrice}</ListItem.Title>
              </View>
              <View style={styles.incontent}>
              <ListItem.Title style={styles.offer}>%{item.offer} off</ListItem.Title>
              </View>
            </ListItem.Content>
          </ListItem>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default Transportslist;

