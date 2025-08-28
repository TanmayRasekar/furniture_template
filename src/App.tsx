import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";
import Product from "./pages/Product";
import UserLayout from "./layout/UserLayout";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<UserLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="*" element={<div>404 not found</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
