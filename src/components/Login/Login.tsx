import React from "react";
import s from './Login.module.css'
import {useFormik} from "formik";
import {useDispatch, useSelector} from "react-redux";
import {Navigate} from "react-router-dom";
import {loginInTC} from "../../Redux/auth-reducer";
type FormikErrorType = {
    email?: string
    password?: string
}

export type LoginInType = {
    email: string
    password: string
    rememberMe: boolean
    captcha?: boolean
}

export const Login = () => {
    const dispatch = useDispatch()
    const isAuth = useSelector((state: any) => state.auth.isAuth)
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            rememberMe: false
        },
        validate: (values) => {
            const errors: FormikErrorType = {};
            if (!values.email) {
                errors.email = 'Required';
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Invalid email address';
            }

            if (!values.password) {
                errors.password = 'Required';
            } else if (values.password?.trim()?.length < 3) {
                errors.password = 'should be more three symbols';
            }
            return errors;
        },
        onSubmit: values => {
            // @ts-ignore
            dispatch(loginInTC(values))
            formik.resetForm()
        }
    })

    // Redirect
    if (isAuth) {
        return <Navigate to={'/profile'} />
    }

    return (
        <div className={s.login}>
            <h1>Login</h1>
            <form className={s.form} onSubmit={formik.handleSubmit}>
                <div>
                    <input
                        className={s.loginInput}
                        placeholder={'Email'}
                        {...formik.getFieldProps('email')}
                    />
                    {formik.touched.email && formik.errors.email &&
                        <div style={{color: 'red', marginBottom: '5px'}}>{formik.errors.email}</div>}
                </div>
                <div>
                    <input
                        className={s.passwordInput}
                        type={'password'}
                        placeholder={'Password'}
                        {...formik.getFieldProps('password')}
                    />
                    {formik.touched.password && formik.errors.password &&
                        <div style={{color: 'red', marginBottom: '5px'}}>{formik.errors.password}</div>}
                </div>
                <div className={s.checkboxInput}>
                    <input
                        type={'checkbox'}
                        {...formik.getFieldProps('rememberMe')}
                    /> remember me
                </div>
                <div>
                    <button className={s.buttonInput}>Login</button>
                </div>
            </form>
        </div>
    )
}

