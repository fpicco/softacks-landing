import { tw } from 'twind';
import Button from '@/components/button';

const sections = [
  { name: `Features`, link: `#features` },
  { name: `Our work`, link: `ourwork` },
  { name: `Pricing`, link: `pricing` },
];
const policies = [
  { name: `Terms and Conditions`, link: `termsandconditions` },
  { name: `Privacy Policy`, link: `privacypolicy` },
  { name: `Cookies Policy`, link: `cookiespolicy` },
];

const Footer = () => (
  <footer className={tw(`bg-white border-t  pt-14 pb-16`)}>
    <div className={tw(`max-w-7xl mx-auto text-gray-400 px-8 lg:px-0 flex flex-wrap`)}>
      <div className={tw(`mb-14 flex items-center w-full`)}>
        <img className={tw(`mr-4`)} src="/images/logo.png" alt="logo " />
      </div>
      <div className={tw(`w-full lg:w-1/2`)}>
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
              {policies.map((policy) => (
                <li className={tw(`text-gray-800 text-sm font-medium leading-6 hover:underline`)} key={policy.link}>
                  <a href={`/${policy.link}`}>{policy.name}</a>
                </li>
              ))}
            </li>
          </ul>
        </div>
      </div>
      <div className={tw(`w-full lg:w-1/2 mt-12 lg:mt-0`)}>
        <div className={tw(`border border-gray-400 rounded py-5 px-4`)}>
          <h4 className={tw(`font-mono text-sm uppercase text-gray-500 mb-3`)}>Subscribe our newsletter</h4>
          <div className={tw(`flex w-full`)}>
            <input
              aria-label="email address"
              type="text"
              className={tw(`border border-gray-300 bg-gray-100 min-w-0 w-full rounded text-gray-800 py-2 px-3 mr-2`)}
              placeholder="Enter your email"
            />
            <Button>Subscribe</Button>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
