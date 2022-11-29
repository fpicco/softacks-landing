import React from 'react';
import { tw } from 'twind';

interface Info {
  name: string;
  link?: string;
}
const sections: Info[] = [
  { name: `Services`, link: `#services` },
  { name: `About`, link: `about` },
  { name: `Pricing`, link: `pricing` },
  { name: `Contact`, link: `#contact` },
];
const legal: Info[] = [
  { name: `Terms and Conditions`, link: `termsandconditions` },
  { name: `Privacy Policy`, link: `privacypolicy` },
  { name: `Cookies Policy`, link: `cookiespolicy` },
];
const contactInfo: Info[] = [{ name: `Phone: (+34) 644155627` }, { name: `Email: contact@softacks.com` }];
const Footer = () => (
  <footer className={tw(`bg-white border-t pt-14 pb-16`)}>
    <div className={tw(`max-w-7xl mx-auto text-gray-700 px-8 xl:px-0 lg:flex`)}>
      <div className={tw(`mb-14 flex items-center w-full `)}>
        {/* <img className={tw(`mr-4`)} src="/images/logo.png" alt="logo " /> */}
        <h1 className={tw(`text-6xl py-5`)}>SOFTACKS</h1>
      </div>
      <div className={tw(`w-full`)}>
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
    </div>
  </footer>
);

export default Footer;
