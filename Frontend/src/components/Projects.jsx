import { motion } from 'framer-motion';

const projects = [
  {
    id: 1,
    title: 'Education Platform',
    description: 'A clean and user-friendly website designed to provide information about coaching classes, courses offered, and contact details',
    tech: ['Html', 'Css', 'Js'],
    link: 'https://vikashkrjsr15.github.io/Coaching-Website/',
    position: 'right'
  },
  {
    id: 2,
    title: 'Weather & Time App',
    description: 'A sleek and responsive React weather app that displays real-time weather updates by city name',
    tech: ['React','Tailwind CSS','API'],
    link: 'https://vikashkrjsr15.github.io/react-vite-weather-app/',
    position: 'left'
  },
  {
    id: 3,
    title: 'OffnBuy-A Shopping Companion',
    description: 'An attractive online shopping companion that highlights top deals, trending products, and smart shopping tips.',
    tech: ['React', 'Tailwind CSS','Firebase'],
    link: 'https://offnbuy.netlify.app/',
    position: 'right'
  }
];

const ProjectCard = ({ project, index }) => {
  const isEven = index % 2 === 0;
  
  return (
    <motion.div
      initial={{ opacity: 0, x: isEven ? 100 : -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      viewport={{ once: true }}
      className={`relative flex items-center ${isEven ? 'justify-end' : ''} w-full`}
    >
      {/* Branch line */}
      <div className="absolute top-0 bottom-0 left-1/2 w-px bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500"></div>
      
      {/* Project node */}
      {/* <div className={`absolute left-1/2 top-1/2 -translate-y-1/2 ${isEven ? 'translate-x-2' : '-translate-x-10'} z-10`}>
        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-1">
          <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center text-white font-bold">
            {index + 1}
          </div>
        </div>
      </div> */}

      {/* Content card */}
      <motion.div
        whileHover={{ scale: 1.02 }}
        className={`w-5/12 bg-gray-800/50 backdrop-blur-xl rounded-2xl overflow-hidden border border-white/10 ${isEven ? 'ml-auto' : 'mr-auto'}`}
      >
        {/* <div className="relative aspect-video overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent z-10"></div>
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div> */}

        <div className="p-6">
          <h3 className="text-2xl font-bold text-white mb-2">
            {project.title}
          </h3>

          <p className="text-gray-400 mb-4">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-6">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-white/5 rounded-full text-sm text-gray-300"
              >
                {tech}
              </span>
            ))}
          </div>

          <motion.a
            href={project.link}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-6 py-3 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full text-white font-semibold hover:shadow-lg hover:shadow-purple-500/30 transition-shadow"
          >
            View Project
          </motion.a>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="min-h-screen bg-gray-900 py-20 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Projects
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Explore some of my recent work and creative experiments
          </p>
        </motion.div>

        <div className="space-y-32">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;