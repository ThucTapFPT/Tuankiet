import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { render } from 'react-dom';
import { StyleSheet, Text, View } from 'react-native';
import Baitap from "./src/Login"
export default class App extends Component {
  render(){
  return (
      <Baitap />
  );
  }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems:'center',
//     justifyContent: 'center',
//   },
// });
