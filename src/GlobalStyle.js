import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`


@import url('https://fonts.googleapis.com/css2?family=Kumbh+Sans:wght@100..900&display=swap');



:root {
  /* Primary Colors */
  --color-primary: hsl(26, 100%, 55%);
  --color-primary-light: hsl(25, 100%, 94%);
  
  /* Neutral Colors */
  --color-dark-blue: hsl(220, 13%, 13%);
  --color-dark-grayish-blue: hsl(219, 9%, 45%);
  --color-grayish-blue: hsl(220, 14%, 75%);
  --color-light-grayish-blue: hsl(223, 64%, 98%);
  --color-white: hsl(0, 0%, 100%);
  --color-black-lightbox: hsl(0, 0%, 0%);
}


* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}
html {
    font: 62.5%;
}

body {
   background-color: var(--color-white);
   font-family: "Kumbh Sans", sans-serif;
   
  }

  a {
    text-decoration: none;
    color: inherit; 
  }

  .slick-dots {
    bottom: -9rem; 
    text-align: start;
    gap: 1rem; 
  }

 .slick-dots li:not(:first-child) {
    margin-left: 7rem;
    ;}


.slick-prev,
.slick-next {
    width: 30px; /* Increase size */
    height: 30px; /* Increase size */
    top: 50%;
    transform: translate(0, -50%);
    z-index: 1000;
}

.slick-prev {
    left: -15px; 

    @media(max-width: 450px) {
        left: 30px;
    }
}

.slick-next {
    right: -15px;

    @media(max-width: 450px) {
        right: 30px;
    }

   
}



.slick-prev:before,
.slick-next:before {
    font-size: 30px; /* Increase icon size */
    line-height: 50px; /* Center icon vertically */
   
}




  

`;

export default GlobalStyle;
