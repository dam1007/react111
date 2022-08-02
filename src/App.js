import React from 'react';
import './index.scss';

import Header from './components/layout/Header';
import Main from './components/layout/Main';
import Footer from './components/layout/Footer';

import Banner from './components/includes/Banner';
import Card from './components/includes/Card';
import Image from './components/includes/Image';
import ImgText from './components/includes/ImgText';
import Slider from './components/includes/Slider';
import Text from './components/includes/Text';

function App() {
  return (
    <>
      <Header></Header>
      <Main>
        <Slider></Slider>
        <Image></Image>
        <ImgText></ImgText>
        <Card></Card>
        <Banner></Banner>
        <Text></Text>
      </Main>
      <Footer></Footer>
    </>
  );
}

export default App;
