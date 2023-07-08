import React from "react";
import UsersC from "./UsersC";
import {BrowserRouter} from "react-router-dom";
import {action} from "@storybook/addon-actions";
import {UserButton} from "./UsersNested/UserButton";
import s from "./UsersNested/UsersNested.module.css";
import {followTC, unfollowTC} from "../../Redux/users-reducer";

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
                onPageChanged={onPageChanged}
                followingInProgress={[]}
                followTC={followTC}
                unfollowTC={unfollowTC}
                isAuth={false}
            />
        </BrowserRouter>
    )
}

const callback = action('Happen onClick')

export const Example2 = () => {
    return <UserButton
        title={'Follow'}
        id={'userId'}
        className={`${s.btn}`}
        onClick={callback}
        disabled={null} />
}
export const Example3 = () => {
    return <UserButton
        title={'Unfollow'}
        id={'userId'}
        className={`${s.btn} ${s.btnActive}`}
        onClick={callback}
        disabled={null} />
}