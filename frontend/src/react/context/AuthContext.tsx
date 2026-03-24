import { createContext, useMemo, useState } from "react";

type AuthContextType = {
    isAuth: boolean;
    login: (token: string) => void;
    logout: () => void;
};

export const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {

    const [isAuth, setIsAuth] = useState(
        Boolean(localStorage.getItem("token"))
    );

    const login = (token: string) => {
        localStorage.setItem("token", token);
        setIsAuth(true);
    };

    const logout = () => {
        localStorage.removeItem("token");
        setIsAuth(false);
    };

    const value = useMemo(() => {
        return { isAuth, login, logout };
    }, [isAuth]);

    return (
        <AuthContext.Provider value={ value }>
            {children}
        </AuthContext.Provider>
    );
}