import React from 'react';
import styled from 'react-emotion';
import Overlay from '../overlay/overlay.component';

class Section extends React.Component {


  constructor() {
    super();

  }

  render() {

    return (<StyledSection backgroundColor={this.props.backgroundColor} color={this.props.logoColor}>
      <Overlay color={this.props.logoColor} logo={this.props.logo} />
      {this.props.children}
      {/* <Slider factor={0.5}
        slides={pages.length}
        children={renderPages} /> */}

    </StyledSection>)
  }
}


const Intro = props => (
  <div>
    <h1>OverScroll</h1>
    <h2>A simple scroll based content-slider</h2>
  </div>
)

const Page2 = props => (
  <div>
    <h1>{~~(props.progress)}%</h1>
    <h2>Know when the content changes</h2>
    <h3>Work with the progress</h3>
  </div>
)

const Page3 = props => (
  <div>
    <h1>{~~(props.progress)}%</h1>
    <h2>Use anchors to jump to pages</h2>
    <h3>⬅︎ Try it here</h3>
  </div>
)


const renderPages = (page, progress, prefix) => {
  const Content = pages[page] || (x => null)

  return (
    <div >
      <div>
        <Content progress={progress} />
      </div>
    </div>
  )
}

const pages = [Intro, Page2, Page3];

const StyledSection = styled('div')`
display: flex;
min-height: 100vh;
/* justify-content: center;
align-items: center; */
padding: 80px 40px;
position: relative;
background-color: ${props => props.backgroundColor};
background-blend-mode: soft-light;
background-image: linear-gradient(45deg,#000,#bb8e55);
/* background-attachment: fixed; */
color: ${props => props.color};
`;

export default Section;