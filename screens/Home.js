import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import React, { Component } from 'react';
export default class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          style={styles.bgImage}
          source={require('../assets/bg2.png')}>
          <Text style={styles.paragraph}>Space Tracker</Text>
          <View style={{ marginTop: 50 }}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => this.props.navigation.navigate('ISS')}>
              <Text style={styles.text}>ISS</Text>
            </TouchableOpacity>
          </View>
          <View style={{ marginTop: 50 }}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => this.props.navigation.navigate('Meteors')}>
              <Text style={styles.text}>Meteors</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
  },
  paragraph: {
    margin: 24,
    fontSize: 35,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
    marginTop: 100,
  },
  bgImage: {
    flex: 1,

    imageMode: 'cover',
  },
  button: {
    backgroundColor: 'lightgrey',
    width: '60%',
    height: 80,
    alignSelf: 'center',
    borderRadius: 45,
    opacity: 0.7,
    borderColor: 'purple',
    borderWidth: 6,
  },
  text: {
    textAlign: 'center',
    fontSize: 35,
    color: 'purple',
    padding: 12,
  },
});
