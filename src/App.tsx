import React from 'react';
import logo from '../src/img/logo.svg'
import notification from '../src/img/notification.svg'
import Vector from '../src/img/vector.svg'
import account_icon from '../src/img/account-icon.svg'
import Stroke from '../src/img/Stroke.svg'
import user from '../src/img/sidebar/user.svg'
import news from '../src/img/sidebar/News.svg'
import acquaintance from '../src/img/sidebar/Acquaintance.svg'
import messages from '../src/img/sidebar/message.svg'
import settings from '../src/img/sidebar/settings.svg'
import developers from '../src/img/sidebar/Developers.svg'
import technologies from '../src/img/sidebar/Technologies.svg'
import advertising from '../src/img/sidebar/advertising.svg'
import publications from '../src/img/personal_information/Posts.svg'
import subscribers from '../src/img/personal_information/Followers.svg'
import subscription from '../src/img/personal_information/user plus.svg'
import phone from '../src/img/personal_information/phone.svg'
import email from '../src/img/personal_information/mail.svg'
import birthday from '../src/img/personal_information/Birthday.svg'
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
                    <div className={'sidebar__menu-home-page sidebar__menu-list'}>
                        <img className={'sidebar__menu-icon'} src={user}/>
                        <p>Home page</p>
                    </div>
                    <div className={'sidebar__menu-news sidebar__menu-list'}>
                        <img className={'sidebar__menu-icon'} src={news}/>
                        <p>News</p>
                    </div>
                    <div className={'sidebar__menu-acquaintance sidebar__menu-list'}>
                        <img className={'sidebar__menu-icon'} src={acquaintance}/>
                        <p>Acquaintance</p>
                    </div>
                    <div className={'sidebar__menu-messages sidebar__menu-list'}>
                        <img className={'sidebar__menu-icon'} src={messages}/>
                        <p>Messages</p>
                    </div>
                    <div className={'sidebar__menu-settings sidebar__menu-list'}>
                        <img className={'sidebar__menu-icon'} src={settings}/>
                        <p>Settings</p>
                    </div>
                    <div className={'sidebar__menu-developers sidebar__menu-list'}>
                        <img className={'sidebar__menu-icon'} src={developers}/>
                        <p>Developers</p>
                    </div>
                    <div className={'sidebar__menu-technologies sidebar__menu-list'}>
                        <img className={'sidebar__menu-icon'} src={technologies}/>
                        <p>Technologies</p>
                    </div>
                </div>
                <div className={'advertising'}>
                    <h3>Advertising</h3>
                    <div className={'advertising__image'}>
                        <img src={advertising} />
                    </div>
                    <p>Take the test and get a
                        10% discount
                        on tuition</p>
                </div>
            </div>
            <div className={'content'}>
                <div className={'personal-information'}>
                     <div className={'personal-information__account'}>
                         <div className={'personal-information__account-img'}>
                             <img src={account_icon} />
                         </div>
                         <div className={'personal-information__account-name'}>
                             <p>Max Lesev</p>
                             <span>Max_LesoVoj</span>
                         </div>
                     </div>
                    <div className={'personal-information__menu'}>
                        <div className={'personal-information__menu-publications personal-information__menu-list'}>
                            <img src={publications} />
                            <div className={'personal-information__menu-text'}>
                                <p>78</p>
                                <span>publications</span>
                            </div>
                        </div>
                        <div className={'personal-information__menu-subscribers personal-information__menu-list'}>
                            <img src={subscribers} />
                            <div className={'personal-information__menu-text'}>
                                <p>33 тыс.</p>
                                <span>subscribers</span>
                            </div>
                        </div>
                        <div className={'personal-information__menu-subscription personal-information__menu-list'}>
                            <img src={subscription} />
                            <div className={'personal-information__menu-text'}>
                                <p>340</p>
                                <span>subscription</span>
                            </div>
                        </div>
                    </div>
                    <div className={'personal-information__line'}></div>
                    <div className={'personal-information__contact'}>
                        <h3>Contact Information</h3>
                        <div className={'personal-information__contact-flex'}>
                            <div className={'personal-information__contact-phone personal-information__contact-list'}>
                                <img src={phone} />
                                <div className={'personal-information__contact-text'}>
                                    <p>Phone</p>
                                    <span>(708) 813-8989</span>
                                </div>
                            </div><div className={'personal-information__contact-phone personal-information__contact-list'}>
                            <img src={email} />
                            <div className={'personal-information__contact-text'}>
                                <p>Email</p>
                                <span>KatieS@gmail.com</span>
                            </div>
                        </div><div className={'personal-information__contact-phone personal-information__contact-list'}>
                            <img src={birthday} />
                            <div className={'personal-information__contact-text'}>
                                <p>Birthday</p>
                                <span>April, 10</span>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
                <form className={''}>
                    <input type={'text'} placeholder={'Anything new?'} className={'input-field'} />
                </form>
                <div className={'posts'}>
                    <p>There are no posts on the wall</p>
                </div>
            </div>
            <div className={'sidebar-right'}>
                <div className={'sidebar-right__favorites'}>

                </div>
            </div>
        </div>
      </>
  )
}

export default App;
