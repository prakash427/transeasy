import { StyleSheet } from "react-native"; 

const styles = StyleSheet.create({
    container: {
      flex: 1,
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
    wallet : {
        alignSelf : 'center',
        padding : 10,
        width : '90%',
        flexDirection : 'row',
        justifyContent : 'space-between',
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
    addmoney:{
            alignSelf : 'center',
            padding : 10,
            flexDirection : 'row',
            justifyContent : 'space-between',
            backgroundColor: 'green', 
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
        addmoneytext : {
            color : 'white',
            fontWeight : 'bold',
            fontSize : 25,
            textAlign : 'center'
        },
        money : {
            color : 'red',
            fontWeight : 'bold',
            fontSize : 20
        }
    
  });

  export default styles;