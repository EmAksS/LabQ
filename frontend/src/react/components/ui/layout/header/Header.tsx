import { ExitButton } from "../../../controls/buttons/ExitButton";
import "./Header.scss";

export default function Header(params) {
    return (
        <header className="header">
            <div className="content flex--space">
                <div className="header__start">
                    <span>icon</span>
                </div>
                <div className="header__end">
                    <ExitButton />
                </div>
                    

            </div>
            
        </header>
    )
}