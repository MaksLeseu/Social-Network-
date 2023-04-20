import React, {ChangeEvent, useState} from "react";
import './InputField.css'

type InputFieldPropsType = {
    addPostCallback: (valueInput: string) => void
}

export function InputField(props: InputFieldPropsType) {

    let [valueInput, setValueInput] = useState<string>('');

    const onChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setValueInput(e.currentTarget.value);
    }

    const addPost = () => {
        props.addPostCallback(valueInput)
        setValueInput('');
    }

    return (
        <div className={'input-field'}>
            <textarea
                placeholder={'Anything new?'}
                name={'text'}
                value={valueInput}
                className={'input-field__text'}
                onChange={onChange}
            >

            </textarea>
            <button
                className={'btn'}
                onClick={addPost}
            >
                A
            </button>
        </div>
    )
}