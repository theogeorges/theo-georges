import { useEffect } from "react";
import profilePic from "../../../assets/images/profilepic.jpg";
import "./HomeSection.scss";
import { Profile } from "./Profile/Profile";

const HomeSection = (props) => {
  const startAnimation = (entries, observer) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle("scale-in", entry.isIntersecting);
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(startAnimation);
    const options = { root: null, rootMargin: "0px", threshold: 1 };
    const elements = document.querySelectorAll(".home-section");
    elements.forEach((el) => {
      observer.observe(el, options);
    });
  }, []);
  return (
    <div className="home-section" id="home">
      <div className="home-section-wrapper">
        <Profile></Profile>
        <img src={profilePic} alt="ze" className="profile-picture" />
      </div>
    </div>
  );
};

export default HomeSection;
