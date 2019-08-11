import React, {Component} from 'react';

import {View, Button, TextInput, StyleSheet} from 'react-native';


class PlaceInput extends Component{
    state={
        placeName: '',
        
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