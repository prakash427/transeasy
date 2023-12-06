import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
      container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        backgroundColor: 'cornsilk',
      },
      heading: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 16,
        color: 'black',
        alignSelf: 'flex-start',
      },
      description: {
        fontSize: 20,
        textAlign: 'left',
        marginBottom: 32,
        color: 'black',
      },
      image: {
        width: 300,
        height: 300,
        marginBottom: 32,
      },
      button: {
        backgroundColor: 'orangered',
        padding: 16,
        borderRadius: 8,
        width: '100%',
        marginBottom: 20,
      },
    });
    export default styles
    