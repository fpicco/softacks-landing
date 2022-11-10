import { tw, css } from 'twind/css';
import Button from '@/components/button';
import Netlify from '@/constants/svg/netlify.svg';
import Figma from '@/constants/svg/figma.svg';
import Aws from '@/constants/svg/aws.svg';

const headerStyle = css`
  background-color: #ffffff;
  min-height: calc(100vh - 6rem);
`;

const Header = () => (
  <header className={tw(headerStyle)}>
    <div className={tw(`lg:flex justify-center items-center container mx-auto my-10 gap-x-20`)}>
      <div className={tw(`max-w-4xl mx-auto py-16 px-14 sm:px-6 lg:px-8`)}>
        <h1
          className={tw(`font-sans font-bold text-4xl md:text-5xl lg:text-8xl text-center leading-snug text-gray-800`)}
        >
          Turn your idea into a real project
        </h1>
        <div className={tw(`max-w-xl mx-auto`)}>
          <p className={tw(`mt-10 text-gray-500 text-center text-xl lg:text-3xl`)}>
            Get your MVP with techwarely in just one month.
          </p>
        </div>
        <div className={tw(`mt-10 flex justify-center items-center w-full mx-auto`)}>
          <Button primary>Get started</Button>
          <span className={tw(`mx-2`)}>or</span>
          <Button>Contact us</Button>
        </div>
      </div>
      <img className={tw(`w-1/2 pt-5`)} src="/images/start-up.png" alt="logo" />
    </div>

    <div className={tw(`flex justify-center w-full bg-gray-100 py-10`)}>
      <div className={tw(`mt-4 w-full`)}>
        <p className={tw(`font-mono uppercase text-center font-medium text-sm text-gray-600`)}>Our tech stack</p>
        <div className={tw(`flex items-center justify-center mx-auto flex-wrap`)}>
          <Aws className={tw(`m-12 mb-8 opacity-80`)} width={120} />
          <Netlify className={tw(`m-12 opacity-80`)} width={140} />
          <Figma className={tw(`m-12 opacity-80`)} width={140} />
          <Aws className={tw(`m-12 mb-8 opacity-80`)} width={120} />
          <Netlify className={tw(`m-12 opacity-80`)} width={140} />
          <Figma className={tw(`m-12 opacity-80`)} width={140} />
        </div>
      </div>
    </div>
  </header>
);

export default Header;
