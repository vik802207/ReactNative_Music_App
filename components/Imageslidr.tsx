/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import React from 'react'
import WebView from 'react-native-webview';

function Imageslidr(props:any) {
    const data=props.route.params;
    const item=data.clickImageslider
    console.log(item);
    
  return (
    <>
    <WebView source={{uri:item}} />
    </>
  )
}

export default Imageslidr