import React from 'react';
import axios from 'axios';
import './App.css';

import { useEffect } from 'react';
import axios from 'axios';

function App() {

  const getFeedback = () => {
    axios.get('/feedback')
  }



  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>
    </div>
  );
}

export default App;
