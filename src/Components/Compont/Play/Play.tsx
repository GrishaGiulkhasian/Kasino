import React from 'react';
import './Play.css';
import gamecard from '../../assec/img/gamecard.png';
import gamecard1 from '../../assec/img/game-card1.png';
import gamecard2 from '../../assec/img/game-card2.png';
import gamecard3 from '../../assec/img/game-card3.png';
import gamecard4 from '../../assec/img/game-card4.png';
import gamecard5 from '../../assec/img/game-card5.png';

const Play: React.FC = () => {
    return (
    <div>
        <div className={'parent'} 
        style={{
            marginLeft: '14px', 
            marginRight: '14px', 
            marginTop: '10px',
            overflow: 'hidden',
        }}>
                <div className={'div1'}><img src={gamecard} alt="Карта игры" /></div>
                <div className={'div2'}><img src={gamecard1} alt="Карта игры" /></div>
                <div className={'div3'}><img src={gamecard2} alt="Карта игры" /></div>
                <div className={'div4'}><img src={gamecard3} alt="Карта игры" /></div>
                <div className={'div5'}><img src={gamecard4} alt="Карта игры" /></div>
                <div className={'div6'}><img src={gamecard5} alt="Карта игры" /></div>
        </div>
    </div>
    );
}

export default Play;