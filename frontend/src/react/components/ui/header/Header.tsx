import { ExitButton } from "../../inputs/buttons/ExitButton";

export default function Header(params) {
    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <a href="/">Один</a>
                    </li>
                    <li>
                        <a href="/two">Два</a>
                    </li>
                    <li>
                        <a href="/three">Три</a>
                    </li>
                    <li>
                        <ExitButton />
                    </li>
                </ul>
            </nav>
        </header>
    )
}