import React, {useEffect, useState} from 'react';
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import { useSelector, connect } from 'react-redux';
import styles from './styles';
import AntDesign from 'react-native-vector-icons/AntDesign'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => { 
   
  const navigation = useNavigation();
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

  const dummyData = [
    { id: '1', text: 'Flat 20%off', image: require('../assets/cleantech.png')  },
    { id: '2', text: 'Flat 10%off', image: require('../assets/allcountry.png')  },
    { id: '3', text: 'Flat 30%off', image: require('../assets/atc.jpg')  },
    { id: '4', text: 'Flat 20%off', image: require('../assets/express.jpg')  },
    { id: '5', text: 'Flat 40%off', image: require('../assets/deliver.jpg')  },
  ];

  const username = useSelector((state) => state.user.name);
  const [slideIndex, setSlideIndex] = useState(0);

  const slides = [
    { id: 1, image: require('../assets/rapidooooo.png') },
    { id: 2, image: require('../assets/Swiggy-img.png') },
    { id: 3, image: require('../assets/zomatooo.png') },
  ];

  const renderItem = ({ item }) => (
    <View style={{ backgroundColor:'blue', borderRadius: 8, height : 150 }}>  
      <Image source={item.image} style={styles.itemImage} resizeMode='contain' />
      <View style={styles.lineTextContainer}>
        <Text style={styles.text}>{item.text}</Text>
      </View>
    </View>
  );


  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const renderSlide = ({ item, index }) => {
    return(
    <Image 
    source={item.image} 
    style={styles.slideImage} 
    resizeMode='cover'  
    onError={(error) => console.error('Image error:', error.nativeEvent.error)}
    key={index}/>)
    };

  const renderDot = (index) => (
    <View
      key={index}
      style={[styles.dot, index === slideIndex ? styles.activeDot : null]}
    />
  );

  return (
    <>
    <View style={styles.container}>
      <View style={styles.Header}>
        <Text style={styles.Headertext}>Welcome {username}</Text>
        <TouchableOpacity onPress={Profile}>
        <EvilIcons name='user' size={45} color = {'white'}/>
        </TouchableOpacity>
      </View>   
      <View style={styles.slideshowContainer}>
        <FlatList
          data={slides}
          renderItem={renderSlide}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id.toString()}
          onMomentumScrollEnd={(event) => {
            const newIndex = Math.round(
              event.nativeEvent.contentOffset.x /
                event.nativeEvent.layoutMeasurement.width
            );
            setSlideIndex(newIndex);
          }} 
        />
        <View style={styles.dotsContainer}>
          {slides.map((_, index) => renderDot(index))}
        </View>
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
        <Text style={styles.describe}>REFER NOW</Text>
        </View>
        <View>
        <TouchableOpacity style={styles.features}>
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
      </View>
    </View>
    <View style={styles.bottomBar}>
       <View style={styles.iconRow}>
        <View>
        <TouchableOpacity style={styles.options}>
         <AntDesign style={styles.oicon} size={30} name ='home'/>
        </TouchableOpacity>
        <Text style={styles.described}>Home</Text>
        </View>
        <View>
        <TouchableOpacity style={styles.options}>
        <AntDesign style={styles.oicon} size={30} name ='customerservice' onPress={customercare}/>
        </TouchableOpacity>
        <Text style={styles.described}>HELP</Text>
        </View>
        <View>
        <TouchableOpacity style={styles.options}>
        <MaterialCommunityIcons style={styles.oicon} name="history" size={30} color="white" />
        </TouchableOpacity>
        <Text style={styles.described}>History</Text>
        </View>
        </View>
  </View>
  </>
  );
};


export default HomeScreen;

