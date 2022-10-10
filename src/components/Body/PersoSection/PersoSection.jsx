import { useEffect } from "react";
import { SectionTitle } from "../../../widgets/01-Atoms/SectionTitle/SectionTitle";
import { SectionWrapper } from "../../../widgets/05-Templates/SectionWrapper";
import PersonalProject from "./PersonalProject/PersonalProject";
import personalProjects from "./personalProjects";
import "./PersoSection.scss";

export function PersoSection(props) {
  const startAnimation = (entries, observer) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle("scale-in", entry.isIntersecting);
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(startAnimation);
    const options = { root: null, rootMargin: "0px", threshold: 1 };
    const elements = document.querySelectorAll(".personal-project-wrapper");
    elements.forEach((el) => {
      observer.observe(el, options);
    });
  }, []);
  return (
    <SectionWrapper className="perso-section" id="perso">
      <SectionTitle>Projets personnels</SectionTitle>
      <div className="projects-column">
        {personalProjects.map((item, index) => {
          return (
            <div className="personal-project-wrapper" key={index}>
              <PersonalProject
                {...item}
                divider={index < personalProjects.length - 1}
              />
            </div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
