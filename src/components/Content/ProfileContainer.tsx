import React from "react";
import {addPostActionCreator, ContentInitialStateType, setUserProfileAC} from "../../Redux/profile-reducer";
import {connect} from "react-redux";
import {AppStateType} from "../../Redux/redux-store";
import {Dispatch} from "redux";
import {PostLogic} from "./PostLogic/PostLogic";
import Profile from "./Profile";
import {useLocation, useNavigate, useParams} from "react-router-dom";
import {usersAPI} from "../../api/api";

export type ElementPostsDataType = {
    id: string
    message: string
    level: number
}

class ProfileContainer extends React.Component<any> {

    componentDidMount() {
        let profileId = this.props.router.params.profileId;
        /*axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${profileId}`)*/
        usersAPI.getProfile(profileId)
            .then(responce => {
            this.props.setUserProfile(responce.data)
        })
    }

    render() {
        let postsElements = this.props.state.posts.map((el: ElementPostsDataType) =>
            <PostLogic
                message={el.message}
                level={el.level}
                key={el.id}
                img={this.props.state.profile}
                params={this.props.router.params} />);

        return (
            <div className={'profile'}>
                <Profile postsElements={postsElements} {...this.props} />
            </div>
        )
    }
}

type MapStatePropsType = {
    state: ContentInitialStateType
}
type MapDispatchProps = {
    addPostCallback: (valueInput: string) => void
    setUserProfile: (profile: any) => void
}
type PostsElementsType = any
export type ProfilePropsType = MapStatePropsType & MapDispatchProps & PostsElementsType

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        state: state.profilePage
    }
}
let mapDispatchToProps = (dispatch: Dispatch): MapDispatchProps => {
    return {
        addPostCallback: (valueInput: string) => {
            dispatch(addPostActionCreator(valueInput))
        },
        setUserProfile: (profile: any) => {
            dispatch(setUserProfileAC(profile))
        }
    }
}

function withRouter(Component: any) {
    function ComponentWithRouterProp(props: any) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component
                {...props}
                router={{ location, navigate, params }}
            />
        );
    }

    return ComponentWithRouterProp;
}

let WitchUrlContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, mapDispatchToProps)(WitchUrlContainerComponent)