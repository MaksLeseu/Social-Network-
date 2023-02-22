import React from "react";
import {PersonalInformation} from "../PersonalInformation/PersonalInformation";
import {InputField} from "../InputField/InputField";
import {Posts} from "../Posts/Posts";

export function Content() {
    return (
        <div className={'profile'}>
            <PersonalInformation />
            <InputField />
            <Posts />
        </div>
    )
}