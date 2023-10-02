import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./reset.css";
import "./App.css";
import { CartContext } from "./component/CartContext";
import ProductList from "./component/ProductList";
import ProductDetail from "./component/ProductDetail";
import AboutUs from "./component/AboutUs";
import FAQs from "./component/FAQs";
import Checkout from "./component/Checkout";
import Title from "./component/Title";
import Nav from "./component/Nav";
import Footer from "./component/Footer";
import { useState } from "react";

function App() {
  let [cartItems, setCartItems] = useState([]);

  return (
    <div className="App">
      <BrowserRouter>
        <CartContext.Provider value={{ cartItems, setCartItems }}>
          <Nav />
          <div className="Appcon">
            <Routes>
              <Route path="/" element={<ProductList />} />
              <Route path="/product" element={<ProductDetail />}>
                <Route path=":id" element={<ProductDetail />} />
              </Route>
              <Route path="/aboutus" element={<AboutUs />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/faqs" element={<FAQs />} />

              <Route path="*" element={<Title title="404 Not Found" />} />
            </Routes>
          </div>
          <Footer />
        </CartContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;

/* 
step1:
起頁
app // BrowserRouters routes route Link 
-productlist - header (h1, banner, nav, logo), product, footer // API, useEffect()
-productdetail - header, product, footer // parameter
-checkout - qty
QuantityBtn, CartContext
-FAQs
-aboutus

step2:
起雜component
h1 
nav
footer

3:


*/
