import "./App.css";

import { Footer } from "./components/Home/Footer";
import { Navbar } from "./components/Home/Navbar";
import { MainRoutes } from "./routes/MainRoutes";

//import { MainRoutes } from "./routes/MainRoutes";

function App() {
  return (
    <div className="App">
      <Navbar />

      <MainRoutes />
      <Footer />

      {/* <MainRoutes /> */}
    </div>
  );
}

export default App;
