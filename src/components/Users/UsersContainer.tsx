import React from "react";
import {connect} from "react-redux";
import {
    disableBtn,
    followAC, getUsersThunkCreator,
    setCurrentPage, setIsFetching,
    setTotalCount, setUsers, unfollowAC,
    UsersDataType,
} from "../../Redux/users-reducer";
import UsersC from "./UsersC";
import {Preloader} from "../../common/Preloader";
import {usersAPI} from "../../api/api";

type MapStatePropsType = {
    usersData: any
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: any
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
    followAC: (id: string) => void
    unfollowAC :(id: string) => void
    setCurrentPage: (page: number) => void
    setTotalCount: (count: number) => void
    setIsFetching: (newIsFetching: boolean) => void
    followingInProgress: any
    disableBtn: (isFetching: boolean, id: string) => void
    getUsersThunkCreator: any
}

class UsersContainer extends React.Component<UsersAPIComponentType> {

    componentDidMount () {
        this.props.getUsersThunkCreator()

        /*this.props.setIsFetching(true)
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
            .then(responce => {
            this.props.setIsFetching(false)
            this.props.setUsers(responce.data.items)
            this.props.setTotalCount(responce.data.totalCount)
        })*/
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        this.props.setIsFetching(true)
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
                        follow={this.props.followAC}
                        unfollow={this.props.unfollowAC}
                        onPageChanged={this.onPageChanged}
                        followingInProgress={this.props.followingInProgress}
                        disableBtn={this.props.disableBtn}
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
        isFetching: state.users.isFetching,
        followingInProgress: state.users.followingInProgress
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

export default connect(mapStateToProps,
    {followAC, unfollowAC, setUsers,
        setCurrentPage, setTotalCount, setIsFetching,
        disableBtn, getUsersThunkCreator})(UsersContainer)