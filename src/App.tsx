import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Sidebar} from "./components/Sidebar/Sidebar";
import {PersonalInformation} from "./components/PersonalInformation/PersonalInformation";
import {InputField} from "./components/InputField/InputField";
import {Posts} from "./components/Posts/Posts";
import {SidebarRight} from "./components/SidebarRight/SidebarRight";
import {Messages} from "./components/Messages/Messages";


function App() {
  return (
      <>
        <Header />
        <div className={'container'}>
            <Sidebar />
            <div className={'content'}>
                {/*<PersonalInformation />
                <InputField />
                <Posts />*/}
                <Messages />
            </div>
            <SidebarRight />
        </div>
      </>
  )
}

export default App;
