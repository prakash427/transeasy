import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    width: '90%',
    height: 150,
    alignSelf: 'center',
    marginTop: 10,
  },
  wrapper: {},
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 8,
  },
  paginationStyle: {
    bottom: 10,
  },
  dotStyle: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: 'rgba(255,255,255,.4)',
    marginLeft: 3,
    marginRight: 3,
  },
  activeDotStyle: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: 'white',
    marginLeft: 3,
    marginRight: 3,
  },
  Header: {
    backgroundColor: '#61C9D3',
    padding: 20,
    alignItems: 'center',
    flexDirection: 'row',
    gap: 5,
    //justifyContent : 'space-between'
  },
  Headertext: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 25,
  },
  listItem: {
    padding: 10,
  },
  images: {
    width: 200,
    height: 100,
    marginRight: 10,
    borderRadius: 25,
  },
  incontent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5
  },
  content: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: 5
  },
  rating: {
    color: 'black',
    padding: 2,
    fontWeight : 'bold'
  },
  originalprice: {
    color: 'red'
  },
  discountprice: {
    fontWeight: 'bold'
  },
  offer: {
    color: 'green'
  },
  title: {
    fontWeight: 'bold'
  },
  rewards : {
    padding : 20,
      alignSelf : 'flex-start',
      backgroundColor: '#ffffff', 
      marginLeft: 16, 
      borderRadius: 8, 
      marginVertical: 10, 
      borderWidth: 1, 
      borderColor: '#ddd', 
      shadowColor: '#000', 
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 4,
      elevation: 3, 
      //paddingHorizontal : 135
  },
  rewardstext : {
    color : 'black',
    fontWeight : 'bold',
    fontSize : 15
  }
});

export default styles;
