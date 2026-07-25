import { useContext } from "solid-js"
import { AuthContext } from "../../context/AuthContext"

export const useAuth = () => {
    const context = useContext(AuthContext);

    return context;
}