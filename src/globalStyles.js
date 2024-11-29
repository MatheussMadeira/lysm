import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Lora:wght@400;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Love+Light&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');  
@import url('https://fonts.googleapis.com/css2?family=La+Belle+Aurore&family=Love+Light&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
html, body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-image: #121212;
  }

  body {
    font-family: Arial, sans-serif;
    background-color: black;
    color: white;
    font-family: 'Lora', serif; 
  }
  body {
    font-family: 'Lora', serif; 
  }

`;

export default GlobalStyle;
