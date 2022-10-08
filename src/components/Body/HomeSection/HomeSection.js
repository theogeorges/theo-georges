import "./HomeSection.scss";
import { Profile } from "./Profile/Profile";
import profilePic from "../../../assets/images/profilepic.jpg";

export function HomeSection(props) {
  return (
    <div className="home-section" id="home">
      <Profile></Profile>
      <img src={profilePic} alt="ze" className="profile-picture"/>
    </div>
  );
}
