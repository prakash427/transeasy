import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    Header: {
        backgroundColor: '#61C9D3',
        padding: 20,
        alignItems: 'center',
        flexDirection: 'row',
        gap: 5,
      },
      Headertext: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 25,
      },
    container : {
    width: '90%',
    height: 200,
    alignSelf: 'center',
    marginTop: 10,
    },
    input: {
        marginTop : 20,
        height: 60,
        width : '100%',
        borderColor: '#ddd',
        backgroundColor: '#ffffff', 
        borderWidth: 2,
        marginBottom: 12,
        paddingHorizontal: 10,
        borderRadius : 25,  
        shadowColor: '#000', 
        shadowOffset: { width:20, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 3, 
      },
      amount : {
        justifyContent : 'flex-end',
         backgroundColor : 'green',
         padding : 15,
         alignItems : 'center',
         margin : 10,
         borderRadius : 10
        },
        amountText : {
            color : 'white',
            fontWeight : 'bold',
            fontSize : 20
        },
        rewards : {
            padding : 20,
              alignSelf : 'flex-start',
              backgroundColor: '#ffffff', 
              marginLeft: 16, 
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
          rewardstext : {
            color : 'black',
            fontWeight : 'bold',
            fontSize : 15
          },
          listItem: {
            padding: 10,
          },
          images: {
            width: 100,
            height: 50,
            marginRight: 10,
            borderRadius: 10,
          },
          incontent: {
            flexDirection: 'row',
            alignItems: 'center',
          },
          content: {
            alignItems: 'flex-start',
          },
          originalprice: {
            color: 'red',
            alignSelf : 'flex-start'
          },
          couponcontainer : {
            flex : 1,
            flexDirection : 'row',
            justifyContent : 'space-between',
          },
          couponimgcontainer : {
            flexDirection : 'row'
          },
          couponcard : {
            flexDirection : 'column'
          }
})

export default styles