import React, { Component } from 'react';
import {
  Alert,
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  PermissionsAndroid,
  NetInfo,
  // Button,
  Picker,
  AsyncStorage
} from 'react-native';

import { NavigationActions, withNavigation } from 'react-navigation';

import { Button } from 'react-native-elements';

class Home extends Component {

  // hide nav bar
  static navigationOptions = {

    header: null,

  }

  //Constructor
  constructor(props) {

    super(props);
  
  }

  componentWillMount(){

    // // Load data from device
    load_data = async() =>{

      AsyncStorage.getAllKeys((err, keys) => {
        AsyncStorage.multiGet(keys, (err, stores) => {
          stores.map((result, i, store) => {
            // get at each store's key/value so you can work with it
            let key = store[i][0];
            let value = store[i][1];

            console.log(JSON.parse(value))

          });
        });
      });

      // // get all keys from local storage
      // keys = await AsyncStorage.getAllKeys();

      // // console.log(keys);

      // data = await AsyncStorage.multiGet(keys);

      // // console.log(data);

      // data = JSON.parse(data);

      // // console.log(data);

      // return data;
    }

    load_data();

  }
  // Manage danger map
  manage_click(){

    // Alert.alert("click");

    // Navitage to next page
    this.props.navigation.push("Canva_Generator"); 

  }

  // Render method
  render() {

    return (

      <View style = {styles.container_flex}>

        <Button

            raised

            title = {"Evaluar mi idea de negocio"}

            onPress = {this.manage_click.bind(this)}

            buttonStyle={styles.buttonStyle}
          />

      </View>

    );

  }

}

const styles = StyleSheet.create({

  image_background: {

    flex: 1,
    // remove width and height to override fixed static size
    width: '100%',
    height: '100%',
    justifyContent: 'center', 
    alignItems: 'center'

  },

  container_flex : {

    flex:1 ,
    justifyContent: 'center', 
    alignItems: 'center'
  },

  buttonStyle: {
    backgroundColor: "#3f5fe0",
    width: 300,
    height: 45,
    // borderColor: "transparent",
    borderWidth: 0,
    // borderRadius: 5
    margin: 10
  }

})

export default withNavigation(Home);