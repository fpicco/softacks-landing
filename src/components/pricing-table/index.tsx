import { tw } from 'twind';
import Check from '@/constants/svg/check.svg';
import Button from '@/components/button';
import Link from 'next/link';

interface Card {
  id: string;
  pricing: number;
  payment: string;
  features: string[];
}
const cards: Card[] = [
  {
    id: `MVP`,
    pricing: 2995,
    payment: `one time payment`,
    features: [
      `1-month deliverable`,
      `Limited features`,
      `Only one dedicated developer`,
      `No minimum commitment`,
      `100% money-back if the project is not completed on time`,
    ],
  },
  {
    id: `Full Project`,
    pricing: 4995,
    payment: `per month`,

    features: [
      `A dedicated team of senior developers`,
      `Unlimited features`,
      `Dedicated communication channel`,
      `Flexible requirement changes`,
      `No minimum commitment`,
    ],
  },
];

const PricingTable = () => (
  <section className={tw(`bg-gradient-to-b from-gray-200 to-gray-100 shadow-inner py-12`)}>
    <div className={tw(`relative max-w-7xl mx-auto mb-24`)}>
      <div className={tw(`overflow-hidden lg:max-w-none`)}>
        <div className={tw(`py-8 px-6 md:px-0 lg:flex-shrink-1`)}>
          <h2 className={tw(`text-4xl lg:text-6xl font-bold text-gray-800 mb-12 text-center`)}>Our pricing plans</h2>
        </div>
        <div className={tw(`overflow-hidden lg:max-w-none lg:flex justify-center gap-x-12`)}>
          {cards.map((card) => (
            <div data-aos="zoom-in" key={card.id} className={tw(`bg-white shadow-md rounded-md p-12 w-96`)}>
              <div className={tw(`flex flex-col justify-center`)}>
                <h2 className={tw(`text-4xl capitalize text-center py-3`)}>{card.id}</h2>
                <p className={tw(`text-4xl font-bold text-primary text-center h-16`)}>
                  $ {card.pricing}
                  {card.id !== `MVP` && <span className={tw(`text-xl font-normal block`)}>{card.payment}</span>}
                  {card.id === `MVP` && <span className={tw(`text-lg font-normal block`)}>{card.payment}</span>}
                </p>
              </div>
              <ul className={tw(`mt-8 h-60`)}>
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
                  <Button primary={card.id === `Full Project`} modifier="mt-8">
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
