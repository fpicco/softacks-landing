import { tw } from 'twind';
import Check from '@/constants/svg/check.svg';
import Button from '@/components/button';
import Link from 'next/link';

interface Card {
  id: string;
  pricing: number;
  description: string;
  features: string[];
}
const cards: Card[] = [
  {
    id: `Landing`,
    pricing: 199,
    description: `Get your webpage ready in 1 week`,
    features: [
      `1-week deliverable`,
      `Custom domain included`,
      `1 year of infrastructure costs included`,
      `Fully managed website`,
      `Contact form included`,
      `10 templates available`,
      `Full support Google Analytics`,
    ],
  },

  {
    id: `Custom Landing`,
    pricing: 499,
    description: `Get a tailored website for your business`,

    features: [
      `Custom domain included`,
      `Contact form included`,
      `1 year of infrastructure costs included`,
      `Fully managed website`,
      `Full support Google Analytics`,
      `Dedicated UX/UI designer`,
    ],
  },
  {
    id: `Full project`,
    pricing: 0,
    description: `End-to-end project`,

    features: [`Custom functionalities`, ` Unlimited features`, ` Database support`, ` AI / Machine learning support`],
  },
];

const PricingTable = () => (
  <section className={tw(`bg-gradient-to-b from-gray-200 to-gray-100 shadow-inner py-12`)}>
    <div className={tw(`relative max-w-7xl mx-auto mb-24`)}>
      <div className={tw(`overflow-hidden lg:max-w-none`)}>
        <div className={tw(`py-8 px-6 md:px-0 lg:flex-shrink-1`)}>
          <h2 className={tw(`text-4xl lg:text-6xl font-bold text-gray-800 mb-12 text-center`)}>Our pricing plans</h2>
        </div>
        <div
          className={tw(
            `overflow-hidden lg:max-w-none flex flex-col items-center gap-y-10 lg:flex-row justify-center gap-x-12`,
          )}
        >
          {cards.map((card) => (
            <div data-aos="zoom-in" key={card.id} className={tw(`bg-white shadow-md rounded-md p-12 w-96`)}>
              <div className={tw(`flex flex-col justify-center`)}>
                <h2 className={tw(`text-4xl capitalize text-center py-3`)}>{card.id}</h2>
                {card.pricing > 0 ? (
                  <p className={tw(`text-4xl font-bold text-primary text-center h-16`)}>
                    $ {card.pricing}
                    <span className={tw(`text-base font-normal block`)}>{card.description}</span>
                  </p>
                ) : (
                  <p className={tw(`text-4xl font-bold text-primary text-center h-16`)}>Contact us</p>
                )}
              </div>
              <ul className={tw(`mt-8 h-72`)}>
                {card.features.map((feature) => (
                  <li className={tw(`flex items-center py-1 gap-x-1`)} key={feature}>
                    <div className={tw(`h-8 w-8`)}>
                      <Check className={tw(`h-7 w-7 mr-3 mb-1`)} />
                    </div>
                    <p className={tw(`text-gray-600`)}>{feature}</p>
                  </li>
                ))}
              </ul>
              <Link href="/#contact">
                <div className={tw(`flex justify-center w-full`)}>
                  <Button primary modifier="mt-8">
                    Contact now
                  </Button>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default PricingTable;
