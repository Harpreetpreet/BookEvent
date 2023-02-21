import React from 'react';
import AboutEvent from '../Components/home/AboutEvent';
import HomeHero from '../Components/home/HomeHero';
import Layout from '../Components/global/Layout';
import TeamMembers from '../Components/home/TeamMembers';
import EventProgram from '../Components/home/EventProgram';
import Subscribe from '../Components/home/Subscribe';

export default function Home() {
  return (
    <Layout hideNavbar>
      <HomeHero />
      <AboutEvent />
      <TeamMembers />
      <EventProgram />
      {/* <Subscribe /> */}
    </Layout>
  );
}
