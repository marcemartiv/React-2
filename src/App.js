import "./style.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./views/Home";
import Pokemones from "./views/Pokemones";
import DetallesPoke from "./views/DetallesPoke";




function App() {
  
  return (
    <div className="App">
    
    <BrowserRouter>
        <Navbar />
        
       <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pokemones" element={<Pokemones />} />
          <Route path="/pokemones/:name" element={<DetallesPoke />} />
          
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
