
import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, TextInput, FlatList,Image } from 'react-native';
import styles from "./styles";
import {  ListItem } from 'react-native-elements';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import { useNavigation } from "@react-navigation/native";
import { setCouponn } from "../redux/action";
import { useDispatch, useSelector } from "react-redux";

const Applycoupon = () => {
  const [coupon, setCoupon] = useState('');
  const [couponinfo, setCouponinfo] = useState('');
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const originalcoupon = "WELCOME";
  const couponState = useSelector((state) => state.user.coupon);

  const Couponvalidation = () => {
    if (coupon === originalcoupon) {
      setCouponinfo('You got Rs.60 off');
      dispatch(setCouponn(originalcoupon));
    } else {
      setCouponinfo('Your coupon is invalid');
      dispatch(setCouponn(''));
    }
  }

  const textColor = couponinfo === 'You got Rs.60 off' ? 'green' : 'red';

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text>{item.text}</Text>
    </View>
  );

  const data = [
    { key: '1', text: 'Item 1' },
    { key: '2', text: 'Item 2' },
    { key: '3', text: 'Item 3' },
  ];
   
  const dummyData = [
    { id: '1', title: 'AXIS BANK',  originalPrice: 'Apply',description:'get upto 20%off by using Axis credit card', image: require('../assets/axis-bank-logo.jpg') },
    { id: '2', title: 'ICICI BANK',  originalPrice: 'Apply',description:'get upto 20%off by using icici credit card', image: require('../assets/icici-logo.jpg') },
    { id: '3', title: 'CANARA BANK', originalPrice: 'Apply',description:'get upto 20%off by using canara credit card', image: require('../assets/canarabank-logo.jpeg') },
    { id: '4', title: 'SIMPLY',  originalPrice: 'Apply',description:'get upto 20%off by using simpl app',image: require('../assets/simpl-logo.png') },
    { id: '5', title: 'AMAZON PAY',  originalPrice: 'Apply', description:'get upto 20%off by using Amazon Pay', image: require('../assets/amazonpay.png') },
  ];

  return (
    <View style={{ flex: 1 }}>
         <View style={styles.Header}>
      <TouchableOpacity onPress={()=>{navigation.navigate('ItemDetailsScreen')}}>
        <EvilIcons name='chevron-left' size={40} color={'white'} />
      </TouchableOpacity>
      <Text style={styles.Headertext}>Applycoupon</Text>
    </View>
    <View style={styles.container}>
     <TextInput
     style={styles.input}
     placeholder="Enter coupon code"
     value={coupon}
     onChangeText={(text) => setCoupon(text)}
   />
   <View>
     <Text style={{ color: textColor }}>{couponinfo}</Text>
   </View>
   <TouchableOpacity style={styles.amount} onPress={Couponvalidation}>
     <Text style={styles.amountText}>Apply Coupon</Text>
   </TouchableOpacity>
   </View>
   <View style ={styles.rewards}>
        <Text style={styles.rewardstext}>Another Coupons</Text>
     </View>
      <FlatList
        data={dummyData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity>
            <ListItem bottomDivider style={styles.listItem}>
              <View style={styles.couponcontainer}>
              <View style={styles.couponcard}> 
                <View style={styles.couponimgcontainer}>
                   <Image source={item.image} style={styles.images} />
                   <ListItem.Title style={styles.title}>{item.title}</ListItem.Title>
                </View>
                <View>
                <Text>--------------------------------------------------------------------------</Text>
                </View>
                <View>
                <ListItem.Title>{item.description}</ListItem.Title>
                </View>
                </View>
                <View style={styles.incontent}>
                  <ListItem.Title style={styles.originalprice}> {item.originalPrice}</ListItem.Title>
                </View>
              </View>
            </ListItem>
          </TouchableOpacity>
        )}
      />      
    </View>
  );
};

export default Applycoupon;
