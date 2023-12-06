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
      color: 'black',
      padding:20,
      backgroundColor:'#61C9D3',
      borderRadius : 20,
      width : '100%'
    },
    sectionContainer: {
      marginBottom: 20,
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
    
  });

  export default styles;