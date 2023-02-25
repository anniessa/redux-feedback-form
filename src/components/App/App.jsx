import React from 'react';
import axios from 'axios';
import './App.css';

import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { HashRouter as Router, Route } from "react-router-dom";

import Feeling from '../Feeling/Feeling';
import Understanding from '../Understanding/Understanding';
import Support from '../Support/Support';
import Comments from '../Comments/Comments';
import Admin from '../Admin/Admin';
import Review from '../Review/Review';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    getFeedback();
  }, []);

  //GET for admin page
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
      <Router>
        <Route exact path="/">
          <Feeling />
        </Route>
        <Route exact path="/understanding">
          <Understanding />
        </Route>
        <Route exact path="/support">
          <Support />
        </Route>
        <Route exact path="/comments">
          <Comments />
        </Route>
        <Route exact path="/review">
          <Review />
        </Route>
        <Route exact path="/admin">
          <Admin />
        </Route>
      </Router>
    </div>
  );
}

export default App;
