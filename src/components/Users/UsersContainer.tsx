import React from "react";
import {connect} from "react-redux";
import {followTC, getUsersTC,
    setCurrentPage, unfollowTC,
    UsersDataType, UsersInitialStateType,
} from "../../Redux/users-reducer";
import UsersC from "./UsersC";
import {Preloader} from "../../common/Preloader";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {AppStateType} from "../../Redux/redux-store";

type MapStatePropsType = {
    usersPage: UsersInitialStateType
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
    usersPage: UsersInitialStateType
    setCurrentPage: (page: number) => void
    getUsersTC: (currentPage: number, pageSize: number) => void
    followTC: (id: string) => void
    unfollowTC: (id: string) => void
}

class UsersContainer extends React.Component<UsersAPIComponentType> {

    componentDidMount () {
        this.props.getUsersTC(this.props.usersPage.currentPage, this.props.usersPage.pageSize)
    }
    onPageChanged = (pageNumber: number) => {
        this.props.getUsersTC(pageNumber, this.props.usersPage.pageSize)
    }
    render () {
        return (
            <>
                {this.props.usersPage.isFetching ? <Preloader /> :
                    <UsersC
                        currentPage={this.props.usersPage.currentPage}
                        usersData={this.props.usersPage.usersData}
                        pageSize={this.props.usersPage.pageSize}
                        totalUsersCount={this.props.usersPage.totalUsersCount}
                        onPageChanged={this.onPageChanged}
                        followingInProgress={this.props.usersPage.followingInProgress}
                        followTC={this.props.followTC}
                        unfollowTC={this.props.unfollowTC}
                    />}
            </>
        )
    }
}

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        usersPage: state.users
    }
}

export default compose(
    connect(mapStateToProps,
        {setCurrentPage, getUsersTC,
            followTC, unfollowTC}),
    withAuthRedirect
)(UsersContainer)

/*let AuthRedirectComponent = withAuthRedirect(UsersContainer)

export default connect(mapStateToProps,
    {setCurrentPage, getUsersTC,
        followTC, unfollowTC})(AuthRedirectComponent)*/
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