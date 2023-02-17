import React from 'react';
import AboutEvent from '../Components/home/AboutEvent';
import HomeHero from '../Components/home/HomeHero';
import Layout from '../Components/global/Layout';
import TeamMembers from '../Components/home/TeamMembers';

export default function Home() {
  return (
    <Layout hideNavbar>
      <HomeHero />
      <AboutEvent />
      <TeamMembers />
    </Layout>
  );
}
