import { BrowserRouter, Routes, Route } from 'react-router-dom'

// pages and components
import Navbar from './components/Navbar';
import Home from './pages/Home'
import Report from './pages/Report';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route 
              path="/"
              element={ <Home /> }
            />
            <Route 
              path="/create"
              element={ <Report /> }
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
