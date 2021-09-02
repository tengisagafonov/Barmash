import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import firebase from 'firebase';

import { Button, StyleSheet, Text,View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAe_Dm5976OSzEWMu87QvSQAgLPhBftqPc",
  authDomain: "barmash-2db77.firebaseapp.com",
  projectId: "barmash-2db77",
  storageBucket: "barmash-2db77.appspot.com",
  messagingSenderId: "499140947381",
  appId: "1:499140947381:web:89ead1d0382b4fef75fdfc",
  measurementId: "G-WTQD4X1VWJ"
};

if(firebase.apps.length === 0){
  firebase.initializeApp(firebaseConfig)
}

import LandingScreen from './components/auth/Landing';
import RegisterScreen from './components/auth/Register';
import LoginScreen from './components/auth/Login';

const Stack = createStackNavigator();

export class App extends Component {
  constructor(props){
    super();
    this.state = {
      loaded: false,
    }
  }
  componentDidMount(){  
    firebase.auth().onAuthStateChanged((user) => {
      if(!user){
        this.setState({
          loggedIn: false,
          loaded: true,
        })
      }
      else{
        this.setState({
          loggedIn: true,
          loaded: true,
        })
      }
    })
  
    
  }

  render() {
    const {loggedIn , loaded } = this.state;
    if(!loaded){
      return(
          <View style={ {flex:1 , justifyContent:'center'}}>
              <Text style={ {textAlign:'center'}}  >Loading</Text>
          </View>
      )
    }
    if(!loggedIn){
      return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="LoginScreen">
            <Stack.Screen name="Login" component={LoginScreen} options={{headerShown: false}} />
            <Stack.Screen name="Landing" component={LandingScreen}  />
            <Stack.Screen name="Register" component={RegisterScreen} />
              
              </Stack.Navigator>
        </NavigationContainer>
      );
    }

    return(
      <View style={ {flex:1 , justifyContent:'center'}}>
      <Text  style={ {textAlign:'center', borderWidth: 1 } }> Төсөв үүсгэх, засах </Text> 
      <Text  style={ {textAlign:'center'} }>  </Text> 
      
      <Text  style={ {textAlign:'center', borderWidth: 1} }> Өгөгдлийн сангууд </Text>
      <Text  style={ {textAlign:'center'} }>  </Text> 
      <Text  style={ {textAlign:'center', borderWidth: 1} }> Программын тохиргоо </Text>
      <Text  style={ {textAlign:'center'} }>  </Text> 
      <Button 
        style={ {textAlign:'center', borderWidth: 1} } 
        onPress={()=> { firebase.auth().signOut() }} title="Программас гарах" >
      </Button>
        
      
      
     </View>
    )

  }
}



export default App
