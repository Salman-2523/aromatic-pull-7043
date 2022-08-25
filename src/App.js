// import logo from './logo.svg';
import './App.css';
import {Navbar} from "./components/Navbar";
import { Navbar2 } from './components/Navbar2';
import {MainRoutes} from "./pages/MainRoutes";

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <Navbar2 /> */}
      <MainRoutes />
    </div>
  );
}

export default App;
