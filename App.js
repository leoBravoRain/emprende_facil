import React from 'react';
import { 
  Text, 
  View
} from 'react-native';

import {
  createStackNavigator,
  createAppContainer
} from 'react-navigation';

import Home from "./screens/home_screen.js"
import Canva_Generator from "./screens/canva_generator.js"
import Show_Canva from "./screens/show_canva.js"

const AppStackNavigator = createStackNavigator(

  {

    Home: Home,
    Canva_Generator: Canva_Generator,
    Show_Canva: Show_Canva

  },

  { 
    headerMode: 'screen' 
  },

  {
    initialRouteName: "Home",

  },


);


const App = createAppContainer(AppStackNavigator);

export default App;