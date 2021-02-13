import "./App.css";
import react from "react";
import $ from "jquery";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import Home from "./containers/Home";
import Animal from "./containers/Animales";
function App() {
    return (
        <>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/animal/:id" component={Animal} />
                </Switch>
            </BrowserRouter>
        </>
    );
}

export default App;
