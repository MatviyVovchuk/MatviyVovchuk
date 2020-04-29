import React from 'react';

import CentredHalf from '../../components/CentredHalf/CentredHalf';
import Container from '../../components/Container/Container';
import Card from '../../components/Card/Card';

const ContactsSection = () => {
  return (
    <Container>
      <section id='main-section'>
        <CentredHalf>
          <img src='https://i.ibb.co/wdSknzB/contact.png' width='550' alt='contact' />
        </CentredHalf>
        <CentredHalf
          style={{ alignItems: 'baseline', justifyContent: 'center' }}
        >
          <Card title='Facebook' text='https://www.facebook.com/userid' />
          &nbsp;
          <Card title='Instagram' text='https://www.instagram.com/userid' />
        </CentredHalf>
      </section>
    </Container>
  );
};

export default ContactsSection;
