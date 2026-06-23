import { useEffect, useState } from 'react';
import { navLinks } from '../../data/navigation';

export default function Navbar() {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    return localStorage.getItem('theme') === 'dark';
  });

  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className='fixed inset-x-0 top-0 z-50'>
      <nav
        aria-label='Main Navigation'
        className='
        flex 
        items-center 
        justify-between
        p-5 
        shadow 
        bg-white/70
        dark:bg-black/70
        backdrop-blur-md
        border-b
        border-gray-200/50
        dark:border-white/10
        transition-all
        duration-300'
      >
        {/* Logo */}
        <a href='#hero' className='flex items-center gap-2'>
          <img
            src='/logo.png'
            alt='Your Logo'
            loading='lazy'
            className='h-10'
          />
          <span
            className='
          text-2xl 
          font-bold 
          text-black 
          dark:text-white'
          >
            Your Logo
          </span>
        </a>

        {/* Navigation */}
        <ul
          className={`
            md:flex
            items-center
            gap-4
            absolute
            md:static
            left-0
            w-full
            md:w-auto
            px-4
            py-4
            md:px-0
            md:py-0
            bg-white
            dark:bg-black
            transition-all
            duration-500
            ease-in-out

        ${menuOpen ? 'top-20 opacity-100' : '-top-100 opacity-0'}

        md:opacity-100
      `}
        >
          {navLinks.map((link) => (
            <li key={link.href} className='my-2 md:my-0'>
              <a
                href={link.href}
                onClick={closeMenu}
                className='
                block
                px-4 py-2
                rounded-full
                text-[#0A0D12]
                dark:text-[#FDFDFD]
                hover:text-cyan-500
                transition duration-300
            '
              >
                {link.name}
              </a>
            </li>
          ))}

          <li className='my-2 md:my-0'>
            <a
              href='#contact'
              onClick={closeMenu}
              className='
              block
              w-full
              md:w-auto
              md:ml-8
              bg-[#FF623E]
              hover:bg-[#e05535]
              text-white
              px-6 py-2
              rounded-full
              text-center
              transition-colors 
              duration-300
          '
            >
              Let&apos;s Talk
            </a>
          </li>
        </ul>

        {/* Right Side */}
        <div className='flex items-center gap-3'>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className='
            p-2 
            rounded
            bg-gray-300
            dark:bg-gray-700
            dark:text-white
            cursor-pointer
            hover:scale-105
            transition-all 
            duration-300
        '
            aria-label='Toggle dark mode'
          >
            {darkMode ? '☀️' : '🌙'}
          </button>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className='
            md:hidden 
            text-3xl 
            dark:text-white 
            cursor-pointer'
            aria-label='Toggle menu'
            aria-expanded={menuOpen}
          >
            {menuOpen ? '✕' : '☰'}
          </button>
        </div>
      </nav>
    </header>
  );
}
