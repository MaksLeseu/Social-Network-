import React, {FC} from 'react';

type UserButtonPropsType = {
    title: string
    id: string
    className: string
    onClick: (id: string) => void
    disabled: any
}

export const UserButton: FC<UserButtonPropsType> = (props) => {
    return (
        <button
            disabled={props.disabled}
            className={props.className}
            onClick={() => props.onClick(props.id)}
        >
            {props.title}
        </button>
    );
};
