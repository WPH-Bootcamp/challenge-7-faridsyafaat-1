import { useState } from 'react';
import { faqItems } from '../../data/faqs';

export default function FAQ() {
  const [openIndexes, setOpenIndexes] = useState<number[]>([]);

  const toggleFAQ = (index: number) => {
    if (openIndexes.includes(index)) {
      setOpenIndexes(openIndexes.filter((item) => item !== index));
    } else {
      setOpenIndexes([...openIndexes, index]);
    }
  };

  return (
    <section id='faq' className='py-26 scroll-mt-24'>
      <div className='max-w-6xl mx-auto px-4'>
        {/* Heading */}
        <div className='grid md:grid-cols-2 items-end mb-12'>
          <h2 className='text-3xl md:text-4xl font-bold max-w-sm'>
            Need Help? Start Here.
          </h2>

          <p className='md:text-right max-w-md md:ml-auto text-[#717680] dark:text-[#A4A7AE]'>
            Everything you need to
            <br className='hidden md:block' />
            know — all in one place.
          </p>
        </div>

        <div className='grid md:grid-cols-[2fr_1.3fr] gap-10'>
          {/* FAQ List */}
          <div>
            <div className='divide-y divide-[#181D27] dark:divide-[#2A2F3A]'>
              {faqItems.map((item, index) => (
                <div key={item.question} className='py-5'>
                  <button
                    onClick={() => toggleFAQ(index)}
                    aria-expanded={openIndexes.includes(index)}
                    aria-controls={`faq-answer-${index}`}
                    className='w-full flex justify-between items-center text-left cursor-pointer   hover:text-[#FF623E]    transition-colors    duration-300'
                  >
                    <span>{item.question}</span>

                    <span className='text-xl font-semibold'>
                      {openIndexes.includes(index) ? '−' : '+'}
                    </span>
                  </button>

                  {openIndexes.includes(index) && (
                    <p
                      id={`faq-answer-${index}`}
                      className='mt-3 text-sm text-[#717680] dark:text-[#A4A7AE]'
                    >
                      {item.answer}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Consultation Card */}
          <div>
            <div
              className='
                bg-[#CC4E32]
                rounded-2xl
                p-6
                text-white
                md:w-82
                md:h-113
                ml-auto
                flex
                flex-col
                justify-between
                transition-all
                duration-300
                hover:-translate-y-2
                hover:shadow-xl
              '
            >
              <div>
                <h3 className='text-3xl md:text-4xl font-bold mb-2'>
                  Let’s talk it through
                </h3>

                <p className='text-base mb-4'>
                  Book a free consultation with our team.
                </p>
              </div>

              <img
                src='/images/meet.png'
                alt='Free Consultation'
                className='rounded-lg mb-4 w-full object-cover'
                loading='lazy'
              />

              <a
                href='#contact'
                className='
                w-full flex items-center justify-center
                bg-black
                text-white
                dark:bg-white
                dark:text-black                
                py-2
                rounded-lg
                cursor-pointer                
                transition-colors
                duration-300'
              >
                Free Consultation
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
