import Navbar from "./components/navbar";
import Home from "./components/home";
import About from "./components/about";
import Catalog from "./components/catalog";
import Contact from "./components/contact";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Catalog />
      <Contact/>
    </div>
  );
}

export default App;
