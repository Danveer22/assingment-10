import styled from "styled-components";
import { useCart } from "../CartContext";

const StyledAside = styled.aside`
  width: 27rem;
  height: 18.2rem;
  position: absolute;
  top: 0;
  right: -8rem;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.2);
  z-index: 999;

  @media (max-width: 450px) {
    right: 54%;
    transform: translateX(50%);
    width: 22rem;
    top: 2%;
  }

  h2 {
    font-size: 1.2rem;
    font-weight: 700;
    padding: 0.6rem 2rem;
    height: 3.6rem;
    border-bottom: 1px solid rgba(107, 107, 107, 0.1);

    @media (max-width: 450px) {
      height: 2rem;
    }
  }
`;

const EmptyText = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  font-weight: 700;
  color: var(--color-dark-grayish-blue);
  height: calc(100% - 3.6rem);
`;

const StyledSection = styled.section`
  height: calc(100% - 3.6rem);
  padding: 2rem;
`;

const OrderItem = styled.article`
  display: grid;
  grid-template-columns: 4rem auto 1rem;
  column-gap: 1.2rem;
  align-items: center;

  @media (max-width: 450px) {
    grid-template-columns: 5rem auto 1rem;
  }

  img {
    width: 100%;
    height: 100%;
    border-radius: 8px;

    @media (max-width: 450px) {
    }
  }
`;

const Prices = styled.div`
  color: var(--color-dark-grayish-blue);
  display: flex;
  flex-direction: column;
  gap: 0.4rem;

  h3 {
    font-size: 1.1rem;
  }
  p {
    font-size: 1.2rem;
  }
  strong {
    color: var(--color-dark-blue);
    margin-left: 0.5rem;
    font-weight: 900;
  }
`;

const CheckOut = styled.button`
  display: inline-block;
  padding: 1.5rem;
  background-color: var(--color-primary);
  cursor: pointer;
  color: var(--color-black-lightbox);
  margin-top: 1.8rem;
  font-size: 1.2rem;
  font-weight: 700;
  width: 100%;
  border: none;
  border-radius: 1rem;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: hsl(26, 100%, 70%);
  }
`;

const StyledDelete = styled.button`
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;

  svg path {
    transition: all 0.2s ease;
  }

  &:hover svg path {
    fill: var(--color-dark-blue);
  }
`;

function Cart() {
  const { cart, dispatch } = useCart();

  function handleDelete() {
    dispatch({ type: "Item/delete" });
  }

  return (
    <StyledAside>
      <h2>Cart</h2>

      {cart.length === 0 ? (
        <EmptyText>Your cart is empty.</EmptyText>
      ) : (
        <StyledSection>
          {cart.map((item) => (
            <OrderItem key={item.id}>
              <img
                src="images/image-product-1-thumbnail.jpg"
                alt={item.heading}
              />
              <Prices>
                <h3 className="item-name">{item.heading}</h3>
                <p className="item-price">
                  ${item.currentPrice}.00 x {item.quantity}
                  <strong> ${item.totalPrice}.00</strong>
                </p>
              </Prices>
              <StyledDelete onClick={handleDelete}>
                <svg
                  width="14"
                  height="16"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                  <defs>
                    <path
                      d="M0 2.625V1.75C0 1.334.334 1 .75 1h3.5l.294-.584A.741.741 0 0 1 5.213 0h3.571a.75.75 0 0 1 .672.416L9.75 1h3.5c.416 0 .75.334.75.75v.875a.376.376 0 0 1-.375.375H.375A.376.376 0 0 1 0 2.625Zm13 1.75V14.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 1 14.5V4.375C1 4.169 1.169 4 1.375 4h11.25c.206 0 .375.169.375.375ZM4.5 6.5c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Z"
                      id="a"
                    />
                  </defs>
                  <use fill="#C3CAD9" fillRule="nonzero" xlinkHref="#a" />
                </svg>
              </StyledDelete>
            </OrderItem>
          ))}
          <CheckOut>Checkout</CheckOut>
        </StyledSection>
      )}
    </StyledAside>
  );
}

export default Cart;
