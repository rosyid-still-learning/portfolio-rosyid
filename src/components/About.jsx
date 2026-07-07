import { motion } from "framer-motion";

const education = [
  {
    year: "2024 - Sekarang",
    school: "Universitas Pendidikan Ganesha",
    major: "S1 Sistem Informasi",
  },
  {
    year: "2020 - 2023",
    school: "MA Diponegoro",
    major: "Jurusan Keagamaan",
  },
  {
    year: "2017 - 2020",
    school: "MTs Terpadu Mardlatillah",
    major: "",
  },
  {
    year: "2011 - 2017",
    school: "MI Terpadu Mardlatillah",
    major: "",
  },
];

function About() {
  return (
    <section
      id="about"
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
            Tentang Saya
          </h2>

          <p className="section-subtitle">
            Mengenal lebih dekat latar belakang, minat, dan perjalanan
            pendidikan saya.
          </p>
        </motion.div>

        {/* About Card */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="glass rounded-3xl p-8 md:p-10 mt-14"
        >
          <p className="text-slate-300 leading-8 text-lg">
            Saya merupakan mahasiswa S1 Sistem Informasi di Universitas
            Pendidikan Ganesha yang memiliki ketertarikan pada
            pengembangan aplikasi web, REST API, serta teknologi modern
            yang digunakan dalam membangun solusi digital.
          </p>

          <p className="text-slate-400 leading-8 text-lg mt-6">
            Saya aktif mempelajari Fullstack Web Development menggunakan
            Laravel, React JS, dan MySQL. Selain itu, saya juga tertarik
            mempelajari Artificial Intelligence serta bagaimana teknologi
            AI dapat dimanfaatkan untuk meningkatkan produktivitas dalam
            proses pengembangan perangkat lunak.
          </p>

          <p className="text-slate-400 leading-8 text-lg mt-6">
            Dalam proses belajar dan mengembangkan proyek, saya sering
            memanfaatkan AI-Assisted Development untuk membantu
            eksplorasi teknologi baru, mencari solusi permasalahan,
            melakukan debugging, serta mempercepat proses pengembangan.
            Namun demikian, saya tetap berfokus pada pemahaman logika
            aplikasi, struktur database, perancangan API, deployment,
            dan pengembangan sistem secara menyeluruh.
          </p>

          <p className="text-slate-400 leading-8 text-lg mt-6">
            Saat ini saya terus mengembangkan kemampuan teknis melalui
            berbagai proyek pribadi dan akademik dengan tujuan menjadi
            Fullstack Web Developer yang mampu membangun aplikasi yang
            bermanfaat, efisien, dan memberikan nilai nyata bagi
            pengguna.
          </p>
        </motion.div>

        {/* Education Timeline */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-20"
        >
          <h3 className="text-3xl font-bold text-center mb-12">
            Perjalanan Pendidikan
          </h3>

          <div className="relative max-w-4xl mx-auto">
            {/* Line */}

            <div className="absolute left-4 top-0 bottom-0 w-[2px] bg-cyan-400/30" />

            {education.map((item, index) => (
              <div
                key={index}
                className="relative pl-14 pb-12"
              >
                {/* Dot */}

                <div className="absolute left-0 top-2 w-8 h-8 rounded-full bg-cyan-400 flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-[#050816]" />
                </div>

                {/* Card */}

                <div className="glass rounded-2xl p-6 hover:border-cyan-400/30 transition-all duration-300">
                  <p className="text-cyan-400 font-medium mb-2">
                    {item.year}
                  </p>

                  <h4 className="text-xl font-semibold text-white">
                    {item.school}
                  </h4>

                  {item.major && (
                    <p className="text-slate-400 mt-2">
                      {item.major}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;

