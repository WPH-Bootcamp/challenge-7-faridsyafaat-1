import { useState } from 'react';
import type { Industry } from '../../types';
import { industries } from '../../data/industries';

export default function Industry() {
  const [activeIndustry, setActiveIndustry] = useState<Industry>(industries[0]);

  return (
    <section className='py-20'>
      <div className='max-w-6xl mx-auto px-4'>
        <h2 className='text-4xl md:text-5xl font-bold mb-4 text-left'>
          Built for Your Industry
        </h2>

        <p className='text-left mb-12 text-[#717680] dark:text-[#A4A7AE]'>
          We've helped companies across industries launch smarter, faster, and
          more securely.
        </p>

        <div className='grid md:grid-cols-[1fr_2fr] gap-10 items-center'>
          {/* Left Menu */}
          <div className='space-y-4'>
            {industries.map((industry) => (
              <button
                key={industry.name}
                onClick={() => setActiveIndustry(industry)}
                aria-pressed={activeIndustry.name === industry.name}
                className={`
                  w-full
                  text-left
                  pl-4
                  py-2
                  border-l-2
                  cursor-pointer
                  transition-colors
                  duration-300

                  ${
                    activeIndustry.name === industry.name
                      ? 'border-orange-500 text-[#FF6C37] font-semibold'
                      : 'border-gray-300 text-[#AAAAAA] hover:text-[#FF6C37]'
                  }
                `}
              >
                {industry.name}
              </button>
            ))}
          </div>

          {/* Right Content */}
          <div>
            <p className='mb-6'>{activeIndustry.description}</p>

            <img
              key={activeIndustry.name}
              src={activeIndustry.image}
              alt={activeIndustry.name}
              loading='lazy'
              className='
                rounded-xl
                w-full
                h-75
                object-cover
                transition-all
                duration-300
                ease-in-out
                hover:-translate-y-2
                hover:shadow-xl
                hover:shadow-gray-300/50
                dark:hover:shadow-black/40
              '
            />
          </div>
        </div>
      </div>
    </section>
  );
}
