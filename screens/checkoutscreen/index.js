
import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { useSelector } from 'react-redux';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { useNavigation } from '@react-navigation/native';
import styles from './syles';
import BillText from './BillText';
import { color } from 'react-native-elements/dist/helpers';

const ItemDetailsScreen = ({ route }) => {
  const navigation = useNavigation();
  const { title, rating, number, discountPrice, image } = route.params;
  const product = useSelector((state)=>state.user.productName)
  const dimensions = useSelector((state)=>state.user.dimensions)
  const coupon = useSelector((state)=>state.user.coupon)
  const { image: reduxImage } = useSelector((state) => state.user);
  const[email, setEmail] = useState('')
  const[offer, setOffer] = useState(false)
  const[discount, setDiscount] = useState(0)
  const [totalAmount, setTotalAmount] = useState(0);
  const originalcoupon = "WELCOME";
  const deliveryAgentFee = 350
  const platformFee = 3

  const payment = () => {
    navigation.navigate('Paymentslist')
  }

  useEffect(() => {
    
    const Coupon = coupon; 
    console.log('Coupon:', Coupon);
    console.log('Offer:', offer);
  
    if (Coupon === 'WELCOME') {
      setOffer(true);
    } else {
      setOffer(false);
    }
  }, [coupon, originalcoupon]);
  

useEffect(() => {
  const parsedDiscountPrice = parseFloat(discountPrice) || 0;
  const parsedDeliveryAgentFee = parseFloat(deliveryAgentFee) || 0;
  const parsedPlatformFee = parseFloat(platformFee) || 0;
  const parseddiscount = parseFloat(discount) || 0;

  const calculatedTotalAmount = parsedDiscountPrice + parsedDeliveryAgentFee + parsedPlatformFee + parseddiscount;
  setTotalAmount(calculatedTotalAmount);

  setDiscount(offer? -60 : 0);
}, [discountPrice, deliveryAgentFee, platformFee, discount, offer]);

const toggleOffer = () => {
  if (offer) {
    setOffer(false);
  }
};

  return (
    <>
     <ScrollView style={{ flex: 1 }}>
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
      <TouchableOpacity style={styles.coupon} onPress={()=>{navigation.navigate('Applycoupon')}}>
        <Text style={styles.billtext}>{!offer?'Apply Coupon':'WELCOME'}</Text>
        <MaterialCommunityIcons name ={!offer?'ticket-percent':'close-circle'} size={30} onPress={toggleOffer}/>
      </TouchableOpacity>
      <View style = {styles.productimage}>
      {reduxImage && <Image source={{ uri: reduxImage }} style={{ width: 200, height: 200 }} />}

    </View>
      <View style={styles.bill}>
        <BillText label="Product Name" value={product} />
        <BillText label="Product Dimensions" value={dimensions} />
        <BillText label="Transport Services" value={`₹${discountPrice}`} />
        <BillText label="Delivery Agent Fee" value={`₹${deliveryAgentFee}`} />
        <BillText label="Platform Fee" value={`₹${platformFee}`}/>
        {offer?<BillText label="Dicount" value={`₹${discount}`} />:null}
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
     </ScrollView>
     </>
  );
};

export default ItemDetailsScreen;
