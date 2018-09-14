import { injectGlobal } from 'react-emotion';

injectGlobal`
  html, body, #root {
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0; 
    font-family: 'Arial';
  }
  * {
  box-sizing: border-box;
}
*:before {
  box-sizing: border-box;
}
*:after {
  box-sizing: border-box;
}
  `;