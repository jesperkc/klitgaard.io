import React from 'react';
import Style from '../../style/style';
import Grid from '../grid/grid.component';
import { Huge } from '../hero/hero.component';

const Contact = () => (
  <Grid.Container>
    <Grid.Row>
      <Grid.Cell>
        <Style.OnVisibleText>
          <Huge>SAY HI.</Huge>
          <br />
          <div><Style.a href="mailto:jesper@strangeklitgaard.dk" target="_blank">jesper@strangeklitgaard.dk</Style.a></div>
          <div>+45 51 64 90 80</div>
          <br />
          <div><Style.a href="http://www.codepen.io/jesperkc" target="_blank">CodePen</Style.a></div>
          <div><Style.a href="http://www.behance.com/jesperkc" target="_blank">Behance</Style.a></div>
          <div><Style.a href="http://www.dribbble.com/jesperkc" target="_blank">Dribbble</Style.a></div>
          <div><Style.a href="http://www.linkedin.com/in/jesperkc" target="_blank">LinkedIn</Style.a></div>
          <div><Style.a href="http://www.twitter.com/jesperkc" target="_blank">Twitter</Style.a></div>
        </Style.OnVisibleText>
      </Grid.Cell>
    </Grid.Row>
  </Grid.Container>
)




export default Contact;