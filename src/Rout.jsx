import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import { RegularFooter } from "./components/RegularFooter/RegularFooter.jsx";
import { RegularHeader } from "./components/RegularHeader/RegularHeader.jsx";
import { MainPage } from "./pages/MainPage/MainPage.jsx";
import { UserPage } from "./pages/UserPage/UserPage.jsx";
import { UsersPage } from "./pages/UsersPage/UsersPage.jsx";

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
                    <RegularHeader />
                    <UserPage />
                    <RegularFooter />

                </Route>
                <Route path={`/users`}>
                    <RegularHeader />
                    <UsersPage />
                    <RegularFooter />

                </Route>
            </Switch>
            <Redirect to="/main" />

        </Router>)
}