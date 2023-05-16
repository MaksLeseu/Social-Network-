import React from "react";
import {InputField} from "./InputField";
import {action} from "@storybook/addon-actions";

export default {
    title: 'Input field',
    component: InputField
}

const callback = action('Add post is working')

export const Example1 = (props: any) => {
    return <InputField addPostCallback={callback} />
}