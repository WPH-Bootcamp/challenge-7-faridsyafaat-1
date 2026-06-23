export default function Hero() {
  return (
    <section
      id='hero'
      aria-labelledby='hero-heading'
      className='
      min-h-screen
      flex 
      items-center 
      px-6 pt-24 
      md:pt-20 
      relative 
      overflow-hidden '
    >
      {/* Background Effect Dark Mode */}
      <div
        className='
        hidden
        dark:block
        absolute
        right-10
        top-1/2
        -translate-y-1/2
        w-100
        h-100
        bg-orange-500
        opacity-20
        blur-[120px]
        rounded-full'
      />

      <div
        className='
        max-w-350
        mx-auto
        grid
        md:grid-cols-[1.2fr_1fr]
        gap-10
        items-start
        md:items-center
        relative
        z-10
        '
      >
        {/* LEFT */}
        <div>
          <h1
            id='hero-heading'
            className='
            text-3xl 
            sm:text-4xl
            md:text-6xl 
            font-bold 
            leading-tight 
            mb-6'
          >
            Your Tech Partner for <br />
            <span className='text-[#FF6C37]'>Smarter Growth</span>
          </h1>

          <p
            className='
            text-[#0A0D12]
            dark:text-[#FDFDFD]
            mb-6
            max-w-md
            text-sm'
          >
            We deliver tailored IT solutions to help you scale with speed and
            confidence.
          </p>

          <a
            href='#contact'
            aria-label='Go to contact section'
            className='
            inline-flex
            w-full md:w-auto
            justify-center
            bg-[#FF623E]
            hover:bg-[#e05535]
            hover:shadow-lg
            hover:-translate-y-0.5
            text-[#FFFFFF]
            px-6 md:px-14
            py-2
            rounded-full
            font-semibold
            transition-all
            duration-300
        '
          >
            Let&apos;s Talk
          </a>
        </div>

        {/* RIGHT */}
        <div className='flex justify-end items-center'>
          <img
            src='/images/herowhite.png'
            alt='Hero illustration light mode'
            loading='eager'
            fetchPriority='high'
            className='
            block dark:hidden
            w-full
            max-w-188
            mx-auto
            h-auto
            hover:scale-[1.02]
            transition-transform
            duration-300
            ease-in-out
            drop-shadow-xl'
          />

          <img
            src='/images/heroblack.png'
            alt='Hero illustration dark mode'
            loading='eager'
            fetchPriority='high'
            className='
            hidden dark:block
            w-full
            max-w-188
            mx-auto
            h-auto
            hover:scale-[1.02]
            transition-transform
            duration-300
            ease-in-out
            drop-shadow-xl
        '
          />
        </div>
      </div>
    </section>
  );
}
