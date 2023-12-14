import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
 
  Header: {
    backgroundColor: '#61C9D3',
    padding: 20,
    alignItems: 'center',
    flexDirection: 'row',
    gap: 5,

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
     
  },
  rewardstext : {
    color : 'black',
    fontWeight : 'bold',
    fontSize : 15
  }
});

export default styles;
