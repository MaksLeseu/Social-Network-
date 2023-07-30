import React from "react";
import {Header} from "./Header";
import {connect} from "react-redux";
import {logOutTC, meTC, setAuthUserDataAC, UsersInitialStateType} from "../../Redux/auth-reducer";
import {AppStateType} from "../../Redux/redux-store";

type MapStatePropsType = {
    userData: UsersInitialStateType
}

type HeaderContainerType = {
    userData: UsersInitialStateType
    setAuthUserDataAC: (id: string, email: string, login: string) => void
    meTC: () => void
    logOutTC: () => void
}

class HeaderContainer extends React.Component<HeaderContainerType> {

    componentDidMount() {
        this.props.meTC()
    }

    render() {
        return <Header
            {...this.props}
            isAuth={this.props.userData.isAuth}
            login={this.props.userData.login}
        />
    }
}


const mapStateToProps = (state: AppStateType): MapStatePropsType => ({
    userData: state.auth
})

export default connect(mapStateToProps,
    {setAuthUserDataAC, meTC, logOutTC})(HeaderContainer)
