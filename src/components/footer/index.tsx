import React, { useState } from 'react';
import { tw } from 'twind';
import Button from '@/components/button';

interface Info {
  name: string;
  link?: string;
}
const sections: Info[] = [
  { name: `Features`, link: `#features` },
  { name: `Our work`, link: `ourwork` },
  { name: `Pricing`, link: `pricing` },
];
const legal: Info[] = [
  { name: `Terms and Conditions`, link: `termsandconditions` },
  { name: `Privacy Policy`, link: `privacypolicy` },
  { name: `Cookies Policy`, link: `cookiespolicy` },
];
const contactInfo: Info[] = [
  { name: `Phone: +1 (945) 253-3649` },
  { name: `Email: accounts@techwarely.com` },
  { name: `Twitter: @techwarely` },
];
const Footer = () => {
  const [isSubscribed, setIsSubscribed] = useState<boolean>(false);
  return (
    <footer className={tw(`bg-white border-t  pt-14 pb-16`)}>
      <div className={tw(`max-w-7xl mx-auto text-gray-400 px-8 xl:px-0 flex flex-wrap`)}>
        <div className={tw(`mb-14 flex items-center w-full`)}>
          <img className={tw(`mr-4`)} src="/images/logo.png" alt="logo " />
        </div>
        <div className={tw(`w-full xl:w-1/2`)}>
          <div className={tw(`flex gap-x-20`)}>
            <ul>
              <li>
                <h4 className={tw(`text-gray-900 text-base font-bold mb-1`)}>Product</h4>
                {sections.map((section) => (
                  <li className={tw(`text-gray-800 text-sm font-medium leading-6 hover:underline`)} key={section.link}>
                    <a href={`/${section.link}`}>{section.name}</a>
                  </li>
                ))}
              </li>
            </ul>

            <ul>
              <li>
                <h4 className={tw(`text-gray-900 text-base font-bold mb-1`)}>Legal</h4>
                {legal.map((policy) => (
                  <li className={tw(`text-gray-800 text-sm font-medium leading-6 hover:underline`)} key={policy.link}>
                    <a href={`/${policy.link}`}>{policy.name}</a>
                  </li>
                ))}
              </li>
            </ul>
            <ul>
              <li>
                <h4 className={tw(`text-gray-900 text-base font-bold mb-1`)}>Contact</h4>
                {contactInfo.map((item) => (
                  <li className={tw(`text-gray-800 text-sm font-medium leading-6 hover:underline`)} key={item.name}>
                    {item.name}
                  </li>
                ))}
              </li>
            </ul>
          </div>
        </div>
        <div className={tw(`w-full xl:w-1/2 mt-12 xl:mt-0`)}>
          <div className={tw(`border border-gray-400 rounded py-5 px-4`)}>
            <h4 className={tw(`font-mono text-sm uppercase text-gray-500 mb-3`)}>Subscribe our newsletter</h4>
            {isSubscribed ? (
              <h6 className={tw(`font-mono text-sm uppercase text-gray-500 mb-3 h-7 flex items-center`)}>
                Thank you for subscribing.
              </h6>
            ) : (
              <div className={tw(`flex w-full h-10`)}>
                <input
                  aria-label="email address"
                  type="text"
                  className={tw(
                    `border border-gray-300 bg-gray-100 min-w-0 w-full rounded text-gray-800 py-2 px-3 mr-2`,
                  )}
                  placeholder="Enter your email"
                />
                {/* eslint-disable-next-line */}
                <div onClick={() => setIsSubscribed(true)}>
                  <Button>Subscribe</Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
