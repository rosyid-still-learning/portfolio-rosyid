import { motion } from "framer-motion";
import { HashLink } from "react-router-hash-link";

import banner from "../assets/images/laporskuy-1.png";

// ================= ADMIN =================

import adminDashboard from "../assets/images/laporskuy-detail/admin-dashboard.png";
import adminUserVerification from "../assets/images/laporskuy-detail/admin-user-verification.png";
import adminNewReports from "../assets/images/laporskuy-detail/admin-new-reports.png";
import adminProcessingReports from "../assets/images/laporskuy-detail/admin-processing-reports.png";
import adminCompletedReports from "../assets/images/laporskuy-detail/admin-completed-reports.png";
import adminRejectedReports from "../assets/images/laporskuy-detail/admin-rejected-reports.png";
import adminReportDetail from "../assets/images/laporskuy-detail/admin-report-detail.png";
import adminChat from "../assets/images/laporskuy-detail/admin-chat.png";

// ================= USER =================

import userDashboard from "../assets/images/laporskuy-detail/user-dashboard.png";
import userCreateReport from "../assets/images/laporskuy-detail/user-create-report.png";
import userReportHistory from "../assets/images/laporskuy-detail/user-report-history.png";
import userReportDetail from "../assets/images/laporskuy-detail/user-report-detail.png";
import userChat from "../assets/images/laporskuy-detail/user-chat.png";

const adminFeatures = [
  {
    title: "Dashboard Admin",
    image: adminDashboard,
    description:
      "Dashboard admin menampilkan ringkasan jumlah pengguna, statistik laporan, serta akses menuju seluruh menu utama untuk mengelola sistem.",
  },
  {
    title: "Verifikasi Pengguna",
    image: adminUserVerification,
    description:
      "Admin melakukan verifikasi akun pengguna sebelum dapat menggunakan aplikasi sehingga hanya warga yang valid yang memperoleh akses.",
  },
  {
    title: "Laporan Baru",
    image: adminNewReports,
    description:
      "Seluruh laporan baru akan masuk ke halaman ini dan menunggu tindakan dari admin.",
  },
  {
    title: "Laporan Diproses",
    image: adminProcessingReports,
    description:
      "Menampilkan laporan yang sedang ditangani sehingga proses penanganan dapat dipantau dengan lebih mudah.",
  },
  {
    title: "Laporan Selesai",
    image: adminCompletedReports,
    description:
      "Berisi seluruh laporan yang telah berhasil diselesaikan oleh admin.",
  },
  {
    title: "Laporan Ditolak",
    image: adminRejectedReports,
    description:
      "Menampilkan laporan yang ditolak beserta alasan penolakannya.",
  },
  {
    title: "Detail Laporan",
    image: adminReportDetail,
    description:
      "Admin dapat melihat informasi laporan secara lengkap mulai dari identitas pelapor, isi laporan, bukti foto, hingga mengubah status laporan.",
  },
  {
    title: "Chat Dengan Pelapor",
    image: adminChat,
    description:
      "Fitur komunikasi dua arah antara admin dan pelapor sehingga proses penanganan menjadi lebih transparan.",
  },
];

const userFeatures = [
  {
    title: "Dashboard User",
    image: userDashboard,
    description:
      "Dashboard pengguna menampilkan ringkasan seluruh laporan beserta statusnya.",
  },
  {
    title: "Buat Laporan",
    image: userCreateReport,
    description:
      "Pengguna dapat membuat laporan baru disertai bukti foto atau video.",
  },
  {
    title: "Riwayat Laporan",
    image: userReportHistory,
    description:
      "Menampilkan seluruh laporan yang pernah dikirim beserta statusnya.",
  },
  {
    title: "Detail Laporan",
    image: userReportDetail,
    description:
      "Pengguna dapat melihat detail laporan serta perkembangan penanganannya.",
  },
  {
    title: "Chat Dengan Admin",
    image: userChat,
    description:
      "Pengguna dapat berkomunikasi langsung dengan admin mengenai laporan yang sedang diproses.",
  },
];

