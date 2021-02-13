import "./App.css";
import react from "react";
import $ from "jquery";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import Home from "./containers/Home";
function App() {
    return (
        <>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Home} />
                </Switch>
            </BrowserRouter>
        </>
    );
}

export default App;
