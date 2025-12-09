import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Spinning from "./pages/Spinning";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/spinning" element={<Spinning />} />
          {/* Add more routes here as you create pages */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
