import { useEffect, useRef, useState } from 'react';
import { stats } from '../../data/stats';

interface CounterProps {
  target: number;
  suffix: string;
  startAnimation: boolean;
}

function Counter({ target, suffix, startAnimation }: CounterProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!startAnimation) return;

    const duration = 2500;
    const stepTime = duration / target;

    let current = 0;

    const interval = setInterval(() => {
      current++;

      if (current >= target) {
        current = target;
        clearInterval(interval);
      }

      setCount(current);
    }, stepTime);

    return () => clearInterval(interval);
  }, [target, startAnimation]);

  return (
    <>
      {count}
      {suffix}
    </>
  );
}

export default function EndToEnd() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.3,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className='py-16 px-6 text-center'>
      <h2 className='text-4xl font-bold mb-4'>
        End-to-End IT Solutions That Drive Results
      </h2>

      <p
        className='
          text-[#717680]
          dark:text-[#A4A7AE]
          mb-12
          max-w-2xl
          mx-auto
        '
      >
        From strategy to execution, we deliver solutions that grow your
        business.
      </p>

      <div
        className='
          grid
          grid-cols-2
          md:grid-cols-4
          gap-6
          max-w-5xl
          mx-auto
        '
      >
        {stats.map((stat) => (
          <div
            key={stat.label}
            className='
              bg-[#FAFAFA]
              border
              border-[#DEDCDC]
              dark:bg-[#0A0D12]
              dark:border-[#181D27]
              rounded-full
              aspect-square
              flex
              flex-col
              justify-center
              items-center
              transition-all
              duration-300
              hover:-translate-y-2
              hover:shadow-xl
            '
          >
            <h3 className='text-[#FF623E] text-3xl font-bold'>
              <Counter
                target={stat.value}
                suffix={stat.suffix}
                startAnimation={isVisible}
              />
            </h3>

            <p className='text-sm text-center px-2'>{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
