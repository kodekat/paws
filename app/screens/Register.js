import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default class Register extends React.Component {
  render() {
    return (
     <Text style={styles.container}>Register Here </Text>
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