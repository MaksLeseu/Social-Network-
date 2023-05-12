import React, {ChangeEvent, useState} from "react";
import img from '../../../../img/input_field/btn_input.svg'
import './InputField.css'

type InputFieldPropsType = {
    addPostCallback: (valueInput: string) => void
}

export function InputField(props: InputFieldPropsType) {

    let [valueInput, setValueInput] = useState<string>('');

    const onChange = (e: ChangeEvent<HTMLTextAreaElement>): void => {
        setValueInput(e.currentTarget.value);
    }

    const addPost = (): void => {
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
                <div className={'img__container'}><img src={img} className={'img'}/></div>
            </button>
        </div>
    )
}