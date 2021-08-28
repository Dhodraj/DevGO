import React from 'react'
import Home from './Pages/Home'
import "./App.css"
import{BrowserRouter as Router,  Route} from "react-router-dom"
import SearchPage from "./Pages/SearchPage"

function App() {
    return (
        <div className="app">
            <Router>
                <Route exact path="/">
                    <Home/>
                </Route>

                <Route  path="/search">
                   <SearchPage/>
                </Route>
            </Router>
        </div>
    )
}

export default App
