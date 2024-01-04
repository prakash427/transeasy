import { StyleSheet, Dimensions } from "react-native";
import { useColorScheme } from "react-native";

const { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#f5fffa'
  },
  mainHeading: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: '#61C9D3',
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    height: height * 0.25,
    width: '100%',
    position: 'absolute',
    zIndex: 0,
  },
  back: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    zIndex: 1,
  },

  Headertext: {
    fontSize: 24,
    color: 'white',
    paddingTop: 5,
    textAlign: 'center'
  },

  imageplace: {
    paddingTop: 10,
    paddingLeft: 5
  },
  imageContainer: {
    width: width * 0.4,
    marginBottom: 10,
  },
  imageRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  sectionContainer: {
    marginBottom: 15,
    borderRadius: 20,
    backgroundColor: 'white',
    margin: width * 0.05,
    padding: width * 0.03,
    shadowColor: 'blue',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 5,
  },
  subHeading: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'black',
    marginLeft: 5,
  },
  inputField: {
    width: width * 0.4,
    borderWidth: 0.5,
    borderColor: 'black',
    padding: 10,
    marginBottom: 10,
    borderRadius: 10,
    marginRight: 10,
    paddingHorizontal: 40
  },
  productImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    marginTop: 10,
    borderRadius: 10,
  },
  button: {
    width: width * 0.4,
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'white',
    paddingVertical: 7,
    borderRadius: 10,
    padding: 5,
    borderWidth: 0.5,
    borderColor: 'grey',
    gap: 5,
    backgroundColor: 'rgba(255, 255, 255, 0.8)'
  },
  buttonText: {
    color: 'grey',
    textAlign: 'center',
    fontSize: 15,
    margin: 4
  },
  selectedImage: {
    width: width * 0.4,
    height: height * 0.2,
    marginTop: 10,
    resizeMode: 'cover',
  },
  journeyIconContainer: {
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginHorizontal: 20,
    borderRadius: 10,
    padding: 8,

  },
  journeyIconText: {
    fontSize: 18,
    color: 'black'
  },
  confirmLocationButton: {
    paddingVertical: height * 0.02,
    paddingHorizontal: width * 0.1,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    marginTop: height * 0.11,
    paddingBottom: 10,
  },
  journeyIconsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  errorText: {
    color: 'red',
    paddingLeft: 20
  },
  removeImageButton: {
    backgroundColor: '#24a1c9',
    width: 20,
    borderRadius: 10,
  },
  columnContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 15
  },
  rowContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    flex: 1,
  },
  inputWithIcon: {
    position: 'relative',
    flexDirection: 'row',
  },
  icon: {
    position: 'absolute',
    left: 10,
    paddingTop: 14
  },
  inputWithError: {
    flex: 1,
    flexDirection: 'column'
  },
  addbutton: {
    flex: 1,
    width: 150,
    justifyContent: 'center',
    flexDirection: 'row',
    paddingVertical: 7,
    borderRadius: 10,
    padding: 5,
    backgroundColor: 'white',
    alignSelf: 'center',
    shadowColor: 'blue',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 5,

  },
  row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  selectedJourneyIconStyle: {
    backgroundColor: 'white',
    borderWidth: 0.5,
    borderColor: '#24a1c9',
    shadowColor: 'blue',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 10,
  },

  unselectedJourneyIconStyle: {
    backgroundColor: 'transparent',
    borderWidth: 0,
  },
  linearGradient: {
    flex: 1,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
  },
  iconn: {
    marginTop: 0,
  }
});

export default styles;

