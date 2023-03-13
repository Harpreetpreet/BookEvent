import Layout from '@/Components/global/Layout';
import SpeakerBanner from '@/Components/speaker/SpeakerBanner';
import SpeakersDetail from '@/Components/speaker/SpeakersDetail';
import React from 'react';

export default function speaker() {
  return (
    <Layout pageTitle="Speakers">
      <SpeakerBanner />
      <SpeakersDetail />
    </Layout>
  );
}
