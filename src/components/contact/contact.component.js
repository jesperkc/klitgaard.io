import React from 'react';
import styled from 'react-emotion';
import Grid from '../grid/grid.component';

class Contact extends React.Component {


  constructor() {
    super();

  }

  render() {

    return (
      <Grid.Container>
        {/* <Huge>jesper@strangeklitgaard.dk
          </Huge> */}
      </Grid.Container>
    )
  }
}

const Huge = styled('div')`
  font-weight: 900;
  margin-left: -10px;
  line-height: .6;
  letter-spacing: -5px;
  /* font-style: italic; */

  @media (orientation: portrait){
    font-size: 14vw;
    @media (min-width: 550px){
      font-size: 80px;
    }
  }
  @media (orientation: landscape){
    font-size: 14vh;
    @media (min-height: 400px){
      font-size: 80px;
    }
  }
`;



export default Contact;