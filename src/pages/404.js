import React from 'react';
import Section from '../components/section/section.component';

const NotFoundPage = () => (
  <div>
    <Section backgroundColor={'#000'} logoColor={'#fff'} logo={'animated'}>
      <div style={{ color: '#fff' }}>
        <h1>NOT FOUND</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      </div>
    </Section>
  </div>
)

export default NotFoundPage
