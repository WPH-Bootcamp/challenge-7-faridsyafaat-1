import { projects } from '../../data/projects';

export default function Projects() {
  return (
    <section
      id='projects'
      className='
        py-16
        px-6
        text-center
        scroll-mt-16
        md:scroll-mt-20
      '
    >
      <h2 className='text-3xl md:text-4xl font-bold mb-4'>
        From Vision to Launch! Projects We’re Proud Of
      </h2>

      <p
        className='
          text-[#717680]
          dark:text-[#A4A7AE]
          mb-12
          max-w-xl
          md:max-w-4xl
          mx-auto
          text-lg
        '
      >
        Take a closer look at our recent work powering startups, enterprises,
        and everything in between.
      </p>

      <div
        className='
          max-w-6xl
          mx-auto
          grid
          grid-cols-1
          md:grid-cols-2
          lg:grid-cols-3
          gap-10
        '
      >
        {projects.map((project) => (
          <div key={project.title} className='text-left group'>
            <img
              src={project.image}
              alt={project.title}
              loading='lazy'
              className='
                w-full
                aspect-4/3
                object-cover
                rounded-xl
                transition-transform
                duration-300
                ease-out
                group-hover:scale-105
                group-hover:shadow-md                
              '
            />

            <h3
              className='
                text-sm
                mt-3
                leading-snug
                text-[#FF623E]
                font-semibold
              '
            >
              {project.category}
            </h3>

            <h4
              className='
                text-base
                font-bold
                mt-3
                leading-snug
              '
            >
              {project.title}
            </h4>
          </div>
        ))}
      </div>
    </section>
  );
}
