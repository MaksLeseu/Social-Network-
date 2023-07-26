import React from "react";
import s from './Status.module.css'

type StatusPropsType = {
    status: string
    updateStatus: any
}

export class Status extends React.Component<StatusPropsType, any>{
    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        });
    }
    deactivateEditMode = () => {
        this.setState({
            editMode: false
        });
        this.props.updateStatus(this.state.status)
    }
    onStatusChange = (e: any) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    render() {
        return (
            <div className={s.statusProfile}>
                {
                    !this.state.editMode
                        ?
                        <div className={s.status} onClick={this.activateEditMode}>
                            <div className={s.statusContainer}>
                                <span>{this.state.status}</span>
                            </div>
                        </div>
                        :
                        <div className={s.statusInput}>
                            <input value={this.state.status} className={s.input} onChange={this.onStatusChange}/>
                            <button className={s.statusInputBtn} onClick={this.deactivateEditMode}>Save</button>
                        </div>
                }
            </div>
        )
    }
}