import React from 'react';
import AboutEvent from '../Components/home/AboutEvent';
import HomeHero from '../Components/home/HomeHero';
import Layout from '../Components/global/Layout';
import TeamMembers from '../Components/home/TeamMembers';
import EventProgram from '../Components/home/EventProgram';
import Subscribe from '../Components/home/Subscribe';
import EventSponsor from '@/Components/home/EventSponsor';
import BuyNow from '../Components/home/Pricing';
import EventBlog from '@/Components/home/EventBlog';

export default function Home() {
  return (
    <Layout hideNavbar>
      <HomeHero />
      <AboutEvent />
      <TeamMembers />
      <EventProgram />
      <Subscribe />
      <EventSponsor />
      <BuyNow />
      <EventBlog />
    </Layout>
  );
}
