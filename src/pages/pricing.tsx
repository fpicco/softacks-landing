
import Footer from '@/components/footer';
import Page from '@/components/page';
import PricingTable from '@/components/pricing-table';
import React from 'react';


const Pricing = () => {
  return (
    <Page>
      <main>
        <PricingTable />
      </main>
      <Footer />
    </Page>
  );
};

export default Pricing;
