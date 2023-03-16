import React from 'react';
// import AboutEvent from '../Components/home/AboutEvent';
import HomeHero from '../Components/home/HomeHero';
import Layout from '../Components/global/Layout';
import TeamMembers from '../Components/home/TeamMembers';
// import EventProgram from '../Components/home/EventProgram';
import Subscribe from '../Components/home/Subscribe';
// import EventSponsor from '@/Components/home/EventSponsor';
import Pricing from '@/Components/home/Pricing';
import EventBlog from '@/Components/home/EventBlog';
import VenueDetail from '@/Components/home/VenueDetail';
import ContactForm from './../Components/home/ContactForm';
import dynamic from 'next/dynamic';

const EventProgram = dynamic(() => import('../Components/home/EventProgram'), {
  ssr: false,
});
const AboutEvent = dynamic(() => import('../Components/home/AboutEvent'), {
  ssr: false,
});
const EventSponsor = dynamic(() => import('../Components/home/EventSponsor'), {
  ssr: false,
});

export default function Home() {
  return (
    <Layout isHome>
      <AboutEvent />
      <TeamMembers />
      <EventProgram />
      <Subscribe />
      <EventSponsor />
      <Pricing isBackgroundAvailable/>
      <EventBlog />
      <VenueDetail />
      <ContactForm />
    </Layout>
  );
}
