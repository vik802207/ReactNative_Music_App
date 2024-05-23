/* eslint-disable prettier/prettier */
import React from 'react'
import { Text } from 'react-native-paper'
import WebView from 'react-native-webview';

function Newscreen(props:any) {
  
  const data=props.route.params;
  const url=data.item;
  return (
   <>
   <WebView source={{uri:url}}/>
   
   </>
  )
}

export default Newscreen