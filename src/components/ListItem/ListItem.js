import React from 'react'

import {View, Text, StyleSheet} from 'react-native';

/*stateless, functional component.
takes in props from PlaceList which is each placeName in the places array
All it does is return a view with text which is converted from props.placesname vanilla js
the word return isn't necessary because there's no function body
*/
const listItem=(props) =>(
    <View style ={styles.listItem}>
        <Text>{props.placeName}</Text>
    </View>
);
 
const styles = StyleSheet.create({
    listItem:{
        width: "100%",
        margin: 5,
        padding: 10,
        backgroundColor: "#eee"

    }

});
export default listItem;