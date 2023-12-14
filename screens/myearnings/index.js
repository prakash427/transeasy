
import React from 'react';
import { View, Image, Text, TouchableOpacity, FlatList } from 'react-native';
import Swiper from 'react-native-swiper';
import {  ListItem } from 'react-native-elements';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';

const Myearnings = () => {

const navigation = useNavigation();  
const home = () => {
  navigation.navigate('HomeScreen')
}

  const images = [
    require('../assets/rapidooooo.png'),
    require('../assets/dominos.jpg'),
    require('../assets/myntra.jpg'),
  ];

  const dummyData = [
    { id: '1', title: 'AMAZON', rating: 'CODE:', number: '1234', originalPrice: 'Expires on', discountPrice: '22-12', offer: '20', image: require('../assets/amazonshopping.jpg') },
    { id: '2', title: 'FLIPKART', rating: 'CODE:', number: '7904', originalPrice: 'Expires on', discountPrice: '2 days', offer: '15', image: require('../assets/Flipkart.jpg') },
    { id: '3', title: 'KFC', rating: 'CODE:', number: '5394', originalPrice: 'Expires on', discountPrice: '3 days', offer: '10', image: require('../assets/KFC.jpg') },
    { id: '4', title: 'DOMINOS', rating: 'CODE:', number: '4394', originalPrice: 'Expires on', discountPrice: '10-01', offer: '10', image: require('../assets/dominos.jpg') },
    { id: '5', title: 'MYNTRA', rating: 'CODE:', number: '5394', originalPrice: 'Expires on', discountPrice: '4 days', offer: '20', image: require('../assets/myntra.jpg') },
  ];

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.Header}>
        <TouchableOpacity onPress={home}>
          <EvilIcons name='chevron-left' size={40} color={'white'} />
        </TouchableOpacity>
        <Text style={styles.Headertext}>Rewards</Text>
      </View>
      <View style={styles.container}>
        <Swiper
          style={styles.wrapper}
          showsButtons={false}
          autoplay={true}
          autoplayTimeout={3}
          paginationStyle={styles.paginationStyle}
          dotStyle={styles.dotStyle}
          activeDotStyle={styles.activeDotStyle}
        >
          {images.map((image, index) => (
            <View key={index} style={styles.slide}>
              <Image source={image} style={styles.image} resizeMode="cover" />
            </View>
          ))}
        </Swiper>
      </View>
      <View style ={styles.rewards}>
        <Text style={styles.rewardstext}>YOUR REWARDS</Text>
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
                  <ListItem.Title style={styles.originalprice}>
                    {item.originalPrice}
                  </ListItem.Title>
                  <ListItem.Title style={styles.discountprice}>
                    {item.discountPrice}
                  </ListItem.Title>
                </View>
                <View style={styles.incontent}>
                  <ListItem.Title style={styles.offer}>
                    %{item.offer} off
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


export default Myearnings;
