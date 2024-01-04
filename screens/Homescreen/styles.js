import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  Header: {
    backgroundColor: '#61C9D3',
    padding: 20,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  Headertext: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },
  slidecontainer: {
    width: '97%',
    height: 150,
    alignSelf: 'center',
    marginTop: 5,
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
    backgroundColor: 'rgba(255,255,255,0.4)',
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
  itemImage: {
    height: 150,
    borderRadius: 5,
    width: 150
  },
  lineTextContainer: {
    backgroundColor: 'white',
    borderRadius: 5,
    alignItems: 'center',
    padding: 5,
    margin: 5
  },
  text: {
    color: 'black',
    fontWeight: 'normal'
  },
  offertext: {
    fontWeight: 'bold',
    color: 'black',
    paddingHorizontal: 20,
    paddingTop: 5
  },
  flatList: {
    flexDirection: 'column',
    height: 240,
    marginTop: 10,
    padding: 10,
    backgroundColor: 'rgba(255, 255, 255, 9.0)',
    width: '97%',
    alignSelf: 'center',
    borderRadius: 10,
    shadowColor: 'blue',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 5,
  },
  body: {
    flexDirection: 'column',
    gap: 20,
    padding: 15,
    backgroundColor: 'rgba(255, 255, 255, 9.0)',
    width: '97%',
    alignSelf: 'center',
    borderRadius: 10,
    shadowColor: 'blue',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 5,
  },
  iconwrap: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  features: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10
  },
  describe: {
    alignSelf: 'center',
    color: 'grey',
    fontWeight: 'bold'
  },
  icon: {
    alignSelf: 'center',
    padding: 3,
    color: '#7070d9'
  },
  bottomBar: {
    backgroundColor: 'rgba(255, 255, 255, 9.0)',
    borderWidth: 1,
    borderColor: '#ddd',
    shadowColor: 'blue',
    paddingBottom: 3,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 10,
    borderRadius: 70,
    marginBottom: 20,
    width: '90%',
    alignSelf: 'center',
    position: 'absolute',
    bottom: 0
  },
  bottomBarText: {
    color: '#7070d9',
    fontWeight: 'bold',
  },
  iconRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    gap: 10
  },
  options: {
    padding: 2,
  },
  oicon: {
    color: 'grey',
    padding: 8,
    borderRadius: 10
  },
  described: {
    alignSelf: 'center',
    color: 'grey',
    fontWeight: 'bold',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },

  modalContent: {
    width: '97%',
    backgroundColor: 'white',
    padding: 30,
    borderRadius: 10,
    borderWidth: 1,
    borderRadius: 10,
    shadowColor: 'blue',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 5,
  },
  heading: {
    padding: 20,
    alignSelf: 'center',
    backgroundColor: '#ffffff',
    padding: 16,
    borderRadius: 8,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
    gap: 10,
  },
  headingtext: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'white'
  },
  wallet: {
    alignSelf: 'center',
    padding: 10,
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#ffffff',
    padding: 16,
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
  addmoney: {
    alignSelf: 'center',
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#9acd32',
    padding: 16,
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
  addmoneytext: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center'
  },
  money: {
    color: 'red',
    fontWeight: 'bold',
    fontSize: 20,
    alignSelf: 'center'
  },
  downloadButton: {
    position: 'absolute',
    bottom: 10,
    right: 4,
    backgroundColor: '#e6e6fa',
    padding: 7,
    borderRadius: 10
  },
  downloadtext: {
    color: '#7070d9',
    fontWeight: 'bold'
  },
  inbody: {
    paddingTop: 5,
    flexDirection: 'column',
    gap: 10,
    paddingBottom: 10
  }
});

export default styles;