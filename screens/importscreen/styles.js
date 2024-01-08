import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  mainHeading: {
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    borderBottomRightRadius: 25,
    borderBottomLeftRadius: 25,
    paddingBottom: 30,
    height: 170,
    width: '100%',
    position: "absolute"
  },
  back: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },

  Headertext: {
    fontSize: 24,
    color: 'white',
  },
  sectionContainer: {
    top: 90,
    backgroundColor: 'white',
    marginBottom: 300,
    padding: 20,
    borderRadius: 10,
    shadowColor: 'blue',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 5,
    padding: 10,
    margin: 20,
  },
  subHeading: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'black',
    marginLeft: 15,
  },
  inputField: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 15,
    marginBottom: 10,
    borderRadius: 25,
    marginLeft: 10,
    marginRight: 10,
  },

  button: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 25,
    marginBottom: 20,
    margin: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 18,
  },
  journeyIconContainer: {
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginHorizontal: 20,
    borderRadius: 20,
    padding: 10,
  },
  journeyIconText: {
    fontSize: 18,
    color: 'black'
  },
  confirmLocationButton: {
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    marginTop: 10,
    paddingBottom: 30,
  },
  journeyIconsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 10,
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
  errorText: {
    color: 'red',
    paddingLeft: 20
  },

});

export default styles;