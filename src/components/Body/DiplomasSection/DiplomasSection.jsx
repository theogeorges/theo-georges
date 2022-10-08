import { SectionTitle } from "../../../widgets/01-Atoms/SectionTitle/SectionTitle";
import { SectionWrapper } from "../../../widgets/05-Templates/SectionWrapper";
import "./DiplomasSection.scss";

export function DiplomasSection(props) {
  return (
    <SectionWrapper className="diplomas-section" id="diplomas">
      <SectionTitle>Diplômes</SectionTitle>
    </SectionWrapper>
  );
}
