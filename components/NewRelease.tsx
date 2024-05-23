/* eslint-disable prettier/prettier */
import React from 'react'
import { ScrollView } from 'react-native'
import { Card } from 'react-native-paper'

function NewRelease() {
  return (
   <>
   <ScrollView>
   <Card style={{flex:2 ,display:'flex',flexDirection:'column'}}>
    <Card.Cover style={{borderRadius:2}} source={{uri:'https://www.imgacademy.com/sites/default/files/ncsa-homepage-row-2022.jpg'}} />
    <Card.Cover style={{borderRadius:2}} source={{uri:'https://www.imgacademy.com/sites/default/files/ncsa-homepage-row-2022.jpg'}} />
    <Card.Cover style={{borderRadius:2}} source={{uri:'https://www.imgacademy.com/sites/default/files/ncsa-homepage-row-2022.jpg'}} />
    <Card.Cover style={{borderRadius:2}} source={{uri:'https://www.imgacademy.com/sites/default/files/ncsa-homepage-row-2022.jpg'}} />
    <Card.Cover style={{borderRadius:2}} source={{uri:'https://www.imgacademy.com/sites/default/files/ncsa-homepage-row-2022.jpg'}} />
    <Card.Cover style={{borderRadius:2}} source={{uri:'https://www.imgacademy.com/sites/default/files/ncsa-homepage-row-2022.jpg'}} />
    <Card.Cover style={{borderRadius:2}} source={{uri:'https://www.imgacademy.com/sites/default/files/ncsa-homepage-row-2022.jpg'}} />
    <Card.Cover style={{borderRadius:2}} source={{uri:'https://www.imgacademy.com/sites/default/files/ncsa-homepage-row-2022.jpg'}} />
    <Card.Cover style={{borderRadius:2}} source={{uri:'https://www.imgacademy.com/sites/default/files/ncsa-homepage-row-2022.jpg'}} />
    
   </Card>
   </ScrollView>
   </>
  )
}

export default NewRelease