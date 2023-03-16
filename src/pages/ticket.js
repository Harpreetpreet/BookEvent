import MoreInformation from '@/Components/buyTicket/MoreInformation';
import TicketPrice from '@/Components/buyTicket/TicketPrice';
import Layout from '@/Components/global/Layout';
import React from 'react';

export default function ticket() {
  return (
    <Layout pageTitle="Buy Ticket">
      <TicketPrice />
      <MoreInformation />
    </Layout>
  );
}
