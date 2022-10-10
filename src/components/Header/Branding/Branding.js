import Button from "../../../widgets/01-Atoms/Button/Button";
import "./Branding.scss";

export function Branding({ onClick }) {
    return (
        <Button className="branding" color={"text"} href="#home" onClick={onClick}>
            <div className="branding-avatar">
                <span className="branding-avatar-initial">T</span>
            </div>
            <div className="branding-name"><b>Théo</b> Georges</div>
        </Button>
    );
}