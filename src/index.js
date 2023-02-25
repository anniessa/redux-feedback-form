import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import logger from 'redux-logger';

const root = ReactDOM.createRoot(document.getElementById('root'));

const feedback = (state = [], action) => {
    if (action.type === "SET_FEEDBACK") {
        return action.payload;
    }
    return state;
}

const store = createStore(
    combineReducers({
        feedback
    }), 
    applyMiddleware(logger)
);


root.render(
    <React.StrictMode>
        <Provider store={store}>
        <App />
        </Provider>
    </React.StrictMode>
);
