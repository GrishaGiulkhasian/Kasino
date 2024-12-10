import React from 'react';
import './PopularGames.css';
import Ege from '../assec/icons/Ege.tsx';
import Play from '../Compont/Play/Play.tsx';
import { Link } from 'react-router-dom';

const PopularGames: React.FC = () => {
    return(
        <div 
        style={{
            color: '#FAFAFA'
        }}>
            <div 
            style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginLeft: '16px', 
                marginRight: '28px', 
                marginTop: '28px'
            }}>
                <div 
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <div 
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                }}><Ege /></div>
                    <div className={'PopularGames_p'} 
                    style={{
                        marginLeft: '6px'
                    }}>Popular Games</div>
                </div>
                <div>
                    <Link to="/new-page" className={'PopularGames_q'}>View All</Link>
                </div>
            </div>
            <div>
                <Play />
            </div>
        </div>
    );
}

export default PopularGames;