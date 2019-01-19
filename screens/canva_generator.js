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
  AsyncStorage
} from 'react-native';
import { NavigationActions, withNavigation } from 'react-navigation';
import { Button } from 'react-native-elements';

// items from canvas
canvas_items =[

  // "Tus usuarios son",
  "Tus clientes son"

]

// Get list of questions to answer
questions = [

  // "¿Quienes van a usar la solucion que quieres hacer?",

  "¿Quien es tu cliente?",

] 

// Length questions
questions_length = questions.length

// Answers 
answers = []

// Index for question
index = 0;

// get keys from local storage
async function save_data(list) {

  console.log(this.state.answers);

  // // get all keys from local storage
  // keys = await AsyncStorage.getAllKeys();

  // // Map to int each element
  // keys = keys.map(function(x) {

  //   // Return value
  //   return int(x);

  // })

  // console.log(keys);

  // if(keys.length == 0 || keys == undefined || keys == null){

  //   max_key = 0;

  // }

  // else{

  //   max_key = max(keys);

  // }

  var currentdate = new Date(); 
  var datetime =    currentdate.getDate() + "/"
                  + (currentdate.getMonth()+1)  + "/" 
                  + currentdate.getFullYear() + "/"  
                  + currentdate.getHours() + "/"  
                  + currentdate.getMinutes() + "/" 
                  + currentdate.getSeconds();

  // console.log(datetime);

  // try save data
  try {

    // AsyncStorage.setItem(max_key + 1, "this is testing");
    AsyncStorage.setItem(currentdate, JSON.stringify(list));

  } catch (error) {

    // Error saving data
    console.log(error);

  }

  // return keys["_55"];
  // return keys

}

// //  Save data locaclly
// save_data = () => {

//   keys = await get_keys();

//   console.log(keys);

//   if(keys.length == 0 || keys == undefined || keys == null){

//     max_key = 0;

//   }

//   else{

//     max_key = max(keys);

//   }


//   try {

//     AsyncStorage.setItem(max_key + 1, "this is testing");

//   } catch (error) {

//     // Error saving data
//     console.log(error);

//   }

// }

class Canva_Generator extends Component {

   // hide nav bar
  static navigationOptions = {

    title: "Evaluar modelo de negocios",
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

      index: index,
      finish_questions : false,
      last_question : false,
      // text_input: null,
      answers: answers,

    }
  
    this.manage_click = this.manage_click.bind(this);

  }

  // Manage danger map
  manage_click(){

    // get answers list
    new_answers = this.state.answers;

    // add text_input to anwsers temp list
    new_answers[this.state.index] = this.state.text_input;

    // Add answer to questions of index number
    this.setState({

      answers : new_answers,

    });

    // If index == quetions length
    // Finish questions
    if(this.state.index == (questions_length - 1)){

      // Restart index
      // new_index = 0;

      // Update states
      // this.setState({

      //   finish_questions: true,

      // });

      // Create canva
      // Alert.alert("Create Canva");

      // Save data on device
      save_data(this.state.answers);

      // try {

      //   AsyncStorage.setItem("1", "this is testing");

      // } catch (error) {

      //   // Error saving data
      //   console.log(error);

      // }
        
      // console.log(get_keys());

      // Navitage to next page
      this.props.navigation.push("Show_Canva", {questions: questions, answers:this.state.answers, canvas_items: canvas_items}); 


    } 

    else{

      new_index = this.state.index + 1;

      // Update state
      this.setState({

        //Update index
        index: new_index,
        text_input: "",

      });

    }

    // Navitage to next page
    // this.props.navigation.push("Dangers_Map"); 

  }

  // Render method
  render() {

    return (

      <View style = {styles.container_flex}>

        <Text>

          {questions[this.state.index]}

        </Text>

        <TextInput
          multiline={true}
          numberOfLines={4}
          placeholder = "Escribir respuesta"
          style={{height: 100, width: "80%", borderColor: 'gray', borderWidth: 1, margin: 40}}
          onChangeText={(text) => this.setState({text_input: text})}
          // onChangeText={}
          value = {this.state.text_input}
          // onSubmitEditing = {() => Alert.alert("click")}
        />

        <Button

            raised

            title = {(this.state.index == (questions_length - 1)) ? "Finalizar" : "Siguiente"}

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

export default withNavigation(Canva_Generator);