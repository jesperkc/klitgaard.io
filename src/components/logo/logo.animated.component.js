import anime from 'animejs';
import React from 'react';
import styled, { css } from 'react-emotion';
import { ReactComponent as LogoSVG } from '../../static/sk-logo-lines.svg';

class LogoAnimated extends React.Component {


  constructor() {
    super();

    this.visible = true;
    this.easing = 'easeInOutQuad';
    this.duration = 500;
    this.delay = 500;


    //this.GetNextColor = this.GetNextColor.bind(this);
    //this.GetNextAlternateAnime = this.GetNextAlternateAnime.bind(this);
    this.GetNextAnime = this.GetNextAnime.bind(this);
  }
  componentDidMount() {
    //this.AnimeHideAlternates();
    this.GetNextAnime();
  }
  GetNextAnime() {
    setTimeout(() => {
      this.GetNextAnime();
    }, 2500);

    if (this.visible) {

      var r = Math.random();
      if (r >= .8) {
        this.AnimeHideOddEvenOffset();
      } else if (r >= .4) {
        this.AnimeHide();
      } else if (r >= .2) {
        this.AnimeHideInstant();
      } else {
        this.AnimeHideOddEven();
      }

    } else {
      var r = Math.random();
      if (r >= .8) {
        this.AnimeShowOddEvenOffset();
      } else if (r >= .4) {
        this.AnimeShow();
      } else if (r >= .2) {
        this.AnimeShowInstant();
      } else {
        this.AnimeShowOddEven();
      }

    }
  }

  AnimeShow() {
    this.TranslateBlockDefault(1, 10, NormalDirection);
    this.TranslateBlockDefault(2, 200, NormalDirection);
    this.TranslateBlockDefault(3, 400, NormalDirection);
    this.TranslateBlockDefault(4, 600, NormalDirection);

    this.visible = true;
  }

  AnimeHide() {
    this.TranslateBlockUp(1, 10, false, NormalDirection);
    this.TranslateBlockDown(2, 200, false, NormalDirection);
    this.TranslateBlockUp(3, 400, false, NormalDirection);
    this.TranslateBlockDown(4, 600, true, NormalDirection);

    this.visible = false;
  }

  AnimeShowOddEvenOffset() {
    this.TranslateBlockOddEvenOffsetDefault(1, 10);
    this.TranslateBlockOddEvenOffsetDefault(2, 200);
    this.TranslateBlockOddEvenOffsetDefault(3, 400);
    this.TranslateBlockOddEvenOffsetDefault(4, 600);

    this.visible = true;
  }
  AnimeHideOddEvenOffset() {
    this.TranslateBlockOddEvenUpOffset(1, 10, false);
    this.TranslateBlockOddEvenDownOffset(2, 200, false);
    this.TranslateBlockOddEvenUpOffset(3, 400, false);
    this.TranslateBlockOddEvenDownOffset(4, 600, true);

    this.visible = false;
  }

  AnimeShowOddEven() {
    this.TranslateBlockOddEvenDefault(1, 10);
    this.TranslateBlockOddEvenDefault(2, 200);
    this.TranslateBlockOddEvenDefault(3, 400);
    this.TranslateBlockOddEvenDefault(4, 600);

    this.visible = true;
  }
  AnimeHideOddEven() {
    this.TranslateBlockOddEvenUp(1, 10, false);
    this.TranslateBlockOddEvenDown(2, 200, false);
    this.TranslateBlockOddEvenUp(3, 400, false);
    this.TranslateBlockOddEvenDown(4, 600, true);

    this.visible = false;
  }

  AnimeShowInstant() {
    this.TranslateBlockDefault(1, 0, NormalDirectionFast, InstantDuration);
    this.TranslateBlockDefault(2, 0, NormalDirectionFast, InstantDuration);
    this.TranslateBlockDefault(3, 0, NormalDirectionFast, InstantDuration);
    this.TranslateBlockDefault(4, 0, NormalDirectionFast, InstantDuration);

    this.visible = true;
  }
  AnimeHideInstant() {
    this.TranslateBlockUp(1, 10, false, NormalDirectionFast, InstantDuration);
    this.TranslateBlockDown(2, 200, false, NormalDirectionFast, InstantDuration);
    this.TranslateBlockUp(3, 400, false, NormalDirectionFast, InstantDuration);
    this.TranslateBlockDown(4, 400, true, NormalDirectionFast, InstantDuration);

    this.visible = false;
  }


