import React from 'react';
import { Link } from 'react-router';
import { motion } from 'motion/react';
import { Dices, Spade, Club, Diamond, Heart, Trophy, Gamepad2, Dice1, Dice6, Crown } from 'lucide-react';

const games = [
  { id: 'poker', name: 'Poker', icon: Spade, color: '#FF6B6B', available: true },
  { id: 'teen-patti', name: 'Teen Patti', icon: Club, color: '#4ECDC4', available: true },
  { id: 'rummy', name: 'Rummy', icon: Diamond, color: '#FFE66D', available: true },
  { id: 'ludo', name: 'Ludo', icon: Gamepad2, color: '#95E1D3', available: true },
  { id: 'blackjack', name: 'Blackjack', icon: Heart, color: '#FF6B9D', available: true },
  { id: 'roulette', name: 'Roulette', icon: Trophy, color: '#C44569', available: true },
  { id: 'solitaire', name: 'Solitaire', icon: Spade, color: '#A8E6CF', available: true },
  { id: 'andar-bahar', name: 'Andar Bahar', icon: Club, color: '#FFD93D', available: true },
  { id: '7-up-down', name: '7 Up Down', icon: Dice6, color: '#6BCF7F', available: true },
  { id: 'horse-racing', name: 'Horse Racing', icon: Crown, color: '#FF8B94', available: true },
  { id: 'carrom', name: 'Carrom', icon: Dices, color: '#B4A7D6', available: true },
];

export function GamesHub() {
  return (
    <div className="min-h-screen bg-[#0a0e27] relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-10 w-64 h-64 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-700"></div>
        <div className="absolute bottom-20 left-1/2 w-64 h-64 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-12">
        {/* Header */}
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <h1 className="text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 mb-4 tracking-tighter">
            ARCADE
          </h1>
          <p className="text-2xl text-cyan-300 font-bold tracking-wide">
            CHOOSE YOUR GAME
          </p>
          <div className="mt-4 flex items-center justify-center gap-2">
            <div className="w-20 h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent"></div>
            <Gamepad2 className="w-6 h-6 text-yellow-400" />
            <div className="w-20 h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent"></div>
          </div>
        </motion.div>

        {/* Games Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {games.map((game, index) => (
            <motion.div
              key={game.id}
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{
                delay: index * 0.1,
                type: "spring",
                stiffness: 200,
                damping: 15
              }}
              whileHover={{ scale: 1.05, rotate: 2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to={`/game/${game.id}`}
                className="block relative group"
              >
                <div
                  className="relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 border-4 border-slate-700 overflow-hidden shadow-2xl transition-all duration-300 group-hover:border-opacity-0"
                  style={{
                    boxShadow: `0 0 30px ${game.color}40`
                  }}
                >
                  {/* Glowing border on hover */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"
                    style={{
                      background: `linear-gradient(135deg, ${game.color}80, transparent)`,
                    }}
                  ></div>

                  {/* Pixel pattern */}
                  <div className="absolute inset-0 opacity-5"
                    style={{
                      backgroundImage: `repeating-linear-gradient(0deg, ${game.color} 0px, transparent 1px, transparent 4px), repeating-linear-gradient(90deg, ${game.color} 0px, transparent 1px, transparent 4px)`,
                      backgroundSize: '4px 4px'
                    }}
                  ></div>

                  <div className="relative z-10 flex flex-col items-center">
                    {/* Icon */}
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className="mb-6 p-6 rounded-xl"
                      style={{ backgroundColor: `${game.color}20` }}
                    >
                      <game.icon
                        className="w-16 h-16"
                        style={{ color: game.color }}
                        strokeWidth={2.5}
                      />
                    </motion.div>

                    {/* Game Name */}
                    <h3
                      className="text-3xl font-black mb-2 tracking-tight"
                      style={{ color: game.color, textShadow: `0 0 20px ${game.color}60` }}
                    >
                      {game.name}
                    </h3>

                    {/* Play Button */}
                    <div className="mt-4 px-8 py-3 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full font-black text-slate-900 text-lg tracking-wide shadow-lg group-hover:shadow-2xl transform group-hover:scale-110 transition-all duration-300">
                      PLAY NOW
                    </div>

                    {/* Decorative corners */}
                    <div className="absolute top-2 left-2 w-6 h-6 border-l-4 border-t-4 opacity-50" style={{ borderColor: game.color }}></div>
                    <div className="absolute top-2 right-2 w-6 h-6 border-r-4 border-t-4 opacity-50" style={{ borderColor: game.color }}></div>
                    <div className="absolute bottom-2 left-2 w-6 h-6 border-l-4 border-b-4 opacity-50" style={{ borderColor: game.color }}></div>
                    <div className="absolute bottom-2 right-2 w-6 h-6 border-r-4 border-b-4 opacity-50" style={{ borderColor: game.color }}></div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Retro Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="text-center mt-16"
        >
          <p className="text-cyan-400 text-sm font-mono tracking-widest">
            INSERT COIN TO CONTINUE
          </p>
          <div className="mt-2 inline-block px-4 py-1 border-2 border-cyan-400 animate-pulse">
            <span className="text-yellow-300 font-mono text-xs">CREDITS: ∞</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
