import React from "react";
import {connect} from "react-redux";
import {
    follow,
    setCurrentPage, setIsFetching,
    setTotalCount, setUsers, unfollow,
    UsersDataType,
    UsersInitialStateType
} from "../../Redux/users-reducer";
import {AppStateType} from "../../Redux/redux-store";
import {Dispatch} from "redux";
import UsersC from "./UsersC";
import axios from "axios";
import preloader from  '../../img/loading.svg'
import {Preloader} from "../../common/Preloader";

type MapStatePropsType = {
    state: UsersInitialStateType

}
type MapDispatchPropsType = {
    follow: (id: string) => void
    unfollow :(id: string) => void
    setUsers: (users: UsersDataType[]) => void
    setCurrentPage: (page: number) => void
    setTotalCount: (count: number) => void
    setIsFetching: (newIsFetching: boolean) => void
}
export type UsersPropsType = MapStatePropsType & MapDispatchPropsType

type UsersAPIComponentType = {
    state: UsersInitialStateType
    setUsers: (users: UsersDataType[]) => void
    follow: (id: string) => void
    unfollow :(id: string) => void
    setCurrentPage: (page: number) => void
    setTotalCount: (count: number) => void
    setIsFetching: (newIsFetching: boolean) => void
}

class UsersContainer extends React.Component<UsersAPIComponentType> {

    componentDidMount () {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.state.currentPage}&count=${this.props.state.pageSize}`).then(responce => {
            this.props.setUsers(responce.data.items)
            this.props.setTotalCount(responce.data.totalCount)
        })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        this.props.setIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.state.pageSize}`).then(responce => {
            this.props.setUsers(responce.data.items)
            this.props.setIsFetching(false)
        })
    }

    render () {
        return (
            <>
                {this.props.state.isFetching ? <Preloader /> :
                    <UsersC
                        currentPage={this.props.state.currentPage}
                        usersData={this.props.state.usersData}
                        pageSize={this.props.state.pageSize}
                        totalUsersCount={this.props.state.totalUsersCount}
                        follow={this.props.follow}
                        unfollow={this.props.unfollow}
                        onPageChanged={this.onPageChanged}
                    />}
            </>
        )
    }
}

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        state: state.users,
        /*pageSize: state.users.pageSize,
        totalUsersCount: state.users.totalUsersCount*/
    }
}
/*let mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        follow: (id: string) => {
            dispatch(follow(id))
        },
        unfollow: (id: string) => {
            dispatch(unfollow(id))
        },
        setUsers: (users) => {
            dispatch(setUsers(users))
        },
        setCurrentPage: (page) => {
            dispatch(setCurrentPage(page))
        },
        setTotalCount: (count) => {
            dispatch(setTotalCount(count))
        },
        setFetching: (newIsFetching) => {
            dispatch(setIsFetching(newIsFetching))
        }
    }
}*/

export default connect(mapStateToProps, {follow, unfollow, setUsers, setCurrentPage, setTotalCount, setIsFetching})(UsersContainer)