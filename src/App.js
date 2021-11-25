import logo from './cat.jpg';
import './App.css';
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <div className="App">
        <Navbar />
      <header className="App-header">
        <h1>Midnight Cat Development</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <h2>
          Under construction
        </h2>
      </header>
      <Footer/>
    </div>
  );
}

export default App;
