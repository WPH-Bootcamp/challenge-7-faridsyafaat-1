import { useState } from 'react';
import { testimonials } from '../../data/testimonials';
import type { Testimonial } from '../../types';

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(1);

  return (
    <section id='testimonials' className='py-20 scroll-mt-16'>
      <div className='max-w-6xl mx-auto px-4 text-center'>
        <h2 className='text-3xl md:text-4xl font-bold mb-2'>
          What Partners Say About Working With Us
        </h2>

        <p className='mb-12 text-[#717680] dark:text-[#A4A7AE]'>
          Trusted voices. Real experiences. Proven results.
        </p>

        {/* Desktop */}
        <div className='hidden md:grid md:grid-cols-3 gap-8'>
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className={`
                transition-all
                duration-500

                ${
                  index === 1
                    ? 'scale-105 opacity-100'
                    : 'opacity-40 blur-[1px]'
                }
              `}
            >
              <TestimonialCard testimonial={testimonial} />
            </div>
          ))}
        </div>

        {/* Mobile */}
        <div className='md:hidden'>
          <TestimonialCard testimonial={testimonials[activeIndex]} />
        </div>

        {/* Dots */}
        <div className='flex justify-center gap-2 mt-8'>
          {testimonials.map((testimonial, index) => (
            <button
              key={testimonial.name}
              onClick={() => setActiveIndex(index)}
              aria-label={`Show testimonial from ${testimonial.name}`}
              aria-pressed={activeIndex === index}
              className={`
                h-2
                rounded-full
                transition-all
                duration-300
                cursor-pointer

                ${
                  activeIndex === index ? 'w-6 bg-[#FF623E]' : 'w-2 bg-gray-500'
                }
              `}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div
      className='
        p-px
        rounded-xl
        bg-linear-to-r
        from-[#FF6C37]
        to-[#DEDCDC]
      '
    >
      <div
        className='
          bg-[#FAFAFA]
          dark:bg-[#0A0D12]
          p-8
          rounded-xl
          relative
          h-full
          transition-all
          duration-300
          hover:-translate-y-2
          hover:shadow-xl
        '
      >
        <img
          src='/icons/quote.png'
          alt='Quote'
          loading='lazy'
          className='
            w-20
            h-20
            absolute
            -top-10
            left-2
            p-2
          '
        />

        <div className='text-yellow-400 text-xl font-bold mb-4'>
          {testimonial.rating}
        </div>

        <p className='mb-6 text-sm md:text-base'>"{testimonial.review}"</p>

        <div className='text-sm font-semibold'>{testimonial.name}</div>

        <div className='text-xs text-[#FF623E] mb-6'>
          {testimonial.position}
        </div>

        <img
          src={testimonial.avatar}
          alt={testimonial.name}
          loading='lazy'
          className='
            w-20
            h-20
            mx-auto
            rounded-full
          '
        />
      </div>
    </div>
  );
}
