import React, {FC} from "react";
import {PersonalInformation} from "./NestedComponents/PersonalInformation/PersonalInformation";
import {InputField} from "./NestedComponents/InputField/InputField";
import {Posts} from "./NestedComponents/Posts/Posts";
import {ProfilePropsType} from "./ProfileContainer";
import {addPostActionCreator} from "../../Redux/profile-reducer";

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


class Profile extends React.Component<ProfilePropsType> {
    render() {
        return (
            <div className={'profile'}>{this.props.router.params.userId ?
                <>
                    <PersonalInformation />
                    <Posts postsElements={this.props.postsElements} />
                </>
                :
                <>
                    <PersonalInformation />
                    <InputField addPostCallback={this.props.addPostActionCreator} />
                    <Posts postsElements={this.props.postsElements} />
                </>
            }
            </div>
        )
    }
}

export default Profile