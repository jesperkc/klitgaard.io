import React from 'react';
import styled, { css } from "react-emotion";
import ScrollPercentage from 'react-scroll-percentage';
// import Overlay from '../overlay/overlay.component';
import CaseHeader from '../case/case.header.component';
import Grid from '../grid/grid.component';

class CaseSection extends React.Component {

  constructor() {
    super();

    this.state = {
      fixedTop: false,
      offset: 0
    };

    this.scrollChange = this.scrollChange.bind(this);
  }

  scrollChange(percentage, inView) {
    if (inView) {
      console.log(percentage, inView);
    }
    //this.setState({ offset: percentage - .5 });

    if (percentage >= .5) {
      this.setState({ normalClassName: '' });
    } else {
      this.setState({ normalClassName: 'hidden' });
    }
  }
  render() {

    const { title, description, backgroundColor, logoColor, marginBottom, url } = this.props;

    return (
      <StyledSection className={'StyledSection'} backgroundColor={backgroundColor} color={logoColor} marginBottom={marginBottom}>

        {/* <Overlay color={'#000'} logo={this.props.logo} /> */}

        <CaseHeader title={title} description={description} url={url} />
        <CaseContents justify={'start'} align={'flex-start'} />
        <CaseContents justify={'start'} align={'flex-end'} />
        <CaseContents justify={'start'} align={'flex-start'} />
        <CaseContents justify={'start'} align={'center'} />
      </StyledSection>
    )
  }
}

const CaseContents = ({ justify, align }) => (
  <ScrollPercentage>
    {({ percentage, inView }) => (
      <MediaContainer inView={percentage > .1} percentage={percentage}>
        <Grid.Container>
          <Grid.Row>
            <Grid.Cell justify={justify} align={align}>
              <video autoPlay loop playsInline muted className={screenshot}>
                <source src="/example.webm" type="video/webm" />
                {/* <source src="https://antoni.de/wp-content/uploads/2018/09/Treets_Loop.webm" type="video/webm" /> */}
                {/* <source src="https://antoni.de/wp-content/uploads/2018/09/Treets_Loop.mp4" type="video/mp4" /> */}
              </video>
              {/* <img src="https://cdn.dribbble.com/users/746931/screenshots/5156964/arquito_concept_1.jpg" className={screenshot} /> */}
            </Grid.Cell>
          </Grid.Row>
        </Grid.Container>
      </MediaContainer>
    )}
  </ScrollPercentage>
)

const MediaContainer = styled('div')`
  padding: 40px;
  z-index: 10;
  position: relative;

  transition: all 1s ease-out;
  /* transform: ${props => props.inView == true ? 'translateY(0)' : 'translateY(5vh)'}; */
  transform: ${props => `translateY(${props.percentage * -10}vh)`};
`;

const screenshot = css`
    box-shadow: 0 10px 30px 0 #00000010, 0 2px 10px 0 #00000010;
    max-width: 70%;
    margin: 2vh 0;

`;

const StyledSection = styled('div')`
  /* display: flex; */
  min-height: 100vh;
  /* justify-content: center;
  align-items: center; */
  /* padding: 80px 0; */
  position: relative;
  /* background-color: ${props => props.backgroundColor}; */
  /* 
  background-blend-mode: soft-light;
  background-image: linear-gradient(45deg,#000,#bb8e55); */
  /* background-attachment: fixed; */
  color: ${props => props.color};
  overflow: hidden;
  /* margin-bottom: ${props => props.marginBottom ? props.marginBottom : '50vh'}; */
`;

export default CaseSection;