import React from 'react';
import './App.css';
import {Sidebar} from "./components/Sidebar/Sidebar";
import {Route, Routes} from "react-router-dom";
import {News} from "./components/News/News";
import {Acquaintance} from "./components/Acquaintance/Acquaintance";
import {Settings} from "./components/Settings/Settings";
import {Developers} from "./components/Developers/Developers";
import {Technologies} from "./components/Technologies/Technologies";
import {MessagesContainer} from "./components/Messages/MessagesContainer";
import {ContainerSidebarRight} from "./components/SidebarRight/ContainerSidebarRight";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Content/ProfileContainer";

const App = () => {

    return (
            <main className={'container'}>
                <Sidebar/>
                <div className={'content-wrapper'}>
                    <Routes>
                        <Route path={'/profile/:userId?'} element={<ProfileContainer />}/>
                        <Route path={'/messages'} element={<MessagesContainer  />}/>
                        <Route path={'/news'} element={<News />}/>
                        <Route path={'/users'} element={<UsersContainer />}/>
                        <Route path={'/acquaintance'} element={<Acquaintance />}/>
                        <Route path={'/settings'} element={<Settings />}/>
                        <Route path={'/developers'} element={<Developers />}/>
                        <Route path={'/technologies'} element={<Technologies />}/>
                    </Routes>
                </div>
                <ContainerSidebarRight />
            </main>
    );
}

export default App;

