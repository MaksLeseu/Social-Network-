import React from "react";
import {Dialogs} from "./Dialogs";
import {DialogLogic} from "../../DialogLogic/DialogLogic";
import {DialogsDataElementsPropsType} from "../../Messages";
import {BrowserRouter} from "react-router-dom";

export default {
    title: 'Dialogs',
    component: Dialogs
}

type DialogsDataType = {
    id: string
    name: string
}

type InitialStateType = {
    dialogsData: DialogsDataType[]
}

export const Example1 = (props: any) => {

    let initialState: InitialStateType = {
        dialogsData: [
            {id: '1', name: 'Nik Filman'},
            {id: '2', name: 'Mich Filman'},
            {id: '3', name: 'Vera Filmana'},
            {id: '4', name: 'Vik Prigozin'},
        ],
    }

    let dialogsElement = initialState.dialogsData.map((el: DialogsDataElementsPropsType) =>
        <DialogLogic userName={el.name} id={el.id} /> );

    return (
        <BrowserRouter>
            <Dialogs dialogsElement={dialogsElement} />
        </BrowserRouter>
    )
}
