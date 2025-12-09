import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Spinning from "./pages/Spinning";
import Sizing from "./pages/Sizing";
import Weaving from "./pages/Weaving";
import WindMill from "./pages/WindMill";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/spinning" element={<Spinning />} />
          <Route path="/sizing" element={<Sizing />} />
          <Route path="/weaving" element={<Weaving />} />
          <Route path="/windmill" element={<WindMill />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
