import styled from "styled-components";
import { useCart } from "../CartContext";
import { useState } from "react";

const StyledHeader = styled.header`
  height: 8rem;
  width: 80%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 14.6rem auto 8rem 4rem;
  align-items: center;
  border-bottom: 1px solid rgba(51, 51, 51, 0.253);
  position: relative;

  @media (max-width: 450px) {
    padding: 1.4rem;
    grid-template-columns: 2rem 6rem 7rem 3rem 3rem;
    width: 100%;
    height: 6rem;
  }

  ul {
    list-style: none;
    display: flex;
    gap: 2.8rem;

    @media (max-width: 450px) {
      display: none;
    }
  }

  li {
    font-size: 1.1rem;

    a {
      display: inline-block;
      position: relative;
      color: var(--color-dark-grayish-blue);

      &::after {
        content: "";
        position: absolute;
        width: 100%;
        height: 4px;
        background-color: var(--color-primary);
        bottom: -3.3rem;
        left: 0;
        transform: scale(0);
        transform-origin: center;
        transition: all 0.2s ease;
      }
    }

    a:hover,
    a:active {
      color: var(--color-dark-blue);
    }

    a:hover::after {
      transform: scale(1);
    }
  }
`;

const MobileNav = styled.nav`
  display: none;

  @media (max-width: 450px) {
    display: block;
    ul {
      display: flex;
      flex-direction: column;
      gap: 1.2rem;
      padding-left: 2rem;
      background-color: white;
      margin-top: 7rem;
    }

    li {
      font-size: 1.4rem;

      a {
        color: var(--color-dark-grayish-blue);
        text-decoration: none;
        padding: 0.8rem 0;
        display: block;
      }

      a:hover {
        color: var(--color-dark-blue);
      }
    }
  }
`;

const Logo = styled.img`
  height: 1.5rem;

  @media (max-width: 450px) {
    height: 1.2rem;
  }
`;
const MenuButton = styled.button`
  border: none;
  cursor: pointer;
  display: none;
  z-index: 1000;

  @media (max-width: 450px) {
    display: block;
  }
`;

const CartButton = styled.button`
  border: none;
  background: none;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  cursor: pointer;

  svg path {
    transition: all 0.3s ease;
  }

  &:hover svg path {
    fill: var(--color-dark-blue);
  }
`;

const Avatar = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 3.5rem;
  width: 3.5rem;
  border: 3px solid transparent;
  border-radius: 50%;
  transform: scale(1);
  cursor: pointer;
  transition: transform 0.3s ease, border-color 0.3s ease;
  will-change: transform, border-color;

  @media (max-width: 450px) {
    height: 2.5rem;
    width: 2.5rem;
  }

  &:hover {
    border-color: var(--color-primary);
    transform: scale(1.05);
  }
`;

const Popup = styled.span`
  position: absolute;
  display: inline-block;
  font-size: 0.6rem;
  height: 1.2rem;
  width: 1.2rem;
  background-color: var(--color-primary);
  color: var(--color-white);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  top: -1rem;
  right: 2.5rem;

  @media (max-width: 450px) {
    right: 0;
  }
`;

const NavBar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 40%;
  height: 110vh;
  background-color: rgb(255, 255, 255);
  z-index: 100;
`;

function Header() {
  const { dispatch, cart } = useCart();
  const [isOpen, setIsOpen] = useState(false);
  const isItem = cart.length > 0;

  function handleOpen() {
    dispatch({ type: "Cart/open" });
  }

  function handleOpenMenu() {
    setIsOpen((isOpen) => !isOpen);
  }

  return (
    <StyledHeader>
      <MenuButton onClick={handleOpenMenu}>
        {isOpen ? (
          <img src="/images/icon-close.svg" alt="close icon" />
        ) : (
          <img src="/images/icon-menu.svg" alt="menu icon" />
        )}
      </MenuButton>

      <Logo src="/images/logo.svg" alt="company logo" />

      {isOpen && (
        <NavBar>
          <MobileNav>
            <ul>
              <li>
                <a href="#">Collections</a>
              </li>
              <li>
                <a href="#">Men</a>
              </li>
              <li>
                <a href="#">Women</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </MobileNav>
        </NavBar>
      )}

      <nav>
        <ul>
          <li>
            <a href="#">Collections</a>
          </li>
          <li>
            <a href="#">Men</a>
          </li>
          <li>
            <a href="#">Women</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>

      <CartButton aria-label="Cart" onClick={handleOpen}>
        <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
            fill="#69707D"
            fillRule="nonzero"
          />
        </svg>
        {isItem && <Popup>1</Popup>}
      </CartButton>

      <Avatar src="/images/image-avatar.png" alt="Profile avatar" />
    </StyledHeader>
  );
}

export default Header;
