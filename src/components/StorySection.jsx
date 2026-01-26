import { motion } from "framer-motion"

export default function StorySection({ title, text, image, reverse }) {
  return (
    <section className="min-h-screen mb-4 flex items-center px-6 md:px-12">
      <div className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} gap-10 items-center w-full`}>
        
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
        >
          <h2 className="text-gold text-4xl font-serif mb-4">
            {title}
          </h2>
          <p className="text-gray-300 leading-relaxed">
            {text}
          </p>
        </motion.div>

        <motion.div
          className="flex-1"
          initial={{ scale: 1.1, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          <img
            src={image}
            alt="Story"
            className="w-full h-auto rounded-xl shadow-xl object-cover"
            onError={(e) => console.error("Image failed to load:", image, e)}
          />
        </motion.div>
      </div>
    </section>
  )
}
