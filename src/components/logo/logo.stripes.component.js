import React from 'react';
import styled, { css } from 'react-emotion';
import { ReactComponent as LogoSVG } from '../../static/logo-stripes.svg';

class LogoStripes extends React.Component {


  constructor() {
    super();

  }

  render() {

    return (<LogoWrapper color={this.props.color}>
      <LogoSVG className={logo_css} />
    </LogoWrapper>)
  }
}

const logo_css = css`
width: 40px;
height: 40px;


`;

const LogoWrapper = styled('div')`

    svg{
      position: fixed;
      top: 40px;
      left: 40px;
    }
    path{
        fill: ${props => props.color};
    }
`;

export default LogoStripes;