import React from 'react';
import styled, { css } from 'react-emotion';
import { ReactComponent as LogoSVG } from '../../static/sk-logo-full.svg';

class LogoFull extends React.Component {


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
  width: auto;
  height: 50px;
  margin-left: 40px;
  overflow: visible;
  position: relative;
`;

const LogoWrapper = styled('div')`
  overflow: hidden;
  position: fixed;
  left: 0;
  top: 40px;
  width: 100%;
  font-size: 0;

    polygon{
        fill: ${props => props.color};
    }
`;

export default LogoFull;