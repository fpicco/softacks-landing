import { tw } from 'twind';
import Check from '@/constants/svg/check.svg';

const WhyUs = () => (
  <section className={tw(`bg-white pb-6`)} id="services">
    <div className={tw(`max-w-7xl mx-auto p-4 sm:p-6 lg:p-8`)}>
      <div className={tw(`container mx-auto px-6 p-6 bg-white`)}>
        <div className={tw(`mb-16 text-center`)}>
          <h4 className={tw(`text-base text-primary font-semibold tracking-wide uppercase`)}>Our values</h4>
          <p className={tw(`mt-2 text-5xl lg:text-7xl font-bold tracking-tight text-gray-900`)}>Why us</p>
        </div>
        <div className={tw(`flex flex-wrap my-12`)}>
          <div className={tw(`w-full border-b border-primary md:w-1/2 md:border-r lg:w-1/3 p-8`)}>
            <div className={tw(`flex items-center mb-2`)}>
              <Check width={20} height={20} fill="#05B5AA" className={tw(`h-6 w-6 text-primary`)} />
              <div className={tw(`ml-4 text-xl`)}>Customer obsession</div>
            </div>
            <p className={tw(`leading-loose text-gray-800`)}>
              We are absolutely obsessed with making sure our customers are happy. We will do whatever it takes to make
              sure you are satisfied with our services.
            </p>
          </div>
          <div className={tw(`w-full border-b border-primary md:w-1/2 lg:w-1/3 lg:border-r p-8`)}>
            <div className={tw(`flex items-center mb-2`)}>
              <Check width={20} height={20} fill="#05B5AA" className={tw(`h-6 w-6 text-primary`)} />
              <div className={tw(`ml-4 text-xl`)}>Quality</div>
            </div>
            <p className={tw(`leading-loose text-gray-800 `)}>
              We are dedicated to providing the highest quality software solutions possible. We constantly strive to
              improve our products and services.
            </p>
          </div>
          <div className={tw(`w-full border-b border-primary md:w-1/2 md:border-r lg:w-1/3 lg:border-r-0 p-8`)}>
            <div className="flex items-center mb-2">
              <Check width={20} height={20} fill="#05B5AA" className={tw(`h-6 w-6 text-primary`)} />
              <div className={tw(`ml-4 text-xl`)}>Vision</div>
            </div>
            <p className={tw(`leading-loose text-gray-800`)}>
              We have a clear vision for the future of our company and our products. We are always looking for ways to
              improve and expand our business.
            </p>
          </div>
          <div className={tw(`w-full border-b border-primary md:w-1/2 lg:w-1/3 lg:border-r lg:border-b-0 p-8`)}>
            <div className={tw(`flex items-center mb-2`)}>
              <Check width={20} height={20} fill="#05B5AA" className={tw(`h-6 w-6 text-primary`)} />
              <div className={tw(`ml-4 text-xl`)}>Agile process</div>
            </div>
            <p className={tw(`leading-loose text-gray-800`)}>
              We follow an agile process in order to be able to rapidly respond to changes in the market and serve our
              customers&apos; needs.
            </p>
          </div>
          <div
            className={tw(
              `w-full border-b border-primary md:w-1/2 md:border-r md:border-b-0 lg:w-1/3 lg:border-b-0 p-8`,
            )}
          >
            <div className={tw(`flex items-center mb-2`)}>
              <Check width={20} height={20} fill="#05B5AA" className={tw(`h-6 w-6 text-primary`)} />
              <div className={tw(`ml-4 text-xl`)}>User experience focus</div>
            </div>
            <p className={tw(`leading-loose text-gray-800`)}>
              We focus on creating great user experiences. We want our products to be easy to use and enjoyable for our
              customers.
            </p>
          </div>
          <div className={tw(`w-full md:w-1/2 lg:w-1/3 p-8`)}>
            <div className={tw(`flex items-center mb-2`)}>
              <Check width={20} height={20} fill="#05B5AA" className={tw(`h-6 w-6 text-primary`)} />
              <div className={tw(`ml-4 text-xl`)}>Industry focus</div>
            </div>
            <p className={tw(`leading-loose text-gray-800`)}>
              We have a deep understanding of the industries we serve. We are always looking for ways to help our
              customers be more successful.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default WhyUs;
