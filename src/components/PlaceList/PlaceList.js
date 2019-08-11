import React from 'react';
import {View, StyleSheet} from 'react-native';
import ListItem from '../ListItem/ListItem'


/*
stateless, functional component. 
takes in props, which, in our case is the places array (this.state.places in App.js)
maps through each one and for each place (places[i]) calls the ListItem component with a key 
and a prop which is called placeName in ListItem.js Saves the new array (which the map fucntion creates per added placename)
to placesOutput. After each place is added we return a view of placesOutput which is in {} due to being pure js
*/ 
const placeList = props =>{
    const placesOutput=props.places.map((place, i)=>(
        <ListItem key={i} placeName={place} /> //for each place which is places[i], call ListItem which sets that value of place (places[i] to placeName and send placeName as a prop to ListItem where it outputs the view)
      ));
    return(
        <View 
        style={styles.listContainer}>
            {placesOutput} 
        </View>
        

)}
const styles = StyleSheet.create({
listContainer:{
    width: "100%"
}
  });

export default placeList;