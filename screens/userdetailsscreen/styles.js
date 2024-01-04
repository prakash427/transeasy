import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    justifyContent: 'center',
    backgroundColor: 'white'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: 'black',
    paddingLeft: 10
  },
  input: {
    height: 60,
    borderColor: 'gray',
    borderWidth: 2,
    marginBottom: 12,
    paddingHorizontal: 10,
    borderRadius: 25,

  },
  button: {
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold'
  },
  errormessage: {
    color: 'red',
    paddingBottom: 5
  },
  googleSignInButton: {
    width: 200,
    height: 50,
    alignSelf: 'center'
  },
  image: {
    alignSelf: 'center'
  },
  ortext: {
    alignSelf: 'center',
    padding: 20,
    fontWeight: 'bold',
    color: 'black'
  },

});

export default styles;