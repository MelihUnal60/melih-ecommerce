import {Route, Routes} from "react-router-dom"
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Cart from "./Pages/Cart/Cart";
import ProductDetail from "./Pages/ProductDetail/ProductDetail";
import WishList from "./Pages/WishList/WishList";
import Error from "./Pages/Error/Error";
import Naav from "./Components/Nav/Naav";



function App() {

  return (
    <div>
      <div className="App">
        <Naav />
        <div className="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/products/:id" element={<ProductDetail />} />
            <Route path="/wishlist" element={<WishList />} />
            <Route path="*" element={<Error />} />
          </Routes>

        </div>
          {/*footer*/}

      </div>




    </div>
  );
}

export default App;
