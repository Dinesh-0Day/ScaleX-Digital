import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Dice1, Dice2, Dice3, Dice4, Dice5, Dice6, Home, Trophy, RotateCcw } from 'lucide-react';
import { Link } from 'react-router';

const DICE_ICONS = [Dice1, Dice2, Dice3, Dice4, Dice5, Dice6];
const COLORS = ['#FF6B6B', '#4ECDC4', '#FFE66D', '#95E1D3'];
const PLAYER_NAMES = ['Red', 'Blue', 'Yellow', 'Green'];

interface Player {
  id: number;
  color: string;
  name: string;
  tokens: number[];
  finished: number;
}

export function LudoGame() {
  const [currentPlayer, setCurrentPlayer] = useState(0);
  const [diceValue, setDiceValue] = useState(1);
  const [isRolling, setIsRolling] = useState(false);
  const [players, setPlayers] = useState<Player[]>([
    { id: 0, color: COLORS[0], name: PLAYER_NAMES[0], tokens: [0, 0, 0, 0], finished: 0 },
    { id: 1, color: COLORS[1], name: PLAYER_NAMES[1], tokens: [0, 0, 0, 0], finished: 0 },
    { id: 2, color: COLORS[2], name: PLAYER_NAMES[2], tokens: [0, 0, 0, 0], finished: 0 },
    { id: 3, color: COLORS[3], name: PLAYER_NAMES[3], tokens: [0, 0, 0, 0], finished: 0 },
  ]);
  const [winner, setWinner] = useState<number | null>(null);

  const rollDice = () => {
    if (isRolling || winner !== null) return;

    setIsRolling(true);
    let rolls = 0;
    const interval = setInterval(() => {
      setDiceValue(Math.floor(Math.random() * 6) + 1);
      rolls++;
      if (rolls > 10) {
        clearInterval(interval);
        const finalValue = Math.floor(Math.random() * 6) + 1;
        setDiceValue(finalValue);
        setIsRolling(false);
        handleDiceRoll(finalValue);
      }
    }, 100);
  };

  const handleDiceRoll = (value: number) => {
    // Simple game logic: move random token forward
    setTimeout(() => {
      setPlayers(prev => {
        const newPlayers = [...prev];
        const player = newPlayers[currentPlayer];
        const availableTokens = player.tokens.map((pos, idx) => ({ pos, idx })).filter(t => t.pos < 57);

        if (availableTokens.length > 0) {
          const randomToken = availableTokens[Math.floor(Math.random() * availableTokens.length)];
          player.tokens[randomToken.idx] = Math.min(57, player.tokens[randomToken.idx] + value);

          if (player.tokens[randomToken.idx] >= 57) {
            player.finished++;
            if (player.finished === 4) {
              setWinner(currentPlayer);
            }
          }
        }

        return newPlayers;
      });

      // Next player's turn
      if (value !== 6 && winner === null) {
        setCurrentPlayer((prev) => (prev + 1) % 4);
      }
    }, 500);
  };

  const resetGame = () => {
    setPlayers([
      { id: 0, color: COLORS[0], name: PLAYER_NAMES[0], tokens: [0, 0, 0, 0], finished: 0 },
      { id: 1, color: COLORS[1], name: PLAYER_NAMES[1], tokens: [0, 0, 0, 0], finished: 0 },
      { id: 2, color: COLORS[2], name: PLAYER_NAMES[2], tokens: [0, 0, 0, 0], finished: 0 },
      { id: 3, color: COLORS[3], name: PLAYER_NAMES[3], tokens: [0, 0, 0, 0], finished: 0 },
    ]);
    setCurrentPlayer(0);
    setDiceValue(1);
    setWinner(null);
  };

  const DiceIcon = DICE_ICONS[diceValue - 1];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <Link to="/games" className="flex items-center gap-2 text-white hover:text-yellow-300 transition-colors">
            <Home className="w-6 h-6" />
            <span className="font-bold">Back to Games</span>
          </Link>
          <h1 className="text-6xl font-black text-yellow-300 tracking-tighter">LUDO</h1>
          <button
            onClick={resetGame}
            className="flex items-center gap-2 px-4 py-2 bg-white/20 hover:bg-white/30 rounded-lg text-white transition-all"
          >
            <RotateCcw className="w-5 h-5" />
            Reset
          </button>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Game Board */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-3xl p-8 shadow-2xl">
              {/* Simplified Ludo Board */}
              <div className="grid grid-cols-15 gap-1 aspect-square">
                {/* Player Homes */}
                <div className="col-span-6 row-span-6 grid grid-cols-2 gap-4 p-4" style={{ backgroundColor: `${COLORS[0]}40` }}>
                  {[0, 1, 2, 3].map((idx) => (
                    <motion.div
                      key={idx}
                      className="rounded-full flex items-center justify-center text-white font-black text-2xl"
                      style={{ backgroundColor: players[0].tokens[idx] === 0 ? COLORS[0] : '#ccc' }}
                      animate={{ scale: players[0].tokens[idx] > 0 ? [1, 1.2, 1] : 1 }}
                    >
                      {players[0].tokens[idx]}
                    </motion.div>
                  ))}
                </div>

                <div className="col-span-3 row-span-6 bg-white"></div>

                <div className="col-span-6 row-span-6 grid grid-cols-2 gap-4 p-4" style={{ backgroundColor: `${COLORS[1]}40` }}>
                  {[0, 1, 2, 3].map((idx) => (
                    <motion.div
                      key={idx}
                      className="rounded-full flex items-center justify-center text-white font-black text-2xl"
                      style={{ backgroundColor: players[1].tokens[idx] === 0 ? COLORS[1] : '#ccc' }}
                      animate={{ scale: players[1].tokens[idx] > 0 ? [1, 1.2, 1] : 1 }}
                    >
                      {players[1].tokens[idx]}
                    </motion.div>
                  ))}
                </div>

                <div className="col-span-6 row-span-3 bg-white"></div>

                {/* Center */}
                <div className="col-span-3 row-span-3 bg-gradient-to-br from-yellow-400 via-pink-500 to-purple-600 rounded-full flex items-center justify-center">
                  <Trophy className="w-12 h-12 text-white" />
                </div>

                <div className="col-span-6 row-span-3 bg-white"></div>

                <div className="col-span-6 row-span-6 grid grid-cols-2 gap-4 p-4" style={{ backgroundColor: `${COLORS[2]}40` }}>
                  {[0, 1, 2, 3].map((idx) => (
                    <motion.div
                      key={idx}
                      className="rounded-full flex items-center justify-center text-slate-800 font-black text-2xl"
                      style={{ backgroundColor: players[2].tokens[idx] === 0 ? COLORS[2] : '#ccc' }}
                      animate={{ scale: players[2].tokens[idx] > 0 ? [1, 1.2, 1] : 1 }}
                    >
                      {players[2].tokens[idx]}
                    </motion.div>
                  ))}
                </div>

                <div className="col-span-3 row-span-6 bg-white"></div>

                <div className="col-span-6 row-span-6 grid grid-cols-2 gap-4 p-4" style={{ backgroundColor: `${COLORS[3]}40` }}>
                  {[0, 1, 2, 3].map((idx) => (
                    <motion.div
                      key={idx}
                      className="rounded-full flex items-center justify-center text-white font-black text-2xl"
                      style={{ backgroundColor: players[3].tokens[idx] === 0 ? COLORS[3] : '#ccc' }}
                      animate={{ scale: players[3].tokens[idx] > 0 ? [1, 1.2, 1] : 1 }}
                    >
                      {players[3].tokens[idx]}
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Game Controls */}
          <div className="space-y-6">
            {/* Current Player */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border-2 border-white/20">
              <h3 className="text-white text-sm font-bold mb-4">CURRENT PLAYER</h3>
              <div
                className="text-center p-6 rounded-xl"
                style={{ backgroundColor: players[currentPlayer].color }}
              >
                <p className="text-white text-3xl font-black">{players[currentPlayer].name}</p>
              </div>
            </div>

            {/* Dice */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border-2 border-white/20">
              <h3 className="text-white text-sm font-bold mb-4">ROLL THE DICE</h3>
              <motion.button
                onClick={rollDice}
                disabled={isRolling || winner !== null}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                animate={isRolling ? { rotate: 360 } : {}}
                transition={{ duration: 0.5 }}
                className="w-full aspect-square bg-white rounded-2xl shadow-xl flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <DiceIcon className="w-24 h-24 text-slate-800" />
              </motion.button>
              <p className="text-center mt-4 text-yellow-300 text-2xl font-black">
                {isRolling ? 'ROLLING...' : `DICE: ${diceValue}`}
              </p>
            </div>

            {/* Player Stats */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border-2 border-white/20">
              <h3 className="text-white text-sm font-bold mb-4">PLAYER STATS</h3>
              <div className="space-y-3">
                {players.map((player, idx) => (
                  <div
                    key={player.id}
                    className="flex items-center justify-between p-3 rounded-lg"
                    style={{ backgroundColor: `${player.color}30` }}
                  >
                    <span className="font-bold" style={{ color: player.color }}>{player.name}</span>
                    <span className="text-white font-mono">{player.finished}/4</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Winner Modal */}
        <AnimatePresence>
          {winner !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
              onClick={resetGame}
            >
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                exit={{ scale: 0, rotate: 180 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="bg-gradient-to-br from-yellow-400 to-orange-500 rounded-3xl p-12 text-center shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                <Trophy className="w-24 h-24 text-white mx-auto mb-6" />
                <h2 className="text-6xl font-black text-white mb-4">WINNER!</h2>
                <p className="text-3xl font-bold mb-8" style={{ color: players[winner].color }}>
                  {players[winner].name} Player Wins!
                </p>
                <button
                  onClick={resetGame}
                  className="px-8 py-4 bg-white text-slate-900 rounded-full font-black text-xl hover:scale-110 transition-transform"
                >
                  PLAY AGAIN
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
