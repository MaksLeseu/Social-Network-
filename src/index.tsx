import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Dialog} from "./components/Messages/Dialogs/Dialog";
import {Chat} from "./components/Messages/MessagesItem/Chat";

const dialogsData = [
    {id: '1', name: 'Nik Filman'},
    {id: '2', name: 'Mich Filman'},
    {id: '3', name: 'Vera Filmana'},
    {id: '4', name: 'Vik Prigozin'},
];

let dialogsElement = dialogsData.map(el => <Dialog userName={el.name} id={el.id} /> );

const usersMessage = [
    {id: '1', message: 'Hi brother!'},
    {id: '2', message: 'Ready to take your writing skills.'},
    {id: '3', message: 'А есть что-то другое.'},
];

let usersMessagesElement = usersMessage.map(el => <Chat text={el.message}/> );

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App dialogsElement={dialogsElement} usersMessagesElement={usersMessagesElement} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
