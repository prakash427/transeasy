import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    padding: 20
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 30
  },
  image: {
    width: 200,
    height: 120,
    borderRadius: 10,
    marginBottom: 5,
    margin: -5
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  ratingcontainer: {
    flexDirection: 'row',
    gap: 5
  },
  rating: {
    backgroundColor: 'green',
    color: 'white',
    alignSelf: 'center',
    padding: 3,
    borderRadius: 5,
    marginBottom: 5,
  },
  bill: {
    width: '105%',
    alignSelf: 'center',
    backgroundColor: '#ffffff',
    padding: 16,
    borderRadius: 8,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    shadowColor: 'blue',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
    gap: 5,
  },
  billItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  label: {
    fontWeight: 'bold',
  },
  billtext: {
    fontSize: 20
  },
  billproduct: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: '#ffffff',
    borderRadius: 8,
    marginVertical: 5,
    borderWidth: 1,
    borderColor: '#ddd',
    shadowColor: 'blue',
    shadowOffset: { width: 20, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
    alignSelf: 'center',
  },
  billproductt: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#ffffff',
    borderRadius: 8,
    marginVertical: 10,
    gap: 20,
    padding: 10,
  },
  coupon: {
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 8,
    marginVertical: 20,
    borderWidth: 1,
    borderColor: '#ddd',
    shadowColor: 'blue',
    shadowOffset: { width: 20, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
    width: '105%'
  },
  input: {
    marginTop: 20,
    height: 60,
    width: '105%',
    borderColor: '#ddd',
    backgroundColor: '#ffffff',
    borderWidth: 2,
    marginBottom: 12,
    paddingHorizontal: 10,
    borderRadius: 25,
    shadowColor: 'blue',
    shadowOffset: { width: 20, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
    alignSelf: 'center'
  },
  emailtext: {
    color: 'black',
  },
  amount: {
    justifyContent: 'flex-end',
    backgroundColor: 'green',
    padding: 20,
    alignItems: 'center'
  },
  amountText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20
  },
  productimage: {
    alignSelf: 'center',
    padding: 5,
    height: 170,
    width: 150,

  },
  wrapper: {},
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  slideImage: {
    height: '100%',
    width: '100%',
    borderRadius: 5
  },

  separator: {
    textAlign: 'center',
    color: 'gray',
  },
  value: {
    fontWeight: 'bold'
  },

});

export default styles;