import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyle = createGlobalStyle`
  
  ${normalize}
  :root {
    
    // Main
    --Main-color1 : #F57A08;
    
    // Sub
    --Sub-color1 : #002F49;
    --Sub-color2 : #4F8BAD;
    --Sub-color3 : #CEE4F1;
    
    // greyScale
    --grey-color1:#191919; // stroke, icon
    --grey-color2:#5f5f5f; // button general
    --grey-color3:#767676; // stroke
    --grey-color4:#99999;  // stroke
    --grey-color5:#bfbfbf; // button disabled
    --grey-color6:#dbdbdb; // components
    --grey-color7:#f4f3f2; // tag
    --grey-color8:#f5f5f5; // navigation bar
    --grey-color9:#f9f7f7; // background

    // black, white

    --white : #ffffff
    
    
  }
   html,body {
    margin: 0;
    padding: 0;
    background-color: var(--grey-color8);
    -ms-overflow-style: none;
    
   }
   ::-webkit-scrollbar {
  display: none;
  }
   *{
   box-sizing: border-box;
   font-family: 'Pretendard';
 }
   button{
    border : none;
    cursor : pointer;
   }

   a {
  text-decoration: none;
}
li {
  list-style: none;
}

  
    
`;

export default GlobalStyle;
