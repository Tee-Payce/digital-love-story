import { motion } from "framer-motion"

export default function VideoSection({ title, video }) {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-4 py-12">
      <motion.h1
        className="text-white text-xl md:text-2xl font-serif mb-8 text-center px-4"
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        {title}
      </motion.h1>
      
      <motion.div
        className="relative w-full max-w-sm md:max-w-4xl overflow-hidden rounded-xl"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.4 }}
      >
        {/* Background blurred video */}
        <video
          src={video}
          autoPlay
          muted
          loop
          className="absolute inset-0 w-full h-full object-cover blur-lg scale-110"
        />
        {/* Main video */}
        <video
          src={video}
          autoPlay
          muted
          loop
          controls
          className="relative z-10 w-full h-auto aspect-[9/16] md:aspect-video object-contain shadow-2xl"
          onError={(e) => console.error("Video failed to load:", video, e)}
        />
        {/* Top blur overlay */}
        <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-black/60 to-transparent z-20 pointer-events-none"></div>
        {/* Bottom blur overlay */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/60 to-transparent z-20 pointer-events-none"></div>
      </motion.div>
    </section>
  )
}
