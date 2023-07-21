import React, {SetStateAction, useState} from "react";
import s from './Status.module.css'
import {Dispatch} from "redux";

type StatusPropsType = {
    status: string
    setStatusValue: any
}

export class Status extends React.Component<StatusPropsType, any>{
    state = {
        editMode: false
    }

    activateEditMode() {
        this.setState({
            editMode: true
        })
    }
    onChange() {

    }
    deactivateEditMode() {
        this.setState({
            editMode: false
        })
    }

    render() {
        return (
            <div className={s.statusProfile}>
                {
                    !this.state.editMode
                        ?
                        <div className={s.status} onClick={this.activateEditMode.bind(this)}>
                            <div className={s.statusContainer}>
                                <span>{this.props.status}</span>
                            </div>
                        </div>
                        :
                        <div className={s.statusInput}>
                            <input value={this.props.status} className={s.input} onChange={this.onChange}/>
                            <button className={s.statusInputBtn} onClick={this.deactivateEditMode.bind(this)}>Save</button>
                        </div>
                }
            </div>
        )
    }
}