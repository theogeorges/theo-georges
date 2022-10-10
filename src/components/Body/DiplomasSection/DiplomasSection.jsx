import { useEffect } from "react";
import { SectionTitle } from "../../../widgets/01-Atoms/SectionTitle/SectionTitle";
import { SectionWrapper } from "../../../widgets/05-Templates/SectionWrapper";
import DiplomaCard from "./DiplomaCard/DiplomaCard";
import diplomas from "./diplomas";
import "./DiplomasSection.scss";

export function DiplomasSection(props) {
  const startAnimation = (entries, observer) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle("fade-in", entry.isIntersecting);
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(startAnimation);
    const options = { root: null, rootMargin: "0px", threshold: 1 };
    const elements = document.querySelectorAll(".diploma-wrapper");
    elements.forEach((el) => {
      observer.observe(el, options);
    });
  }, []);
  return (
    <SectionWrapper className="diplomas-section" id="diplomas">
      <SectionTitle>Diplômes</SectionTitle>
      <div className="diplomas-column">
        {diplomas.map((item, index) => {
          return (
            <div className="diploma-wrapper" key={index}>
              <DiplomaCard {...item} />
            </div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
