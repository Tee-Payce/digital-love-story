import { motion } from "framer-motion"

export default function VideoSection({ title, video }) {
  return (
    <section className="min-h-screen flex justify-center items-center px-4">
      <motion.h1
        className="text-gold text-4xl font-serif mb-8 text-center"
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2 }}
        title={title}
      />
      
      <motion.video
        src={video}
        autoPlay
        muted
        loop
        controls
        className="rounded-xl shadow-2xl max-w-4xl w-full h-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.4 }}
        onError={(e) => console.error("Video failed to load:", video, e)}
      />
    </section>
  )
}
