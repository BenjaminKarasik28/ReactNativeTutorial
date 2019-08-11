import React, {Component} from 'react';

import {View, Button, TextInput, StyleSheet} from 'react-native';

//class based component with its own state 

class PlaceInput extends Component{
    state={
        placeName: '',
        
      }
      /*
      called when onChangeText is triggered
      updates the state with the value you write
      placeName here and placeName in state have to match
      */ 
      placeNameChangedHandlder = val =>{
          this.setState({
            placeName: val 
          });
        }
      /*
      called when button is pressed (onPress is called)
      intially checks if what you enetered is null and if it is, won't do anything.
      else, calls onPlaceAdded and sends the state's placeName as an argument.
      onPlaceAdded is a function written in App.js which is the prop it sends to PlaceInput.
      We're calling a function that is a prop and sending that function a state property from this component
      */ 
        placeSubmitHandler = () =>{
          if(this.state.placeName.trim()===""){
            return;
          }
        this.props.onPlaceAdded(this.state.placeName) //fired when we add a valid place and hit the onPress
    };
    render(){
        return(
        <View style={styles.inputContainer}>
        <TextInput
            placeholder="An Awesome place"
            value = {this.state.placeName} 
            onChangeText={this.placeNameChangedHandlder}
            style= {styles.placeInput}
        />
        <Button title="Add" 
            style={styles.placeButton} 
            onPress={this.placeSubmitHandler}/>
    </View>
        )
    }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 47,
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

       
export default PlaceInput