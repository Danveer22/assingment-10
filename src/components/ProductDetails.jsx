import styled from "styled-components";
import { useCart } from "../CartContext";

const StyledArticle = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;

  @media (max-width: 450px) {
    width: 100%;
    padding: 1rem 2rem;
    margin-top: 8rem;
  }

  h1 {
    font-size: 3.2rem;
    line-height: 1.1;
    margin-bottom: 2.6rem;
    color: var(--color-dark-blue);

    @media (max-width: 450px) {
      font-size: 2.4rem;
    }
  }

  p {
    color: var(--color-dark-grayish-blue);
    font-size: 1.1rem;
    line-height: 1.6;
    margin-bottom: 1.8rem;
  }
`;

const Tag = styled.span`
  color: var(--color-dark-grayish-blue);
  font-weight: 700;
  font-size: 1rem;
  letter-spacing: 1.8px;
  text-transform: uppercase;
  margin-bottom: 1.2rem;

  @media (max-width: 450px) {
    font-size: 0.8rem;
  }
`;

const Prices = styled.div`
  display: grid;
  grid-template-columns: 8rem 3.5rem;
  align-items: center;
  column-gap: 0.8rem;
  row-gap: 1rem;
  margin-bottom: 3rem;

  @media (max-width: 450px) {
    grid-template-columns: 5rem 4rem 1fr;
  }
`;

const Price = styled.span`
  font-size: 2.1rem;
  font-weight: 700;

  @media (max-width: 450px) {
    font-size: 1.4rem;
    font-weight: 900;
  }
`;
const Discount = styled.span`
  background-color: var(--color-dark-blue);
  color: var(--color-white);
  font-size: 1rem;
  padding: 0.4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  border-radius: 5px;
`;
const DiscountOn = styled.span`
  font-weight: 700;
  text-decoration: line-through;
  color: var(--color-dark-grayish-blue);
  font-size: 1.1rem;

  @media (max-width: 450px) {
    justify-self: end;
  }
`;

const Buttons = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;

  @media (max-width: 450px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const AddSubButton = styled.div`
  width: 10rem;
  background-color: var(--color-light-grayish-blue);
  padding: 1.2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 5px;

  @media (max-width: 450px) {
    width: 100%;
  }

  button {
    border: none;
    background: none;
    cursor: pointer;
  }
`;

const CartButton = styled.div`
  flex: 1;
  background-color: var(--color-primary);
  padding: 1.2rem;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.2rem;
  cursor: pointer;
  transition: background-color 0.2s ease;

  @media (max-width: 450px) {
    width: 100%;
  }

  svg path {
    fill: var(--color-dark-blue);
    font-weight: bolder;
  }
  span {
    font-weight: 700;
  }

  &:hover {
    background-color: hsl(26, 100%, 70%);
  }
`;

function ProductDetails() {
  const { cart, dispatch, quantity } = useCart();

  function increment() {
    dispatch({ type: "Item/increaseQuantity" });
  }

  function decrement() {
    dispatch({ type: "Item/decreaseQuantity" });
  }

  function handleAddToCart() {
    dispatch({ type: "Item/add" });
  }
  console.log(cart);
  return (
    <StyledArticle>
      <Tag>Sneaker Company</Tag>
      <h1>Fall Limited Edition Sneakers</h1>
      <p>
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they’ll withstand everything the
        weather can offer.
      </p>
      <Prices>
        <Price>$125.00</Price>
        <Discount>50%</Discount>
        <DiscountOn>$250.00</DiscountOn>
      </Prices>
      <Buttons>
        <AddSubButton>
          <button onClick={decrement}>
            <img src="images/icon-minus.svg" alt="decrement sign" />
          </button>
          <span>{quantity}</span>
          <button onClick={increment}>
            <img src="images/icon-plus.svg" alt="increment sign" />
          </button>
        </AddSubButton>
        <CartButton onClick={handleAddToCart}>
          <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
              fill="#69707D"
              fillRule="nonzero"
            />
          </svg>
          <span>Add to cart</span>
        </CartButton>
      </Buttons>
    </StyledArticle>
  );
}

export default ProductDetails;
