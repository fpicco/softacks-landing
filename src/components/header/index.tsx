import { tw, css } from 'twind/css';
import Button from '@/components/button';
import Link from 'next/link';

const headerStyle = css`
  background-color: #ffffff;
  min-height: calc(100vh - 6rem);
`;
const techImgBase = `/images/stack/`;
const techStack = [`aws`, `python`, `serverless`, `tailwind`, `docker`, `nextjs`];

const Header = () => (
  <header className={tw(headerStyle)}>
    <div className={tw(`flex flex-col lg:flex-row justify-center items-center container mx-auto my-10 gap-x-10`)}>
      <div className={tw(`max-w-4xl mx-auto py-16 px-14 sm:px-6 lg:px-8`)}>
        <h1
          className={tw(
            `font-sans font-bold text-4xl md:text-5xl lg:text-7xl 2xl:text-8xl text-center leading-snug text-gray-800`,
          )}
        >
          <span>
            Your
            <span className={tw(`text-transparent bg-clip-text ml-2 md:ml-5 bg-gradient-to-l from-primary to-secondary`)}>
              next project
            </span>
          </span>
          <span className="md:block ml-2 md:ml-0">is here.</span>
        </h1>
        <div className={tw(`max-w-xl mx-auto`)}>
          <p className={tw(`mt-10 text-gray-500 text-center text-xl lg:text-2xl 2xl:text-3xl`)}>
            Get your landing page ready to start your business in less than 1 week
          </p>
        </div>
        <Link href="/#contact">
          <div className={tw(`mt-10 flex justify-center items-center w-full mx-auto`)}>
            <Button primary>Get started</Button>
          </div>
        </Link>
      </div>
      <img className={tw(`w-1/2 lg:w-1/3 pt-5 lg:mr-10`)} src="/images/header.png" alt="logo" />
    </div>

    <div className={tw(`flex justify-center w-full bg-tertiary py-10`)} id="techstack">
      <div className={tw(`mt-4 w-full`)}>
        <p className={tw(`uppercase text-center font-medium text-xl text-primary`)}>Our tech stack</p>
        <div className={tw(`flex items-center justify-center my-10`)}>
          <div className={tw(`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-10 px-10 xl:px-32`)}>
            {techStack.map((tool) => (
              <img
                key={tool}
                className={tw(`w-40 md:w-52 opacity-80 grayscale `)}
                src={`${techImgBase}${tool}.webp`}
                alt="logo"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  </header>
);

export default Header;
