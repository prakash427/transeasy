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
    slidecontainer: {
      width: '90%',
      height: 150,
      alignSelf: 'center',
      marginTop: 10,
    },
    wrapper: {},
    slide: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    image: {
      width: '100%',
      height: '100%',
      borderRadius: 8,
    },
    paginationStyle: {
      bottom: 10,
    },
    dotStyle: {
      width: 8,
      height: 8,
      borderRadius: 4,
      backgroundColor: 'rgba(255,255,255,.4)',
      marginLeft: 3,
      marginRight: 3,
    },
    activeDotStyle: {
      width: 12,
      height: 12,
      borderRadius: 6,
      backgroundColor: 'white',
      marginLeft: 3,
      marginRight: 3,
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
        padding: 2,
        borderWidth: 1, 
        borderColor: '#ddd', 
        shadowColor: '#000', 
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 3,
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
        padding : 15,
        borderRadius : 10
      },
      described : {
        alignSelf : 'center',
        color : 'grey',
        fontWeight : 'bold'
      },
      modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)', 
      },
    
      modalContent: {
        width: '90%',
        backgroundColor: 'white',
        padding: 30,
        borderRadius: 10,
        borderWidth : 5,
        borderColor : '#61C9D3'
      },
      heading : {
        padding : 20,
        alignSelf : 'center',
        backgroundColor: '#ffffff', 
        padding: 16, 
        borderRadius: 8, 
        marginVertical: 10, 
        borderWidth: 1, 
        borderColor: '#ddd', 
        shadowColor: '#000', 
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 3, 
        gap : 10,
      },
      headingtext : {
        fontWeight : 'bold',
        fontSize : 25
      },
      wallet : {
          alignSelf : 'center',
          padding : 10,
          width : '90%',
          flexDirection : 'row',
          justifyContent : 'space-between',
          backgroundColor: '#ffffff', 
          padding: 16, 
          borderRadius: 8, 
          marginVertical: 10, 
          borderWidth: 1, 
          borderColor: '#ddd', 
          shadowColor: '#000', 
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.2,
          shadowRadius: 4,
          elevation: 3, 
      },
      addmoney:{
              alignSelf : 'center',
              padding : 10,
              flexDirection : 'row',
              justifyContent : 'space-between',
              backgroundColor: 'green', 
              padding: 16, 
              borderRadius: 8, 
              marginVertical: 10, 
              borderWidth: 1, 
              borderColor: '#ddd', 
              shadowColor: '#000', 
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.2,
              shadowRadius: 4,
              elevation: 3, 
          },
          addmoneytext : {
              color : 'white',
              fontWeight : 'bold',
              fontSize : 25,
              textAlign : 'center'
          },
          money : {
              color : 'red',
              fontWeight : 'bold',
              fontSize : 20
          },
          downloadButton: {
            position: 'absolute',
            bottom: 10,
            right: 10,
            backgroundColor: '#e6e6fa', 
            padding : 7,
            borderRadius : 10
          },
          downloadtext : {
            color : '#4b0082',
            fontWeight : 'bold'
          }
  });

  export default styles;