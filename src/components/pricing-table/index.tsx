import { tw } from 'twind';
import Check from '@/constants/svg/check.svg';
import Button from '@/components/button';

interface Card {
  id: string;
  pricing: number;
  features: string[];
}
const cards: Card[] = [
  { id: 'basic', pricing: 2999, features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 2', 'Feature 3'] },
  { id: 'premium', pricing: 4999, features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 3', 'Feature 3'] },
];

const PricingTable = () => (
  <section className={tw(`bg-gradient-to-b from-gray-200 to-gray-100 shadow-inner py-12`)}>
    <div className={tw(`relative max-w-7xl mx-auto mb-24`)}>
      <div className={tw(`overflow-hidden lg:max-w-none`)}>
        <div className={tw(`py-8 px-6 md:px-0 lg:flex-shrink-1`)}>
          <h2 className={tw(`text-4xl lg:text-6xl font-bold text-gray-800 mb-12 text-center`)}>Our pricing plans</h2>
        </div>
        <div className={tw(`overflow-hidden lg:max-w-none lg:flex justify-center gap-x-12`)}>
          {cards.map((card) => {
            return (
              <div key={card.id} className={tw(`bg-white shadow-md rounded-md p-12 w-96`)}>
                <h2 className={tw('text-4xl capitalize text-center py-3')}>{card.id}</h2>
                <p className={tw('text-4xl font-bold text-primary text-center')}>
                  $ {card.pricing}
                  <span className={tw('text-xl font-normal')}>/mo</span>
                </p>
                <ul className={tw(`mt-8 `)}>
                  {card.features.map((feature) => {
                    return (
                      <li className={tw('flex items-center py-1')} key={feature}>
                        <Check className={tw(`h-7 w-7 mr-3 mb-1`)} />
                        <p className={tw(`text-gray-600`)}>{feature}</p>
                      </li>
                    );
                  })}
                </ul>
                <div className={tw('flex justify-center w-full')}>
                  <Button primary={card.id === 'premium'} children={'Contact now'} modifier="mt-8" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  </section>
);

export default PricingTable;
