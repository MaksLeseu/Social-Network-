import React, {useState} from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Sidebar} from "./components/Sidebar/Sidebar";
import {SidebarRight} from "./components/SidebarRight/SidebarRight";
import {Messages} from "./components/Messages/Messages";
import {Content} from "./components/Content/Content";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {News} from "./components/News/News";
import {Acquaintance} from "./components/Acquaintance/Acquaintance";
import {Settings} from "./components/Settings/Settings";
import {Developers} from "./components/Developers/Developers";
import {Technologies} from "./components/Technologies/Technologies";
import {addPost} from "./Redux/state";


function App(props: any) {

    return (
        <BrowserRouter>
            <Header/>
            <div className={'container'}>
                <Sidebar/>
                <div className={'wrapper'}>
                    <Routes>
                        <Route path={'/content'} element={<Content state={props.state} addPost={addPost} />}/>
                        <Route path={'/messages'} element={<Messages state={props.state} />}/>
                        <Route path={'/news'} element={<News />}/>
                        <Route path={'/acquaintance'} element={<Acquaintance />}/>
                        <Route path={'/settings'} element={<Settings />}/>
                        <Route path={'/developers'} element={<Developers />}/>
                        <Route path={'/technologies'} element={<Technologies />}/>
                    </Routes>
                </div>
                <SidebarRight state={props.state}/>
            </div>
        </BrowserRouter>
    );
}

export default App;
