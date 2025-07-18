import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Map from './pages/Map';
import About from './pages/About';
import Blog from './pages/Blog';
import Dive from './pages/Dive';
function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/map" element={<Map />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/dive" element={<Dive />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App
