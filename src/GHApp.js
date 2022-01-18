//import logo from './logo.svg';
import './App.css';
import './style.css';
import { HashRouter, Route, NavLink } from 'react-router-dom';

import Home from "./pages/home";
import Chart from "./pages/chart";
import Songs from "./pages/songs";
import Song from "./pages/song";
import Artists from "./pages/artists";
import Artist from "./pages/artist";
import Blog from "./pages/blog";
import Contact from "./pages/contact";
import TopBar from "./components/topBar";
import Footer from "./components/footer";
import React from 'react';
//'url(/footer_lodyas.png)'
//"https://star-wars.pl/Layout/Bastion4/MCQ-forum.jpg")
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
                    <NavLink to="/chart" className="nav-link">
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
                        Blog
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
            <Route path="/chart" component={Chart} />
            <Route path="/songs" component={Songs} />
            <Route path="/artists" component={Artists} />
            <Route path="/blog" component={Blog} />
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