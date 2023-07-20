import React from "react";
import {
    addPostActionCreator,
    ContentInitialStateType,
    getProfileTC,
    setUserProfileAC
} from "../../Redux/profile-reducer";
import {connect} from "react-redux";
import {AppStateType} from "../../Redux/redux-store";
import {PostLogic} from "./PostLogic/PostLogic";
import Profile from "./Profile";
import {useLocation, useNavigate, useParams} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

export type ElementPostsDataType = {
    id: string
    message: string
    level: number
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

class ProfileContainer extends React.Component<any> {

    componentDidMount() {
        let profileId = this.props.router.params.userId;
        this.props.getProfileTC(profileId)
    }

    render() {
        let postsElements = this.props.state.posts.map((el: ElementPostsDataType) =>
            <PostLogic
                message={el.message}
                level={el.level}
                key={el.id}
                img={this.props.state.profile && this.props.state.profile.photos.small}
                params={this.props.router.params} />);

        return (
            <div className={'profile'}>
                <Profile postsElements={postsElements} {...this.props} />
            </div>
        )
    }
}

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        state: state.profilePage,
    }
}

// React-router-dom does not have the function withRouter. This is function was written by another person.
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

// Вызов идет по "конвееру". В начале оборачивает withAuthRedirect -> withRouter -> затем connect
export default compose(
    withRouter,
    connect(mapStateToProps, {addPostActionCreator, setUserProfileAC, getProfileTC}),
    withAuthRedirect
)(ProfileContainer);

/*
let AuthRedirectComponent = withAuthRedirect(ProfileContainer)

let WitchUrlContainerComponent = withRouter(AuthRedirectComponent)

export default connect(mapStateToProps,
    {addPostActionCreator, setUserProfileAC,
        getProfileTC})(WitchUrlContainerComponent)*/
/*let mapDispatchToProps = (dispatch: Dispatch): MapDispatchProps => {
    return {
        addPostCallback: (valueInput: string) => {
            dispatch(addPostActionCreator(valueInput))
        },
        setUserProfile: (profile: any) => {
            dispatch(setUserProfileAC(profile))
        }
    }
}*/
