import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Components_Navbar";
import Hero from "./Components/Components_heroSection";
import GuideCompt from "./Page/GuidePage";
import Framework from "./Components/Components_Framework";
import About from "./Components/Components_About";
import Banner from "./Components/Components_banner";
import Footer from "./Components/Footer";

function App() {
  return (
    <Router>  
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Hero />
              <Framework />
              <About />
              <Banner />
              <Footer />
            </>
          }
        />

        <Route path="/getting-started" element={<GuideCompt/>}/>
      </Routes>
    </Router>
  );
}

export default App;
