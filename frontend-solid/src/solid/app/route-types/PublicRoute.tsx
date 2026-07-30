import { Navigate } from "@solidjs/router";
import { useAuth } from "../../features/auth/scripts/hooks/useAuth";
import { Show, type ParentComponent } from "solid-js";
import URLS from "../../../constants/urls";

export const PublicRoute: ParentComponent = (props) => {
    const { isAuth } = useAuth();

    return (
        <Show when={!isAuth()} fallback={<Navigate href={URLS.MAIN} />}>
            {props.children}
        </Show>
    ) 
}

export default PublicRoute;