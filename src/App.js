
import './App.css';
import Home from './Home/Header';
import Management from './Home/Management/Management';
import Features from './Home/Features/Features';
function App() {
  return (
    <div className="App">
      <Home />
      <Management/>
      <Features/>
    </div>
  );
}

export default App;
