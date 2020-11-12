import { Fragment } from "react";
import Header from "../../component/header/Header.component";
import Profiles from "../../component/profile/profile.component";

const Profile = () => (
  <Fragment>
    <Header removeLogo={true} />
    <Profiles />
  </Fragment>
);

export default Profile;
