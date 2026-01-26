import { motion } from "framer-motion"
import rueCover from "../assets/rueCover.jpeg"

export default function Login() {
  const handleLogin = () => {
    localStorage.setItem("auth", "true")
    window.location.href = "/home"
  }

  return (
    <div className="bg-light bg-gradient-to-b from-black to-gray-900 min-h-screen flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 1.6 }}
        
        className="bg-black p-10  rounded-xl text-center border border-gold bg-cover bg-center"
        style={{ backgroundImage: `url(${rueCover})`,
                 width: '350px', height: '450px' }}
      >
        <h1 className="text-goldstr text-4xl font-serif mb-2">
          Hi my Love, 
        </h1>
        <p className="text-graysoft mb-6">
          I made this special page just for us.
          Please enter our secret to continue...
        </p>
        <input
          type="text"
          placeholder="Username"
          autoComplete="off"
          className="w-full bg-black bg-opacity-30 backdrop-blur-sm border border-gold p-3 text-white mb-2 rounded"
        />
         <p className="text-graysoft mb-2 text-xs text-left">
         hint: The Name you gave me when I unblocked you
        </p>
        <input
          type="password"
          placeholder="enter our special date"
          className="w-full bg-black bg-opacity-30 backdrop-blur-sm border border-gold p-3 text-white mb-2 rounded"
        />
        <p className="text-graysoft mb-6 text-xs text-left">
          hint: Our Anniversary Date YYYYMMDD
        </p>

        <button
          onClick={handleLogin}
          className="w-full bg-gold text-black py-2 rounded font-semibold"
        >
          Enter
        </button>
      </motion.div>
    </div>
  )
}
