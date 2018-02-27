import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default class Login extends React.Component {
  render() {
    return (
     <Text style={styles.container}>Log in Here </Text>
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