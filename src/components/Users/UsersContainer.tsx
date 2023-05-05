import React from "react";
import {connect} from "react-redux";
import {
    followAC,
    setCurrentPageAC, setIsFetchingAC, setTotalCountAC,
    setUsersAC,
    unfollowAC,
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
    followChangeCallback: (id: string) => void
    unfollowChangeCallback :(id: string) => void
    setUsers: (users: UsersDataType[]) => void
    setCurrentPage: (page: number) => void
    setTotalCount: (count: number) => void
    setFetching: (newIsFetching: boolean) => void
}
export type UsersPropsType = MapStatePropsType & MapDispatchPropsType

type UsersAPIComponentType = {
    state: UsersInitialStateType
    setUsers: (users: UsersDataType[]) => void
    followChangeCallback: (id: string) => void
    unfollowChangeCallback :(id: string) => void
    setCurrentPage: (page: number) => void
    setTotalCount: (count: number) => void
    setFetching: (newIsFetching: boolean) => void
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
        this.props.setFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.state.pageSize}`).then(responce => {
            this.props.setUsers(responce.data.items)
            this.props.setFetching(false)
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
                        followChangeCallback={this.props.followChangeCallback}
                        unfollowChangeCallback={this.props.unfollowChangeCallback}
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
let mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        followChangeCallback: (id: string) => {
            dispatch(followAC(id))
        },
        unfollowChangeCallback: (id: string) => {
            dispatch(unfollowAC(id))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (page) => {
            dispatch(setCurrentPageAC(page))
        },
        setTotalCount: (count) => {
            dispatch(setTotalCountAC(count))
        },
        setFetching: (newIsFetching) => {
            dispatch(setIsFetchingAC(newIsFetching))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)