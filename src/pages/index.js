import React from 'react';
import Case from '../components/case/case.component';
import Section from '../components/section/section.component';

const IndexPage = () => (
  <div>
    <Section backgroundColor={'#fff'} logoColor={'#000'} logo={'animated'}></Section>
    <Section backgroundColor={'#000'} logoColor={'#fff'} logo={'full'}></Section>
    <Section backgroundColor={'#215b40'} logoColor={'#da291c'} logo={'stripes'}>
      <Case></Case>
    </Section>
    <Section backgroundColor={'#DF1AA4'} logoColor={'#FF7E00'} logo={'full'}></Section>
    <Section backgroundColor={'#FF7E00'} logoColor={'#1677E5'} logo={'stripes'}></Section>
  </div>
)

export default IndexPage
