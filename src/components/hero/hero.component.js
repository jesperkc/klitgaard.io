import React from 'react';
import styled from 'react-emotion';
import Grid from '../grid/grid.component';

class Hero extends React.Component {


  constructor() {
    super();

  }

  render() {

    return (
      <Grid.Container>
        <HeroWrapper>
          <Huge>HI.</Huge>
          <Normal>I’m a front-end developer <br />
            with a passion for <br />
            great UX through great UI
          </Normal>
        </HeroWrapper>
      </Grid.Container>
    )
  }
}


const HeroWrapper = styled('div')`
  font-size: 2.3vw;
  letter-spacing: 5px;
  padding: 0 10vw;
`;
const Huge = styled('div')`
  font-weight: 900;
  margin-left: -10px;
  line-height: .6;
  margin-bottom: 40px;
  letter-spacing: -5px;
  /* font-style: italic; */

  @media (orientation: portrait){
    font-size: 27vw;
    @media (min-width: 550px){
      font-size: 150px;
    }
  }
  @media (orientation: landscape){
    font-size: 27vh;
    @media (min-height: 400px){
      font-size: 150px;
    }
  }
`;
const Normal = styled('div')`
  font-size: 16px;
  br {
    display: none;
  }
  text-transform: uppercase;

  @media (orientation: portrait){
    @media (min-width: 550px){
      font-size: 20px;
    }
    @media (min-height: 400px){
      br {
        display: initial;
      }
    }
  }
  @media (orientation: landscape){
    @media (min-width: 550px){
      br {
        display: initial;
      }
    }
    @media (min-height: 400px){
      font-size: 20px;
    }
  }
`;



export default Hero;