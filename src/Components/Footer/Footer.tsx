import React from 'react';
import './Footer.css';
import Ut from '../assec/img/18+.png';
import Gamcare from '../assec/img/Gamcare.png';
import MGA from '../assec/img/MGA.png';
import Slot from '../assec/icons/Slot.tsx';
import Dolar from '../assec/icons/Dolar.tsx';
import Procent from '../assec/icons/Procent.tsx';
import Mish from '../assec/icons/Mich.tsx';
import Profil from '../assec/icons/Profil.tsx';

const Footer: React.FC = () => {
    return (
        <div>
        <div 
        style={{
            display: 'flex',
            padding: '24px 16px 24px 16px',
            backgroundColor: '#1D1D1D',
        }}>
            <div className={'Footer_lot'}>
                <div>About</div>
                <div className={'Footer_lot_i'}>Auction Terms</div>
                <div className={'Footer_lot_i'}>Casino Bonus Terms</div>
                <div className={'Footer_lot_i'}>Sportsbook Bonus Terms</div>
                <div className={'Footer_lot_i'}>Terms & Conditions</div>
                <div className={'Footer_lot_i'}>Security & Privacy</div>
            </div>
            <div className={'Footer_lot'}
            style={{
                marginLeft: '18px'
            }}>
                <div>Payments</div>
                <div className={'Footer_lot_i'}>Certificates</div>
                <div className={'Footer_lot_i'}>Game Explanations</div>
                <div className={'Footer_lot_i'}>Responsible Gaming</div>
                <div className={'Footer_lot_i'}>Condor-Affiliates</div>
            </div>
        </div>
        <div className={'Footer_lot_inner'}></div>
        <div
        style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            color: '#C8C8C8',
            padding: '24px 16px',
            backgroundColor: '#1D1D1D'
        }}
        >
            <div className={'Footer_icon'}>"GAMBLING CAN BE ADDICTIVE, PLEASE PLAY RESPONSIBLY."</div>
            <div><img src={MGA} alt="что-то"/></div>
            <div><img src={Ut} alt="что-то"/></div>
            <div><img src={Gamcare} alt="что-то"/></div>
        </div>
        <div className={'Footer_mini'}>Copyright© 2024</div>
        <div 
        style={{
            padding: '15px 0px',
            backgroundColor: '#1D1D1D'
        }}
        >
            <div 
            style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '0px 20px'
            }}>
                <div 
                style={{
                    textAlign: 'center'
                }}
                >
                    <Slot />
                    <div className={'Footer_mini_text'}>Slots</div>
                </div>
                <div
                style={{
                    textAlign: 'center'
                }}>
                    <Dolar />
                    <div className={'Footer_mini_text'}>Casino</div>
                </div>
                <div 
                style={{
                    textAlign: 'center'
                }}>
                    <Procent />
                    <div className={'Footer_mini_text'}>Promo</div>
                </div>
                <div style={{
                    textAlign: 'center'
                }}>
                    <Mish />
                    <div className={'Footer_mini_text'}>Sport</div>
                </div>
                <div style={{
                    textAlign: 'center'
                }}>
                    <Profil />
                    <div className={'Footer_mini_text'}>Profile</div>
                </div>
            </div>
        </div>
        </div>
    );
}

export default Footer;