function LaporSkuy() {
  return (
    <main className="bg-[#050816] text-white min-h-screen">

      {/* ================= HERO ================= */}

      <section className="border-b border-white/10">

        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-14">

          <HashLink
            smooth
            to="/#projects"
            className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition"
          >
            ← Kembali ke Portfolio
          </HashLink>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .7 }}
            className="mt-10"
          >

            <span className="text-cyan-400 uppercase tracking-[4px] text-sm">
              Fullstack Web Project
            </span>

            <h1 className="text-5xl lg:text-6xl font-bold mt-4">
              LaporSkuy
            </h1>

            <p className="mt-8 text-slate-400 leading-8 max-w-4xl">
              LaporSkuy merupakan sistem pengaduan masyarakat berbasis web
              yang dikembangkan untuk membantu proses penyampaian laporan
              warga kepada pengurus RT secara digital. Sistem memiliki dua
              role utama yaitu Admin dan User sehingga proses verifikasi
              pengguna, pengelolaan laporan, pembaruan status, hingga
              komunikasi antara admin dan pelapor dapat dilakukan secara
              lebih efektif, transparan, dan terdokumentasi.
            </p>

            <div className="flex flex-wrap gap-3 mt-10">

              {[
                "Laravel 12",
                "React.js",
                "MySQL",
                "Postman",
              ].map((tech) => (

                <span
                  key={tech}
                  className="px-5 py-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 text-cyan-300"
                >
                  {tech}
                </span>

              ))}

            </div>

            <motion.div
              initial={{ opacity:0, y:30 }}
              whileInView={{ opacity:1, y:0 }}
              viewport={{ once:true }}
              transition={{ duration:.8 }}
              className="mt-14"
            >

              <img
                src={banner}
                alt="LaporSkuy"
                className="w-full rounded-3xl border border-white/10 shadow-2xl"
              />

            </motion.div>

          </motion.div>

        </div>

      </section>

      {/* ================= OVERVIEW ================= */}

      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-20">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .7 }}
          className="grid lg:grid-cols-3 gap-8"
        >

          <div className="lg:col-span-2 rounded-3xl border border-white/10 bg-white/5 p-8">

            <h2 className="text-3xl font-bold">
              Overview Project
            </h2>

            <p className="mt-6 text-slate-400 leading-8">
              LaporSkuy dibangun sebagai solusi digital untuk membantu warga
              menyampaikan laporan kepada pengurus RT secara lebih mudah.
              Seluruh laporan tersimpan dalam database sehingga proses
              pencatatan, pemantauan, dan dokumentasi menjadi lebih
              terstruktur dibandingkan proses manual.
            </p>

            <p className="mt-6 text-slate-400 leading-8">
              Admin bertugas melakukan verifikasi pengguna, mengelola laporan,
              memperbarui status penanganan, serta berkomunikasi dengan
              pelapor melalui fitur chat. Sementara itu pengguna dapat
              membuat laporan, memantau status laporan, melihat riwayat,
              dan menerima informasi terbaru dari admin.
            </p>

          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

            <h3 className="text-2xl font-semibold">
              Informasi Project
            </h3>

            <div className="mt-8 space-y-6">

              <div>
                <p className="text-slate-500 text-sm">
                  Role
                </p>

                <h4 className="text-xl font-semibold mt-1">
                  Fullstack Developer
                </h4>
              </div>

              <div>
                <p className="text-slate-500 text-sm">
                  Project Type
                </p>

                <h4 className="text-xl font-semibold mt-1">
                  Public Complaint System
                </h4>
              </div>

              <div>
                <p className="text-slate-500 text-sm">
                  Backend
                </p>

                <h4 className="text-xl font-semibold mt-1">
                  Laravel 12 REST API
                </h4>
              </div>

              <div>
                <p className="text-slate-500 text-sm">
                  Frontend
                </p>

                <h4 className="text-xl font-semibold mt-1">
                  React.js
                </h4>
              </div>

              <div>
                <p className="text-slate-500 text-sm">
                  Database
                </p>

                <h4 className="text-xl font-semibold mt-1">
                  MySQL
                </h4>
              </div>

            </div>

          </div>

        </motion.div>

      </section>

      {/* ================= ADMIN FEATURES ================= */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 pb-24">

  <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
  >

    <span className="text-cyan-400 uppercase tracking-[4px] text-sm">
      Administrator
    </span>

    <h2 className="text-4xl font-bold mt-4">
      Fitur Admin
    </h2>

    <p className="mt-5 text-slate-400 max-w-3xl leading-8">
      Administrator bertanggung jawab melakukan verifikasi pengguna,
      mengelola seluruh laporan masyarakat, memperbarui status
      penanganan, melihat detail laporan, hingga berkomunikasi
      langsung dengan pelapor melalui fitur chat.
    </p>

  </motion.div>

  <div className="mt-14 space-y-24">

    {adminFeatures.map((feature, index) => (

      <motion.div
        key={feature.title}
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: .7 }}
        className={`grid lg:grid-cols-2 gap-12 items-center ${
          index % 2 !== 0
            ? "lg:[&>*:first-child]:order-2"
            : ""
        }`}
      >

        {/* IMAGE */}

        <div>

          <img
            src={feature.image}
            alt={feature.title}
            className="rounded-3xl border border-white/10 shadow-xl"
          />

        </div>

        {/* CONTENT */}

        <div>

          <h3 className="text-3xl font-bold">
            {feature.title}
          </h3>

          <p className="mt-6 text-slate-400 leading-8">
            {feature.description}
          </p>

        </div>

      </motion.div>

    ))}

  </div>

