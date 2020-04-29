import React from 'react';

import CentredHalf from '../../components/CentredHalf/CentredHalf';
import Container from '../../components/Container/Container';
import Card from '../../components/Card/Card';

import './MainSection.styles.css';

const MainSection = () => {
  return (
    <Container>
      <section id='main-section'>
        <CentredHalf>
          <img src='https://i.ibb.co/T0dj2KJ/home-house-building-main-page-512.png' alt='contacts' />
        </CentredHalf>
        <CentredHalf
          style={{ justifyContent: 'center', alignItems: 'baseline' }}
        >
          <Card 
            title="Main page" 
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
              ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
              accumsan lacus vel facilisis."
          />
        </CentredHalf>
      </section>
    </Container>
  );
};

export default MainSection;
