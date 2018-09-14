import anime from 'animejs';
import React from 'react';
import styled, { css } from 'react-emotion';
import { ReactComponent as LogoSVG } from '../../static/logo-lines.svg';

class LogoAnimated extends React.Component {


  constructor() {
    super();

    this.state = {
      alternatevisible: true
    }
    this.paths = {
      line1: '#line-1',
      line2: '#line-2',
      line3: '#line-3',
      line4: '#line-4',
      line11: '#line-1-1',
      line21: '#line-2-1',
      line31: '#line-3-1',
      chevron1: '#chevrolet-1',
      chevron2: '#chevrolet-2',
      chevron3: '#chevrolet-3',
      chevron4: '#chevrolet-4',
      chevron11: '#chevrolet-1-1',
      chevron21: '#chevrolet-2-1',
      chevron31: '#chevrolet-3-1',
      chevronmask1: '#path-1',
      chevronmask2: '#path-3',
      chevronmask3: '#path-5',
      chevronmask4: '#path-7',
      chevronmask11: '#path-9',
      chevronmask21: '#path-11',
      chevronmask31: '#path-13',
    }

    this.GetNextColor = this.GetNextColor.bind(this);
    this.GetNextAlternateAnime = this.GetNextAlternateAnime.bind(this);
    this.GetNextAnime = this.GetNextAnime.bind(this);
  }
  componentDidMount() {
    //this.AnimeHideAlternates();
    this.GetNextAnime();
  }
  GetNextAnime() {
    this.AnimeShow();
    this.GetNextAlternateAnime();
  }
  GetNextAlternateAnime() {
    if (Math.random() >= .3) {
      console.log("this.state.alternatevisible", this.state.alternatevisible);
      if (this.state.alternatevisible == false) {
        this.AnimeShowAlternates();
        this.setState({ alternatevisible: true });
      } else {
        this.AnimeHideAlternates();
        this.setState({ alternatevisible: false });
      }
    }
  }
  GetNextColor() {
    var colors = ['#86DA48', '#6CB4C1', '#335BD3', '#000', '#000'];
    var color = colors[Math.floor(Math.random() * colors.length)];
    //this.AnimeColor(color);
  }
  AnimeHideAlternates() {
    console.log("AnimeHideAlternates");
    var timelineParameters = anime.timeline({
      loop: false,
      easing: 'easeInCubic',
      duration: 500,
      complete: () => {
        console.log("AnimeHideAlternates done");
      }
    });

    var offset = '-=300';
    timelineParameters
      .add({
        targets: this.paths.line1,
        duration: 1000
      })
      .add({ targets: this.paths.line11, translateY: [{ value: -200 }], offset: offset })
      .add({ targets: this.paths.line21, translateY: [{ value: -200 }], offset: offset })
      .add({ targets: this.paths.line31, translateY: [{ value: -200 }], offset: offset })

      .add({ targets: this.paths.chevronmask11, translateY: [{ value: -200 }], offset: offset })
      .add({ targets: this.paths.chevronmask21, translateY: [{ value: -200 }], offset: offset })
      .add({ targets: this.paths.chevronmask31, translateY: [{ value: -200 }], offset: offset })
      ;
  }
  AnimeShowAlternates() {
    console.log("AnimeShowAlternates");
    var timelineParameters = anime.timeline({
      loop: false,
      easing: 'easeInCubic',
      duration: 500,
      complete: () => {
        console.log("AnimeShowAlternates done");
      }
    });

    var offset = '-=300';
    timelineParameters
      .add({
        targets: this.paths.line1,
        duration: 2600
      })
      .add({ targets: this.paths.line11, translateY: [{ value: 0 }], offset: offset })
      .add({ targets: this.paths.line21, translateY: [{ value: 0 }], offset: offset })
      .add({ targets: this.paths.line31, translateY: [{ value: 0 }], offset: offset })

      .add({ targets: this.paths.chevronmask11, translateY: [{ value: 0 }], offset: offset })
      .add({ targets: this.paths.chevronmask21, translateY: [{ value: 0 }], offset: offset })
      .add({ targets: this.paths.chevronmask31, translateY: [{ value: 0 }], offset: offset })
      ;
  }

