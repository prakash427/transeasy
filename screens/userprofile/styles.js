import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  headerpart: {
    width: '100%',
    height: 200,
    paddingTop: 20,
    padding: 10,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    position: 'absolute',
  },
  information: {
    padding: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    top: 120,
    width: '90%',
    alignSelf: 'center',
    borderRadius: 20,
    shadowColor: 'blue',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 5,
  },
  icon: {
    marginBottom: 10
  },
  container: {
    flex: 1,
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
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    margin: 10
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },

  modalContent: {
    width: '90%',
    height: 200,
    backgroundColor: 'white',
    justifyContent: 'center',
    padding: 30,
    borderRadius: 10,
    borderRadius: 20,
    shadowColor: 'blue',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 5,
  },

  modalText: {
    fontSize: 18,
    marginBottom: 10,
    textAlign: 'center',
    color: 'black',
    fontWeight: 'bold'
  },

  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20
  },

  modalButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold'
  },
  alertnuttons: {
    padding: 10,
    borderRadius: 5
  }
});

export default styles