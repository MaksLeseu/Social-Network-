import account_icon from "../../../../img/account-icon.jpg";
import publications from "../../../../img/personal_information/Posts.svg";
import subscribers from "../../../../img/personal_information/Followers.svg";
import subscription from "../../../../img/personal_information/user plus.svg";
import phone from "../../../../img/personal_information/phone.svg";
import email from "../../../../img/personal_information/mail.svg";
import birthday from "../../../../img/personal_information/Birthday.svg";
import React, {useState} from "react";
import './PersonalInformation.css'
import {Status} from "../Status/Status";


export const PersonalInformation = () => {
    const [statusValue, setStatusValue] = useState<string>('I fell happy!')

    return (
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
            <Status status={statusValue} setStatusValue={setStatusValue} />
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
                        <span>lesov0iblr@gmail.com</span>
                    </div>
                </div><div className={'personal-information__contact-phone personal-information__contact-list'}>
                    <img src={birthday} />
                    <div className={'personal-information__contact-text'}>
                        <p>Birthday</p>
                        <span>March, 15</span>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}