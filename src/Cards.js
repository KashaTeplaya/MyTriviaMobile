import React from 'react'
import striptags from 'striptags'
import {View, Text } from 'react-native'
import RenderHtml from 'react-native-render-html';
import {decode} from 'html-entities';
function Cards(props) {
    return (
         <View className="cards">
             <Text className="cardtext">{decode(props.question)}</Text>
         </View>
)
}

export default Cards