import WhyAttend from '@/Components/about/WhyAttend';
import WhyChooses from '@/Components/about/WhyChooses';
import Layout from '@/Components/global/Layout';
import React from 'react';

export default function About() {
  return (
    <Layout hideNavbar>
      <WhyAttend />
      <WhyChooses />
    </Layout>
  );
}
