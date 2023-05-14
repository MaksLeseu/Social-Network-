import React from "react";
import {Header} from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {setAuthUserDataAC} from "../../Redux/auth-reducer";
import {usersAPI} from "../../api/api";

type HeaderContainerType = {
    isAuth: boolean
    login: string
    setAuthUserDataAC: (id: string, email: string, login: string) => void
}

class HeaderContainer extends React.Component<HeaderContainerType> {

    componentDidMount() {
        /*axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        })*/
        usersAPI.loginIn()
            .then(responce => {
                if (responce.data.resultCode === 0) {
                    let {id, email, login} = responce.data.data
                    this.props.setAuthUserDataAC(id, email , login)
                }
            })
    }

    render() {
        return <Header {...this.props} />
    }
}


const mapStateToProps = (state: any) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})

export default connect(mapStateToProps, {setAuthUserDataAC})(HeaderContainer)
