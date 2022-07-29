import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/NavbarNew";
import Hero from "./components/HeroTest";
import Details from "./components/Details";
import About from "./components/About";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Details />
      <About />
    </div>
  );
}

export default App;
