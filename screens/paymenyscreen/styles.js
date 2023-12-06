import { StyleSheet } from "react-native"; 

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    listItem: {
      padding: 1,
      paddingHorizontal : 10    
    },
    image: {
      width: 150, 
      height: 50, 
      marginRight: 10,
      borderRadius: 25, 
    },
    incontent: {
      flexDirection: 'row',
      alignItems: 'center',
      gap : 5
    },
    content: {
      flexDirection: 'column',
    },
    link : {
      color : 'green',
      fontWeight : 'bold'
    },
    heading : {
      padding : 20,
      alignSelf : 'center',
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
      gap : 10,
    },
    headingtext : {
      fontWeight : 'bold',
      fontSize : 25
    },
  });

  export default styles;