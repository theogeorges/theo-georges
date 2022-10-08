import { Button } from "../../../widgets/01-Atoms/Button/Button";
import "./Branding.scss";

export function Branding(props) {
    return (
        <a className="branding" href="#home">
            <Button className="branding">
                <div className="branding-avatar">
                    <span className="branding-avatar-initial">T</span>
                </div>
                <div className="branding-name"><b>Théo</b> Georges</div>
            </Button>
        </a>
    );
}