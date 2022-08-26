
import "./App.css";

import { Footer } from "./components/Home/Footer";
import { Navbar } from "./components/Home/Navbar";
import { MainRoutes } from "./routes/MainRoutes";
import News from "./components/News/News";


function App() {

  return (
    <div className="App">
      <Navbar />

      <MainRoutes />
      <Footer />


    
    </div>
  );
}

export default App;
