import Footer from '@/components/footer';
import Page from '@/components/page';
import PricingTable from '@/components/pricing-table';
import React, { useEffect } from 'react';
import { tw } from 'twind';
import Head from 'next/head';

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
  const imgBase = `/images/payment/`;
  const paymentOptions = [`visa`, `amex`, `paypal`, `apple`, `google`, `bitcoin`];
  return (
    <>
      <Head>
        <title>Pricing | Softacks</title>
      </Head>
      <Page>
        <main>
          <PricingTable />
          <div className={tw(`flex justify-center w-full -mt-20`)}>
            <div className={tw(`mt-4 w-full bg-white py-10`)}>
              <p className={tw(`font-mono uppercase text-center font-medium text-xl text-gray-600`)}>Payment options</p>
              <div className={tw(`flex items-center justify-center my-6`)}>
                <div className={tw(`flex items-center flex-wrap justify-center gap-x-10 px-10 xl:px-32`)}>
                  {paymentOptions.map((tool) => (
                    <img
                      key={tool}
                      className={tw(`w-32  opacity-80 grayscale `)}
                      src={`${imgBase}${tool}.webp`}
                      alt="logo"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </Page>
    </>
  );
};

export default Pricing;
