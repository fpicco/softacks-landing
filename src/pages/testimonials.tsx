import Footer from '@/components/footer';
import Page from '@/components/page';
import React from 'react';
import { tw } from 'twind';
import Script from 'next/script';

const testimonials = () => (
  <Page>
    <div className={tw(`bg-gradient-to-b from-gray-200 to-gray-100 shadow-inner `)}>
      <div className={tw(`py-8 px-6 md:px-0 lg:flex-shrink-1`)}>
        <h2 className={tw(`text-4xl lg:text-6xl font-bold text-gray-800 my-12 text-center`)}>
          What our clients say about us
        </h2>
      </div>
      <main className={tw(`pb-20 container mx-auto`)}>
        <Script type="text/javascript" src="https://testimonial.to/js/iframeResizer.min.js" />
        <iframe
          title="testimonial"
          id="testimonialto-howdoesthiswork-light"
          src="https://embed.testimonial.to/w/howdoesthiswork?theme=light&card=base"
          frameBorder="0"
          scrolling="no"
          width="100%"
          className={tw(`pb-20`)}
        />
        <Script type="text/javascript">
          {`iFrameResize({log: false, checkOrigin: false}, "#testimonialto-howdoesthiswork-light");`}
        </Script>
      </main>
      <Footer />
    </div>
  </Page>
);

export default testimonials;
