import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Импорт необходимых компонентов
import Heder from '../Header/Header.tsx';
import Karusel from '../Karusel/Karusel.tsx';
import Kategori from '../Kategori/Kategori.tsx';
import PopularGames from '../PopularGames/PopularGames.tsx';
import NewsGame from '../NewsGame/NewsGame.tsx';
import Casino from '../Casino/Casino.tsx';
import SportG from '../SportG/SportG.tsx';
import Footer from '../Footer/Footer.tsx';
import NewPage from '../NewPage/NewPage.tsx';

const App: React.FC = () => {
  return (
<BrowserRouter>
      <Routes>
        <Route path="/" element={<div>
          <Heder />
          <Karusel />
          <Kategori />
          <PopularGames />
          <NewsGame />
          <Casino />
          <SportG />
          <Footer />
        </div>} />
        <Route path="/new-page" element={<NewPage />} /> {/* Маршрут для новой страницы */}
      </Routes>
    </BrowserRouter>  );
}

export default App;
