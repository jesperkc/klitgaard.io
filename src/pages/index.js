import React from 'react';
import styled from 'react-emotion';
import Contact from '../components/contact/contact.component';
import Hero from '../components/hero/hero.component';
import Section from '../components/section/section.component';

const IndexPage = () => (
  <div>
    <Section backgroundColor={'#fff'} logoColor={'#000'} logo={'animated'}>
      <Hero />
    </Section>
    <Section backgroundColor={'#BCE784'} logoColor={'#fff'} logo={'full'}></Section>
    <Section backgroundColor={'#5DD39E'} logoColor={'#BCE784'} logo={'stripes'}> </Section>
    <Section backgroundColor={'#348AA7'} logoColor={'#5DD39E'} logo={'full'}></Section>
    <Section backgroundColor={'#525174'} logoColor={'#348AA7'} logo={'stripes'}></Section>
    <Section backgroundColor={'#513B56'} logoColor={'#525174'} logo={'full'}></Section>
    <Section backgroundColor={'#fff'} logoColor={'#000'} logo={'full'}><Contact /></Section>
    <BG></BG>
  </div>
)

const BG = styled('div')`
  position: fixed;
  top: 0;
  background-image: linear-gradient(45deg, red, blue);
`;

export default IndexPage
