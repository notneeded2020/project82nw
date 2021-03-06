import React from 'react';
import { StyleSheet, Text, View } from 'react-native';import Constants from 'expo-constants';
import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigator from './navigation/DrawerNavigation';

export default class App extends React.Component {
  render(){
   return (
    <NavigationContainer>
    <DrawerNavigator/>
   </NavigationContainer>
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
