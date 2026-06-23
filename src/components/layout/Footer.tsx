import { footerNavLinks } from '../../data/navigation';
import { socialLinks } from '../../data/socialLinks';

export default function Footer() {
  return (
    <>
      <section className='px-4 sm:px-6 pb-20'>
        <div className='max-w-5xl mx-auto'>
          <div
            className='
            bg-[#FAFAFA]
            border
            border-[#DFDFDF]

            dark:bg-[#0A0D12]
            dark:border-[#252B37]

            rounded-2xl
            p-5
            sm:p-8
            md:p-10

            shadow-lg
          '
          >
            {/* Top */}
            <div
              className='
              flex
              flex-col-reverse
              md:flex-row
              md:justify-between
              md:items-start

              gap-4
              mb-6
            '
            >
              <h3 className='text-2xl md:text-3xl font-semibold leading-tight'>
                LET&apos;S DISCUSS
                <br />
                YOUR IDEAS
              </h3>

              <div className='flex items-center gap-2 text-sm font-bold'>
                <img
                  src='/logo.png'
                  alt='Logo'
                  loading='lazy'
                  className='w-5 h-5 object-contain'
                />

                <span>Your Logo</span>
              </div>
            </div>

            {/* Divider */}
            <div className='border-t border-[#DFDFDF] dark:border-[#252B37] my-5' />

            {/* Bottom */}
            <div
              className='
              flex
              flex-col
              md:flex-row
              md:justify-between
              md:items-center
              gap-6
            '
            >
              {/* Navigation */}
              <nav
                aria-label='Footer Navigation'
                className='
                flex
                flex-col
                md:flex-row
                gap-4
                text-sm
                text-gray-500'
              >
                {footerNavLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className='
                    hover:text-black
                    dark:hover:text-white
                    transition-colors
                    duration-300
                  '
                  >
                    {link.label}
                  </a>
                ))}
              </nav>

              {/* Social Media */}
              <div className='flex gap-2'>
                {socialLinks.map((social) => (
                  <a
                    key={social.alt}
                    href={social.href}
                    aria-label={social.alt}
                    className='
                    w-10
                    h-10
                    flex
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-gray-300
                    dark:border-gray-600
                    hover:border-black
                    dark:hover:border-white
                    transition-colors
                    duration-300
                  '
                  >
                    <img
                      src={social.icon}
                      alt={social.alt}
                      loading='lazy'
                      className='
                      w-4
                      h-4
                      object-contain
                      dark:invert
                    '
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className='pb-8 text-center text-sm text-[#717680] dark:text-[#A4A7AE]'>
        © {new Date().getFullYear()} Web Programming Hack. All rights reserved.
      </footer>
    </>
  );
}
