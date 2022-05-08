import React from 'react';
import './App.css';
import ReadComponent from './components/read/ReadComponent';
import CreateComponent from './components/create/CreateComponent';

function App() {
  return (
    <div className='main'>
      <div style={{marginTop: 20}}>
        <ReadComponent />
      </div>
      <div style={{marginTop: 20}}>
        <CreateComponent />
      </div>
    </div> 
  );
}

export default App;
