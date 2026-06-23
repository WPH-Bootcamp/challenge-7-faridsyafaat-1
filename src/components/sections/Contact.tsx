import { useState } from 'react';
import { services } from '../../data/services';
import type { ServiceOption } from '../../types';

type Status = 'idle' | 'success' | 'error';

export default function Contact() {
  const [status, setStatus] = useState<Status>('idle');

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const [selectedServices, setSelectedServices] = useState<ServiceOption[]>([]);

  const handleServiceChange = (service: ServiceOption) => {
    if (selectedServices.includes(service)) {
      setSelectedServices(selectedServices.filter((item) => item !== service));
    } else {
      setSelectedServices([...selectedServices, service]);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (
      !name.trim() ||
      !email.trim() ||
      !message.trim() ||
      selectedServices.length === 0
    ) {
      setStatus('error');
      return;
    }

    setStatus('success');
  };

  return (
    <>
      <section id='contact' className='py-12 px-6 scroll-mt-20'>
        <div className='max-w-xl mx-auto'>
          <div className='text-center mb-10'>
            <h2 className='text-3xl md:text-4xl font-semibold mb-3'>
              Ready to Start? Let&apos;s Talk.
            </h2>

            <p className='text-[#717680] dark:text-[#A4A7AE] text-sm'>
              Tell us what you need, and we&apos;ll get back to you soon.
            </p>
          </div>

          <form onSubmit={handleSubmit} noValidate className='space-y-5'>
            {/* Name */}
            <div>
              <label htmlFor='name' className='text-base'>
                Name
              </label>

              <input
                type='text'
                id='name'
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder='Enter your name'
                className='
                  w-full
                  mt-1
                  p-3
                  rounded-lg
                  bg-transparent
                  border
                  border-[#DFDFDF]
                  dark:border-[#252B37]
                  focus:outline-none
                  focus:ring-2
                  focus:ring-[#FF623E]
                '
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor='email' className='text-base'>
                Email
              </label>

              <input
                type='email'
                id='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder='Enter your email'
                className='
                  w-full
                  mt-1
                  p-3
                  rounded-lg
                  bg-transparent
                  border
                  border-[#DFDFDF]
                  dark:border-[#252B37]
                  focus:outline-none
                  focus:ring-2
                  focus:ring-[#FF623E]
                '
              />
            </div>

            {/* Message */}
            <div>
              <label htmlFor='message' className='text-base'>
                Message
              </label>

              <textarea
                id='message'
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder='Enter your message'
                className='
                  w-full
                  mt-1
                  p-3
                  rounded-lg
                  bg-transparent
                  border
                  border-[#DFDFDF]
                  dark:border-[#252B37]
                  focus:outline-none
                  focus:ring-2
                  focus:ring-[#FF623E]
                '
              />
            </div>

            {/* Services */}
            <div>
              <fieldset>
                <legend className='text-base mb-2'>Services</legend>

                <div className='grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm'>
                  {services.map((service) => (
                    <label
                      key={service}
                      htmlFor={service}
                      className='flex items-center gap-2 cursor-pointer'
                    >
                      <input
                        type='checkbox'
                        id={service}
                        checked={selectedServices.includes(service)}
                        onChange={() => handleServiceChange(service)}
                        className='accent-[#FF623E]'
                      />

                      {service}
                    </label>
                  ))}
                </div>
              </fieldset>
            </div>

            {/* Button */}
            <button
              type='submit'
              className='
                w-full
                bg-[#FF623E]
                hover:bg-[#e05535]
                py-3
                rounded-full
                font-medium
                text-white
                cursor-pointer
                transition-colors
                duration-300
              '
            >
              Send
            </button>
          </form>
        </div>
      </section>

      {/* SUCCESS */}
      {status === 'success' && (
        <div
          className='fixed 
          inset-0 
          z-50 
          flex
          items-center
          justify-center
          bg-[#000000CC]
          p-4
          sm:p-6'
        >
          <div
            className='
            bg-[#DFDFDF]
            dark:bg-[#0A0D12]
            border
            border-[#DFDFDF]
            dark:border-[#252B37]
            rounded-2xl
            max-w-130
            w-full
            overflow-hidden'
          >
            <div className='flex justify-center py-8'>
              <img
                src='/icons/success.png'
                alt='Success'
                className='w-40 h-40 sm:w-57 sm:h-57 mx-auto object-contain'
                loading='lazy'
              />
            </div>

            <div
              className='
              p-5 sm:p-8 text-center text-[#0A0D12] dark:text-[#FDFDFD]'
            >
              <h3 className='text-xl sm:text-2xl font-bold mb-4'>
                Message Received!
              </h3>

              <p className=' text-[#717680] dark:text-[#A4A7AE] mb-8'>
                Thanks for reaching out — we&apos;ll get back to you as soon as
                possible.
              </p>

              <button
                onClick={() => {
                  // Tutup modal
                  setStatus('idle');

                  // Reset form
                  setName('');
                  setEmail('');
                  setMessage('');
                  setSelectedServices([]);

                  // Scroll ke Hero
                  document
                    .getElementById('hero')
                    ?.scrollIntoView({ behavior: 'smooth' });
                }}
                className='
                w-full
                bg-[#FF623E]
                hover:bg-[#e05535]
                text-[#FFFFFF]
                py-3
                rounded-full
                transition-colors    
                duration-300
                cursor-pointer
                '
              >
                Back to Home
              </button>
            </div>
          </div>
        </div>
      )}

      {/* FAILED */}
      {status === 'error' && (
        <div
          className='fixed 
          inset-0 
          z-50 
          flex
          items-center
          justify-center
          bg-[#000000CC]
          p-4
          sm:p-6'
        >
          <div
            className='
            bg-[#DFDFDF]    
            dark:bg-[#0A0D12]
            border
            border-[#DFDFDF]
            dark:border-[#252B37]    
            rounded-2xl
            max-w-130
            w-full
            overflow-hidden'
          >
            <div className='flex justify-center py-8'>
              <img
                src='/icons/failed.png'
                alt='Failed'
                className='w-40 h-40 sm:w-57 sm:h-57  mx-auto object-contain'
                loading='lazy'
              />
            </div>

            <div
              className='
              p-5 sm:p-8 text-center text-[#0A0D12] dark:text-[#FDFDFD]
              '
            >
              <h3 className='text-xl sm:text-2xl font-bold mb-4'>
                Oops! Something went wrong.
              </h3>

              <p className='text-[#717680] dark:text-[#A4A7AE] mb-8'>
                We couldn&apos;t send your message. Please try again or check
                your connection.
              </p>

              <button
                onClick={() => setStatus('idle')}
                className='
                  w-full
                  bg-[#FF623E]
                  hover:bg-[#e05535]
                  text-[#FFFFFF]
                  py-3
                  rounded-full
                  cursor-pointer
                  transition-colors
                  duration-300
                '
              >
                Try Again
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
