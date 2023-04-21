import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Sidebar} from "./components/Sidebar/Sidebar";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {News} from "./components/News/News";
import {Acquaintance} from "./components/Acquaintance/Acquaintance";
import {Settings} from "./components/Settings/Settings";
import {Developers} from "./components/Developers/Developers";
import {Technologies} from "./components/Technologies/Technologies";
import {MessagesContainer} from "./components/Messages/MessagesContainer";
import {ContentContainer} from "./components/Content/ContentContainer";
import {ContainerSidebarRight} from "./components/SidebarRight/ContainerSidebarRight";

const App = () => {

    return (
        /*<BrowserRouter>
            <Header/>*/
            <main className={'container'}>
                <Sidebar/>
                <div className={'content-wrapper'}>
                    <Routes>
                        <Route path={'/content'} element={<ContentContainer />}/>
                        <Route path={'/messages'} element={<MessagesContainer  />}/>
                        <Route path={'/news'} element={<News />}/>
                        <Route path={'/acquaintance'} element={<Acquaintance />}/>
                        <Route path={'/settings'} element={<Settings />}/>
                        <Route path={'/developers'} element={<Developers />}/>
                        <Route path={'/technologies'} element={<Technologies />}/>
                    </Routes>
                </div>
                <ContainerSidebarRight />
            </main>
        /*</BrowserRouter>*/
    );
}

export default App;

