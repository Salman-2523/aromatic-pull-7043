import "./App.css";
import { Footer } from "./components/Home/Footer";
import { Navbar } from "./components/Home/Navbar";
import { MainRoutes } from "./routes/MainRoutes";
function App() {
  return (
    <div >
<Navbar />
<MainRoutes />
<Footer />
</div>
    );
}

export default App;
