import { motion } from 'framer-motion';

const skills = [
  {
    category: 'Frontend',
    items: [
      { name: 'Html', level: 95 },
      { name: 'Css', level: 93 },
      { name: 'JavaScript', level: 80 },
      {name:'React',level:80},
      { name: 'Tailwind CSS', level: 85},
      {name:'BootStrap',level:75}
    ]
  },
  {
    category: 'Backend',
    items: [
      { name: 'Express', level: 50 },
      { name: 'MongoDB', level: 70 },
     
      { name: 'REST APIs', level: 85 }
    ]
  },
  {
    category: 'Tools & Deployment',
    items: [
      { name: 'Git', level: 85 },
       {name:'Firebase',level:75},
      { name: 'Netlify', level: 80 },
      { name: 'Vercel', level: 65 },
      { name: 'Render', level: 65 },
      { name: 'Postman', level: 60 }
    ]
  }
];

const SkillBar = ({ name, level }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="mb-6"
    >
      <div className="flex justify-between mb-2">
        <span className="text-white">{name}</span>
        {/* <span className="text-gray-400">{level}%</span> */}
      </div>
      <div className="h-3 bg-gray-700 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/50 via-purple-500/50 to-pink-500/50 blur-sm"></div>
        </motion.div>
      </div>
    </motion.div>
  );
};

const TechLogo = ({ name }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      className="relative group"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-xl blur-xl opacity-0 group-hover:opacity-70 transition-opacity"></div>
      <div className="relative bg-gray-800/50 backdrop-blur-xl p-4 rounded-xl border border-white/10">
        <div className="w-16 h-16 flex items-center justify-center text-white">
          {/* Replace with actual tech logos */}
          <span className="text-4xl">{name[0]}</span>
        </div>
      </div>
    </motion.div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="min-h-screen bg-gray-900 py-20 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Skills & Expertise
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and proficiency levels
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {skills.map((skillGroup) => (
            <motion.div
              key={skillGroup.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-gray-800/50 backdrop-blur-xl rounded-2xl p-6 border border-white/10"
            >
              <h3 className="text-xl font-semibold text-white mb-6">
                {skillGroup.category}
              </h3>
              {skillGroup.items.map((skill) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                />
              ))}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-20"
        >
          {/* <h3 className="text-2xl font-semibold text-white text-center mb-12">
            Technologies I Work With
          </h3> */}
          {/* <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {['MangoDB', 'Express', 'React', 'Nodejs'].map((tech) => (
              <TechLogo key={tech} name={tech} />
            ))}
          </div> */}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;