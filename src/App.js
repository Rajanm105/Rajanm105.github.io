import './App.css';
import About from './components/About'
import Contact from './components/Contact'
import Works from './components/Works'
import Navbar from './components/Navbar'
import Skills from './components/Skills'
import Home from './components/Home'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <About/>
      <Skills/>
      <Works/>
      <Contact/>
    </div>
  );
}

export default App;
