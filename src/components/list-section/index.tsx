import { tw } from 'twind';

const listItems = [
  {
    title: `Initial call`,
    description: `Schedule a free 30-minute call to get to know each other and your project's needs.`,
  },
  {
    title: `Setup requirements`,
    description: `Exchange emails to set requirements, deadlines, and project scope.`,
  },
  {
    title: `Development`,
    description: `Our developers start working on getting your project finished within the
     arranged days and milestones.`,
  },
  {
    title: `Project delivery`,
    description: `Delivery of the project and free support for 1 month.`,
  },
];

const ListSection = () => (
  <section className={tw(`lg:py-28 pt-28 overflow-hidden`)}>
    <div className={tw(`max-w-7xl mx-auto p-4 sm:p-6 lg:p-8 bg-white`)}>
      <div className={tw(`mb-16 text-center`)}>
        <h2 className={tw(`text-base text-primary font-semibold tracking-wide uppercase`)}>Bring your idea to life</h2>
        <p className={tw(`mt-2 pb-4 text-5xl lg:text-7xl font-bold tracking-tight text-gray-900`)}>Our process</p>
      </div>
      <div className={tw(`flex flex-wrap -mx-8 items-center`)}>
        <div className={tw(`w-full lg:w-1/2 px-8`)}>
          <ul className={tw(`space-y-12`)}>
            {listItems.map((item, index) => (
              <li className={tw(`flex -mx-4 items-center`)} key={item.title}>
                <div className={tw(`px-4`)}>
                  <span
                    className={tw(`flex w-16 h-16 mx-auto items-center
                      justify-center text-2xl font-bold rounded-full
                      bg-tertiary text-primary`)}
                  >
                    {index + 1}
                  </span>
                </div>
                <div className={tw(`px-4`)}>
                  <h3 className={tw(`text-xl font-semibold`)}>{item.title}</h3>
                  <p className={tw(`text-gray-500 leading-loose`)}>{item.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className={tw(`w-full lg:w-1/2 flex justify-center items-center px-8`)}>
          <img src="/images/process.png" alt="" className={tw(`w-3/4 px-8`)} />
        </div>
      </div>
    </div>
  </section>
);

export default ListSection;
