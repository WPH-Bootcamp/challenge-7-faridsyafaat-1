import { useState } from 'react';
import { processes } from '../../data/processes';
import type { ProcessCardProps } from '../../types';

export default function Services() {
  const [activeSteps, setActiveSteps] = useState<number[]>([]);

  const toggleStep = (stepNumber: number) => {
    if (activeSteps.includes(stepNumber)) {
      setActiveSteps(activeSteps.filter((step) => step !== stepNumber));
    } else {
      setActiveSteps([...activeSteps, stepNumber]);
    }
  };

  return (
    <section id='service' className='py-16 px-6 text-center scroll-mt-16'>
      <h2 className='text-3xl md:text-4xl font-bold mb-4'>Our Process</h2>

      <p
        className='
          text-[#717680]
          dark:text-[#A4A7AE]
          mb-12
          max-w-2xl
          mx-auto
        '
      >
        Clear steps. Smart execution. Results you can count on.
      </p>

      <div className='relative max-w-5xl mx-auto'>
        {/* Timeline */}
        <div
          className='
            hidden md:block
            absolute
            left-1/2
            top-0
            bottom-0
            w-0.5
            bg-gray-200
            dark:bg-[#181D27]
            -translate-x-1/2
          '
        />

        <div className='space-y-12'>
          {processes.map((process, index) => {
            const isEven = index % 2 === 1;

            return (
              <div
                key={process.step}
                className='
                  relative
                  flex
                  flex-col
                  md:flex-row
                  md:items-center
                '
              >
                {!isEven ? (
                  <>
                    <div className='w-full md:w-1/2 md:pr-10 flex md:justify-end'>
                      <ProcessCard
                        process={process}
                        isOpen={activeSteps.includes(process.step)}
                        onToggle={() => toggleStep(process.step)}
                      />
                    </div>

                    <TimelineNumber number={process.step} />

                    <div className='hidden md:block md:w-1/2' />
                  </>
                ) : (
                  <>
                    <div className='hidden md:block md:w-1/2' />

                    <div className='w-full md:w-1/2 md:pl-10 flex md:justify-start'>
                      <ProcessCard
                        process={process}
                        isOpen={activeSteps.includes(process.step)}
                        onToggle={() => toggleStep(process.step)}
                      />
                    </div>

                    <TimelineNumber number={process.step} />
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ProcessCard({ process, isOpen, onToggle }: ProcessCardProps) {
  return (
    <div className='flex items-center gap-4 w-full max-w-md'>
      {/* Mobile Number */}
      <div
        className='
          md:hidden
          bg-[#FF623E]
          text-white
          w-10
          h-10
          flex
          items-center
          justify-center
          rounded-full
          font-bold
          shrink-0
        '
      >
        {process.step}
      </div>

      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={`process-${process.step}`}
        aria-label={process.title}
        className='group
          bg-[#FAFAFA]
          border
          border-[#DEDCDC]
          dark:bg-[#0A0D12]
          dark:border-[#181D27]
          p-6
          rounded-xl
          shadow
          w-full
          text-left
          cursor-pointer
          transition-all
          duration-300
          hover:-translate-y-1
          hover:shadow-lg
        '
      >
        <div className='flex items-center justify-between'>
          <h3 className='font-semibold'>{process.title}</h3>

          <span
            className='
              text-gray-400
              group-hover:text-[#FF623E]
              text-xl
              transition-all
              duration-300
            '
          >
            {isOpen ? '⌃' : '⌄'}
          </span>
        </div>

        <div
          id={`process-${process.step}`}
          className={`
            overflow-hidden
            transition-all
            duration-300
            ${isOpen ? 'max-h-20 opacity-100 mt-3' : 'max-h-0 opacity-0'}
          `}
        >
          <p
            className='
              text-sm
              text-[#717680]
              dark:text-[#A4A7AE]
            '
          >
            {process.description}
          </p>
        </div>
      </button>
    </div>
  );
}

function TimelineNumber({ number }: { number: number }) {
  return (
    <div
      className='
        hidden
        md:flex
        absolute
        left-1/2
        -translate-x-1/2
        bg-[#FF623E]
        text-white
        w-10
        h-10
        items-center
        justify-center
        rounded-full
        font-bold
        z-10
      '
    >
      {number}
    </div>
  );
}
