import React from 'react';
import store from "./Redux/redux-store";
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

type StoreType = () => void

type RerenderEntireTreeType = (state?: any) => void

const rerenderEntireTree: RerenderEntireTreeType = (store: any) => {
    const root = ReactDOM.createRoot(
        document.getElementById('root') as HTMLElement
    );
    root.render(
        <React.StrictMode>
            <App store={store} dispatch={store.dispatch.bind(store)} />
        </React.StrictMode>
    );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
    reportWebVitals();
}

rerenderEntireTree(store);

store.subscribe(() => {
    let state = store

    rerenderEntireTree(state)
});


