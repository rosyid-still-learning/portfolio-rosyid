import { motion } from "framer-motion";
import toast from "react-hot-toast";

const contacts = [
  {
    title: "Email",
    value: "rosyid@student.undiksha.ac.id",
    link: "mailto:rosyid@student.undiksha.ac.id",
  },
  {
    title: "Instagram",
    value: "@rosheidd",
    link: "https://www.instagram.com/rosheidd",
  },
  {
    title: "WhatsApp",
    value: "Klik untuk ke WhatsApp",
    isWhatsapp: true,
  },
];

function Contact() {
  const handleClick = (contact) => {
    if (contact.isWhatsapp) {
      toast("DM ke ig dlu aja kalau butuh nomer WA mwehehehehe😁😁😁");
    } else {
      window.open(contact.link, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <section id="contact" className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <h2 className="section-title">Contact Me</h2>

          <p className="section-subtitle">
            Terima kasih telah mengunjungi portfolio saya. Jika ingin
            berdiskusi, berkolaborasi, atau sekadar terhubung, jangan
            ragu untuk menghubungi saya melalui salah satu kontak di
            bawah ini.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mt-14">
          {contacts.map((contact, index) => (
            <motion.div
              key={contact.title}
              onClick={() => handleClick(contact)}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              className="glass rounded-3xl p-8 text-center border border-white/10 hover:border-cyan-400/40 hover:-translate-y-2 transition-all duration-300 cursor-pointer"
            >
              <h3 className="text-2xl font-bold mb-4">
                {contact.title}
              </h3>

              <p className="text-slate-400 break-words">
                {contact.value}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Contact;