</section>

{/* ================= USER FEATURES ================= */}
<section className="max-w-7xl mx-auto px-6 lg:px-8 pb-24">

  <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
  >

    <span className="text-cyan-400 uppercase tracking-[4px] text-sm">
      User
    </span>

    <h2 className="text-4xl font-bold mt-4">
      Fitur User
    </h2>

    <p className="mt-5 text-slate-400 max-w-3xl leading-8">
      Pengguna dapat membuat laporan, mengunggah bukti foto,
      memantau perkembangan laporan, melihat riwayat laporan,
      serta berkomunikasi langsung dengan admin melalui fitur chat.
    </p>

  </motion.div>

  <div className="mt-14 space-y-24">

    {userFeatures.map((feature, index) => (

      <motion.div
        key={feature.title}
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: .7 }}
        className={`grid lg:grid-cols-2 gap-12 items-center ${
          index % 2 !== 0
            ? "lg:[&>*:first-child]:order-2"
            : ""
        }`}
      >

        <div>

          <img
            src={feature.image}
            alt={feature.title}
            className="rounded-3xl border border-white/10 shadow-xl"
          />

        </div>

        <div>

          <h3 className="text-3xl font-bold">
            {feature.title}
          </h3>

          <p className="mt-6 text-slate-400 leading-8">
            {feature.description}
          </p>

        </div>

      </motion.div>

    ))}

  </div>

</section>

{/* ================= CHALLENGES ================= */}

<section className="max-w-7xl mx-auto px-6 lg:px-8 pb-24">

  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: .7 }}
    className="rounded-3xl border border-white/10 bg-white/5 p-10"
  >

    <h2 className="text-4xl font-bold">
      Tantangan Pengembangan
    </h2>

    <div className="mt-10 space-y-5 text-slate-400 leading-8">

      <p>
        • Membangun autentikasi menggunakan Laravel Sanctum
        sehingga hak akses Admin dan User dapat dipisahkan
        dengan aman.
      </p>

      <p>
        • Merancang alur verifikasi akun sehingga hanya warga
        yang telah disetujui admin yang dapat menggunakan sistem.
      </p>

      <p>
        • Mengembangkan sistem status laporan agar setiap
        perkembangan penanganan dapat dipantau oleh pelapor.
      </p>

      <p>
        • Mengintegrasikan fitur chat sehingga komunikasi
        antara admin dan warga dapat dilakukan langsung
        melalui aplikasi.
      </p>

      <p>
        • Membangun REST API menggunakan Laravel yang
        terhubung dengan frontend React secara terpisah.
      </p>

    </div>

  </motion.div>

</section>

{/* ================= WHAT I LEARNED ================= */}

<section className="max-w-7xl mx-auto px-6 lg:px-8 pb-24">

  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: .7 }}
    className="rounded-3xl border border-cyan-400/20 bg-cyan-400/5 p-10"
  >

    <h2 className="text-4xl font-bold">
      What I Learned
    </h2>

    <div className="grid md:grid-cols-2 gap-5 mt-10">

      {[
        "REST API Development menggunakan Laravel",
        "Role Based Authentication",
        "Laravel Sanctum",
        "CRUD Management",
        "MySQL Database Design",
        "Frontend Development menggunakan React",
        "API Testing menggunakan Postman",
        "Client & Server Architecture",
      ].map((item) => (

        <div
          key={item}
          className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-4"
        >

          <span className="text-cyan-400 text-xl">
            ✓
          </span>

          <span className="text-slate-300">
            {item}
          </span>

        </div>

      ))}

    </div>

  </motion.div>

</section>

{/* ================= FOOTER ================= */}
<section className="border-t border-white/10">

  <div className="max-w-7xl mx-auto px-6 py-10 text-center">

    

  </div>

</section>

</main>
);
}

export default LaporSkuy;