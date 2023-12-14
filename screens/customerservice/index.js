
import React, { useState, useEffect } from 'react';
import { GiftedChat, Bubble } from 'react-native-gifted-chat';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CustomInputToolbar from './custominput';

const ChatScreen = () => {

  const navigation = useNavigation();
  const Home = () => {
    navigation.navigate('HomeScreen')
  }

  const [messages, setMessages] = useState([]);
  const onSend = (newMessages = []) => {
    const isUserMessage = newMessages[0]?.user?._id === 2; 
    
    if (isUserMessage) {
      setMessages((prevMessages) => GiftedChat.append(prevMessages, newMessages));
      const chatbotResponse = generateChatbotResponse(newMessages);
      setMessages((prevMessages) => GiftedChat.append(prevMessages, chatbotResponse));
    } else {
      setMessages((prevMessages) => GiftedChat.append(prevMessages, newMessages));
    }

  };

  const generateChatbotResponse = (userMessages) => {
    const lastUserMessage = userMessages[0].text.toLowerCase();
    // const lastUserMessage = userMessages[0]?.text?.toLowerCase() || '';
    
    if (lastUserMessage.includes('hi')) {
      return [
        {
          _id: Math.random(),
          text: 'Hi I am bot of TRANSEASY! How can I help you?',
          createdAt: new Date(),
          user: { _id: 1 },
        },
      ];
    }else if (lastUserMessage.includes('hello')) {
      return [
        {
          _id: Math.random(),
          text: 'Hi there! How can I help you?',
          createdAt: new Date(),
          user: { _id: 1 },
        },
      ];
    } 
    else if (lastUserMessage.includes('bye')) {
      return [
        {
          _id: Math.random(),
          text: 'Goodbye! Have a great day!',
          createdAt: new Date(),
          user: { _id: 1 },
        },
      ];
    } 
    else if (lastUserMessage.includes('i have an issue with my transaction')) {
      return [
        {
          _id: Math.random(),
          text: 'One of our consltant will contact you on very soon',
          createdAt: new Date(),
          user: { _id: 1 },
          additionalComponents: true,
        },
      ];
    } else if (lastUserMessage.includes("my product doesn't reach to destination")) {
      return [
        {
          _id: Math.random(),
          text: 'One of our consltant will contact you on very soon',
          createdAt: new Date(),
          user: { _id: 1 },
          additionalComponents: true,
        },
      ];
    } else {
      return [
        {
          _id: Math.random(),
          text: "I'm sorry, I didn't understand that.",
          createdAt: new Date(),
          user: { __id: 1 },
          additionalComponents: true,
        },
      ];
    }
  };

  const renderAvatar = (props) => {
    if (props.currentMessage.user._id === 1) {
      return <Image source={require('../assets/bot.png')} style={{ width: 40, height: 40 }} />;
    }
    return null
  };

  const renderBubble = (props) => {
    const { additionalComponents } = props.currentMessage;
    return (
      <View>
      <Bubble
        {...props}
        textStyle={{
          left: { color: 'white' }, // Customize the text color for the bot's messages
        }}
        wrapperStyle={{
          left: { backgroundColor: '#61C9D3' }, // Customize the background color for the bot's messages
        }}
      />
       {additionalComponents && (
          <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginTop: 10 }}>
            <TouchableOpacity style={{ backgroundColor: '#1e90ff', borderRadius : 5 }} onPress={() => Home()}>
              <Text style={{ color: 'white', padding : 7 }}>Close this chat</Text>
            </TouchableOpacity> 
            <TouchableOpacity style={{ backgroundColor: '#1e90ff', borderRadius : 5 }} 
            onPress={() => {
              const newMessages = [
                {
                  _id: Math.random(),
                  text: 'hello', // Simulate sending a message with content "hi"
                  createdAt: new Date(),
                  user: { _id: 2 }, // User ID
                },
              ];
              onSend(newMessages);
              }}
                >
              <Text style={{ color: 'white', padding : 7 }}>Another query</Text>
            </TouchableOpacity>      
          </View>
        )}
      </View>
    ); 
  };

  useEffect(() => {
    const initialBotMessage = generateChatbotResponse([{ text: 'hi' }]);
    setMessages((prevMessages) => GiftedChat.append(prevMessages, initialBotMessage));
  }, []);

  return (
    <ImageBackground source={require('../assets/chatbackground.webp')} style={styles.backgroundImage}>
    <View style={styles.chatContainer}>
    <GiftedChat
      messages={messages}
      onSend={(newMessages) => onSend(newMessages)}
      user={{ _id: 2 }}
      renderAvatar={(props) => renderAvatar(props)}
      renderBubble={(props) => renderBubble(props)}
      // renderInputToolbar={(toolbarProps) => <CustomInputToolbar {...toolbarProps} />}
       //inverted={false}
     />
     </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // or 'stretch' for different stretch modes
  },
  chatContainer: {
    flex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.5)', // Adjust the opacity or color as needed

  },
});


export default ChatScreen;
