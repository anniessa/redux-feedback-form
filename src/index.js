import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

const root = ReactDOM.createRoot(document.getElementById('root'));

// set on Admin page
const totalFeedback = (state = [], action) => {
    if (action.type === "SET_FEEDBACK") {
        return action.payload;
    }
    return state;
}

// set flagged
const flagged = (state = {}, action) => {
    if (action.type === "SET_FLAGGED") {
        return action.payload;
    }
    return state;
}

// 
const form = (state = {}, action) => {
    switch (action.type) {
        case "SET_FEELING":
            return { ...state, feeling: action.payload };
        case "SET_UNDERSTANDING":
            return { ...state, understanding: action.payload };
        case "SET_SUPPORT":
            return { ...state, support: action.payload };
        case "SET_COMMENTS":
            return { ...state, comments: action.payload };
        case "RESET_FORM":
            return {};
        default:
            return state;
    }
}

const store = createStore(
    combineReducers({
        totalFeedback, form, flagged
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
