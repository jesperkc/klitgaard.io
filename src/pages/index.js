import React from 'react';
import styled from 'react-emotion';
//import CaseSection from '../components/case/case.component';
import Contact from '../components/contact/contact.component';
// import Hero from '../components/hero/hero.component';
import Layout from '../components/layouts/';
import Section from '../components/section/section.component';

const IndexPage = props => (
  <Layout location={props.location}>
    {/* <Section backgroundColor={'#fff'} logoColor={'#000'} logo={''}>
      <Hero />
    </Section> */}
    {/* <CaseSection backgroundColor={'#BCE784'} logoColor={'#fff'} logo={'full'} title={'Kontrapunkt'} description={'Corporate website'} url={'kontrapunkt.com'}></CaseSection>
    <CaseSection backgroundColor={'#5DD39E'} logoColor={'#BCE784'} logo={'stripes'} title={'Bunker One'} description={'Corporate website'} url={'bunkerone.com'}></CaseSection>
    <CaseSection backgroundColor={'#348AA7'} logoColor={'#5DD39E'} logo={'full'} title={'Danish Crown'} description={'Design hub'}></CaseSection> */}
    {/* <Section backgroundColor={'#BCE784'} logoColor={'#fff'} logo={'stripes'} title={'Case 2'}></Section>
    <Section backgroundColor={'#348AA7'} logoColor={'#BCE784'} logo={'full'} title={'Case 2'} marginBottom={'40vh'}></Section> */}
    <Section backgroundColor={'#fff'} logoColor={'#000'} logo={'full'}><Contact /></Section>
    <BG></BG>
  </Layout>
)

const BG = styled('div')`
  position: fixed;
  top: 0;
  background-image: linear-gradient(45deg, red, blue);
`;

export default IndexPage
