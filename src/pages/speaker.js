import Layout from '@/Components/global/Layout';

import SpeakersDetail from '@/Components/speaker/SpeakersDetail';
import React from 'react';

export default function speaker() {
  return (
    <Layout pageTitle="Speakers" bgImage="/images/banner4.jpg">
      <SpeakersDetail />
    </Layout>
  );
}
