import { StyleSheet } from "react-native"; 

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
      backgroundColor: '#fff',
    },
    mainHeading: {
      fontSize: 26,
      fontWeight: 'bold',
      marginBottom: 20,
      alignSelf: 'center',
      color: 'white',
      backgroundColor : '#61C9D3',
      padding : 40,
      width : '100%',
      borderRadius : 10
    },
    sectionContainer: {
      marginBottom: 20,
    },
    subHeading: {
      fontSize: 22,
      fontWeight: 'bold',
      marginBottom: 10,
      color: 'black',
      marginLeft: 15,
    },
    inputField: {
      borderWidth: 1,
      borderColor: 'gray',
      padding: 10,
      marginBottom: 10,
      borderRadius: 25,
      marginLeft: 10,
      marginRight: 10,
    },
    productImage: {
      width: '100%',
      height: 200,
      resizeMode: 'cover',
      marginTop: 10,
      borderRadius: 10,
    },
    button: {
      backgroundColor: '#61C9D3',
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
    selectedImage: {
      width: 200,
      height: 200,
      marginTop: 20,
      resizeMode: 'cover',
    },
    journeyIconContainer: {
      alignItems: 'center',
      justifyContent: 'space-evenly',
      marginHorizontal: 20,
      borderRadius: 20,
      padding:20,
    },
    journeyIconText: {
      fontSize: 18,
      color:'black'
    },
    confirmLocationButton: {
      backgroundColor: '#61C9D3',
      paddingVertical: 20,
      paddingHorizontal: 20,
      borderRadius: 25,
      margin: 10,
    },
    journeyIconsContainer: {
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      marginTop: 10,
    },
    errorText : {
      color : 'red',
      paddingLeft : 20
    }
  });

  export default styles;
  