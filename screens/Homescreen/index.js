import React, {useEffect, useState} from 'react';
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import { useSelector, connect } from 'react-redux';
import styles from './styles';
import AntDesign from 'react-native-vector-icons/AntDesign'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import { useNavigation } from '@react-navigation/native';
import Swiper from 'react-native-swiper';

const HomeScreen = () => { 
   
  const navigation = useNavigation();
  const [selectedIcon, setSelectedIcon] = useState('home');
  
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
    navigation.navigate('Wallet')
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
    { id: '1', text: 'Flat 20%off', image: require('../assets/cleantech.png')  },
    { id: '2', text: 'Flat 10%off', image: require('../assets/allcountry.png')  },
    { id: '3', text: 'Flat 30%off', image: require('../assets/atc.jpg')  },
    { id: '4', text: 'Flat 20%off', image: require('../assets/express.jpg')  },
    { id: '5', text: 'Flat 40%off', image: require('../assets/deliver.jpg')  },
  ];

  const username = useSelector((state) => state.user.name);
  const images = [
    require('../assets/rapidooooo.png'),
    require('../assets/Swiggy-img.png'),
    require('../assets/zomatooo.png'),
  ];

  const renderItem = ({ item }) => (
    <View style={{ backgroundColor:'blue', borderRadius: 8, height : 150 }}>  
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
            <AntDesign style={[styles.oicon, { color: isSelected ? 'white': '#61C9D3' },{ backgroundColor: isSelected ?  '#61C9D3':'white' }]} size={30} name={iconName} />
          ) : (
            <AntDesign style={styles.oicon} size={30} name={iconName} />
          )}
        </TouchableOpacity>
        <Text style={[styles.described, { color: isSelected ? '#61C9D3' : 'grey' }]}>{routeName}</Text>
      </View>
    );
  };


  return (
    <>
    <View style={styles.container}>
      <View style={styles.Header}>
        <Text style={styles.Headertext}>Welcome {username}</Text>
        <TouchableOpacity onPress={Profile}>
        <EvilIcons name='user' size={45} color = {'white'}/>
        </TouchableOpacity>
      </View>   
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
            <Image source={image} style={styles.image} resizeMode="cover" />
          </View>
        ))}
      </Swiper>
    </View>
      <View style={styles.flatList}>
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
      <View style={styles.body}>
        <View>
        <TouchableOpacity style={styles.features} onPress={exported}>
         <AntDesign style={styles.icon} size={40} name ='export'/>
        </TouchableOpacity>
        <Text style={styles.describe}>EXPORT</Text>
        </View>
        <View>
        <TouchableOpacity style={styles.features} onPress={imported}>
        <AntDesign style={styles.icon} size={40} name ='export2'/>
        </TouchableOpacity>
        <Text style={styles.describe}>IMPORT</Text>
        </View>
        <View>
        <TouchableOpacity style={styles.features} >
        <AntDesign style={styles.icon} size={35} name ='sharealt'/>
        </TouchableOpacity>
        <Text style={styles.describe}>REFER&EARN</Text>
        </View>
        <View>
        <TouchableOpacity style={styles.features} onPress={myearnings}>
        <AntDesign style={styles.icon} size={35} name ='gift'/>
        </TouchableOpacity>
        <Text style={styles.describe}>MY EARNINGS</Text>
        </View>
        <View>
        <TouchableOpacity style={styles.features} onPress={wallet}>
        <AntDesign style={styles.icon} size={40} name ='wallet'/>
        </TouchableOpacity>
        <Text style={styles.describe}>WALLET</Text>
        </View>
        <View>
        <TouchableOpacity style={styles.features} onPress={wallet}>
        <AntDesign style={styles.icon} size={40} name ='wallet'/>
        </TouchableOpacity>
        <Text style={styles.describe}>WALLET</Text>
        </View>
      </View>
    </View>
    <View style={styles.bottomBar}>
       <View style={styles.iconRow}>
        {/* <View>
        <TouchableOpacity style={styles.options}>
         <AntDesign style={styles.oicon} size={30} name ='home'/>
        </TouchableOpacity>
        <Text style={styles.described}>Home</Text>
        </View>
        <View>
        <TouchableOpacity style={styles.options} onPress={customercare}>
        <AntDesign style={styles.oicon} size={30} name ='customerservice'/>
        </TouchableOpacity>
        <Text style={styles.described}>HELP</Text>
        </View>
        <View>
        <TouchableOpacity style={styles.options} onPress={history}>
        <MaterialCommunityIcons style={styles.oicon} name="history" size={30} color="white" />
        </TouchableOpacity>
        <Text style={styles.described}>History</Text>
        </View> */}
        {renderBottomBarButton('home', 'Home', () => {})}
          {renderBottomBarButton('customerservice', 'Help', customercare)}
          {renderBottomBarButton('swap', 'History', history)}
        </View>
  </View>
  </>
  );
};


export default HomeScreen;

