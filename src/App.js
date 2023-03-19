
import './App.css';
import Home from './Home/Header';
import Management from './Home/Management/Management';
import Features from './Home/Features/Features';
import Technology from './Home/Technology/Technology';
function App() {
  return (
    <div className="App">
      <Home />
      <Management/>
      <Features/>
      <Technology/>
    </div>
  );
}

export default App;
