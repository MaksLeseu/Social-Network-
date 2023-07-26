import React from "react";
import s from './Login.module.css'

export const Login = () => {
    return (
        <div className={s.login}>
            <h1>Login</h1>
            <form className={s.form}>
                <div>
                    <input className={s.loginInput} placeholder={'Login'} />
                </div>
                <div>
                    <input className={s.passwordInput} placeholder={'Password'} />
                </div>
                <div className={s.checkboxInput}>
                    <input type={'checkbox'} /> remember me
                </div>
                <div>
                    <button className={s.buttonInput}>Login</button>
                </div>
            </form>
        </div>
    )
}