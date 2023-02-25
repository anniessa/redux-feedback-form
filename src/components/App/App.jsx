import React from 'react';
import axios from 'axios';
import './App.css';

import { useEffect } from 'react';
import {useDispatch} from 'react-redux';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    getFeedback();
  }, []);

  const getFeedback = () => {
    axios.get('/feedback')
    .then((response) => {
      dispatch({
        type: "SET_FEEDBACK",
        payload: response.data
      });
    });
  };



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
