import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchBar: {
    backgroundColor: 'transparent',
    borderBottomColor: 'transparent',
    borderTopColor: 'transparent',
    width: '100%',
  },
  searchInput: {
    backgroundColor: '#e0e0e0',
  },
  listItem: {
    padding: 10,
  },
  image: {
    width: 200,
    height: 100,
    marginRight: 10,
    borderRadius: 15,
  },
  incontent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5
  },
  content: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: 5
  },
  rating: {
    backgroundColor: 'green',
    color: 'white',
    padding: 2,
    borderRadius: 5
  },
  originalprice: {
    textDecorationLine: 'line-through',
    color: 'red'
  },
  discountprice: {
    fontWeight: 'bold'
  },
  offer: {
    color: 'green'
  },
  title: {
    fontWeight: 'bold'
  }
});

export default styles;