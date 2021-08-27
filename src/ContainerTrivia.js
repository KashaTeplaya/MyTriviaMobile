import React from 'react'
import Cards from './Cards'
import Buttons from './Buttons'
import {Text, View } from 'react-native'
import {useEffect, useState} from 'react'
import {decode} from 'html-entities';
import { Button } from 'react-native'
import { styles } from './Buttons'


let score = 0;
function ContainerTrivia() {
    const [items,setItems] = useState([]);
    const [i, changeIndex] = useState(0)
    const URL = 'https://opentdb.com/api.php?amount=5&type=multiple'
    

    useEffect(()=>{
        fetch(URL)
    .then(response => response.json())
    .then(json => {
        setItems(json.results)
    } )
    },[])


    function nextCard(){
        console.log(i + 'index')
        changeIndex(i+1)
       
    }

    const addScore = (event) => {
        if(event === items[i].correct_answer){
            score++;
           // event.target.classList.add('correct')
        }
        else{
          //  event.target.classList.add('incorrect')
        }
        setTimeout(()=>{
            nextCard()
           // event.target.classList.remove('correct')
          //  event.target.classList.remove('incorrect')
        },1000)
    }
    function reloadApp() {
        console.log('App was reloaded')
        changeIndex(0);
        score=0;
        
    }
    if(items.length>0 && i<items.length){
        return(
            <View>
                <Text> Trivia Game </Text>
                <Cards  question={items[i].question}/>
               <Buttons 
               correct_answer = {items[i].correct_answer} 
               incorrect_answers = {items[i].incorrect_answers}
               nextCard={addScore}  
               />
           </View>
        )
    }
    else {
        if(i===items.length){
            return (
                <View> 
                    <Text> Trivia Game </Text>
                    <View>
                    <Text> Your score = {score}</Text>
                   </View>
                    <Button title='reload' onPress={ reloadApp }></Button> 
               </View>
            )
        }else{
            return (
                <View>
                    <Cards  question = "Загрузка вопроса..."/>
               </View>
            )
        }

    }
        
    
}

export default ContainerTrivia