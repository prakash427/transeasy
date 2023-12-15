
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import BackgroundVideo from '../welcomescreen';
import UserDetailsScreen from '../userdetailsscreen';
import HomeScreen from '../Homescreen';
import OTPScreen from '../otpscreen';
import UserProfileScreen from '../userprofile';
import ExportScreen from '../exportscreen';
import ImportScreen from '../importscreen';
import Transportslist from '../Transportlist';
import ItemDetailsScreen from '../checkoutscreen';
import Paymentslist from '../paymenyscreen';
import Wallet from '../wallet';
import ChatScreen from '../customerservice';
import Myearnings from '../myearnings';
import History from '../History';

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="BackgroundVideo">
          <Stack.Screen name="BackgroundVideo" component={BackgroundVideo} options={{ headerShown: false }}/>
          <Stack.Screen name="UserDetailsScreen" component={UserDetailsScreen} options={{ headerShown: false }}/>
          <Stack.Screen name="OTPScreen" component={OTPScreen} options={{ headerShown: false }}/>
          <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }}/> 
          <Stack.Screen name="UserProfileScreen" component={UserProfileScreen} options={{ headerShown: false }}/>
          <Stack.Screen name="ExportScreen" component={ExportScreen} options={{ headerShown: false }}/>
          <Stack.Screen name="Transportslist" component={Transportslist} options={{ headerShown: false }}/>
          <Stack.Screen name="ImportScreen" component={ImportScreen} options={{ headerShown: false }}/>
          <Stack.Screen name="ItemDetailsScreen" component={ItemDetailsScreen} options={{headerShown:false}}/>
          <Stack.Screen name="Paymentslist" component={Paymentslist} options={{headerShown:false}}/>
          <Stack.Screen name="Wallet" component={Wallet} options={{headerShown:false}}/>
          <Stack.Screen name="ChatScreen" component={ChatScreen} options={{headerShown:false}}/>
          <Stack.Screen name="Myearnings" component={Myearnings} options={{headerShown:false}}/>
          <Stack.Screen name="History" component={History} options={{headerShown:false}}/>
    </Stack.Navigator>
  );
};

export default StackNavigator;
