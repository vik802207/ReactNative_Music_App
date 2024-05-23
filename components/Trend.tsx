/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import React, {useEffect, useState} from 'react';
import Firstshow from './Firstshow';
import {Button} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';

function Trend() {
  const [img, setImg] = useState([]);
  const [item, setItem] = useState([]);
  const [names, setNames] = useState([]);
  const [url, setUrl] = useState([]);
  const [data, setData] = useState([]);
  const [recom, setRecom] = useState([]);
  const [sliderUrl, setSliderUrl] = useState([]);
  const [sliderImg, setSliderImg] = useState([]);

  const Newrelease = async () => {
    const url =
      'https://v1.nocodeapi.com/vik802207/spotify/NxmCNWDNFbsnXSMD/browse/new';
    const response = await fetch(url, {
      method: 'GET',
    });
    const data = await response.json();
    const result = data.albums.items;
    setItem(result);
  };
  item.forEach(element => {
    let newDataItem = {
      image: element.images[2].url,
      name: element.name,
      url: element.external_urls.spotify,
    };
    data.push(newDataItem);

    return img.push(element.external_urls.spotify);
  });
  const Imageslid = async () => {
    const url =
      'https://v1.nocodeapi.com/vik80220/spotify/qaYibumhrzsOXPhD/recommendations?seed_artists=4NHQUGzhtTLFvgF5SZesLK&seed_genres=rock&seed_tracks=3n3Ppam7vgaVa1iaRUc9Lp';
    try {
      const result = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        redirect: 'follow',
      });
      const resData = await result.json();
      const allData = resData.tracks;
      setRecom(allData);
    } catch (error) {
      console.log(error);
    }
  };
  recom.forEach(element => {
    let imagUrlSlider = {uri:element.album.images[0].url,image:element.album.external_urls.spotify};
    sliderImg.push(imagUrlSlider);
    return sliderUrl.push(element.album.images[0].url);
  });

  useEffect(() => {
    Newrelease();
    Imageslid();
  }, []);
  const navigation = useNavigation();

  return (
    <>
      <Firstshow
        img={img}
        key={names}
        sliderImg={sliderImg}
        sliderUrl={sliderUrl}
        names={names}
        data={data}
      />
    </>
  );
}

export default Trend;
