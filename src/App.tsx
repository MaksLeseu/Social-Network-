import React from 'react';
import logo from '../src/img/logo.svg'
import notification from '../src/img/notification.svg'
import Vector from '../src/img/vector.svg'
import account_icon from '../src/img/account-icon.svg'
import Stroke from '../src/img/Stroke.svg'
import './App.css';

function App() {
  return (
      <>
        <header className={'header'}>
            <div className={'header__flex-container'}>
                <div className={'header__logo'}>
                    <img src={logo}/>
                </div>
                <div className={'header__menu-bar'}>
                    <div className={'menu-bar__icon'}>
                        <img src={notification} />
                    </div>
                    <div className={'menu-bar__icon menu-bar__icon1'}>
                        <img src={Vector} />
                    </div>
                    <div className={'menu-bar__account'}>
                        <div className={'account__icon'}>
                            <img src={account_icon}/>
                        </div>
                        <p className={'account__name'}>Max</p>
                        <img src={Stroke} />
                    </div>
                </div>
            </div>
        </header>
        <div className={'container'}>
            <div className={'sidebar'}>
                <div className={'sidebar__menu'}>
                    <div className={'sidebar__menu-home-page'}>
                        <p>Home page</p>
                    </div>
                    <div className={'sidebar__menu-news'}>
                        <p>News</p>
                    </div>
                    <div className={'sidebar__menu-acquaintance'}>
                        <p>Acquaintance</p>
                    </div>
                    <div className={'sidebar__menu-messages'}>
                        <p>Messages</p>
                    </div>
                    <div className={'sidebar__menu-settings'}>
                        <p>Settings</p>
                    </div>
                    <div className={'sidebar__menu-developers'}>
                        <p>Developers</p>
                    </div>
                    <div className={'sidebar__menu-technologies'}>
                        <p>Technologies</p>
                    </div>
                </div>
            </div>
            <div className={'content'}></div>
            <div className={'left'}></div>
        </div>
      </>
  )
}

export default App;
