import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import React, { Component } from 'react';
import Home from './screens/Home';
import ISS from "./screens/ISS"
import Meteors from "./screens/Meteors"
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack"

const Stack = createStackNavigator()
export default class App extends Component {
  render() {
    return (
     <NavigationContainer>
     <Stack.Navigator initialRouteName="Home" screenOptions={{
        headerShown: false
      }}>
     <Stack.Screen name="Home" component={Home}/>
      <Stack.Screen name="ISS" component={ISS}/>
       <Stack.Screen name="Meteors" component={Meteors}/>
     </Stack.Navigator>
     </NavigationContainer>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
  },
});
