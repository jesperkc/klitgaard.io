import React from 'react';
import styled from 'react-emotion';

class Case extends React.Component {


  constructor() {
    super();

  }

  render() {

    return (
      <StyledCase>
        {this.props.children}
      </StyledCase>
    )
  }
}


const StyledCase = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100%;
  width: 100%;

  img, video{
    max-width: 60vw;
    margin: 0 auto;
  }
`;

export default Case;