import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white', 
    },
    Header : {
        backgroundColor:'#61C9D3',
        padding : 20,
        alignItems : 'center',
        flexDirection : 'row',
        justifyContent : 'space-between'
    },
    Headertext : {
        color : 'white',
        fontWeight : 'bold',
        fontSize : 20,
    },
    slideshowContainer: {
        width: '85%', 
        aspectRatio:2.3, 
        overflow: 'hidden',
        alignSelf: 'center',
        borderRadius: 30, 
        marginVertical: 20, 
      },
      slideImage: {
        width: 335,
        height: '100%',
        borderRadius: 20,
        resizeMode: 'cover',
        
      },
      dotsContainer: {
        position: 'absolute',
        bottom: 20,
        flexDirection: 'row',
        alignSelf: 'center',
      },
      dot: {
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: '#ccc',
        marginHorizontal: 5,
      },
      activeDot: {
        backgroundColor: 'white',
      },
      itemImage : {
        height : 150,
        borderRadius : 5,
        width : 150
      },
      lineTextContainer : {
        backgroundColor : 'white',
        borderRadius : 5,
        alignItems : 'center',
        padding : 5,
        margin : 5
      },
      text : {
        color : 'grey',
        fontWeight : 'bold'
      },
      flatList : {
        height : 200,
        borderRadius:5
      },
      body : {
        flex : 0.3,
        flexDirection : 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between', 
        gap : 10,
        padding : 15
      },
      features : {
        backgroundColor : 'white',
        padding:20,
        borderRadius:10
      },
      describe : {
        alignSelf : 'center',
        color : 'grey',
        fontWeight : 'bold'
      },
      icon : {
        color : '#61C9D3',
        alignSelf:'center'
      },
      bottomBar: {
        backgroundColor: 'white',
        padding: 10,
      },
      bottomBarText: {
        color: '#61C9D3',
        fontWeight: 'bold',
      },
      iconRow: {
        flexDirection: 'row',
        justifyContent : 'space-around'
      },
      options:{
        padding:2,
      },
      oicon:{
        color : '#61C9D3',
      },
      described : {
        alignSelf : 'center',
        color : 'grey',
        fontWeight : 'bold'
      },
  });

  export default styles;