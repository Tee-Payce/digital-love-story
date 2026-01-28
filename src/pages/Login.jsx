import { motion } from "framer-motion"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import rueCover from "../assets/rueCover.jpeg"

export default function Login() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const navigate = useNavigate()

  const handleLogin = () => {
    const normalizedUsername = username.toLowerCase().replace(/\s+/g, '')
    const validUsernames = ['christmasmiracle', 'christmas miracle', 'christmasmiracl', 'christmasmiraclle']
    const validPassword = ['01012026', '01-01-2026', '01/01/2026']

    if (validUsernames.some(valid => normalizedUsername.includes(valid.replace(/\s+/g, ''))) && (password === validPassword[0] || password === validPassword[1] || password === validPassword[2])) {
      localStorage.setItem("auth", "true")
      navigate("/home")
    } else {
      setError("Invalid credentials. Try again!")
    }
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
        {error && <p className="text-red-400 mb-2 text-sm">{error}</p>}
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          autoComplete="off"
          className="w-full bg-black bg-opacity-30 backdrop-blur-sm border border-gold p-3 text-white mb-2 rounded"
        />
         <p className="text-graysoft mb-2 text-xs text-left">
         hint: The Name you gave me when I unblocked you
        </p>
        <input
          type="password"
          placeholder="enter our special date"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full bg-black bg-opacity-30 backdrop-blur-sm border border-gold p-3 text-white mb-2 rounded"
        />
        <p className="text-graysoft mb-6 text-xs text-left">
          hint: Our Anniversary Date DDMMYYYY
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
