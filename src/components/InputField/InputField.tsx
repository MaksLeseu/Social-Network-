import React, {ChangeEvent, useState} from "react";
import './InputField.css'
import {ActionType} from "../../Redux/state";

type InputFieldPropsType = {
    dispatch: (action: ActionType) => void
}


export function InputField(props: InputFieldPropsType) {

    let [change, setChange] = useState<string>('');

    let valueTextarea = React.createRef();

    function onChange(e: ChangeEvent<HTMLTextAreaElement>) {
        setChange(e.currentTarget.value);
    }

    function onClickButtonHandle() {

        props.dispatch({type: 'ADD-POST', message: change})
        setChange('');
    }

    return (
        <div className={'input-field'}>
            <textarea onChange={onChange} value={change} placeholder={'Anything new?'} name={'text'} className={'input-field__text'}></textarea>
            <button onClick={onClickButtonHandle} className={'btn'}>X</button>
        </div>
    )
}