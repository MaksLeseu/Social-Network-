import React from "react";
import {Messages} from "./Messages";
import {addMessageActionCreator, MessagesInitialStateType} from "../../Redux/messages-reducer";
import {connect} from "react-redux";
import {AppStateType} from "../../Redux/redux-store";
import {compose, Dispatch} from "redux";
import {UsersInitialStateType} from "../../Redux/auth-reducer";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

type MapStatePropsType = {
    state: MessagesInitialStateType
}
type MapDispatchPropsType = {
    addMessageCallback: (valueInput: string) => void
}
export type MessagesPropsType = MapStatePropsType & MapDispatchPropsType

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        state: state.messages,
    }
}
let mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        addMessageCallback: (valueInput: string) => {
            dispatch(addMessageActionCreator(valueInput))
        }
    }
}


/*let AuthRedirectComponent = withAuthRedirect(Messages)

export const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent)*/
export default compose(connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Messages)
