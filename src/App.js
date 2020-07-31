import React from 'react';
import './App.css';
import Menu from './components/Meno';
import dadosIniciais from './data/dados_iniciais.json';
import BannerMain from './components/BannerMain';
import Carousel from './components/Carousel';
import Footer from './components/Footer';


function App() {
  return (
    <div style={{ background: "#141414" }}>
        <Menu />

        <BannerMain
          videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
          url={dadosIniciais.categorias[0].videos[0].url}
          videoDescription={"Todos nos devemos demonstrar o amor que temos pelo nosso planeta! Pois ela esta morrendo aos poucos, e se não fizermos nada perderemos o nosso querido lar! "}
        />

        <Carousel
          ignoreFirstVideo
          category={dadosIniciais.categorias[0]}
        />

        <Carousel
          category={dadosIniciais.categorias[1]}
        />

        <Carousel
          category={dadosIniciais.categorias[2]}
        />      

        <Carousel
          category={dadosIniciais.categorias[3]}
        />      

        <Carousel
          category={dadosIniciais.categorias[4]}
        />      

        <Carousel
          category={dadosIniciais.categorias[5]}
        /> 
        <Carousel
          category={dadosIniciais.categorias[6]}
        />      
        <Footer />
      </div>
  );
}

export default App;
