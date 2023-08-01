import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './component/Navbar';
import Footer from './component/Footer';
import Home from './component/Home';
import MedSearch from './component/MedSearch';
import Blog from './component/Blog';
import SymptomSelector from './component/SymptomSelector'
// import Register from './component/Register';
function App() {
  return (
    <>
      <div className="App">
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/MedSearch" element={<MedSearch />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/SymptomSelector" element={<SymptomSelector />} />
            {/* <Route path="/register" element={<Register />} /> */}
          </Routes>
          <Footer />
        </Router>
      </div>
    </>
  );
}

export default App;
