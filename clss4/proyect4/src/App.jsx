import { Routes, Route, Link } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';


function App() {
  return (
    // <div className="p-6">
    //   {/* <nav className="space-x-4 mb-6">
    //     <Link to="/" className="text-blue-600 underline">Home</Link>
    //     <Link to="/about" className="text-blue-600 underline">About</Link>      
    //   </nav> */}


    // </div>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/edit/:id" element={<About />} />
    </Routes>
  );
}

export default App;
