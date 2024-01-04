import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, PermissionsAndroid, Modal, Linking, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useSelector } from 'react-redux';
import styles from './styles';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import { useNavigation } from '@react-navigation/native';
import Swiper from 'react-native-swiper';
import Share from 'react-native-share';
import { setUserName } from '../redux/action';
import { useDispatch } from 'react-redux';
import { connect } from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';



const HomeScreen = () => {

  const navigation = useNavigation();
  const [selectedIcon, setSelectedIcon] = useState('home');
  const [modal, setModal] = useState(false)
  const dispatch = useDispatch();

  const handleModal = () => {
    navigation.navigate('Paymentslist')
    setModal(false);
  };

  const share = async () => {
    const options = {
      message: "Hey I'm using this 'TRANSEASY' app which saves our time and reduce our efforts while we transport products from one place to another "

    };

    try {
      const res = await Share.open(options);
      console.log(res);
    } catch (err) {
      console.log(err);
    }

  };

  const requestLocationPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Location Permission',
          message: 'We need your location to show available delivery places.',
          buttonPositive: 'OK',
        }
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('Location permission granted');
      } else {
        console.log('Location permission denied');
        Alert.alert('Permission Denied', 'Please enable location permission to use this feature.');
      }
    } catch (err) {
      console.warn('Permission request error:', err);
    }
  };

  useEffect(() => {
    requestLocationPermission();
  }, []);


  const Profile = () => {
    navigation.navigate('UserProfileScreen')
  }

  const exported = () => {
    navigation.navigate('ExportScreen')
  }

  const imported = () => {
    navigation.navigate('ImportScreen')
  }

  const wallet = () => {
    setModal(true);
  }

  const customercare = () => {
    navigation.navigate('ChatScreen')
  }

  const myearnings = () => {
    navigation.navigate('Myearnings')
  }

  const history = () => {
    navigation.navigate('History')
  }

  const dummyData = [
    { id: '1', text: 'Flat 20%off', image: require('../assets/cleantech.png') },
    { id: '2', text: 'Flat 10%off', image: require('../assets/allcountry.png') },
    { id: '3', text: 'Flat 30%off', image: require('../assets/atc.jpg') },
    { id: '4', text: 'Flat 20%off', image: require('../assets/express.jpg') },
    { id: '5', text: 'Flat 40%off', image: require('../assets/deliver.jpg') },
  ];

  const username = useSelector((state) => state.user.name);

  const images = [
    { image: require('../assets/rapido1.png'), downloadLink: 'https://play.google.com/store/apps/details?id=com.rapido.rider&hl=en&gl=US' },
    { image: require('../assets/Swiggy-img.png'), downloadLink: 'https://play.google.com/store/apps/details?id=in.swiggy.android&hl=en_IN&gl=US' },
    { image: require('../assets/zomato1.jpg'), downloadLink: 'https://play.google.com/store/apps/details?id=com.application.zomato&hl=en_IN&gl=US' },
  ];


  const renderItem = ({ item }) => (
    <View style={{ backgroundColor: 'blue', borderRadius: 8, height: 150 }}>
      <Image source={item.image} style={styles.itemImage} resizeMode='contain' />
      <View style={styles.lineTextContainer}>
        <Text style={styles.text}>{item.text}</Text>
      </View>
    </View>
  );

  const renderBottomBarButton = (iconName, routeName, onPress) => {
    const isSelected = selectedIcon === iconName;

    return (
      <View>
        <TouchableOpacity
          style={styles.options}
          onPress={() => {
            setSelectedIcon(iconName);
            onPress();
          }}
        >
          {isSelected ? (
            <AntDesign style={[styles.oicon, { color: isSelected ? '#7070d9' : 'white' }, { backgroundColor: 'white' }]} size={30} name={iconName} />
          ) : (
            <AntDesign style={styles.oicon} size={30} name={iconName} />
          )}
        </TouchableOpacity>
        <Text style={[styles.described, { color: isSelected ? '#7070d9' : 'grey' }]}>{routeName}</Text>
      </View>
    );
  };


  return (
    <>
      <View style={styles.container}>
        <LinearGradient
          style={styles.Header}
          colors={['#7070d9', '#24a1c9']}
          start={{ x: 1, y: 0 }}
          end={{ x: 0, y: 1 }}
        >
          <Text style={styles.Headertext}>Welcome {username}</Text>
          <View style={styles.iconRow}>
            {/* <TouchableOpacity onPress={Profile}>
            <Ionicons name='notifications-outline' size={30} color={'white'} />
          </TouchableOpacity> */}
            <TouchableOpacity onPress={Profile}>
              <EvilIcons name='user' size={45} color={'white'} />
            </TouchableOpacity>
          </View>
        </LinearGradient>
        <ScrollView>
          <View style={styles.slidecontainer}>
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
                  <Image source={image.image} style={styles.image} resizeMode="cover" />
                  <TouchableOpacity
                    style={styles.downloadButton}
                    onPress={() => Linking.openURL(image.downloadLink)}
                  >
                    <Text style={styles.downloadtext}>Download Now</Text>
                  </TouchableOpacity>
                </View>
              ))}

            </Swiper>
          </View>
          <View style={styles.flatList}>
            <Text style={[styles.offertext, { fontWeight: 'bold' }]}>Offers</Text>
            <FlatList
              data={dummyData}
              renderItem={renderItem}
              horizontal
              keyExtractor={(item) => item.id}
              showsVerticalScrollIndicator={false}
              ItemSeparatorComponent={() => <View style={{ width: 10 }} />}
              contentContainerStyle={{
                paddingVertical: 8,
                paddingStart: 4,
              }}
              bounces
            />
          </View>
          <View style={styles.inbody}>
            <View style={styles.body}>
              <View>
                <Text style={[styles.text, { fontWeight: 'bold' }]}>Tranport your products</Text>
              </View>
              <View style={styles.iconwrap}>
                <TouchableOpacity onPress={exported}>
                  <AntDesign style={styles.icon} size={40} name='export' color='#7070d9' />
                  <Text style={styles.text}>Export</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={imported}>
                  <AntDesign style={styles.icon} size={40} name='export2' color='#7070d9' />
                  <Text style={styles.text}>Import</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={share}>
                  <AntDesign style={styles.icon} size={40} name='sharealt' color='#7070d9' />
                  <Text style={styles.text}>Refer</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={[styles.body, { paddingBottom: 120 }]}>
              <View>
                <Text style={[styles.text, { fontWeight: 'bold' }]}>Rewards</Text>
              </View>
              <View style={styles.iconwrap}>
                <TouchableOpacity onPress={share}>
                  <AntDesign style={styles.icon} size={40} name='sharealt' color='#7070d9' />
                  <Text style={styles.text}>Refer</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={myearnings}>
                  <AntDesign style={styles.icon} size={40} name='gift' color='#7070d9' />
                  <Text style={styles.text}>My Earnings</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={wallet}>
                  <AntDesign style={styles.icon} size={40} name='wallet' color='#7070d9' />
                  <Text style={styles.text}>My Wallet</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
        <View style={styles.bottomBar}>
          <View style={styles.iconRow}>
            {renderBottomBarButton('home', 'Home', () => { })}
            {renderBottomBarButton('customerservice', 'Help', customercare)}
            {renderBottomBarButton('swap', 'History', history)}
          </View>
        </View>
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modal}
        onRequestClose={() => setModal(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <LinearGradient
              style={styles.heading}
              colors={['#7070d9', '#24a1c9']}
              start={{ x: 1, y: 0 }}
              end={{ x: 0, y: 1 }} >
              <Text style={styles.headingtext}>Your Wallet</Text>
            </LinearGradient>
            <View style={styles.wallet}>
              <AntDesign style={styles.icon} size={40} name='wallet' />
              <Text style={styles.money}>₹0</Text>
            </View>
            <TouchableOpacity style={styles.addmoney} onPress={handleModal}>
              <Text style={styles.addmoneytext}>Add Money</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </>
  );
};


const mapStateToProps = (state) => ({
  username: state.user.name,
});

export default connect(mapStateToProps)(HomeScreen);