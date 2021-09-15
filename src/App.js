//import logo from './logo.svg';
import Router from "./services/router";
import './App.css';
import './style.css';

import TopBar from "./components/topBar/topBar";
import NavBar from "./components/navBar/navBar";
import Footer from "./components/footer/footer";
//'url(/footer_lodyas.png)'
//"https://star-wars.pl/Layout/Bastion4/MCQ-forum.jpg")
function App() {
  return (
    <body>
      <div className="wrapper" style={{backgroundImage: 'require(url(/footer_lodyas.png)', backgroundSize: '100%', backgroundRepeat: 'repeat'}}>
        <TopBar />
        <NavBar />
        <Router />
        <Footer />
      </div>
    </body>
  );
}

export default App;