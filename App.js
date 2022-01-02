import React from 'react';
import { StyleSheet, View } from 'react-native';
// import { NativeRouter, Switch, Route } from 'react-router-native';
import HomePage from './screen/home';
import { BrowserRouter, Routes , Route } from 'react-router-dom'



export default function App() {
  return (
      <HomePage/>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