  TranslateBlockDefault(group, delay, direction, duration) {
    setTimeout(() => {
      document.querySelector(`#g-${group}`).setAttribute('class', `${TranslateDefault} ${direction} ${duration}`);
    }, delay);
  }
  TranslateBlockDown(group, delay, alternate, direction, duration) {
    setTimeout(() => {
      if (alternate) {
        document.querySelector(`#g-${group}`).setAttribute('class', `${TranslateBlockDownAlt} ${direction} ${duration}`);
      } else {
        document.querySelector(`#g-${group}`).setAttribute('class', `${TranslateBlockDown} ${direction} ${duration}`);
      }
    }, delay);
  }
  TranslateBlockUp(group, delay, alternate, direction, duration) {
    setTimeout(() => {
      document.querySelector(`#g-${group}`).setAttribute('class', `${TranslateBlockUp} ${direction} ${duration}`);
    }, delay);
  }

  HideBlockInstantUp(group, delay, alternate) {
    setTimeout(() => {
      document.querySelector(`#g-${group}`).setAttribute('class', `${TranslateBlockUp} ${NormalDirection} ${InstantDuration}`);
    }, delay);
  }

  TranslateBlockOddEvenUp(group, delay, alternate, cb) {
    setTimeout(() => {
      document.querySelector(`#g-${group}`).setAttribute('class', `${TranslateBlockUp} ${OddEvenDirection}`);
    }, delay);
  }
  TranslateBlockOddEvenDown(group, delay, alternate, cb) {
    setTimeout(() => {
      if (alternate) {
        document.querySelector(`#g-${group}`).setAttribute('class', `${TranslateBlockDownAlt} ${OddEvenDirection}`);
      } else {
        document.querySelector(`#g-${group}`).setAttribute('class', `${TranslateBlockDown} ${OddEvenDirection}`);
      }
    }, delay);
  }

  TranslateBlockOddEvenUpOffset(group, delay, alternate, cb) {
    setTimeout(() => {
      document.querySelector(`#g-${group}`).setAttribute('class', `${TranslateBlockUp} ${OddEvenOffsetDirection}`);
    }, delay);
  }
  TranslateBlockOddEvenDownOffset(group, delay, alternate, cb) {
    setTimeout(() => {
      if (alternate) {
        document.querySelector(`#g-${group}`).setAttribute('class', `${TranslateBlockDownAlt} ${OddEvenOffsetDirection}`);
      } else {
        document.querySelector(`#g-${group}`).setAttribute('class', `${TranslateBlockDown} ${OddEvenOffsetDirection}`);
      }
    }, delay);
  }

