
import React from 'react';
import { View, Text } from 'react-native';
import styles from './syles'; 

const BillText = ({ label, value }) => (
  <View>
    <Text style={styles.billtext}>{`${label} : ${value}`}</Text>
  </View>
);

export default BillText;
