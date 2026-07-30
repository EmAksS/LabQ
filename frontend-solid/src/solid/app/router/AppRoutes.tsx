import { Navigate, Route } from "@solidjs/router"
import PublicRoute from "../route-types/PublicRoute"
import URLS from "../../../constants/urls"
import AuthPage from "../../pages/auth/AuthPage"
import ProtectedRoute from "../route-types/ProtectedRoute"
import { MainPage } from "../../pages/main/MainPage"

export const AppRoutes = () => {
    return (
        <>
            <Route component={PublicRoute}>
                <Route path={URLS.AUTH} component={AuthPage} />
            </Route>
            <Route component={ProtectedRoute}>
                <Route path={URLS.MAIN} component={MainPage} />
            </Route>

            <Route path="*" component={() => (<Navigate href={URLS.AUTH} />)} />
        </>
    )
}