  TranslateBlockOddEvenDefault(group, delay, cb) {
    setTimeout(() => {
      document.querySelector(`#g-${group}`).setAttribute('class', `${TranslateDefault} ${OddEvenDirection}`);
    }, delay);
  }
  TranslateBlockOddEvenOffsetDefault(group, delay, cb) {
    setTimeout(() => {
      document.querySelector(`#g-${group}`).setAttribute('class', `${TranslateDefault} ${OddEvenOffsetDirection}`);
    }, delay);
  }
  TranslateBlockOddDefault(group, delay, cb) {
    var timelineParameters = anime.timeline({
      loop: false,
      easing: this.easing,
      duration: this.duration,
      complete: (anim) => {
        cb && cb();
      }
    });
    var offset = '-=300';
    timelineParameters
      .add({ targets: document, duration: delay + 300 + this.delay })
      .add(this.TranslateDefault(`#g-${group} g:nth-child(2) polygon`, offset))
      .add(this.TranslateDefault(`#g-${group} g:nth-child(4) polygon`, offset))
      ;
  }
  TranslateDown(line, offset) {
    return { targets: line, translateY: [{ value: 100 }], translateX: [{ value: -50 }], offset: offset };
  }
  TranslateDownAlt(line, offset) {
    return { targets: line, translateY: [{ value: 100 }], translateX: [{ value: 50 }], offset: offset };
  }
  TranslateUp(line, offset) {
    return { targets: line, translateY: [{ value: -100 }], translateX: [{ value: 50 }], offset: offset };
  }
  TranslateUpAlt(line, offset) {
    return { targets: line, translateY: [{ value: -100 }], translateX: [{ value: -50 }], offset: offset };
  }
  TranslateDefault(line, offset) {
    return { targets: line, translateY: [{ value: 0 }], translateX: [{ value: 0 }], offset: offset };
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

const TranslateDefault = css`
  g polygon{
    transform: translateY(0) translateX(0);
    transition: all 500ms;
  }
`;
const TranslateBlockUp = css`
  g polygon{
    transform: translateY(-100px) translateX(50px);
    transition: all 500ms;
  }
`;
const TranslateBlockDown = css`
  g polygon{
    transform: translateY(100px) translateX(-50px);
    transition: all 500ms;
  }
`;
const TranslateBlockDownAlt = css`
  g polygon{
    transform: translateY(100px) translateX(50px);
    transition: all 500ms;
  }
`;


const InstantDuration = css`
  g polygon{
    transition: all 5ms;
  }
`;




const NormalDirection = css`
  g:nth-child(1) polygon{
    transition-delay: 0ms;
  }
  g:nth-child(2) polygon{
    transition-delay: 200ms;
  }
  g:nth-child(3) polygon{
    transition-delay: 400ms;
  }
  g:nth-child(4) polygon{
    transition-delay: 600ms;
  }
  g:nth-child(5) polygon{
    transition-delay: 800ms;
  }
`;

const NormalDirectionFast = css`
  g:nth-child(1) polygon{
    transition-delay: 0ms;
  }
  g:nth-child(2) polygon{
    transition-delay: 50ms;
  }
  g:nth-child(3) polygon{
    transition-delay: 100ms;
  }
  g:nth-child(4) polygon{
    transition-delay: 150ms;
  }
  g:nth-child(5) polygon{
    transition-delay: 200ms;
  }
`;

const CenterDirection = css`
  g:nth-child(1) polygon{
    transition-delay: 0ms;
  }
  g:nth-child(2) polygon{
    transition-delay: 200ms;
  }
  g:nth-child(3) polygon{
    transition-delay: 400ms;
  }
  g:nth-child(4) polygon{
    transition-delay: 200ms;
  }
  g:nth-child(5) polygon{
    transition-delay: 0ms;
  }
`;
const AlternateDirection = css`
  g:nth-child(5) polygon{
    transition-delay: 0ms;
  }
  g:nth-child(4) polygon{
    transition-delay: 200ms;
  }
  g:nth-child(3) polygon{
    transition-delay: 400ms;
  }
  g:nth-child(2) polygon{
    transition-delay: 600ms;
  }
  g:nth-child(1) polygon{
    transition-delay: 800ms;
  }
`;

const OddEvenDirection = css`
g:nth-child(1) polygon{
  transition-delay: 0ms;
}
g:nth-child(3) polygon{
  transition-delay: 200ms;
}
g:nth-child(5) polygon{
  transition-delay: 400ms;
}
g:nth-child(2) polygon{
  transition-delay: 600ms;
}
g:nth-child(4) polygon{
  transition-delay: 800ms;
}
`;

const OddEvenOffsetDirection = css`
g:nth-child(1) polygon{
  transition-delay: 300ms;
}
g:nth-child(3) polygon{
  transition-delay: 600ms;
}
g:nth-child(5) polygon{
  transition-delay: 300ms;
}
g:nth-child(2) polygon{
  transition-delay: 0ms;
}
g:nth-child(4) polygon{
  transition-delay: 0ms;
}
`;





const LogoWrapper = styled('div')`
    overflow: hidden;
    /* background-color: pink; */
    position: fixed;
    left: 0;
    top: 40px;
    width: 100%;
    font-size: 0;
    svg{
      
    }
    polygon{
      fill: ${props => props.color};
    }
`;

export default LogoAnimated;