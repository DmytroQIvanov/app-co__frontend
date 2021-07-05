import { Suspense } from "react";
import { lazy } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import { MainPage } from "./pages/MainPage/MainPage.jsx";
import { Loader } from "./components/Loader/Loader.jsx";


const UserPage = lazy(() => import('./pages/UserPage/UserPage.jsx'));
const UsersPage = lazy(() => import('./pages/UsersPage/UsersPage.jsx'));

export const Rout = () => {
    return (
        <Router>

            <Switch>
                <Route path={`/main`}>
                    <MainPage />
                </Route>

            </Switch>
            <Switch>
                <Route path={`/user/:id`}>
                    <Suspense fallback={<Loader />}>
                        <UserPage />
                    </Suspense>

                </Route>
                <Route path={`/users/:page`}>
                    <Suspense fallback={<Loader />}>
                        <UsersPage />
                    </Suspense>
                </Route>
                <Redirect to="/main" />

            </Switch>

        </Router>)
}