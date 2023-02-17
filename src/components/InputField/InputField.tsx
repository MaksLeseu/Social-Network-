import React from "react";
import './InputField.css'


export function InputField() {
    return (
        <form className={''}>
            <input type={'text'} placeholder={'Anything new?'} className={'input-field'} />
        </form>
    )
}