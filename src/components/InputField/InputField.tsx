import React from "react";
import './InputField.css'


export function InputField() {
    return (
        <form className={'input-field'}>
            <textarea placeholder={'Anything new?'} name={'text'} className={'input-field__text'}></textarea>
        </form>
    )
}