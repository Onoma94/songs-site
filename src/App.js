
import Router from "./services/router";
import './App.css';
import './style.css';

import TopBar from "./components/topBar/topBar";
import NavBar from "./components/navBar/navBar";
import Footer from "./components/footer/footer";

function App() {
  return (
    <body>
      <div className="wrapper">
        <TopBar />
        <NavBar />
        <Router />
      </div>
      <Footer />
    </body>
  );
}

export default App;