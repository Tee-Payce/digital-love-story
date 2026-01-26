import { motion } from "framer-motion"

export default function VideoSection({ video }) {
  return (
    <section className="min-h-screen flex justify-center items-center px-4">
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
