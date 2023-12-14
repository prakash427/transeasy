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
    },
    buttonText: {
      color: '#fff',
      fontWeight: 'bold',
      fontSize : 20
    },
  });

  export default styles