/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Button, Text, StyleSheet, TextInput, View} from 'react-native';
import ListItem from './src/components/ListItem/ListItem';

export default class App extends Component {

  state={
    placeName: '',
    places: []
  }

  placeNameChangedHandlder = val =>{
    this.setState({
      placeName: val
    });
  }

  placeSubmitHandler = () =>{
    if(this.state.placeName.trim()===""){
      return;
    }

    //takes in current state, which is prevState
    //sets new state with return: in this case line 39
    //I guess it outputs a string of places?
    this.setState(prevState=>{
      return{
        places: prevState.places.concat(prevState.placeName)

      };
    })
  }
 
  render() {
    const placesOutput=this.state.places.map((place, i)=>(
      <ListItem key={i} placeName={place} />
    ));
    return (
      <View style={styles.container}>
        <View style = {styles.inputContainer}>
        <TextInput  
          //style={{width: 300}}
          placeholder="An Awesome place"
          value = {this.state.placeName} 
          onChangeText={this.placeNameChangedHandlder}
          style= {styles.placeInput}
          /> 
          <Button title="Add" 
          style={styles.placeButton} 
          onPress={this.placeSubmitHandler}/>
        </View>
        <View style={styles.listContainer}>
          {placesOutput} 
        </View>
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
  listContainer:{
    width: "100%"

  }
});

  //, 
  // cute:{
  //   color: '#8B0000',
  // }
