import { useContext } from "solid-js"
import { AuthContext } from "../../context/AuthContext"

export const useAuth = () => {
    const context = useContext(AuthContext);

    if (!context)
        throw new Error("AuthProvider should be inside component");

    return context;
}