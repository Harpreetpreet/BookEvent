import ContactUs from '@/Components/contact/ContactUs';
import Location from '@/Components/contact/Location';
import Layout from '@/Components/global/Layout';
import React from 'react';

export default function Contact() {
  return (
    <Layout pageTitle="Contact" bgImage="/images/banner2.jpg">
      <Location />
      <ContactUs />
    </Layout>
  );
}
