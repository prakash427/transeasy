
import React from 'react';
// import { Provider } from 'react-redux';
// import store from './src/store';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './screens/stacknavigator';
import { Provider } from 'react-redux';
import store from './screens/redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <StackNavigator/>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
