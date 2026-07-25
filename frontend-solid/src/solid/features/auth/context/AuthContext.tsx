import type{
    ParentProps
} from "solid-js";

import {
    createContext,
    createSignal
} from "solid-js";

import type { RegisterData } from "../../../types/auth.types";
import { registerRequest } from "../scripts/api/auth.api";

type AuthContextType = {
    isAuth: () => boolean;
    register: ( data: RegisterData ) => Promise<{ success: boolean }>;
    login: (token: string) => Promise<{ success: boolean }>;
    logout: () => void;
}

export const AuthContext = createContext<AuthContextType>();

export function AuthProvider(props: ParentProps) {
    const [isAuth, setIsAuth] = createSignal(
        Boolean(localStorage.getItem("token"))
    );

    const register = async (data: RegisterData) => {
        try {
            const res = await registerRequest(data);
            localStorage.setItem("token", "example");
            setIsAuth(true);
            return { success: true };
        }
        catch (error: any) {
            // 👇 axios ошибка
            if (error.response) {
                console.error("❌ Ошибка ответа от сервера:");
                console.error("Status:", error.response.status);
                console.error("Data:", error.response.data);
            } 
            // 👇 запрос ушёл, но ответа нет
            else if (error.request) {
                console.error("❌ Сервер не отвечает:");
                console.error(error.request);
            } 
            // 👇 ошибка настройки
            else {
                console.error("❌ Ошибка запроса:", error.message);
            }
            return {success: false}
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

    const value: AuthContextType = {
        isAuth,
        register,
        login,
        logout
    }

    return (
        <AuthContext.Provider value={value}>
            {props.children}
        </AuthContext.Provider>
    )

}