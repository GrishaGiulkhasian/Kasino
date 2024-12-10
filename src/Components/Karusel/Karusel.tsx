import React from 'react';
import './Karusel.css';


const Karusel: React.FC = () => {
    return (
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', overflow: 'hidden', marginRight: '16px',}}>
            <div 
            style={{
                margin: '16px 0px 16px 16px',
                backgroundColor: '#1D1D1D',
                borderRadius: '8px',
                width: '100%'
            }}
            >
                <div 
                style={{
                    color: '#FFFFFF',
                    padding: '24px 0px 24px 16px'
                }}
                >
                    <div className={'Karusel_q'}>Welcome Bonus</div>
                    <div className={'Karusel_w'}>100% up to 2 500 ₽ + 100 Free Spins</div>
                    <div className={'Karusel_btn'}>Read More</div>
                </div>
                <div>

                </div>
            </div>
            <div 
            style={{
                margin: '16px 0px 16px 16px',
                backgroundColor: '#1D1D1D',
                borderRadius: '8px',
                width: '100%'
            }}
            >
                <div 
                style={{
                    color: '#FFFFFF',
                    padding: '24px 0px 24px 16px'
                }}
                >
                    <div className={'Karusel_q'}>Welcome Bonus</div>
                    <div className={'Karusel_w'}>100% up to 2 500 ₽ + 100 Free Spins</div>
                    <div className={'Karusel_btn'}>Read More</div>
                </div>
                <div>

                </div>
            </div>
            <div 
            style={{
                margin: '16px',
                backgroundColor: '#1D1D1D',
                borderRadius: '8px',
                width: '100%'
            }}
            >
                <div 
                style={{
                    color: '#FFFFFF',
                    padding: '24px 0px 24px 16px'
                }}
                >
                    <div className={'Karusel_q'}>Welcome Bonus</div>
                    <div className={'Karusel_w'}>100% up to 2 500 ₽ + 100 Free Spins</div>
                    <div className={'Karusel_btn'}>Read More</div>
                </div>
                <div>

                </div>
            </div>
        </div>
    );
}

export default Karusel;