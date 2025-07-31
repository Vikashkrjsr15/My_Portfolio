import { motion } from 'framer-motion';
import img from '../assets/avtar.jpg';




const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-pink-500/30 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 text-center md:text-left"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
                Hi, I'm Vikash kumar
              </span>
              <span className="block mt-2 text-white">
                Web Developer
              </span>
            </h1>
            <p className="text-xl text-gray-400 mb-8">
              Building Future-Ready Web Experiences
            </p>
          <motion.a
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
 href="/My_Portfolio/resume.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-block px-8 py-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full text-white font-semibold hover:shadow-lg hover:shadow-purple-500/30 transition-shadow"
>
  Download My Resume
</motion.a>


          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="flex-1 relative"
          >
            <div className="w-64 h-64 md:w-80 md:h-80 relative mx-auto">
              {/* Glowing effect circles */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full blur-2xl opacity-50 animate-pulse"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full blur-xl opacity-50 animate-pulse delay-100"></div>
              
              {/* Avatar placeholder - replace src with actual avatar image */}
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white/10 bg-gray-900">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10"></div>
                <img
                  // src="https://avatars.githubusercontent.com/u/your-username"
                  src={img}
                  alt="Vikash Kumar"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Tech stack icons */}
        {/* <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-8 bg-white/5 backdrop-blur-xl px-8 py-4 rounded-2xl border border-white/10"
        >
          Add your tech stack icons here
          <span className="text-white/70">React</span>
          <span className="text-white/70">Next.js</span>
          <span className="text-white/70">Tailwind</span>
          <span className="text-white/70">TypeScript</span>
        </motion.div> */}
      </div>
    </section>
  );
};

export default Hero;