import { Routes, Route, Link } from 'react-router-dom';
import Info from './pages/info';
import Intro from './pages/intro';
import NoFound from './pages/NoFound';
import Datas from './pages/Datas';

function App() {
  return (
    <div className="p-6">
      <nav className="space-x-4 mb-6">
        <Link to="/" className="text-blue-600 underline">Intro</Link>
        <Link to="/info" className="text-blue-600 underline">info</Link>
        <Link to="/datas" className="text-blue-600 underline">Datas</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/info" element={<Info />} />
        <Route path="/datas" element={<Datas />} />
        <Route path="*" element={<NoFound />} />
      </Routes>
    </div>
  );
}

export default App;
