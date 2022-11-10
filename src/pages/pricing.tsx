import Footer from '@/components/footer';
import Page from '@/components/page';
import PricingTable from '@/components/pricing-table';
import React, { useEffect } from 'react';

import 'aos/dist/aos.css';

import AOS from 'aos';

const Pricing = () => {
  useEffect(() => {
    AOS.init({
      once: true,
      disable: `phone`,
      duration: 700,
      easing: `ease-out-cubic`,
    });
  });

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
