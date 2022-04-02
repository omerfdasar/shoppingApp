import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Footer from "./components/Footer";
import NotFound from "./pages/NotFound";
import Details from "./pages/Details";
import Checkout from "./pages/Checkout";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />

        <div className="main">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/products" element={<Products />}></Route>
            <Route path="products/details/:id" element={<Details />}></Route>
            <Route path="/checkout" element={<Checkout />}></Route>
            <Route path="*" element={<NotFound />}></Route>
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
