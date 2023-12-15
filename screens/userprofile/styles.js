import { StyleSheet } from "react-native"; 

const styles = StyleSheet.create({
    headerpart : {
     backgroundColor : '#61C9D3',
     padding : 20,
     borderRadius : 20,
     flexDirection : 'row',
     justifyContent : 'space-between',
     alignItems : 'center'
    },
    icon : {
       marginBottom : 10
    },
    container: {
      flex: 1,
      padding: 16,
    },
    label: {
      fontSize: 16,
      fontWeight: 'bold',
      marginTop: 8,
    },
    input: {
      fontSize: 16,
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 8,
      padding: 8,
      marginTop: 4,
      marginBottom: 16,
    },
    button: {
      backgroundColor: '#61C9D3',
      padding: 12,
      borderRadius: 8,
      alignItems: 'center',
      margin : 10
    },
    buttonText: {
      color: '#fff',
      fontWeight: 'bold',
      fontSize : 20
    },
       modalContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.5)', 
    },
  
    modalContent: {
      width: '80%',
      backgroundColor: 'white',
      padding: 30,
      borderRadius: 10,
      borderWidth : 5,
      borderColor : '#61C9D3'
    },
  
    modalText: {
      fontSize: 18,
      marginBottom: 10,
      textAlign: 'center',
    },
  
    modalButtons: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      marginTop: 20
    },
  
    modalButtonText: {
      color: 'white',
      fontSize: 16,
      fontWeight : 'bold'
    },

    alertnuttons : {
      backgroundColor : '#61C9D3',
      padding : 10,
      borderRadius : 5
    }
  });

  export default styles