import { tw } from 'twind';
import Check from '@/constants/svg/check.svg';

const FeatureSection = () => (
  <section className={tw(`bg-tertiary pb-6`)} id="features">
    <div className={tw(`max-w-7xl mx-auto p-4 sm:p-6 lg:p-8`)}>
      <div className={tw(`container mx-auto px-6 p-6 bg-tertiary`)}>
        <div className={tw(`mb-16 text-center`)}>
          <h4 className={tw(`text-base text-primary font-semibold tracking-wide uppercase`)}>Features</h4>
          <p className={tw(`mt-2 text-5xl lg:text-7xl font-bold tracking-tight text-gray-900`)}>Why us?</p>
        </div>
        <div className={tw(`flex flex-wrap my-12`)}>
          <div className={tw(`w-full border-b border-primary md:w-1/2 md:border-r lg:w-1/3 p-8`)}>
            <div className={tw(`flex items-center mb-2`)}>
              <Check width={20} height={20} fill="#05B5AA" className={tw(`h-6 w-6 text-primary`)} />
              <div className={tw(`ml-4 text-xl`)}>Web development</div>
            </div>
            <p className={tw(`leading-loose text-gray-800`)}>
              We can work with you to develop a unique website that meets your specific needs and goals. We have a team
              of experienced web developers who are experts in creating responsive, user-friendly websites.
            </p>
          </div>
          <div className={tw(`w-full border-b border-primary md:w-1/2 lg:w-1/3 lg:border-r p-8`)}>
            <div className={tw(`flex items-center mb-2`)}>
              <Check width={20} height={20} fill="#05B5AA" className={tw(`h-6 w-6 text-primary`)} />
              <div className={tw(`ml-4 text-xl`)}>Web scrapping</div>
            </div>
            <p className={tw(`leading-loose text-gray-800 `)}>
              We offer fast, reliable, and accurate web scraping services to help you get the data you need. Whether
              you&apos;re looking to collect data for research, lead generation, or any other purpose.
            </p>
          </div>
          <div className={tw(`w-full border-b border-primary md:w-1/2 md:border-r lg:w-1/3 lg:border-r-0 p-8`)}>
            <div className="flex items-center mb-2">
              <Check width={20} height={20} fill="#05B5AA" className={tw(`h-6 w-6 text-primary`)} />
              <div className={tw(`ml-4 text-xl`)}>Custom software development</div>
            </div>
            <p className={tw(`leading-loose text-gray-800`)}>
              We have a team of experienced developers who are experts in a variety of programming languages and
              software development tools. We can handle any size project, from small websites to large enterprise
              applications.
            </p>
          </div>
          <div className={tw(`w-full border-b border-primary md:w-1/2 lg:w-1/3 lg:border-r lg:border-b-0 p-8`)}>
            <div className={tw(`flex items-center mb-2`)}>
              <Check width={20} height={20} fill="#05B5AA" className={tw(`h-6 w-6 text-primary`)} />
              <div className={tw(`ml-4 text-xl`)}>Technology project management</div>
            </div>
            <p className={tw(`leading-loose text-gray-800`)}>
              We help our clients plan, organize, and manage their projects from start to finish. We offer a variety of
              services that can be customized to fit the needs of any project. Our goal is to help our clients complete
              their projects on time and within budget.
            </p>
          </div>
          <div
            className={tw(
              `w-full border-b border-primary md:w-1/2 md:border-r md:border-b-0 lg:w-1/3 lg:border-b-0 p-8`,
            )}
          >
            <div className={tw(`flex items-center mb-2`)}>
              <Check width={20} height={20} fill="#05B5AA" className={tw(`h-6 w-6 text-primary`)} />
              <div className={tw(`ml-4 text-xl`)}>Quality assurance</div>
            </div>
            <p className={tw(`leading-loose text-gray-800`)}>
              We offer a variety of services, including quality control, quality assurance testing, and quality
              management. We are dedicated to providing our clients with the best possible service, and we are always
              available to answer any questions or concerns they may have.
            </p>
          </div>
          <div className={tw(`w-full md:w-1/2 lg:w-1/3 p-8`)}>
            <div className={tw(`flex items-center mb-2`)}>
              <Check width={20} height={20} fill="#05B5AA" className={tw(`h-6 w-6 text-primary`)} />
              <div className={tw(`ml-4 text-xl`)}>Machine learning</div>
            </div>
            <p className={tw(`leading-loose text-gray-800`)}>
              We have a team of experienced data scientists who can help you build predictive models and algorithms that
              can be used to make better decisions in your business. We also offer consulting services to help you
              understand and implement machine learning in your organization.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default FeatureSection;
