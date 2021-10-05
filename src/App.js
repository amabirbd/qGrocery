import Cart from "./components/cart/Cart";
import Checkout from "./components/checkout/Checkout";
import HeaderOne from "./components/HeaderOne";
import HeaderTwo from "./components/HeaderTwo/HeaderTwo";
import SideDrawer from "./components/sideNav/SideDrawer";
function App() {
  return (
    <div className="App">
      {/* <HeaderOne />
      <div className="container">
        <HeaderTwo />
        <SideDrawer />
      </div>

      <main className="main">
        <Checkout />
      </main>
      <div>
        <Cart />
      </div> */}
      <HeaderOne />

      <div className="container">
        <HeaderTwo />
        <div className="main-section">
          <SideDrawer />
          <Checkout />
          <Cart />
        </div>
      </div>
    </div>
  );
}

export default App;
