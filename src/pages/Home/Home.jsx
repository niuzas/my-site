import { logRoles } from '@testing-library/react';
import React from 'react';
import { Contact, Info, Hero, Button, Section, TextInput } from '../../components';

const Home = () => (
  <>
    <Hero title="Darius Rainys" subtitle="programmer"></Hero>
    <Section direction="row">
      <Info
        title="About me 1"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint quos, minus cumque repellendus impedit assumenda quae laudantium modi unde perspiciatis nostrum ut temporibus, veritatis saepe molestias quod voluptatem natus tenetur."
        width="25%"
      ></Info>
      <Info
        title="About me 2"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint quos, minus cumque repellendus impedit assumenda quae laudantium modi unde perspiciatis nostrum ut temporibus, veritatis saepe molestias quod voluptatem natus tenetur."
        width="25%"
      ></Info>
      <Info
        title="About me 3"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint quos, minus cumque repellendus impedit assumenda quae laudantium modi unde perspiciatis nostrum ut temporibus, veritatis saepe molestias quod voluptatem natus tenetur."
        width="100%"
      ></Info>
    </Section>
    <Section direction="row">
      <Contact title="Contact" text="+370001002" width="33%"></Contact>
      <Contact title="Contact" text="+370001002" width="33%"></Contact>
      <Contact title="Contact" text="+370001002" width="33%"></Contact>
    </Section>
  </>
);

export default Home;
