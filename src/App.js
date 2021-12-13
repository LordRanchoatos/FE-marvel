import HomeScreen from './screens/HomeSceen';
import ProductScreen from "./screens/ProductScreen";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
      <BrowserRouter>
        <div className="grid-container">
            <header className="row">
                <div>
                    <a className="brand" href="/">Marvel.ng</a>
                </div>
                <div>
                    <a href="/cart">Cart</a>
                    <a href="/signin">Sign In</a>
                </div>
            </header>
            <main>
                <Routes>
                    <Route path="/" element={<HomeScreen />} />
                    <Route path="/product/:id" element={<ProductScreen />} exact/>
                </Routes>
            </main>
            <footer className="row center">All right reserved</footer>
        </div>
    </BrowserRouter>
  );
}

export default App;
