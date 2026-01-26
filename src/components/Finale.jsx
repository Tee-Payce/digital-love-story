import r1 from "../assets/r1.jpeg"

export default function Finale() {
  const sendMessage = () => {
    const text = document.getElementById("msg").value
    const phone = "263779379206"
    window.open(
      `https://wa.me/${phone}?text=${encodeURIComponent(text)}`,
      "_blank"
    )
  }

  return (
    <section 
      className="min-h-screen relative flex flex-col items-center justify-center text-center px-6"
      style={{
        backgroundImage: `url(${r1})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
      
      {/* Content */}
      <div className="relative z-10 max-w-2xl mx-auto">
        <h2 className="text-white text-5xl md:text-6xl font-light mb-4 tracking-wide">
          Leave Me Your
        </h2>
        <h3 className="text-gold text-3xl md:text-4xl font-serif mb-12 italic">
          Words
        </h3>

        <div className="backdrop-blur-md bg-white/10 rounded-2xl p-8 border border-white/20 shadow-2xl">
          <textarea
            id="msg"
            className="w-full h-40 bg-transparent border-2 border-gold/50 text-white p-6 rounded-xl placeholder-white/70 focus:border-gold focus:outline-none resize-none text-lg"
            placeholder="Write from your heart..."
          />

          <button
            onClick={sendMessage}
            className="mt-8 bg-gradient-to-r from-gold to-yellow-400 text-black px-12 py-4 rounded-full font-medium text-lg hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center gap-2 mx-auto"
          >
            Send Message ❤️
          </button>
        </div>
      </div>
    </section>
  )
}
