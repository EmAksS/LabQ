import { ExitButton } from "../../inputs/buttons/ExitButton";
import "./Header.scss";

export default function Header(params) {
    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <ExitButton />
                    </li>
                </ul>
            </nav>
        </header>
    )
}