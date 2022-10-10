import cv from "../../../../assets/files/CV.pdf";
import Button from "../../../../widgets/01-Atoms/Button/Button";
import "./Profile.scss";

export function Profile(props) {

  return (
    <div className="profile">
      <span className="job">{"Développeur web & mobile".toUpperCase()}</span>
      <h1>Théo GEORGES</h1>
      <p className="description">Grâce à 3 ans d'alternance suivis par un an de CDI chez Sopra Steria,
        j'ai acquis les connaissances fondamentales de la vie d'un projet informatique.
        Je suis capable d'apporter mes compétences au sein d'une équipe de développement avec rigueur,
        et suis rapidement autonome sur un projet.</p>
      <div className="profile-buttons">
        <Button download href={cv} variant="contained" className="cv-xs">CV PDF</Button>
        <Button target="_blank" href={cv} variant="contained" className="cv-lg">CV PDF</Button>
        <Button href="https://www.linkedin.com/in/theogeorges/" target="_blank">LinkedIn</Button>
        <Button href="https://www.malt.fr/profile/theogeorges3" target="_blank">Malt</Button>
      </div>
    </div>
  );
}
