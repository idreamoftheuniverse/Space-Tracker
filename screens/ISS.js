import React, { Component } from 'react';
import {
  Text,
  View,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  Alert,
  Image,
} from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import axios from 'axios';
export default class Iss extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: {},
    };
  }
   componentDidMount() {
        this.getIssLocation()
        try {
            setInterval(async () => {
                this.getIssLocation()
            }, 5000);
        } catch (e) {
            console.log(e);
        }
    }

  getIssLocation = () => {
    axios
      .get('https://api.wheretheiss.at/v1/satellites/25544')
      .then((response) => {
        this.setState({
          location: response.data,
        });
      })
      .catch((error) => {
        Alert.alert(error.message);
      });
  };
  render() {
    if(Object.keys(this.state.location).length===0){
      return(
        <View style = {{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center'
        }}>
        <Text>Loading...</Text>
        </View>
      )
    }
    else{
      
  
    return (

      <View style={styles.container}>
      
        <ImageBackground
          source={require('../assets/bg2.png')}
          style={styles.backgroundImage}>
          <View style={styles.titleBar}>
            <Text style={styles.routeText}>Iss Screen</Text>
          </View>
          <View style={styles.mapContainer}>
          
            <MapView
              style={styles.map}
              region={{
                latitude: this.state.location.latitude,
                longitude: this.state.location.longitude,
                latitudeDelta: 100,
                longitudeDelta: 100,
              }}>
              <Marker
                coordinate={{
                  latitude: this.state.location.latitude,
                  longitude: this.state.location.longitude,
                }}>
                <Image
                  source={require('../issimage.jpg')}
                  style={{
                    width: 100,
                    height: 100,
                  }}
                />
              </Marker>
            </MapView>
          </View>
          <View style = {styles.infoContainer}>
          <Text style = {styles.infoText}> Latitude: {this.state.location.latitude}</Text>
          <Text style = {styles.infoText}> Longitude: {this.state.location.longitude}</Text>
          <Text style = {styles.infoText}> Altitude(KM): {this.state.location.altitude}</Text>
          <Text style = {styles.infoText}> Velocity(KMPH): {this.state.location.velocity}</Text>
          <TouchableOpacity
              style={styles.button}
              onPress={() => this.props.navigation.navigate('Home')}>
              <Text style={styles.text}>Home</Text>
            </TouchableOpacity>
          </View>
          
        </ImageBackground>
       
      </View>
      
    );
  }
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  routeText: {
    fontSize: 35,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 70,
    paddingLeft: 5,
    border: 'solid',
    borderColor: 'red',
  },
  titleBar: {
    flex: 0.15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mapContainer: {
    flex: 0.7,
  },
  map: {
    width: '100%',
    height: '100%',
  },
  infoContainer:{
      flex: 0.2,
      backgroundColor: 'white',
      marginTop: 5,
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      padding: 30
  },
  infoText:{
    fontSize: 15,
    fontWeight: 'bold',
    color: 'black'
  },
    button: {
    backgroundColor: 'lightgrey',
    width: '60%',
    height: 50,
    alignSelf: 'center',
    borderRadius: 45,
    opacity: 0.7,
    borderColor: 'purple',
    borderWidth: 6,
    marginTop:30
  },
    text: {
    textAlign: 'center',
    fontSize: 25,
    color: 'purple',
   
  },
});
