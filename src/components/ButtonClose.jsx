import styled from "styled-components";

const StyledButton = styled.button`
  border: none;
  cursor: pointer;
  position: absolute;
  right: 32%;
  top: 10%;
  background: none;

  svg path {
    fill: var(--color-primary);
  }
`;

function ButtonClose({ onSlider }) {
  function handleClick() {
    onSlider((value) => !value);
  }
  return (
    <StyledButton onClick={handleClick}>
      <svg
        width="40"
        height="40"
        viewBox="0 0 25 25"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
          fill="#69707D"
          fillRule="evenodd"
        />
      </svg>
    </StyledButton>
  );
}

export default ButtonClose;
