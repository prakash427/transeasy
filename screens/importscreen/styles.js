import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    mainHeading: {
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      backgroundColor : '#61C9D3',
      borderBottomRightRadius : 20,
      borderBottomLeftRadius : 20,
      paddingBottom : 30
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
      marginBottom: 20,
      padding :20,
      borderRadius : 5,
      borderWidth: 1, 
      borderColor: '#f7f8f9', 
      shadowColor: '#778899', 
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 4,
      elevation: 1, 
      padding : 10,
      margin : 20
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
      borderTopLeftRadius: 25,
      borderTopRightRadius : 25,
      marginTop: 10,
      paddingBottom: 30,
    },
    journeyIconsContainer: {
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      marginTop: 10,
    },
    
  });

  export default styles;