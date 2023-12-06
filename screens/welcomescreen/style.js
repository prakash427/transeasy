import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    backgroundVideo: {
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
    },
    overlay: {
      ...StyleSheet.absoluteFillObject,
      justifyContent: 'flex-end',
      alignItems: 'flex-start',
      backgroundColor: 'rgba(0, 0, 0, 0.1)', 
      paddingBottom : 30,
      paddingLeft : 30
    },
    overlayText: {
      color: 'white',
      fontSize: 18,
      textAlign: 'left',
      paddingBottom : 20,
      fontWeight : 'bold'
    },
    overlayTextButton: {
      color: 'white',
      fontSize: 18,
      fontWeight : 'bold',
      textAlign: 'center',
      padding: 20,
      backgroundColor: '#61C9D3', 
      borderRadius : 10,
      paddingHorizontal : 110
    },
    title : {
      color : 'white',
      fontWeight : 'bold',
      fontSize : 40,
      paddingBottom : 20
    },
    startbutton : {
      alignSelf : 'center'
    }
  });

  export default styles;