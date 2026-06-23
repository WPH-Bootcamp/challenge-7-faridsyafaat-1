import { trustedBrands } from '../../data/trustedBrands';

export default function About() {
  return (
    <section id='about' className='py-12 px-6 text-center scroll-mt-24'>
      <p
        className='
      text-[#0A0D12] 
      dark:text-[#FDFDFD]
      mb-8 text-lg 
      md:text-xl 
      font-semibold '
      >
        Trusted by Global Innovators & Leading Brands
      </p>

      <div className='overflow-hidden'>
        <div
          className='
          flex
          items-center
          cursor-pointer
          gap-10
          w-max
          marquee
          opacity-60
        '
        >
          {[...trustedBrands, ...trustedBrands].map((brand, index) => (
            <img
              key={`${brand.alt}-${index}`}
              src={brand.src}
              alt={brand.alt}
              loading='lazy'
              className='shrink-0'
            />
          ))}
        </div>
      </div>
    </section>
  );
}
