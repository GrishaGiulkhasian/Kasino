import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './NewPage.css';
import Svager from '../assec/icons/Svager.tsx';
import Poisk from '../assec/icons/Poisk.tsx';
import Svagern from '../assec/icons/Svagern.tsx';
import gamecard from '../assec/img/gamecard.png';
import gamecard1 from '../assec/img/game-card1.png';
import gamecard2 from '../assec/img/game-card2.png';
import gamecard3 from '../assec/img/game-card3.png';
import gamecard4 from '../assec/img/game-card4.png';
import gamecard5 from '../assec/img/game-card5.png';
import Footer from '../Footer/Footer.tsx';

const NewPage: React.FC = () => {
    const navigate = useNavigate();

    const allImages = [gamecard, gamecard1, gamecard2, gamecard3, gamecard4, gamecard5, gamecard, gamecard1, gamecard2, gamecard3, gamecard4, gamecard5, gamecard, gamecard1, gamecard2, gamecard3, gamecard4, gamecard5, gamecard, gamecard1, gamecard2, gamecard3, gamecard4, gamecard5, gamecard, gamecard1, gamecard2, gamecard3, gamecard4, gamecard5];
    const [displayedImages, setDisplayedImages] = useState(allImages.slice(0, 6));
    const [imagesLoaded, setImagesLoaded] = useState(6);

    const loadMoreImages = () => {
        const nextSix = allImages.slice(imagesLoaded, imagesLoaded + 6);
        setDisplayedImages([...displayedImages, ...nextSix]);
        setImagesLoaded(imagesLoaded + 6);
    };

    return (
        <div>
            <div
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    padding: '11px 0px 11px 16px',
                    backgroundColor: '#1D1D1D'
                }}>
                <div style={{display: 'flex',
                    alignItems: 'center',}} onClick={() => navigate(-1)}>
                    <Svager />
                </div>
                <div className={'New_text'}
                    style={{
                        marginLeft: '6px'
                    }}>
                    Popular Games
                </div>
            </div>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '20px 13px 0px 13px'
                }}>
                <div className={'New_inpi_title'}
                    style={{
                        backgroundColor: '#1D1D1D'
                    }}>
                    <Poisk />
                    <input type="text" placeholder="Search Game" className={'New_inp'} />
                </div>
                <div className={'New_inpin'}>
                    I’m Feeling Lucky
                </div>
            </div>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    color: '#FFFFFF',
                    marginTop: '18px'
                }}>
                <div className={'NewPag'}
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center'
                    }}>
                    <div
                        style={{
                            marginLeft: '16px',
                            marginRight: '59px'
                        }}>Providers</div>
                    <Svagern />
                </div>
                <div className={'NewPagget'}
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center'
                    }}>
                    <div
                        style={{
                            marginLeft: '16px',
                            marginRight: '91px'
                        }}>A-Z</div>
                    <Svagern />
                </div>
            </div>
            <div
                style={{
                    marginTop: '16px'
                }}>
                <div className={'parent'}
                    style={{
                        marginLeft: '10px',
                        marginRight: '10px',
                        marginTop: '10px',
                        overflow: 'hidden',
                    }}>
                    {displayedImages.map((img, index) => (
                        <div key={index} className={`div${index + 1}`} style={{width: 'calc(50% - 8px)'}}> 
                            <img src={img} alt={`Game Card ${index + 1}`} />
                        </div>
                    ))}
                </div>
            </div>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                }}>
                <button className='NewBtn' onClick={loadMoreImages} disabled={imagesLoaded >= allImages.length}>
                    Load More
                </button>
            </div>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    color: '#A8A8A8',
                    marginTop: '12px',
                    marginBottom: '49px'
                }}>
                Displaying {imagesLoaded} of {allImages.length} games
            </div>
            <Footer />
        </div>
    );
};

export default NewPage;

