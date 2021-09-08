import logo from './logo.svg';
import Router from "./services/router";
import './App.css';

import NavBar from "./component/navbar/navbar";
import Footer from "./component/footer/footer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <Router />
        <Footer />
      </header>
    </div>
  );
}

export default App;
