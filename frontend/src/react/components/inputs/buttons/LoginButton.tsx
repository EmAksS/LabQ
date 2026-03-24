import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../../../scripts/hooks/useAuth";

export const LoginButton = () => {

    const navigate = useNavigate();
    const location = useLocation();

    const { login } = useAuth();

    const from = (location.state)?.from?.pathname || "/";

    const handleLogin = () => {
        login("example"); // пример токена
        navigate(from, { replace: true });
    };

    return (
        <button onClick={handleLogin}>
            <p>Кнопка логгирования</p>
        </button>
    );
}