// import React from 'react';
// import './NewPage.css'
// import Svager from '../assec/icons/Svager.tsx';
// import Poisk from '../assec/icons/Poisk.tsx';
// import Svagern from '../assec/icons/Svagern.tsx';
// import gamecard from '../assec/img/gamecard.png';
// import gamecard1 from '../assec/img/game-card1.png';
// import gamecard2 from '../assec/img/game-card2.png';
// import gamecard3 from '../assec/img/game-card3.png';
// import gamecard4 from '../assec/img/game-card4.png';
// import gamecard5 from '../assec/img/game-card5.png';
// import Footer from '../Footer/Footer.tsx';

// const NewPage: React.FC = () => {
//     return(
//         <div>
//             <div 
//             style={{
//                 display: 'flex',
//                 alignItems: 'center',
//                 padding: '11px 0px 11px 16px',
//                 backgroundColor: '#1D1D1D'
//             }}>
//                 <Svager />
//                 <div className={'New_text'}
//                 style={{
//                     marginLeft: '6px'
//                 }}>
//                     Popular Games</div>
//             </div>
//             <div 
//             style={{ 
//                 display: 'flex', 
//                 justifyContent: 'space-between',
//                 alignItems: 'center', 
//                 padding: '20px 13px 0px 13px'
//                 }}>
//                 <div className={'New_inpi_title'}
//                 style={{
//                     backgroundColor: '#1D1D1D'
//                 }}>
//                     <Poisk />
//                     <input type="text" placeholder="Search Game" className={'New_inp'} />
//                 </div>
//                 <div className={'New_inpin'}>
//                     I’m Feeling Lucky
//                 </div>
//             </div>
//             <div 
//             style={{
//                 display: 'flex',
//                 justifyContent: 'space-between',
//                 color: '#FFFFFF',
//                 marginTop: '18px'
//             }}>
//                 <div className={'NewPag'}
//                 style={{
//                     display: 'flex',
//                     justifyContent: 'space-between',
//                     alignItems: 'center'
//                 }}>
//                     <div 
//                     style={{
//                         marginLeft: '16px',
//                         marginRight: '59px'
//                     }}>Providers</div>
//                     <Svagern />
//                 </div>
//                 <div className={'NewPagget'}
//                 style={{
//                     display: 'flex',
//                     justifyContent: 'space-between',
//                     alignItems: 'center'
//                 }}>
//                     <div 
//                     style={{
//                         marginLeft: '16px',
//                         marginRight: '91px'
//                     }}>A-Z</div>
//                     <Svagern />
//                 </div>
//             </div>
//             <div 
//             style={{
//                 marginTop: '16px'
//             }}>
//                 <div className={'parent'}
//                 style={{
//                     marginLeft: '16px', 
//                     marginRight: '16px', 
//                     marginTop: '10px',
//                     overflow: 'hidden',
//                 }}>
//                     <div className={'div1'}><img src={gamecard} alt="Карта игры" /></div>
//                     <div className={'div2'}><img src={gamecard1} alt="Карта игры" /></div>
//                     <div className={'div3'}><img src={gamecard2} alt="Карта игры" /></div>
//                     <div className={'div4'}><img src={gamecard3} alt="Карта игры" /></div>
//                     <div className={'div5'}><img src={gamecard4} alt="Карта игры" /></div>
//                     <div className={'div6'}><img src={gamecard5} alt="Карта игры" /></div>
//                 </div>
//             </div>
//             <div 
//             style={{
//                 display: 'flex',
//                 justifyContent: 'center',   
//             }}>
//                 <div className={'NewBtn'}>
//                     Load More
//                 </div>
//             </div>
//             <div 
//             style={{
//                 display: 'flex',
//                 justifyContent: 'center', 
//                 color: '#A8A8A8',
//                 marginTop: '12px',
//                 marginBottom: '49px'
//             }}>
//                 Displaying  6 of 30 games
//             </div>
//             <Footer />
//         </div>
//     );
// }

// export default NewPage