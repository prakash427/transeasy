import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 40,
    marginBottom: 35,
   
  },
  headerText: {
    fontSize: 28,
    fontWeight: "bold",
    color: "black",
    alignSelf: "center",
    marginTop: -70,
  },
  middleImageContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  middleImage: {
    flex: 1,
    width: "100%",
    height: "100%",
    marginTop: -50,
    marginBottom: -200,
  },
  icon: {
    marginLeft: 10,
    alignSelf: "flex-start",
     marginTop: -10,
  },
  iconsContainer: {
    alignItems: 'flex-start',
    marginBottom: 10,

  },
  iconsRow: {
    flexDirection: 'column',
    justifyContent: 'center',
    marginTop: -100,
    marginBottom:-30
  },
  iconContainer: {
    marginHorizontal: 10,

  },
  circleIcon: {
    backgroundColor: '#000',
    borderRadius: 60,
    padding: 10,
    marginBottom:10,
    marginTop:-5
    
  },
  queryText: {
    position: "absolute",
    fontSize: 20,
    fontWeight: "bold",
    color: "#000000",
  },
  messageInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    marginBottom: 20,
  },
  plusIconContainer: {
    padding: 8,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#0caffd',
    marginRight: 10,
  },
  messageInput: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: '#000000',
    borderRadius: 20,
    paddingHorizontal: 15,
    fontSize: 18,
    fontWeight: '700',
    color: '#000000',
    paddingStart: 30,
  },
  telegramIconContainer: {
    padding: 8,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    marginLeft: 10,
  },
});
export default styles;