  AnimeColor(color) {
    var timelineParameters = anime.timeline({
      loop: false,
      easing: 'easeInCubic',
      duration: 200,
      complete: (anim) => {
        this.AnimeAlternateColor(color);
      }
    });

    var offset = '-=100';
    timelineParameters
      .add({ targets: this.paths.line1, fill: [{ value: color }], offset: offset })
      .add({ targets: this.paths.line2, fill: [{ value: color }], offset: offset })
      .add({ targets: this.paths.line3, fill: [{ value: color }], offset: offset })
      .add({ targets: this.paths.line4, fill: [{ value: color }], offset: offset })

      .add({ targets: this.paths.chevron1, fill: [{ value: color }], offset: offset })
      .add({ targets: this.paths.chevron2, fill: [{ value: color }], offset: offset })
      .add({ targets: this.paths.chevron3, fill: [{ value: color }], offset: offset })
      .add({ targets: this.paths.chevron4, fill: [{ value: color }], offset: offset })
      ;
  }

  AnimeAlternateColor(color) {
    var timelineParameters = anime.timeline({
      loop: false,
      easing: 'easeInCubic',
      duration: 200,
      complete: (anim) => {
      }
    });

    var offset = '-=100';
    timelineParameters
      .add({ targets: this.paths.line11, fill: [{ value: color }], offset: offset })
      .add({ targets: this.paths.line21, fill: [{ value: color }], offset: offset })
      .add({ targets: this.paths.line31, fill: [{ value: color }], offset: offset })

      .add({ targets: this.paths.chevron11, fill: [{ value: color }], offset: offset })
      .add({ targets: this.paths.chevron21, fill: [{ value: color }], offset: offset })
      .add({ targets: this.paths.chevron31, fill: [{ value: color }], offset: offset })

      ;
  }

  AnimeShow() {
    var timelineParameters = anime.timeline({
      loop: false,
      easing: 'easeInCubic',
      duration: 500,
      complete: (anim) => {
        this.hidden = false;
        this.GetNextAnime();
      }
    });

    var offset = '-=300';
    timelineParameters
      .add({
        targets: this.paths.line1,
        duration: 1000
      })
      .add({ targets: this.paths.line1, translateY: [{ value: 200 }], offset: offset })
      .add({ targets: this.paths.line2, translateY: [{ value: 200 }], offset: offset })
      .add({ targets: this.paths.line3, translateY: [{ value: 200 }], offset: offset })
      .add({ targets: this.paths.line4, translateY: [{ value: 200 }], offset: offset })

      .add({ targets: this.paths.chevronmask1, translateY: [{ value: 200 }], offset: offset })
      .add({ targets: this.paths.chevronmask2, translateY: [{ value: 200 }], offset: offset })
      .add({ targets: this.paths.chevronmask3, translateY: [{ value: 200 }], offset: offset })
      .add({ targets: this.paths.chevronmask4, translateY: [{ value: 200 }], offset: offset })

      .add({
        complete: this.GetNextColor
      })

      .add({ targets: this.paths.line1, translateY: [{ value: 0.1 }], offset: '-=500' })
      .add({ targets: this.paths.line2, translateY: [{ value: 0.1 }], offset: offset })
      .add({ targets: this.paths.line3, translateY: [{ value: 0.1 }], offset: offset })
      .add({ targets: this.paths.line4, translateY: [{ value: 0.1 }], offset: offset })

      .add({ targets: this.paths.chevronmask1, translateY: [{ value: 0 }], offset: offset })
      .add({ targets: this.paths.chevronmask2, translateY: [{ value: 0 }], offset: offset })
      .add({ targets: this.paths.chevronmask3, translateY: [{ value: 0 }], offset: offset })
      .add({ targets: this.paths.chevronmask4, translateY: [{ value: 0 }], offset: offset })
      ;
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
    polygon{
    fill: ${props => props.color};
}
`;

export default LogoAnimated;