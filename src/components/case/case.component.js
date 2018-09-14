import React from 'react';
import styled from 'react-emotion';

class Case extends React.Component {


  constructor() {
    super();

  }

  render() {

    return (
      <StyledCase>
        {/* <img src="/static/bunkerone.com_(iPad Pro).png" /> */}
        {/* <video autoPlay={true}>
          <source src="/static/bunkerone.mov" />
        </video> */}
      </StyledCase>
    )
  }
}


const StyledCase = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  width: 100%;

  img, video{
    max-width: 60vw;
    margin: 0 auto;
  }
`;

export default Case;