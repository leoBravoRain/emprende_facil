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
  TextInput,
  ScrollView
} from 'react-native';
import { NavigationActions, withNavigation } from 'react-navigation';
import { Button } from 'react-native-elements';

class Show_Canva extends Component {

   // hide nav bar
  static navigationOptions = {

    title: "Mi modelo de negocios",
    headerStyle: {
      backgroundColor: '#3f5fe0',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },

  }

  //Constructor
  constructor(props) {

    super(props);

    this.state ={

      index: 0,

    }
  
  }


  // Render method
  render() {

    return (

      <View style = {styles.container_flex}>

        <ScrollView>


          { 

            this.props.navigation.state.params.canvas_items.map( (item, index) => (

              <Text key = {index} >

                {item}

                {this.props.navigation.state.params.answers[index]}          

              </Text>

            ))

          }

        </ScrollView>

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

export default withNavigation(Show_Canva);