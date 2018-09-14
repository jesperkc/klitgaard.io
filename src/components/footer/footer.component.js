import React from 'react';
import styled from 'react-emotion';

class Footer extends React.Component {


  constructor() {
    super();

  }

  render() {

    return (<FooterWrapper color={this.props.color}>
      <div>Klitgaard</div>
    </FooterWrapper>)
  }
}


const FooterWrapper = styled('div')`
    div{
      position: fixed;
      bottom: 40px;
      left: 40px;
    }
    color: ${props => props.color};
`;

export default Footer;