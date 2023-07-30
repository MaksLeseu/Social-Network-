import React from "react";
import {PersonalInformation} from "./NestedComponents/PersonalInformation/PersonalInformation";
import {InputField} from "./NestedComponents/InputField/InputField";
import {Posts} from "./NestedComponents/Posts/Posts";
import {ProfilePropsType} from "./ProfileContainer";

/*export const Profile: FC<ProfilePropsType> = (props) => {

    /!*let postsElements = props.state.content.map((el: ElementPostsDataType) =>
        <PostLogic message={el.message} level={el.level} key={el.id}/> );*!/

    return (
        <div className={'profile'}>
            <PersonalInformation />
            <InputField addPostCallback={props.addPostCallback} />
            <Posts postsElements={props.postsElements} />
        </div>
    )
}*/

type PostsElementsType = {
    postsElements: JSX.Element[]
    status: any
}


class Profile extends React.Component<ProfilePropsType & PostsElementsType> {
    render() {
        return (
            <div className={'profile'}>{this.props.router.params.userId ?
                <>
                    <PersonalInformation
                        img={this.props.state.profile && this.props.state.profile.photos.small}
                        status={this.props.status}
                        updateStatus={this.props.updateStatusTC}
                        profile={this.props.state.profile}
                    />
                    <Posts postsElements={this.props.postsElements} />
                </>
                :
                <>
                    <PersonalInformation
                        status={this.props.status}
                        updateStatus={this.props.updateStatusTC}
                        profile={this.props.state.profile}
                    />
                    <InputField addPostCallback={this.props.addPostActionCreator} />
                    <Posts postsElements={this.props.postsElements} />
                </>
            }
            </div>
        )
    }
}

export default Profile