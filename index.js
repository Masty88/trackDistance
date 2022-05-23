/**
 * @format
 */
import React from "react";
import {AppRegistry} from 'react-native';
import App from './App';
import {Provider as PaperProvider} from 'react-native-paper';
import {Provider} from 'react-redux';
import {name as appName} from './app.json';
import {store} from './store/store';

export default function Main() {
  return (
    <Provider store={store}>
      <PaperProvider>
        <App />
      </PaperProvider>
    </Provider>
  );
}

AppRegistry.registerComponent(appName, () => Main);
