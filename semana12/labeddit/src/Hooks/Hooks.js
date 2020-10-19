import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import LoginPage from "../Pages/LoginPage/LoginPage"
import SignUpPage from "../Pages/SignUpPage/SignUpPage"
import FeedPage from "../Pages/FeedPage/FeedPage"
import PostPage from "../Pages/PostPage/PostPage"




export default function Hooks() {




 return (
        <div>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/">
                        < LoginPage />
                    </Route>
                    <Route exact path="/signup">
                        < SignUpPage />
                    </Route>
                    <Route exact path="/feed">
                        < FeedPage />
                    </Route>
                    <Route exact path="/post">
                        <PostPage />
                    </Route>
                    <Route>
                        <div>ERROR 404</div>
                    </Route>
                </Switch>
            </BrowserRouter>
        </div>
    );
}