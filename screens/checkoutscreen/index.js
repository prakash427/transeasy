
import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, TextInput } from 'react-native';
import { useSelector } from 'react-redux';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { useNavigation } from '@react-navigation/native';
import styles from './syles';
import BillText from './BillText';

const ItemDetailsScreen = ({ route }) => {
  const navigation = useNavigation();
  const { title, rating, number, discountPrice, image } = route.params;
  const product = useSelector((state)=>state.user.productName)
  const dimensions = useSelector((state)=>state.user.dimensions)
  const { image: reduxImage } = useSelector((state) => state.user);
  const[email, setEmail] = useState('')
  const [totalAmount, setTotalAmount] = useState(0);
  const deliveryAgentFee = 350
  const platformFee = 3

  const payment = () => {
    navigation.navigate('Paymentslist')
  }

useEffect(() => {
    const parsedDiscountPrice = parseFloat(discountPrice) || 0;
    const parsedDeliveryAgentFee = parseFloat(deliveryAgentFee) || 0;
    const parsedPlatformFee = parseFloat(platformFee) || 0;

    
    const calculatedTotalAmount = parsedDiscountPrice + parsedDeliveryAgentFee + parsedPlatformFee;
    setTotalAmount(calculatedTotalAmount);
  }, [discountPrice, deliveryAgentFee, platformFee]);

  return (
    <>
    <View style={styles.container}>
      <View style={styles.header}> 
      <Image source={image} style={styles.image} />
      <View>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.ratingcontainer}>
      <Text style={styles.rating}>{rating} ★</Text>
      <Text>({number})</Text>
      </View>
      </View>
      </View> 
      <TouchableOpacity style={styles.coupon}>
        <Text style={styles.billtext}>Apply Coupon</Text>
        <MaterialCommunityIcons name = 'ticket-percent' size={30}/>
      </TouchableOpacity>
      <View style = {styles.productimage}>
      {reduxImage && <Image source={{ uri: reduxImage }} style={{ width: 200, height: 200 }} />}

    </View>
      <View style={styles.bill}>
        <BillText label="Product Name" value={product} />
        <BillText label="Product Dimensions" value={dimensions} />
        <BillText label="Transport Services" value={`₹${discountPrice}`} />
        <BillText label="Delivery Agent Fee" value={`₹${deliveryAgentFee}`} />
        <BillText label="Platform Fee" value={`₹${platformFee}`} />
      </View>

      <View style={styles.coupon}>
        <Text style={styles.billtext}>Total Amount</Text>
        <Text> ₹{totalAmount}</Text>
      </View>
     
       <TextInput
        style={[
          styles.input,
        ]}
        placeholder="E-mail  (optional)"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <Text style={styles.emailtext}>Enter E-mail to send Tax-Invoice</Text>
      </View>
       <TouchableOpacity style={styles.amount} onPress={payment}>
       <Text style={styles.amountText}>Amount To Pay  ₹{totalAmount}</Text>
     </TouchableOpacity>
     </>
  );
};

export default ItemDetailsScreen;
