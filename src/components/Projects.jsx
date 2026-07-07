import { motion } from "framer-motion";

import ganeshaBooking from "../assets/images/ganesha-booking-1.png";
import laporSkuy from "../assets/images/laporskuy-1.png";
import { Link } from "react-router-dom";

const projects = [
  {
    title: "Ganesha Booking",
    route: "/projects/ganesha-booking",
    image: ganeshaBooking,
    description:
      "Sistem booking ruangan berbasis web yang mendukung proses peminjaman ruangan, manajemen data ruangan, upload dokumen, serta persetujuan peminjaman secara digital.",
    tech: [
      "Laravel 12",
      "Next.js",
      "MySQL",
      "Cloudinary",
      "Postman",
    ],
  },
  {
    title: "LaporSkuy",
    route: "/projects/laporskuy",
    image: laporSkuy,
    description:
      "Sistem pelaporan masyarakat tingkat RT yang memungkinkan warga mengirim laporan, memantau status laporan, serta membantu pengurus RT dalam mengelola laporan secara lebih efektif.",
    tech: [
      "Laravel 12",
      "React JS",
      "MySQL",
      "Postman",
    ],
  },
];

function Projects() {
  return (
    <section
      id="projects"
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
            Featured Projects
          </h2>

          <p className="section-subtitle">
            Beberapa proyek yang telah saya kerjakan sebagai bagian dari
            proses pembelajaran dan pengembangan kemampuan di bidang
            Fullstack Web Development.
          </p>
        </motion.div>

        {/* Project Cards */}

        <div className="mt-14 space-y-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: index * 0.1,
              }}
              className="glass rounded-3xl overflow-hidden border border-white/10 hover:border-cyan-400/30 transition-all duration-300"
            >
              <div className="grid lg:grid-cols-2">
                {/* Image */}

                <div className="overflow-hidden">
                  <img
  src={project.image}
  alt={project.title}
  className="w-full h-auto object-contain hover:scale-105 transition duration-500"
/>
                </div>

                {/* Content */}

                <div className="p-8 lg:p-10 flex flex-col justify-center">
                  <h3 className="text-3xl font-bold mb-4">
                    {project.title}
                  </h3>

                  <p className="text-slate-400 leading-8">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-3 mt-6">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="mt-8">
                   <Link
  to={project.route}
  className="inline-block px-6 py-3 rounded-full bg-cyan-400 text-black font-semibold hover:scale-105 transition duration-300"
>
  View Details
</Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
