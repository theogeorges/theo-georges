import { SectionTitle } from "../../../widgets/01-Atoms/SectionTitle/SectionTitle";
import { SectionWrapper } from "../../../widgets/05-Templates/SectionWrapper";
import "./PersoSection.scss";

export function PersoSection(props) {
  return (
    <SectionWrapper className="perso-section" id="perso">
      <SectionTitle>Projets personnels</SectionTitle>
    </SectionWrapper>
  );
}
