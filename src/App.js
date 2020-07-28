import React from 'react';
import Menu from './components/Menu'
import Footer from './components/Footer';
import BannerMain from './components/BannerMain';
import Carousel from './components/Carousel';
import dados from './data/dados_iniciais.json';

function App() {

  const categorias = () => {
    return dados.categorias.map(categoria => {
      return (
        <Carousel ignoreFirstVideo={false} category={categoria}></Carousel>
      );
    });
  }

  return (
    <div>
      <Menu></Menu>
      <BannerMain
        videoTitle="Free Fire"
        videoDescription="LevelUp 007 - FIZ UMA JOGADA IMPRESSIONANTE! CONTRA OS MELHORES TIMES FREE FIRE"
        url="https://www.youtube.com/watch?v=mpS6UhUPjPY"
      ></BannerMain>
      {categorias()}
      <Footer></Footer>
    </div>
  );
}

export default App;
