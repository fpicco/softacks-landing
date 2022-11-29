import Page from '@/components/page';
import Testimonials from '@/components/testimonials/Testimonials';
import React from 'react';
import { tw } from 'twind';
import WhyUs from '@/components/why-us';
import Head from 'next/head';

const About = () => (
  <>
    <Head>
      <title>About | Softacks</title>
    </Head>
    <Page>
      <main>
        <div className={tw(`px-8 md:px-16 py-20 bg-gray-100 text-lg`)}>
          <div className={tw(`mb-16 text-center`)}>
            <h4 className={tw(`text-base text-primary font-semibold tracking-wide uppercase`)}>Our company</h4>
            <p className={tw(`mt-2 text-5xl lg:text-7xl font-bold tracking-tight text-gray-900`)}>About Softacks</p>
          </div>
          <div className={tw(`flex flex-col md:flex-row justify-center items-center gap-x-20 -mt-5`)}>
            <p className={tw(`container mx-auto xl:px-40`)}>
              <span className={tw(`block`)}>
                At Softacks, we believe that software should be developed with the user in mind. We create software that
                is not only easy to use but also helps businesses run more efficiently. Our team of experienced
                developers can create custom solutions that are tailored to your specific needs.
              </span>
              <span className={tw(`block mt-1`)}>
                We are a customer-focused company and pride ourselves on providing excellent customer service. We are
                always available to answer any questions you may have about our products or services. We also offer free
                consultations to help you determine if our services are right for you.
              </span>
              <span className={tw(`block mt-1`)}>
                If you are looking for a company that can provide you with custom software solutions, then look no
                further than Softacks. Contact us today to learn more about what we can do for you.
              </span>
            </p>
          </div>
        </div>
        <div className={tw(`bg-white w-full text-lg`)}>
          <div
            className={tw(
              `flex flex-col xl:flex-row justify-center items-center xl:items-start 
            gap-x-20 my-20 mx-auto`,
            )}
          >
            <WhyUs />
          </div>
        </div>
        <Testimonials />
      </main>
    </Page>
  </>
);

export default About;
