import { motion } from "framer-motion"

export default function StorySection({ title, text, image, reverse }) {
  return (
    <section className="min-h-screen mb-4 flex items-center px-6 md:px-12 relative">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-black/20 to-transparent"></div>
      
      <div className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 items-center w-full relative z-10`}>
        
        <motion.div
          className="flex-1 max-w-lg"
          initial={{ opacity: 0, x: reverse ? 50 : -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {/* Glass morphism card for text */}
          <div className="backdrop-blur-md bg-white/10 rounded-2xl p-8 border border-white/20 shadow-2xl hover:bg-white/15 transition-all duration-300">
            <motion.h2 
              className="text-gold text-3xl md:text-4xl font-serif mb-6 relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {/* Decorative line */}
              <div className="absolute -left-4 top-1/2 w-2 h-8 bg-gradient-to-b from-gold to-yellow-400 rounded-full transform -translate-y-1/2"></div>
              {title}
            </motion.h2>
            <motion.p 
              className="text-gray-200 leading-relaxed text-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {text}
            </motion.p>
          </div>
        </motion.div>

        <motion.div
          className="flex-1 max-w-lg"
          initial={{ scale: 0.9, opacity: 0, x: reverse ? -50 : 50 }}
          whileInView={{ scale: 1, opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.02 }}
        >
          {/* Image with modern styling */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-gold/20 to-transparent rounded-3xl transform rotate-3 group-hover:rotate-6 transition-transform duration-300"></div>
            <img
              src={image}
              alt="Story"
              className="relative w-full h-auto rounded-3xl shadow-2xl object-cover border-2 border-white/10 group-hover:shadow-gold/20 transition-all duration-300"
              onError={(e) => console.error("Image failed to load:", image, e)}
            />
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
