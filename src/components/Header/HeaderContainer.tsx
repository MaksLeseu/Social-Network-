import React from "react";
import {Header} from "./Header";
import {connect} from "react-redux";
import {logOutTC, meTC, setAuthUserDataAC} from "../../Redux/auth-reducer";

type HeaderContainerType = {
    isAuth: boolean
    login: string
    setAuthUserDataAC: (id: string, email: string, login: string) => void
    meTC: any
    logOutTC: any
}

class HeaderContainer extends React.Component<HeaderContainerType> {

    componentDidMount() {
        this.props.meTC()
    }

    render() {
        return <Header {...this.props} />
    }
}


const mapStateToProps = (state: any) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})

export default connect(mapStateToProps, {setAuthUserDataAC, meTC, logOutTC})(HeaderContainer)
