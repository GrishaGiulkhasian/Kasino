import React, { useState } from 'react';
import './Kategori.css';
import Lupa from '../assec/icons/Lupa.tsx';

const Kategori: React.FC = () => {
    const [activeButton, setActiveButton] = useState(''); 

    const handleClick = (buttonText: string) => {
        setActiveButton(buttonText);
    };

    return (
        <div style={{ display: 'flex', alignItems: 'center', overflow: 'hidden', marginRight: '16px' }}>
            <div className={'Kategori_Lupa'}>
                <Lupa />
            </div>
            <div style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingLeft: '16px',
                paddingRight: '16px',
                backgroundColor: '#1D1D1D',
                height: '42px',
                borderRadius: '8px',
            }}>
                <div
                    className={'Kategori_text'}
                    onClick={() => handleClick('All Games')}
                    style={{ color: activeButton === 'All Games' ? '#FFD60A' : '#E1E1E1' }}
                >All Games</div>
                <div
                    className={'Kategori_text'}
                    onClick={() => handleClick('New Games')}
                    style={{ color: activeButton === 'New Games' ? '#FFD60A' : '#E1E1E1' }}
                >New Games</div>
                <div
                    className={'Kategori_text'}
                    onClick={() => handleClick('All Slots')}
                    style={{ color: activeButton === 'All Slots' ? '#FFD60A' : '#E1E1E1' }}
                >All Slots</div>
                <div
                    className={'Kategori_text'}
                    onClick={() => handleClick('Live Games')}
                    style={{ color: activeButton === 'Live Games' ? '#FFD60A' : '#E1E1E1' }}
                >Live Games</div>
            </div>
        </div>
    );
};

export default Kategori;

// import React from 'react';
// import './Kategori.css';
// import Lupa from '../assec/icons/Lupa.tsx';

// const Kategori: React.FC = () => {
//     return (
//         <div 
//         style={{
//             display: 'flex', 
//             alignItems: 'center', 
//             overflow: 'hidden'
//         }}>
//             <div className={'Kategori_Lupa'}>
//                 <Lupa />
//             </div>
//             <div 
//             style={{
//                 width: '100%', 
//                 display: 'flex', 
//                 justifyContent: 'space-between', 
//                 alignItems: 'center', 
//                 paddingLeft: '16px', 
//                 paddingRight: '16px', 
//                 backgroundColor: '#1D1D1D', 
//                 height: '42px',
//                 borderRadius: '8px',
//                 }}>
//                 <div className={'Kategori_text'}>All Games</div>
//                 <div className={'Kategori_text'}>New Games</div>
//                 <div className={'Kategori_text'}>All Slots</div>
//                 <div className={'Kategori_text'}>Live Games</div>
//             </div>
//         </div>
//     );
// }

// export default Kategori;