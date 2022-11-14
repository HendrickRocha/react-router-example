import React from "react";
import Content from "../components/layouts/Content";
import Menu from "../components/layouts/Menu";
import { BrowserRouter as Router } from 'react-router-dom'

import './App.css'

const App = props => {

    return (
        <div className="App">
            <Router>
                <Menu />
                <Content></Content>
            </Router>
        </div>
    )

}

export default App