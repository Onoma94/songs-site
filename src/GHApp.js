import './App.css';
import './style.css';
import { HashRouter, Route, NavLink } from 'react-router-dom';

import Home from "./pages/home";
import Chart from "./pages/chart";
import Songs from "./pages/songs";
import Song from "./pages/song";
import Artists from "./pages/artists";
import Artist from "./pages/artist";
import GuestBook from "./pages/guestBook";
import Contact from "./pages/contact";
import TopBar from "./components/topBar";
import Footer from "./components/footer";
import React from 'react';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';

function App() {
  return (
    <>
      <div className="wrapper">
        <TopBar />
        <HashRouter>
        <nav>
            <ul>
                <li>
                    <NavLink to="/" className="nav-link">
                        Homepage
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/chart/791" className="nav-link">
                        My Charts
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/songs" className="nav-link">
                        Song List
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/artists" className="nav-link">
                        Artist List
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/blog" className="nav-link">
                        Guest Book
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/contact" className="nav-link">
                        Contact
                    </NavLink>
                </li>
            </ul>
        </nav>
        <div>

            <Route exact path="/chart/:id" component={Chart} />
            <Route exact path="/chart">{<Redirect to="/chart/791" />}</Route>
            <Route path="/songs" component={Songs} />
            <Route path="/artists" component={Artists} />
            <Route path="/blog" component={GuestBook} />
            <Route path="/contact" component={Contact} />
            <Route exact path="/" component={Home} />
            <Route exact path="/song/:id" component={Song} />
            <Route exact path="/artist/:id" component={Artist} />
        </div>
        </HashRouter>
        <Footer />
      </div>
    </>
  );
}

export default App;