import logo from './logo.svg';
import Router from "./services/router";
import './App.css';
import './style.css';

import TopBar from "./components/topBar/topBar";
import NavBar from "./components/navBar/navBar";
import Footer from "./components/footer/footer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TopBar />
        <NavBar />
        <Router />
        <Footer />
      </header>
    </div>
  );
}

export default App;
