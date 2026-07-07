import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { HashLink } from "react-router-hash-link";

import banner from "../assets/images/ganesha-booking-1.png";

import adminDashboard from "../assets/images/ganesha-detail/admin-dashboard.png";
import adminRooms from "../assets/images/ganesha-detail/admin-rooms.png";
import adminBooking from "../assets/images/ganesha-detail/admin-booking.png";
import adminActive from "../assets/images/ganesha-detail/admin-active.png";
import adminHistory from "../assets/images/ganesha-detail/admin-history.png";

import userDashboard from "../assets/images/ganesha-detail/user-dashboard.png";
import userRooms from "../assets/images/ganesha-detail/user-rooms.png";
import userRoomDetail from "../assets/images/ganesha-detail/user-room-detail.png";
import userStatus from "../assets/images/ganesha-detail/user-status.png";

const adminFeatures = [
  {
    title: "Dashboard Admin",
    image: adminDashboard,
    description:
      "Dashboard admin menampilkan ringkasan sistem serta akses menuju seluruh menu utama seperti pengelolaan ruangan, permintaan booking, monitoring ruangan, dan riwayat booking.",
  },

  {
    title: "Kelola Ruangan",
    image: adminRooms,
    description:
      "Administrator dapat menambahkan, mengubah, menghapus, dan mencari data ruangan beserta informasi lokasi, kapasitas, kategori, dan gambar ruangan.",
  },

  {
    title: "Permintaan Booking",
    image: adminBooking,
    description:
      "Seluruh permintaan booking dari pengguna akan ditampilkan pada halaman ini. Administrator dapat melihat detail kegiatan, file pendukung, kemudian memberikan keputusan Approve atau Reject.",
  },

  {
    title: "Ruangan Sedang Dibooking",
    image: adminActive,
    description:
      "Setelah permintaan disetujui, ruangan akan masuk ke halaman monitoring sehingga administrator dapat mengetahui ruangan mana yang sedang digunakan secara real-time.",
  },

  {
    title: "Riwayat Booking",
    image: adminHistory,
    description:
      "Riwayat seluruh proses booking disimpan sebagai dokumentasi sehingga administrator dapat melihat histori penggunaan ruangan yang telah selesai.",
  },
];

const userFeatures = [
  {
    title: "Dashboard User",
    image: userDashboard,
    description:
      "Dashboard pengguna menampilkan informasi singkat mengenai sistem serta akses menuju fitur utama seperti daftar ruangan dan status booking.",
  },

  {
    title: "Daftar Ruangan",
    image: userRooms,
    description:
      "Pengguna dapat melihat seluruh ruangan yang tersedia, melakukan pencarian berdasarkan nama, serta memfilter kategori ruangan sesuai kebutuhan.",
  },

  {
    title: "Detail Ruangan",
    image: userRoomDetail,
    description:
      "Setiap ruangan memiliki halaman detail yang menampilkan foto, kapasitas, fasilitas, deskripsi, serta kalender booking untuk membantu pengguna memilih jadwal yang tersedia.",
  },

  {
    title: "Status Booking Saya",
    image: userStatus,
    description:
      "Pengguna dapat memantau status permintaan booking secara real-time dan melakukan pembatalan sesuai aturan yang berlaku.",
  },
];

function GaneshaBooking() {
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
              Ganesha Booking
            </h1>

            <p className="mt-8 text-slate-400 leading-8 max-w-4xl">
              Ganesha Booking merupakan sistem peminjaman ruangan berbasis web
              yang dikembangkan untuk membantu proses reservasi ruangan di
              Universitas Pendidikan Ganesha. Sistem memiliki dua role utama,
              yaitu Administrator dan User, sehingga proses pengelolaan
              ruangan, persetujuan booking, monitoring penggunaan ruangan,
              hingga pengelolaan riwayat peminjaman dapat dilakukan secara
              lebih efektif dan terorganisir.
            </p>

            <div className="flex flex-wrap gap-3 mt-10">

              {[
                "Laravel 12",
                "Next.js",
                "MySQL",
                "Cloudinary",
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

                alt="Ganesha Booking"

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
              Ganesha Booking merupakan aplikasi berbasis web yang dibuat
              untuk mempermudah proses peminjaman ruangan di lingkungan
              Universitas Pendidikan Ganesha. Sistem menyediakan dua jenis
              pengguna yaitu Administrator dan User dengan hak akses yang
              berbeda sesuai kebutuhan.
            </p>

            <p className="mt-6 text-slate-400 leading-8">
              Administrator bertugas mengelola data ruangan, memproses
              permintaan booking, melakukan monitoring ruangan yang sedang
              digunakan, serta melihat riwayat booking. Sementara itu,
              pengguna dapat melihat daftar ruangan, mengecek detail
              fasilitas, melakukan booking, dan memantau status peminjaman
              secara real-time.
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
                  Room Booking System
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
                  Next.js
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
            Administrator bertanggung jawab dalam mengelola seluruh proses
            peminjaman ruangan, mulai dari pengelolaan data ruangan hingga
            persetujuan booking yang diajukan oleh pengguna.
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
                index % 2 !== 0 ? "lg:[&>*:first-child]:order-2" : ""
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
            Pengguna dapat melihat informasi ruangan, mengecek
            ketersediaan jadwal, melakukan booking, serta memantau status
            peminjaman yang telah diajukan.
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
                index % 2 !== 0 ? "lg:[&>*:first-child]:order-2" : ""
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
              • Membangun sistem autentikasi menggunakan Laravel Sanctum
              untuk membedakan hak akses Administrator dan User.
            </p>

            <p>
              • Mencegah konflik jadwal booking sehingga ruangan tidak
              dapat dibooking pada waktu yang sama.
            </p>

            <p>
              • Mengintegrasikan Cloudinary sebagai media penyimpanan
              dokumen pendukung booking.
            </p>

            <p>
              • Menerapkan validasi pembatalan booking maksimal 24 jam
              sebelum jadwal penggunaan ruangan.
            </p>

            <p>
              • Menjaga komunikasi antara Backend Laravel REST API dan
              Frontend Next.js agar data selalu sinkron.
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
              "Relasi Database MySQL",
              "CRUD Management",
              "Cloudinary Integration",
              "API Testing menggunakan Postman",
              "Frontend Development menggunakan Next.js",
              "Deployment Workflow",
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

export default GaneshaBooking;