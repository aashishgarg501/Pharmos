import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap";
import { Home } from "./screens/home/Home";
import { Navbar } from "./components/globalComponents/navbar/Navbar";
import { Footer } from "./components/globalComponents/footer/Footer";
import { Route, Routes } from "react-router-dom";
import { Sigin } from "./components/globalComponents/sign/Sigin";
import { Signup } from "./components/globalComponents/signup/Signup";
import { Cart } from "./screens/cart/Cart";
import { SingleProduct } from "./screens/singleProduct/SingleProduct";
import { OrderMedicine } from "./screens/order-medicine/OrderMedicine";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="signin" element={<Sigin />} />
        <Route path="signup" element={<Signup />} />
        <Route path="cart" element={<Cart />} />
        <Route path="singleproduct" element={<SingleProduct />} />
        <Route path="ordermediciens" element={<OrderMedicine />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
