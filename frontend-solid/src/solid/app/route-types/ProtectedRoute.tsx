import { Show, type ParentComponent } from "solid-js";
import { useAuth } from "../../features/auth/scripts/hooks/useAuth";
import { Navigate, useLocation } from "@solidjs/router";
import URLS from "../../../constants/urls";

export const ProtectedRoute: ParentComponent = (props) => {
    const {isAuth} = useAuth();
    const location = useLocation();

    return (
        <Show when={isAuth()} fallback={
            <Navigate href={URLS.AUTH} state={{from: location.pathname}}/>
        }>
            {props.children}
        </Show>
    )
}

export default ProtectedRoute;