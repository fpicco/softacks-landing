import { tw } from 'twind';
import Check from '@/constants/svg/check.svg';

const FeatureSection = () => (
  <section className={tw(`bg-gray-100 pb-6`)}>
    <div className={tw(`max-w-7xl mx-auto p-4 sm:p-6 lg:p-8`)}>
      <div className={tw(`container mx-auto px-6 p-6 bg-gray-100`)}>
        <div className={tw(`mb-16 text-center`)}>
          <h4 className={tw(`text-base text-indigo-600 font-semibold tracking-wide uppercase`)}>Features</h4>
          <p className={tw(`mt-2 text-5xl lg:text-7xl font-bold tracking-tight text-gray-900`)}>Why us?</p>
        </div>
        <div className={tw(`flex flex-wrap my-12`)}>
          <div className={tw(`w-full border-b border-primary md:w-1/2 md:border-r lg:w-1/3 p-8`)}>
            <div className={tw(`flex items-center mb-2`)}>
              <Check width={20} height={20} fill="currentColor" className={tw(`h-6 w-6 text-indigo-500`)} />
              <div className={tw(`ml-4 text-xl`)}>Let go of worries</div>
            </div>
            <p className={tw(`leading-loose text-gray-800`)}>
              Ve handle the hassle of dealing with developers and general project issues.
            </p>
          </div>
          <div className={tw(`w-full border-b border-primary md:w-1/2 lg:w-1/3 lg:border-r p-8`)}>
            <div className={tw(`flex items-center mb-2`)}>
              <Check width={20} height={20} fill="currentColor" className={tw(`h-6 w-6 text-indigo-500`)} />
              <div className={tw(`ml-4 text-xl`)}>Fixed price per month</div>
            </div>
            <p className={tw(`leading-loose text-gray-800 `)}>
              There are no changes, what is agreed is the final price per month.
            </p>
          </div>
          <div className={tw(`w-full border-b border-primary md:w-1/2 md:border-r lg:w-1/3 lg:border-r-0 p-8`)}>
            <div className="flex items-center mb-2">
              <Check width={20} height={20} fill="currentColor" className={tw(`h-6 w-6 text-indigo-500`)} />
              <div className={tw(`ml-4 text-xl`)}>Constant comunication</div>
            </div>
            <p className={tw(`leading-loose text-gray-800`)}>
              We will have exchange of emails and permanent contact during the development of the project and a month
              after delivery.
            </p>
          </div>
          <div className={tw(`w-full border-b border-primary md:w-1/2 lg:w-1/3 lg:border-r lg:border-b-0 p-8`)}>
            <div className={tw(`flex items-center mb-2`)}>
              <Check width={20} height={20} fill="currentColor" className={tw(`h-6 w-6 text-indigo-500`)} />
              <div className={tw(`ml-4 text-xl`)}>Recommended by experts</div>
            </div>
            <p className={tw(`leading-loose text-gray-800`)}>
              Velit sit tempor pariatur quis pariatur incididunt culpa dolor voluptate officia incididunt velit dolore.
            </p>
          </div>
          <div className={tw(`w-full border-b border-primary md:w-1/2 md:border-r md:border-b-0 lg:w-1/3 lg:border-b-0 p-8`)}>
            <div className={tw(`flex items-center mb-2`)}>
              <Check width={20} height={20} fill="currentColor" className={tw(`h-6 w-6 text-indigo-500`)} />
              <div className={tw(`ml-4 text-xl`)}>Modern platform</div>
            </div>
            <p className={tw(`leading-loose text-gray-800`)}>
              Laboris elit consectetur sint nisi eu mollit proident sit magna velit adipisicing consequat amet
              reprehenderit.
            </p>
          </div>
          <div className={tw(`w-full md:w-1/2 lg:w-1/3 p-8`)}>
            <div className={tw(`flex items-center mb-2`)}>
              <Check width={20} height={20} fill="currentColor" className={tw(`h-6 w-6 text-indigo-500`)} />
              <div className={tw(`ml-4 text-xl`)}>Integrations</div>
            </div>
            <p className={tw(`leading-loose text-gray-800`)}>
              Nostrud excepteur incididunt proident sit nulla ipsum sunt nostrud est esse adipisicing irure officia
              consectetur.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default FeatureSection;
