import React, {Component} from 'react'

import {View, Text, StyleSheet, TextInput, Button} from 'react-native';

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


    this.setState(prevState=>{
      return{
        places: prevState.places.concat(prevState.placeName)

      };
    })
  }
  render() {

      return(
        <View>
        <TextInput
            placeholder="An Awesome place"
            value = {this.state.placeName} 
            onChangeText={this.state.placeNameChangedHandlder}
            style= {styles.placeInput}
        />
        <Button title="Add" 
            style={styles.placeButton} 
            onPress={this.state.placeSubmitHandler}/>
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
