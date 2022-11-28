import Footer from '@/components/footer';
import React from 'react';
import { tw } from 'twind';
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs';

interface TestimonialCard {
  name: string;
  image: string;
  company: string;
  stars: {
    filled: number;
    empty: number;
    half: number;
  };
  description: string;
  date: string;
}

const testimonialCards: TestimonialCard[] = [
  {
    name: `Maximiliano Armesto`,
    image: `/images/testimonials/maximiliano-armesto.jpg`,
    company: `Taller Technologies CTO`,
    stars: { filled: 5, empty: 0, half: 0 },
    description: `We asked Softacks to complete a project with several constraints and scaling complexity, 
    and they did an amazing job! The project was finished on time, and they communicated with us constantly. 
    We will definitely work with them again!`,
    date: `Oct 10, 2022`,
  },
  {
    name: `Annie Luke`,
    image: `/images/testimonials/annie-luke.jpg`,
    company: `IT Engineering Manager`,
    stars: { filled: 4, empty: 0, half: 1 },
    description: `We had excellent communication with Softacks while working together to get a fast MVP working. 
    The provided solution was correct and delivered within the arranged time.`,
    date: `Dec 18, 2021`,
  },
  {
    name: `Frank Davis`,
    image: `/images/testimonials/frank-davis.jpg`,
    company: `Software Architect, Blencloud`,
    stars: { filled: 5, empty: 0, half: 0 },
    description: `After struggling to keep our API scaling with the increasing load of new customers,
     we contacted Softacks. They were able to not only scale our service but also lower the costs of our 
     infrastructure using the advantages of AWS's serverless architecture. 
     It's clear that they are experts in the field.`,
    date: `Jan 03, 2022`,
  },
];

const Testimonials = () => (
  <div className={tw(`bg-gradient-to-b from-gray-200 to-gray-100 shadow-inner `)}>
    <div className={tw(`py-8 px-6 md:px-0 lg:flex-shrink-1`)}>
      <h2 className={tw(`text-4xl lg:text-6xl font-bold text-gray-800 my-12 text-center`)}>
        What our clients say about us
      </h2>
    </div>
    <main className={tw(`pb-20 container mx-auto`)}>
      <div className={tw(`flex flex-wrap justify-center gap-x-20 gap-y-10`)}>
        {testimonialCards.map((testimonial) => (
          <div key={testimonial.name} className={tw(`bg-white w-96 px-6 py-3 rounded-lg border`)}>
            <div className={tw(`flex items-center gap-x-6 mt-2 pb-4`)}>
              <img src={testimonial.image} alt={testimonial.name} className={tw(`w-20 rounded-full`)} />
              <div>
                <h3 className={tw(`font-medium text-lg`)}>{testimonial.name}</h3>
                <h4 className={tw(`text-gray-700`)}>{testimonial.company}</h4>
              </div>
            </div>
            <div className={tw(`flex text-yellow-500 text-2xl py-2`)}>
              {[...Array(testimonial.stars.filled)].map(() => (
                <BsStarFill />
              ))}
              {[...Array(testimonial.stars.half)].map(() => (
                <BsStarHalf />
              ))}
              {[...Array(testimonial.stars.empty)].map(() => (
                <BsStar />
              ))}
            </div>
            <p className={tw(`py-2 text-gray-900`)}>{testimonial.description}</p>
            <p className={tw(`py-2 text-sm text-gray-700`)}>{testimonial.date}</p>
          </div>
        ))}
      </div>
    </main>
    <Footer />
  </div>
);

export default Testimonials;
