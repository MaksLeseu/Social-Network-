import React from "react";
import {Sidebar} from "./Sidebar";
import {BrowserRouter} from "react-router-dom";

export default {
    title: 'Sidebar',
    component: Sidebar
}

export const Example1 = (props: any) => {
    return (
        <BrowserRouter>
            <Sidebar />
        </BrowserRouter>
    )
}