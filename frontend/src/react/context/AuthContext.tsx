import { createContext, useMemo, useState } from "react";

type AuthContextType = {
    isAuth: boolean;
    register: (token: string) => Promise<{success: boolean}>;
    login: (token: string) => Promise<{success: boolean}>;
    logout: () => void;
};

export const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {

    const [isAuth, setIsAuth] = useState(
        Boolean(localStorage.getItem("token"))
    );
    
    const register = async (token: string) => {
        try {
            localStorage.setItem("token", token);
            setIsAuth(true);
            return { success: true };
        } catch {
            return { success: false };
        }
    };

    const login = async (token: string) => {
        try {
            localStorage.setItem("token", token);
            setIsAuth(true);
            return { success: true };
        } catch {
            return { success: false };
        }
    };

    const logout = () => {
        localStorage.removeItem("token");
        setIsAuth(false);
    };

    const value = useMemo(() => {
        return { isAuth, register, login, logout };
    }, [isAuth]);

    return (
        <AuthContext.Provider value={ value }>
            {children}
        </AuthContext.Provider>
    );
}