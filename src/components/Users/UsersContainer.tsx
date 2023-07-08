import React from "react";
import {connect} from "react-redux";
import {
    disableBtn,
    followAC, followTC, getUsersTC,
    setCurrentPage, unfollowAC, unfollowTC,
    UsersDataType,
} from "../../Redux/users-reducer";
import UsersC from "./UsersC";
import {Preloader} from "../../common/Preloader";
import {Navigate} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

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
    setCurrentPage: (page: number) => void
    followingInProgress: any
    getUsersTC: (currentPage: number, pageSize: number) => void
    followTC: (id: string) => void
    unfollowTC: (id: string) => void
    isAuth: boolean
}

class UsersContainer extends React.Component<UsersAPIComponentType> {

    componentDidMount () {
        this.props.getUsersTC(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber: number) => {
        this.props.getUsersTC(pageNumber, this.props.pageSize)
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
                        onPageChanged={this.onPageChanged}
                        followingInProgress={this.props.followingInProgress}
                        followTC={this.props.followTC}
                        unfollowTC={this.props.unfollowTC}
                        isAuth={this.props.isAuth}
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
        followingInProgress: state.users.followingInProgress,
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
let AuthRedirectComponent = withAuthRedirect(UsersContainer)

export default connect(mapStateToProps,
    {setCurrentPage, getUsersTC,
        followTC, unfollowTC})(AuthRedirectComponent)