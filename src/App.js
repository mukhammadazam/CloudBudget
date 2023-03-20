
import './App.css';
import Home from './Home/Header';
import Management from './Home/Management/Management';
import Features from './Home/Features/Features';
import Technology from './Home/Technology/Technology';
import Money from './Home/Money/Money';
import Contact from './Home/Contact/Contact';

function App() {
  return (
    <div className="App">
      <Home />
      <Management/>
      <Features/>
      <Technology/>
      <Money/>
      <Contact/>
    </div>
  );
}

export default App;
