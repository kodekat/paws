import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import LandingScreen from './app/screens/LandingScreen';
//import Feed from './app/screens/Feed';
import IntroStack from './app/navigation/IntroStack';
import HomeTabs from './app/navigation/HomeTabs';
import RootNavigator from './app/navigation/RootNavigator';

export default class App extends React.Component {
  
  render() {
    return (
     
    <RootNavigator/>
    )
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
