import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Sidebar} from "./components/Sidebar/Sidebar";
import {PersonalInformation} from "./components/PersonalInformation/PersonalInformation";
import {InputField} from "./components/InputField/InputField";
import {Posts} from "./components/Posts/Posts";
import {SidebarRight} from "./components/SidebarRight/SidebarRight";


function App() {
  return (
      <>
        <Header />
        <div className={'container'}>
            <Sidebar />
            <div className={'content'}>
                <PersonalInformation />
                <InputField />
                <Posts />
            </div>
            <SidebarRight />
        </div>
      </>
  )
}

export default App;
