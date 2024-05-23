/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable jsx-quotes */
/* eslint-disable semi */
/* eslint-disable space-infix-ops */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-trailing-spaces */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-lone-blocks */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import {useState} from 'react';
import {
  Alert,
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';
import {ImageSlider} from 'react-native-image-slider-aws-s3';
import { Button } from 'react-native-paper';
import WebView from 'react-native-webview';
import Newscreen from './Newscreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


function Firstshow(props: any) {
  const navigation=useNavigation()
  const data = props?.img;
  const Name = props?.names;
  const total = props?.data;
  const slider=props?.sliderUrl;
  const sliderImage=props?.sliderImg
  const [renderImg, setRenderImg] = useState([])
  console.log(total)
  const stack=createNativeStackNavigator();
  const NewScreen=(item:any)=>{
   navigation.navigate('Newscreen',{item})
  }
  // let url;
  slider.forEach(element => {
    let dataUrl={uri:element}
    renderImg.push(dataUrl);
  });
  const ClickImageslider=(index)=>{
      const clickImageslider=sliderImage[index].image
      navigation.navigate('Imageslidr',{clickImageslider})
      
  }
  
  return (
    <>
    <StatusBar hidden={true} ></StatusBar>
      <View style={{flex: 1, backgroundColor: '#000'}}>
      
        <ImageSlider
          data={renderImg}
          showIndicator={false}
          preview={false}
          autoPlay={true}
          
          onClick={(item, index) =>{
               console.log(item,index)
               ClickImageslider(index)
          }
            
          }
          caroselImageStyle={{resizeMode: 'cover'}}
        />
        
        <View style={styles.containe}>
          <Text style={styles.text}> New Releases</Text>
          <Text style={styles.text1}>View all</Text>
        </View>
       
        <ScrollView
          pagingEnabled={true}
          scrollsToTop={true}
          showsHorizontalScrollIndicator={false}
          horizontal={true}>
          <View style={{flexDirection: 'row', justifyContent: 'center'}}>
            {total.map((item: any) => {
              {
                return (
                  <>
                    <TouchableHighlight
                      style={styles.container}
                      key={item.name}
                      onPress={() => {
                       
                        NewScreen(item.url)
                       
                      }}
                      underlayColor="#000">
                      <>
                        <Image
                        key={item.url}
                          style={styles.image}
                          source={{uri: item.image}}
                          resizeMode="cover"
                        />
                        <View style={styles.box} key={item.img}>
                          <Text style={styles.niche}>{item.name} </Text>
                        </View>
                      </>
                    </TouchableHighlight>
                  </>
                );
              }
            })}
          </View>
        </ScrollView>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: 150,
    height: 180,
    margin: 7,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  text: {
    fontSize: 22,
    color: 'white',
    marginBottom: 10,
    marginTop: 10,
    fontFamily: 'notoserif',
    fontWeight: 'bold',
  },
  text1: {
    color: 'white',
    display: 'flex',
    flexDirection: 'row',
  },
  containe: {
    flexDirection: 'row', // Set flexDirection to 'row' to align items horizontally
    justifyContent: 'space-between', // Optional: Align items with equal space between them
    alignItems: 'center', // Optional: Align items vertically in the center
    backgroundColor: '#000',
  },
  niche: {
    color: '#9CF806',
    textAlign: 'left',
  },
  box: {
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
});

export default Firstshow;
