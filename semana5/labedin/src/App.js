import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import Foto from './img/eu.jpg';
import FotoUm from './img/bc.png';
import FotoDois from './img/sv.jpg';
import FotoTres from './img/email.jpg'
import FotoQuatro from './img/ed.png'
import CardPequeno from './components/CardPequeno/CardPequeno';


function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem={Foto}
          nome="Guilherme" 
          descricao="Oi, eu sou o Guilherme Guy Louis, tenho 26 anos e sou de Porto Alegre.
           Sou aluno da Labenu. E adoro fazer programação."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>

     <div className="infos"> 
     <CardPequeno 
          imagem={FotoTres}
          email="Email: guigl8@hotmail.com"
        />

     <CardPequeno 
          imagem={FotoQuatro}
          endereco="Endereço: Rua dos quintos dos infernos, 666"
        />

     </div>





      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem={FotoUm} 
          nome="Banco Central do Brasil" 
          descricao="Organização de Palestras e Slides, cuidando de áudio e video." 
        />
        
        <CardGrande 
          imagem={FotoDois}
          nome="Sinal Viagens" 
          descricao="Parte administrativa, boletos e etc." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
