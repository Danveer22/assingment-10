import { useState } from "react";
import styled from "styled-components";
import GlobalStyle from "./GlobalStyle";
import { CartProvider, useCart } from "./CartContext";
import Header from "./components/Header";
import ProductDetails from "./components/ProductDetails";
import ProductSlider from "./components/ProductSlider";
import Cart from "./components/Cart";
import OverlayProductSlider from "./components/OverlayProductSlider";
import ButtonClose from "./components/ButtonClose";

const Product = styled.main`
  width: 75%;
  min-height: 100vh;
  margin: 0 auto;
  padding: 6.5rem 2rem;
  display: grid;
  grid-template-columns: 33rem 32rem;
  column-gap: 9rem;
  position: relative;

  @media (max-width: 450px) {
    width: 100%;
    grid-template-columns: 24rem;

    margin: 0;
    padding: 0;
  }
`;

const Overlay = styled.div`
  width: 100%;
  height: 120%;
  background-color: rgba(0, 0, 0, 0.641);
  position: absolute;
  z-index: 100;
`;

function App() {
  const { isOpen } = useCart();
  const [isSlider, setIsSlider] = useState(false);
  return (
    <>
      <GlobalStyle />
      {isSlider && (
        <Overlay>
          <OverlayProductSlider />
          <ButtonClose onSlider={setIsSlider} />
        </Overlay>
      )}
      <Header />
      <Product>
        {isOpen && <Cart />}

        <ProductSlider onSlider={setIsSlider} />
        <ProductDetails />
      </Product>
    </>
  );
}

export default App;
