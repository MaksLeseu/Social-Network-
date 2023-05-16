import React from "react";
import UsersC from "./UsersC";
import {BrowserRouter} from "react-router-dom";
import {action} from "@storybook/addon-actions";
import {followAC, unfollowAC} from '../../Redux/users-reducer'
import {Provider, useDispatch} from "react-redux";
import store from "../../Redux/redux-store";

export default {
    title: 'Users',
    component: UsersC
}



const onPageChanged = action('onPageChanged')

const disableBtn = (isFetching: boolean, id: string) => {

}

export const Example1 = (props: any) => {

    let usersData = [
        {
            "name": "markmark",
            "id": 29076,
            "photos": {
                "small": null,
                "large": null
            },
            "status": null,
            "followed": false
        },
        {
            "name": "cutiePie",
            "id": 29075,
            "photos": {
                "small": null,
                "large": null
            },
            "status": null,
            "followed": false
        },
        {
            "name": "SerjAver",
            "id": 29074,
            "uniqueUrlName": null,
            "photos": {
                "small": null,
                "large": null
            },
            "status": null,
            "followed": false
        },
        {
            "name": "KonstantKar",
            "id": 29073,
            "uniqueUrlName": null,
            "photos": {
                "small": null,
                "large": null
            },
            "status": null,
            "followed": false
        },
        {
            "name": "RomanMorozenko",
            "id": 29072,
            "uniqueUrlName": null,
            "photos": {
                "small": null,
                "large": null
            },
            "status": null,
            "followed": false
        },
        {
            "name": "HAY1",
            "id": 29071,
            "uniqueUrlName": null,
            "photos": {
                "small": null,
                "large": null
            },
            "status": null,
            "followed": false
        },
    ]

    const follow = (id: any) => {
        return usersData.map(el => el.id === id ? {...el, followed: false} : el)
    }
    const unfollow = (id: any) => {
        return usersData.map((el) => el.id === id ? {...el, followed: true} : el)
    }

    return (
        <BrowserRouter>
            <UsersC
                currentPage={1} // 1
                usersData={usersData}
                pageSize={5} // 8
                totalUsersCount={14} // 0
                follow={follow}
                unfollow={unfollow}
                onPageChanged={onPageChanged}
                followingInProgress={[]}
                disableBtn={disableBtn}
            />
        </BrowserRouter>
    )
}