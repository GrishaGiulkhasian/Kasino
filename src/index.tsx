import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './Components/App/App.tsx';
// import Heder from './Components/Header/Header.tsx';
// import Karusel from './Components/Karusel/Karusel.tsx';
// import Kategori from './Components/Kategori/Kategori.tsx';
// import PopularGames from './Components/PopularGames/PopularGames.tsx';
// import NewsGame from './Components/NewsGame/NewsGame.tsx';
// import Casino from './Components/Casino/Casino.tsx';
// import SportG from './Components/SportG/SportG.tsx';
// import Footer from './Components/Footer/Footer.tsx';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
    {/* <Heder />
    <Karusel />
    <Kategori />
    <PopularGames />
    <NewsGame />
    <Casino />
    <SportG />
    <Footer /> */}
  </React.StrictMode>
);


