import React, {useState, useEffect} from 'react'
import {Button, View, Text , StyleSheet, TouchableHighlight} from 'react-native'
import {decode} from 'html-entities';
import { TouchableOpacity } from 'react-native';



function Buttons(props) { 
    const answers  = [props.correct_answer, ...props.incorrect_answers]
    answers.sort(()=>Math.random() - 0.5)
    console.log(props.correct_answer)
    return (
      <View>
        <View>
          <Button
            onPress={()=>props.nextCard(decode(answers[0]))}
            title={decode(answers[0])}
          />

          <Button
            onPress={()=>props.nextCard(decode(answers[1]))}
            className="button"
            title={decode(answers[1])}
          />
        </View>
        <View>
          <Button
            onPress={()=>props.nextCard(decode(answers[2]))}
            className="button"
            title={decode(answers[2])}
          />

          <Button
            onPress={()=>props.nextCard(decode(answers[3]))}
            className="button"
            title={decode(answers[3])}
          />
        </View>
      </View>
    );
}
 
export var styles = StyleSheet.create({
    btnNormal: {
      borderColor: 'blue',
      borderWidth: 1,
      borderRadius: 10,
      height: 30,
      width: 100,
    },
    btnCorrect: {
      borderColor: 'red',
      backgroundColor: 'green',  
      borderWidth: 1,
      height: 30,
      width: 100,
    }
  });

export default Buttons