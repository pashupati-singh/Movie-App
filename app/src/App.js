import logo from './logo.svg';
import './App.css';
import { MainRouters } from './Router/MainRouters';
import { NavBar } from './Pages/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
     <MainRouters />
    </div>
  );
}

export default App;
