import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomePage from "../PageScreen/HomePage/HomePage";
import TripsPage from '../PageScreen/TripsPage/TripsPage';
import AplicationPage from '../PageScreen/AplicationPage/AplicationPage';
import LoginPage from '../PageScreen/LoginPage/LoginPage';
import TripsDetailsPage from '../PageScreen/TripsDetailsPage/TripsDetailsPage';
import CreateTripPage from '../PageScreen/CreateTripPage/CreateTripPage'





export default function Hooks() {




 return (
        <div>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/">
                        < HomePage />
                    </Route>
                    <Route exact path="/details">
                        < TripsDetailsPage />
                    </Route>
                    <Route exact path="/aplication">
                        < AplicationPage />
                    </Route>
                    <Route exact path="/list">
                        <TripsPage />
                    </Route>
                    <Route exact path="/login">
                        <LoginPage />
                    </Route>
                    <Route exact path="/create">
                        <CreateTripPage />
                    </Route>
                    <Route>
                        <div>ERROR 404</div>
                    </Route>
                </Switch>
            </BrowserRouter>
        </div>
    );
}