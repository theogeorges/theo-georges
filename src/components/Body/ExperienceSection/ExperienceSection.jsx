import { useEffect } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { SectionTitle } from "../../../widgets/01-Atoms/SectionTitle/SectionTitle";
import { SectionWrapper } from "../../../widgets/05-Templates/SectionWrapper";
import { experience } from "./experience";
import { ExperienceContent } from "./ExperienceContent/ExperienceContent";
import "./ExperienceSection.scss";
import { buildExperienceDate } from "./ExperienceSectionUtils";

export function ExperienceSection(props) {
  const startAnimation = (entries, observer) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle("bounce-in", entry.isIntersecting);
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(startAnimation);
    const options = { root: null, rootMargin: "0px", threshold: 0 };
    const timelineTexts = document.querySelectorAll(".experience-text");
    const cards = document.querySelectorAll(".experience-card-wrapper");
    const icons = document.querySelectorAll(".experience-icon");
    timelineTexts.forEach((el) => {
      observer.observe(el, options);
    });
    cards.forEach((el) => {
      observer.observe(el, options);
    });
    icons.forEach((el) => {
      observer.observe(el, options);
    });
  }, []);

  return (
    <SectionWrapper className="experience-section" id="experience">
      <SectionTitle>Expérience</SectionTitle>
      <div className="experience-column">
        {experience.map((item, index) => {
          return (
            <div className="experience-card-wrapper" key={index}>
              <div className="experience-card">
                <ExperienceContent experience={item}></ExperienceContent>
              </div>
            </div>
          );
        })}
      </div>
      <VerticalTimeline
        layout="1-column"
        lineColor="#4caf50"
        className="experience-timeline"
      >
        {experience.map((item, index) => {
          return (
            <VerticalTimelineElement
              textClassName="experience-text"
              iconClassName="experience-icon"
              iconStyle={{
                borderColor: "#4caf50",
                background: "white",
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                WebkitBoxShadow:
                  "0 0 0 4px #4caf50,inset 0 2px 0 rgba(0,0,0,.08),0 3px 0 4px rgba(0,0,0,.05)",
              }}
              key={index}
              icon={<img src={item.icon} alt={item.company} width="30px" />}
              position="right"
              date={buildExperienceDate(item)}
              contentStyle={{}}
            >
              <ExperienceContent experience={item} key={index} />
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </SectionWrapper>
  );
}
