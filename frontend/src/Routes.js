import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
import NotFound from "./containers/NotFound"
import Login from "./containers/Login"
import Signup from "./containers/Signup";
import Notes from "./containers/Notes";
import NewNote from "./containers/NewNote";
import Settings from "./containers/Settings";

export default function Routes() {
    return (
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route exact path="/login">
                <Login />
            </Route>
            <Route exact path="/signup">
                <Signup />
            </Route>
            <Route exact path="/settings">
                <Settings />
            </Route>
            <Route exact path="/notes/new">
                <NewNote />
            </Route>
            <Route exact path="/notes/:id">
                <Notes />
            </Route>
            {/* Finally, catch all unmatched routes */}
            <Route>
                <NotFound />
            </Route>
        </Switch>
    );
}
