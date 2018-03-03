import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import LandingScreen from './app/screens/LandingScreen';
//import Feed from './app/screens/Feed';

export default class App extends React.Component {
  render() {
    return (
     <LandingScreen/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
