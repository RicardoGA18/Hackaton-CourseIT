import "./App.css";
import react from "react";
import $ from "jquery";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import Home from "./containers/Home";
import Animal from "./containers/Animales";
import Evento from "./containers/Evento";

function App() {
    return (
        <>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/animal/:id" component={Animal} />
                    <Route exact path="/evento/:id" component={Evento} />
                </Switch>
            </BrowserRouter>
        </>
    );
}

export default App;
