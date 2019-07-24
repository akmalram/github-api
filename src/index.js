import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { Provider } from 'react-redux';
import { ServiceProvider } from './context/serviceContext';
import store from './store';
import ApiService from './service/apiService';

const Service = new ApiService();

ReactDOM.render(
    <ServiceProvider value={Service}>
        <Provider store={store}>
            <App />
        </Provider>
    </ServiceProvider>
, document.querySelector('#root'));