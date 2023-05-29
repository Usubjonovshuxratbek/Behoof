import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import About from './pages/About/About';
import Home from './pages/Home/Home';
import Bar from './components/Bar/Bar'

function App() {
  return (
    <div className="App">
      <Navbar />
       <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
       </Routes>
       <Footer />
       <Bar />
    </div>
  );
}

export default App;
