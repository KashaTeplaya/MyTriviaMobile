import React from 'react'
import {View, Text, StyleSheet } from 'react-native'
import {decode} from 'html-entities';
function Cards(props) {
    return (
         <View style ={styles.container}>
             <Text  style= {styles.textStyle}>{decode(props.question)}</Text>
         </View>
)
}
var styles = StyleSheet.create({
    container: {
      borderColor: 'black',
  
      borderWidth: 2,
      height: '40%',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'rgba(84, 23, 197, 0.315)',
      marginTop: '5%',
    },
   textStyle: { 
     fontWeight: 'bold',
     fontSize:  20,
     textAlign: 'center',
   }
  });
export default Cards