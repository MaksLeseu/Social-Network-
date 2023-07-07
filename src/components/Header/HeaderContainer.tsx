import React from "react";
import {Header} from "./Header";
import {connect} from "react-redux";
import {loginInTC, setAuthUserDataAC} from "../../Redux/auth-reducer";
import {usersAPI} from "../../api/api";

type HeaderContainerType = {
    isAuth: boolean
    login: string
    setAuthUserDataAC: (id: string, email: string, login: string) => void
    loginInTC: any
}

class HeaderContainer extends React.Component<HeaderContainerType> {

    componentDidMount() {
        this.props.loginInTC()
        /*axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        })*/
        /*usersAPI.loginIn()
            .then(responce => {
                if (responce.data.resultCode === 0) {
                    let {id, email, login} = responce.data.data
                    this.props.setAuthUserDataAC(id, email , login)
                }
            })*/
    }

    render() {
        return <Header {...this.props} />
    }
}


const mapStateToProps = (state: any) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})

export default connect(mapStateToProps, {setAuthUserDataAC, loginInTC})(HeaderContainer)
