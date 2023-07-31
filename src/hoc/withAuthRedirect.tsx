import React, {ComponentType} from "react";
import {Navigate} from "react-router-dom";
import {connect} from "react-redux";
import {AppStateType} from "../Redux/redux-store";

type MapStatePropsType = {
    isAuth: boolean
}

let mapStateToPropsForRedirect = (state: AppStateType): MapStatePropsType => ({
    isAuth: state.auth['isAuth']
})


/*export function withAuthRedirect<T>(Component: React.ComponentType<T>) {
    class RedirectComponent extends React.Component<MapStatePropsType> {

        render() {
            let {isAuth, ...restProps} = this.props
            if (!isAuth) return <Navigate to={'/login'} />;

            return <Component {...restProps as T} />;
        }
    }

    let ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent)
    return ConnectedAuthRedirectComponent
}*/
export function withAuthRedirect<T>(Component: React.ComponentType<T>) {
    class RedirectComponent extends React.Component<MapStatePropsType> {

        render() {
            let {isAuth, ...restProps} = this.props
            if (!isAuth) return <Navigate to={'/login'} />;

            // @ts-ignore
            return <Component {...restProps as T} />;
        }
    }

    let ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent)
    return ConnectedAuthRedirectComponent
}
