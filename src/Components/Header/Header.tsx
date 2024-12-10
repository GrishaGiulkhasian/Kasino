import React from 'react';
import './Header.css';
import Burger from '../assec/icons/Burger.tsx'
import Add from '../assec/icons/Add.tsx';

function App() {
  return (
    <div className={'add'} 
    style={{ 
      display: 'flex', 
      justifyContent: 'space-between',
      alignItems: 'center', 
      padding: '8px 10px'
      }}>
      <div 
      style={{ 
      display: 'flex', 
      alignItems: 'center', 
      }}>
        <Burger />
        <div className={'add_text'}>TEST</div>
      </div>
      <div>
        <div className={'add_namber'}
        style={{ 
          display: 'flex', 
          alignItems: 'center',
          borderRadius: '8px',
          }} >
          <div className={'add_namber_uno'}>10,303.56 ₽</div>
          <div className={'add_namber_tho'}><Add /></div>
        </div>
      </div>
    </div>
  );
}

export default App;
