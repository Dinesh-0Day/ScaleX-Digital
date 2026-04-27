import React from 'react';
import { motion } from 'motion/react';
import { Home, Clock, Sparkles } from 'lucide-react';
import { Link, useParams } from 'react-router';

export function ComingSoonGame() {
  const { id } = useParams();
  const gameName = id?.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-900 via-purple-900 to-indigo-900 p-8 flex items-center justify-center">
      <div className="max-w-2xl w-full">
        <Link to="/games" className="inline-flex items-center gap-2 text-white hover:text-yellow-300 transition-colors mb-8">
          <Home className="w-6 h-6" />
          <span className="font-bold">Back to Games</span>
        </Link>

        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", stiffness: 100, damping: 15 }}
          className="bg-white/10 backdrop-blur-lg rounded-3xl p-16 border-4 border-white/20 text-center"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            className="inline-block mb-8"
          >
            <Clock className="w-32 h-32 text-yellow-300" />
          </motion.div>

          <h1 className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-pink-300 to-purple-300 mb-6">
            {gameName}
          </h1>

          <div className="inline-block px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mb-8">
            <p className="text-white font-black text-2xl flex items-center gap-3">
              <Sparkles className="w-6 h-6" />
              COMING SOON
              <Sparkles className="w-6 h-6" />
            </p>
          </div>

          <p className="text-white/80 text-xl mb-8 leading-relaxed">
            We're working hard to bring you an amazing {gameName} experience!<br />
            This game will be available soon.
          </p>

          <Link
            to="/games"
            className="inline-block px-12 py-4 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-black text-xl rounded-full shadow-2xl transition-all hover:scale-105"
          >
            EXPLORE OTHER GAMES
          </Link>

          {/* Decorative elements */}
          <div className="mt-12 flex items-center justify-center gap-3">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
                className="w-3 h-3 bg-yellow-300 rounded-full"
              ></motion.div>
            ))}
          </div>
        </motion.div>

        {/* Fun facts */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-8 bg-white/5 backdrop-blur rounded-2xl p-6 border border-white/10"
        >
          <p className="text-white/60 text-center text-sm">
            💡 <span className="font-bold">Did you know?</span> We currently have 4 fully playable games: Ludo, Teen Patti, Roulette, and 7 Up Down!
          </p>
        </motion.div>
      </div>
    </div>
  );
}
