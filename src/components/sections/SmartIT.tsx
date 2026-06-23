import { serviceCards } from '../../data/serviceCards';

export default function SmartIT() {
  return (
    <section className='py-20'>
      <div className='max-w-6xl mx-auto px-4 text-center'>
        <h2 className='text-4xl font-bold mb-4'>
          Smart IT Solutions That Grow With You
        </h2>

        <p className='mb-12 text-[#717680] dark:text-[#A4A7AE]'>
          Tailored tech to boost efficiency, security, and results.
        </p>

        <div className='grid md:grid-cols-3 gap-x-6 gap-y-10 py-6'>
          {serviceCards.map((service) => (
            <div
              key={service.title}
              className='
                bg-[#FAFAFA]
                border
                border-[#DEDCDC]
                dark:bg-[#0A0D12]
                dark:border-[#181D27]
                relative
                p-6
                rounded-xl
                text-left
                transition-all
                duration-300
                ease-in-out
                hover:-translate-y-2
                hover:shadow-xl
                hover:shadow-gray-300/50
                dark:hover:shadow-black/40
              '
            >
              <img
                src={service.icon}
                alt={service.title}
                className='
                  w-20
                  h-20
                  absolute
                  -top-10
                  left-2
                  p-2
                  rounded-lg
                '
              />

              <div className='mt-6'>
                <h3 className='font-bold text-lg mb-2'>{service.title}</h3>

                <p className='text-sm text-[#717680] dark:text-[#A4A7AE]'>
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
