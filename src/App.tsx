import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import "./App.css";
import ROUTES from "./app/routes";

function App() {
    return (
        <Router>
            <Header />
            <Routes>
                {Object.keys(ROUTES).map((key) => (
                    <Route
                        path={ROUTES[key].path}
                        key={key}
                        element={ROUTES[key].page}
                    />
                ))}
            </Routes>
        </Router>
    );
}

export default App;
