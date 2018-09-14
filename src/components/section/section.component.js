import React from 'react';
import styled from 'react-emotion';
import Overlay from '../overlay/overlay.component';

class Section extends React.Component {


  constructor() {
    super();

  }

  render() {

    return (<StyledSection backgroundColor={this.props.backgroundColor}>
      <Overlay color={this.props.logoColor} logo={this.props.logo} />
      {this.props.children}

    </StyledSection>)
  }
}


const StyledSection = styled('div')`
display: flex;
min-height: 100vh;
/* justify-content: center;
align-items: center; */
padding: 80px 40px;
position: relative;
background-color: ${props => props.backgroundColor};
`;

export default Section;