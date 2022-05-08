import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import NewAnnouncement from './pages/NewAnnouncement';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/newannouncement" element={<NewAnnouncement />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
