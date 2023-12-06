import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: 20,
      backgroundColor: '#fff',
    },
    leftArrow:{
     alignSelf:'flex-start',
     color:'black'
    },
    image: {
      width: 200,
      height: 200, 
      marginBottom: 20,
    },
    verifyText: {
      fontSize: 20,
      marginBottom: 20,
      textAlign: 'center',
      color: 'black',
      fontWeight: 'bold',
    },
    otpContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      marginBottom: 20,
    },
    otpInput: {
      borderWidth: 1.5,
      borderColor: 'black',
      width: 50,
      height: 50,
      fontSize: 24,
      textAlign: 'center',
      marginHorizontal: 5,
      borderRadius: 15,
    },
    submitButton: {
      backgroundColor: '#61C9D3',
      paddingVertical: 10,
      paddingHorizontal: 90,
      borderRadius: 20,
    },
    buttonText: {
      color: '#fff',
      fontWeight: 'bold',
      textAlign: 'center',
      fontSize: 16,
    },
    resendButton: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 10,
    },
    resend: {
      fontSize: 18,
      marginLeft: 5,
      color:'black'
    },
  });

  export default styles;
  