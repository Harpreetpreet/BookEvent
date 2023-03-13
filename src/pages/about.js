import Attendees from '@/Components/about/Attendees';
import WhyAttend from '@/Components/about/WhyAttend';
import WhyChooses from '@/Components/about/WhyChooses';
import Layout from '@/Components/global/Layout';
import EventSponsor from '@/Components/home/EventSponsor';
import Subscribe from '@/Components/home/Subscribe';
import React from 'react';

export default function About() {
  return (
    <Layout pageTitle="Why Attend">
      <WhyAttend />
      <WhyChooses />
      <Attendees />
      <Subscribe />
      <EventSponsor />
    </Layout>
  );
}
