import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Frontend",
    skills: ["React JS", "Next.js", "Tailwind CSS"],
  },
  {
    title: "Backend",
    skills: ["Laravel", "REST API"],
  },
  {
    title: "Database",
    skills: ["MySQL"],
  },
  {
    title: "Tools",
    skills: [
      "VS Code",
      "Git",
      "GitHub",
      "Postman",
      "Cloudinary",
      "Vercel",
      "Railway",
      "ChatGPT Go",
      "Gemini 3.1 Pro",
    ],
  },
];

function Skills() {
  return (
    <section
      id="skills"
      className="py-24 lg:py-32"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <h2 className="section-title">
            Skills & Technologies
          </h2>

          <p className="section-subtitle">
            Teknologi dan tools yang saya gunakan dalam proses belajar
            maupun pengembangan proyek.
          </p>
        </motion.div>

        {/* Cards */}

        <div className="grid md:grid-cols-2 gap-6 mt-14">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              className="glass rounded-3xl p-8 border border-white/10 hover:border-cyan-400/40 hover:-translate-y-2 transition-all duration-300"
            >
              <h3 className="text-2xl font-bold mb-6">
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-slate-300 hover:border-cyan-400/50 hover:text-cyan-300 transition-all duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;