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
import UsersC from "./UsersC";
import {Preloader} from "../../common/Preloader";
import axios from "axios";
import {usersAPI} from "../../api/api";

type MapStatePropsType = {
    usersData: any
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
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
    usersData: any
    currentPage: number
    pageSize: number
    isFetching: boolean
    totalUsersCount: number
    setUsers: (users: UsersDataType[]) => void
    follow: (id: string) => void
    unfollow :(id: string) => void
    setCurrentPage: (page: number) => void
    setTotalCount: (count: number) => void
    setIsFetching: (newIsFetching: boolean) => void
}

class UsersContainer extends React.Component<UsersAPIComponentType> {

    componentDidMount () {
        /*axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`, {
            withCredentials: true
        })*/
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
            .then(responce => {
            this.props.setUsers(responce.data.items)
            this.props.setTotalCount(responce.data.totalCount)
        })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        this.props.setIsFetching(true)
        /*axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`, {
            withCredentials: true
        })*/
        usersAPI.pageChanged(pageNumber, this.props.pageSize)
            .then(responce => {
            this.props.setUsers(responce.data.items)
            this.props.setIsFetching(false)
        })
    }

    render () {
        return (
            <>
                {this.props.isFetching ? <Preloader /> :
                    <UsersC
                        currentPage={this.props.currentPage}
                        usersData={this.props.usersData}
                        pageSize={this.props.pageSize}
                        totalUsersCount={this.props.totalUsersCount}
                        follow={this.props.follow}
                        unfollow={this.props.unfollow}
                        onPageChanged={this.onPageChanged}
                    />}
            </>
        )
    }
}

let mapStateToProps = (state: any): MapStatePropsType => {
    return {
        usersData: state.users.usersData,
        pageSize: state.users.pageSize,
        totalUsersCount: state.users.totalUsersCount,
        currentPage: state.users.currentPage,
        isFetching: state.users.isFetching
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