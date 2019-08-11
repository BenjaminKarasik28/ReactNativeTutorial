import React from 'react';
import {View, StyleSheet} from 'react-native';
import ListItem from '../ListItem/ListItem'



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