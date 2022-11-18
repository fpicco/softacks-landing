import { tw } from 'twind';
import Check from '@/constants/svg/check.svg';

const FeatureSection = () => (
  <section className={tw(`bg-gray-100 pb-6`)} id="features">
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
              <div className={tw(`ml-4 text-xl`)}>Top-notch stack</div>
            </div>
            <p className={tw(`leading-loose text-gray-800`)}>
              We work with the best frameworks and tools, and we strive to get the most cost-efficient setup for your
              project.
            </p>
          </div>
          <div className={tw(`w-full border-b border-primary md:w-1/2 lg:w-1/3 lg:border-r p-8`)}>
            <div className={tw(`flex items-center mb-2`)}>
              <Check width={20} height={20} fill="currentColor" className={tw(`h-6 w-6 text-indigo-500`)} />
              <div className={tw(`ml-4 text-xl`)}>Flat fee</div>
            </div>
            <p className={tw(`leading-loose text-gray-800 `)}>
              You choose one of the available plans, with no hidden costs, and no further cost increases.
            </p>
          </div>
          <div className={tw(`w-full border-b border-primary md:w-1/2 md:border-r lg:w-1/3 lg:border-r-0 p-8`)}>
            <div className="flex items-center mb-2">
              <Check width={20} height={20} fill="currentColor" className={tw(`h-6 w-6 text-indigo-500`)} />
              <div className={tw(`ml-4 text-xl`)}>No hassle</div>
            </div>
            <p className={tw(`leading-loose text-gray-800`)}>
              We take care of everything, you don&apos;t have to deal with developers, planning architecture, or deal
              with technical aspects.
            </p>
          </div>
          <div className={tw(`w-full border-b border-primary md:w-1/2 lg:w-1/3 lg:border-r lg:border-b-0 p-8`)}>
            <div className={tw(`flex items-center mb-2`)}>
              <Check width={20} height={20} fill="currentColor" className={tw(`h-6 w-6 text-indigo-500`)} />
              <div className={tw(`ml-4 text-xl`)}>Expertise</div>
            </div>
            <p className={tw(`leading-loose text-gray-800`)}>
              We only work with a predefined stack and all of our developers are experts in working with it.
            </p>
          </div>
          <div
            className={tw(
              `w-full border-b border-primary md:w-1/2 md:border-r md:border-b-0 lg:w-1/3 lg:border-b-0 p-8`,
            )}
          >
            <div className={tw(`flex items-center mb-2`)}>
              <Check width={20} height={20} fill="currentColor" className={tw(`h-6 w-6 text-indigo-500`)} />
              <div className={tw(`ml-4 text-xl`)}>Custom solution</div>
            </div>
            <p className={tw(`leading-loose text-gray-800`)}>
              We will deliver a project that meets your requirements, with no predefined or generic solutions.
            </p>
          </div>
          <div className={tw(`w-full md:w-1/2 lg:w-1/3 p-8`)}>
            <div className={tw(`flex items-center mb-2`)}>
              <Check width={20} height={20} fill="currentColor" className={tw(`h-6 w-6 text-indigo-500`)} />
              <div className={tw(`ml-4 text-xl`)}>Project flexibility</div>
            </div>
            <p className={tw(`leading-loose text-gray-800`)}>
              We work with several kinds of projects, such as end-to-end web applications, machine learning algorithms,
              APIs, or microservices.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default FeatureSection;
