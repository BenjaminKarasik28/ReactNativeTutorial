/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet,  View} from 'react-native';

import PlaceInput from './src/components/PlaceInput/PlaceInput';
import PlaceList from './src/components/PlaceList/PlaceList';


//root class with its own state of places array

export default class App extends Component {

  state={
    
    places: []
  }
  /*
  function that recives a placeName (this.state.placeName from ListItem.js) as an arg.
  Callback function that sets the state and sends the previous state as the argument
  Pevious state is actually the state before the current onclick/onchangetext occurs, think of it as current state
  Returns the places array with the current array (PrevState.places) plus (concat) placeName 
  We send this function as a prop when calling PlaceInput component
   */
  placeAddedHandler = placeName =>{
    this.setState(PrevState => {
      return{
        places: PrevState.places.concat(placeName)
      };
    });
};
  render() { 
    return (
     <View style={styles.container}>
        <PlaceInput onPlaceAdded={this.placeAddedHandler}/>
        <PlaceList places = {this.state.places} />
      </View>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 37,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  inputContainer:{
    //flex:1,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  placeInput:{
    width: "70%"
  },
  placeButton:{
    width: "30%"
  },
  
});

  //, 
  // cute:{
  //   color: '#8B0000',
  // }
