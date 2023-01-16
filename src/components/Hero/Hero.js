import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Oliver Sanders <br />
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
        Welcome to my portfolio where I share many web based projects that I have worked on. My main focus is Frontend React but I'm always open to trying out new frameworks and languages!
      </SectionText>
      <Button onClick={() => window.location = "https://github.com/ohsand"}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;