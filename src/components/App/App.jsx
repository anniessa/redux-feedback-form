import React from 'react';
import axios from 'axios';
import Header from '../Header/Header';
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




  return (
    <div className="App">
      <Router>
        <Route exact path="/">
          <Header title="Feedback" subTitle="How are you feeling today?" />
          <Feeling />
        </Route>
        <Route exact path="/understanding">
          <Header title="Feedback" subTitle="How well are you understanding the content?" />
          <Understanding />
        </Route>
        <Route exact path="/support">
          <Header title="Feedback" subTitle="How well are you being supported?" />
          <Support />
        </Route>
        <Route exact path="/comments">
          <Header title="Feedback" subTitle="Any comments you want to leave?" />
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
  )
}

export default App;
