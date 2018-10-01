import React from 'react';
import { ReactComponent as LogoSVG } from '../../static/sk-logo-full.svg';
import { LogoWrapper, logo_css } from './shared.component';

class LogoFull extends React.Component {

  render() {

    return (<LogoWrapper color={this.props.color}>
      <LogoSVG className={logo_css} />
    </LogoWrapper>)
  }
}

export default LogoFull;