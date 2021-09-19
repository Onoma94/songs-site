//import logo from './logo.svg';
import './App.css';
import './style.css';
import { HashRouter, Route, NavLink } from 'react-router-dom';

import Home from "./pages/home";
import Chart from "./pages/chart";
import Songs from "./pages/songs";
import Blog from "./pages/blog";
import Contact from "./pages/contact";
import TopBar from "./components/topBar/topBar";
import Footer from "./components/footer/footer";
//'url(/footer_lodyas.png)'
//"https://star-wars.pl/Layout/Bastion4/MCQ-forum.jpg")
function App() {
  return (
    <body>
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
                        Songs List
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
            <Route path="/blog" component={Blog} />
            <Route path="/contact" component={Contact} />
            <Route exact path="/" component={Home} />
        </div>
        </HashRouter>
        <Footer />
      </div>
    </body>
  );
}

export default App;