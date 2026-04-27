import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Dice1, Dice2, Dice3, Dice4, Dice5, Dice6, Home, TrendingDown, Minus, TrendingUp, Coins, RotateCcw } from 'lucide-react';
import { Link } from 'react-router';

const DICE_ICONS = [Dice1, Dice2, Dice3, Dice4, Dice5, Dice6];

type BetType = 'down' | 'seven' | 'up' | null;

export function SevenUpDownGame() {
  const [credits, setCredits] = useState(1000);
  const [bet, setBet] = useState(100);
  const [selectedBet, setSelectedBet] = useState<BetType>(null);
  const [dice1, setDice1] = useState(1);
  const [dice2, setDice2] = useState(1);
  const [isRolling, setIsRolling] = useState(false);
  const [result, setResult] = useState<'win' | 'lose' | null>(null);
  const [history, setHistory] = useState<Array<{ bet: BetType; total: number; won: boolean }>>([]);

  const placeBet = (betType: BetType) => {
    if (isRolling || credits < bet) return;
    setSelectedBet(betType);
  };

  const rollDice = () => {
    if (!selectedBet || isRolling || credits < bet) return;

    setIsRolling(true);
    setResult(null);
    setCredits(prev => prev - bet);

    let rolls = 0;
    const interval = setInterval(() => {
      setDice1(Math.floor(Math.random() * 6) + 1);
      setDice2(Math.floor(Math.random() * 6) + 1);
      rolls++;

      if (rolls > 15) {
        clearInterval(interval);
        const final1 = Math.floor(Math.random() * 6) + 1;
        const final2 = Math.floor(Math.random() * 6) + 1;
        setDice1(final1);
        setDice2(final2);
        setIsRolling(false);
        checkResult(final1, final2);
      }
    }, 100);
  };

  const checkResult = (d1: number, d2: number) => {
    const total = d1 + d2;
    let won = false;

    if (selectedBet === 'down' && total < 7) won = true;
    if (selectedBet === 'seven' && total === 7) won = true;
    if (selectedBet === 'up' && total > 7) won = true;

    setResult(won ? 'win' : 'lose');
    setHistory(prev => [{ bet: selectedBet!, total, won }, ...prev.slice(0, 9)]);

    if (won) {
      const payout = selectedBet === 'seven' ? bet * 5 : bet * 2;
      setCredits(prev => prev + payout);
    }

    setTimeout(() => {
      setSelectedBet(null);
      setResult(null);
    }, 3000);
  };

  const resetGame = () => {
    setCredits(1000);
    setBet(100);
    setSelectedBet(null);
    setDice1(1);
    setDice2(1);
    setResult(null);
    setHistory([]);
  };

  const Dice1Icon = DICE_ICONS[dice1 - 1];
  const Dice2Icon = DICE_ICONS[dice2 - 1];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-900 via-emerald-800 to-teal-900 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <Link to="/games" className="flex items-center gap-2 text-white hover:text-yellow-300 transition-colors">
            <Home className="w-6 h-6" />
            <span className="font-bold">Back to Games</span>
          </Link>
          <h1 className="text-6xl font-black text-yellow-300 tracking-tighter">7 UP DOWN</h1>
          <button
            onClick={resetGame}
            className="flex items-center gap-2 px-4 py-2 bg-white/20 hover:bg-white/30 rounded-lg text-white transition-all"
          >
            <RotateCcw className="w-5 h-5" />
            Reset
          </button>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Game Area */}
          <div className="lg:col-span-2 space-y-6">
            {/* Credits Display */}
            <div className="bg-gradient-to-r from-yellow-500 to-orange-500 rounded-2xl p-6 flex items-center justify-between shadow-2xl">
              <div className="flex items-center gap-3">
                <Coins className="w-10 h-10 text-white" />
                <div>
                  <p className="text-white/80 text-sm font-bold">YOUR CREDITS</p>
                  <p className="text-white text-4xl font-black">{credits}</p>
                </div>
              </div>
              <div>
                <p className="text-white/80 text-sm font-bold text-right">CURRENT BET</p>
                <div className="flex items-center gap-2 mt-1">
                  <button
                    onClick={() => setBet(Math.max(10, bet - 50))}
                    className="px-3 py-1 bg-white/20 hover:bg-white/30 rounded text-white font-bold"
                  >
                    -
                  </button>
                  <p className="text-white text-3xl font-black min-w-[100px] text-center">{bet}</p>
                  <button
                    onClick={() => setBet(Math.min(credits, bet + 50))}
                    className="px-3 py-1 bg-white/20 hover:bg-white/30 rounded text-white font-bold"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            {/* Dice Display */}
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-12 border-4 border-white/20">
              <div className="flex items-center justify-center gap-12 mb-8">
                <motion.div
                  animate={isRolling ? { rotate: 360, scale: [1, 1.2, 1] } : {}}
                  transition={{ duration: 0.3, repeat: isRolling ? Infinity : 0 }}
                  className="bg-white rounded-3xl p-8 shadow-2xl"
                >
                  <Dice1Icon className="w-32 h-32 text-red-600" />
                </motion.div>
                <motion.div
                  animate={isRolling ? { rotate: -360, scale: [1, 1.2, 1] } : {}}
                  transition={{ duration: 0.3, repeat: isRolling ? Infinity : 0 }}
                  className="bg-white rounded-3xl p-8 shadow-2xl"
                >
                  <Dice2Icon className="w-32 h-32 text-blue-600" />
                </motion.div>
              </div>

              <div className="text-center">
                <p className="text-white/60 text-sm font-bold mb-2">TOTAL</p>
                <motion.p
                  key={dice1 + dice2}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="text-yellow-300 text-7xl font-black"
                >
                  {dice1 + dice2}
                </motion.p>
              </div>
            </div>

            {/* Betting Options */}
            <div className="grid grid-cols-3 gap-4">
              <motion.button
                onClick={() => placeBet('down')}
                disabled={isRolling}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`p-8 rounded-2xl font-black text-2xl transition-all ${
                  selectedBet === 'down'
                    ? 'bg-gradient-to-br from-red-500 to-red-700 text-white scale-105 shadow-2xl'
                    : 'bg-white/10 text-white hover:bg-white/20'
                } disabled:opacity-50 disabled:cursor-not-allowed`}
              >
                <TrendingDown className="w-12 h-12 mx-auto mb-3" />
                <p>DOWN</p>
                <p className="text-sm font-normal mt-2">Below 7</p>
                <p className="text-yellow-300 text-lg mt-1">2x</p>
              </motion.button>

              <motion.button
                onClick={() => placeBet('seven')}
                disabled={isRolling}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`p-8 rounded-2xl font-black text-2xl transition-all ${
                  selectedBet === 'seven'
                    ? 'bg-gradient-to-br from-purple-500 to-purple-700 text-white scale-105 shadow-2xl'
                    : 'bg-white/10 text-white hover:bg-white/20'
                } disabled:opacity-50 disabled:cursor-not-allowed`}
              >
                <Minus className="w-12 h-12 mx-auto mb-3" />
                <p>SEVEN</p>
                <p className="text-sm font-normal mt-2">Exactly 7</p>
                <p className="text-yellow-300 text-lg mt-1">5x</p>
              </motion.button>

              <motion.button
                onClick={() => placeBet('up')}
                disabled={isRolling}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`p-8 rounded-2xl font-black text-2xl transition-all ${
                  selectedBet === 'up'
                    ? 'bg-gradient-to-br from-green-500 to-green-700 text-white scale-105 shadow-2xl'
                    : 'bg-white/10 text-white hover:bg-white/20'
                } disabled:opacity-50 disabled:cursor-not-allowed`}
              >
                <TrendingUp className="w-12 h-12 mx-auto mb-3" />
                <p>UP</p>
                <p className="text-sm font-normal mt-2">Above 7</p>
                <p className="text-yellow-300 text-lg mt-1">2x</p>
              </motion.button>
            </div>

            {/* Roll Button */}
            <motion.button
              onClick={rollDice}
              disabled={!selectedBet || isRolling || credits < bet}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-6 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl font-black text-3xl text-white shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-yellow-500/50 transition-all"
            >
              {isRolling ? 'ROLLING...' : selectedBet ? 'ROLL DICE' : 'SELECT A BET'}
            </motion.button>
          </div>

          {/* History Sidebar */}
          <div className="space-y-6">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border-2 border-white/20">
              <h3 className="text-white text-lg font-black mb-4 flex items-center gap-2">
                <span className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></span>
                GAME HISTORY
              </h3>
              <div className="space-y-2">
                {history.length === 0 ? (
                  <p className="text-white/50 text-sm text-center py-8">No games played yet</p>
                ) : (
                  history.map((item, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: idx * 0.05 }}
                      className={`p-3 rounded-lg flex items-center justify-between ${
                        item.won ? 'bg-green-500/20 border border-green-500/50' : 'bg-red-500/20 border border-red-500/50'
                      }`}
                    >
                      <div>
                        <p className={`font-bold text-sm ${item.won ? 'text-green-300' : 'text-red-300'}`}>
                          {item.bet?.toUpperCase()}
                        </p>
                        <p className="text-white/60 text-xs">Total: {item.total}</p>
                      </div>
                      <p className={`font-black text-lg ${item.won ? 'text-green-400' : 'text-red-400'}`}>
                        {item.won ? 'WIN' : 'LOSE'}
                      </p>
                    </motion.div>
                  ))
                )}
              </div>
            </div>

            {/* How to Play */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border-2 border-white/20">
              <h3 className="text-white text-lg font-black mb-4">HOW TO PLAY</h3>
              <div className="space-y-3 text-white/80 text-sm">
                <p>1. Place your bet amount</p>
                <p>2. Choose DOWN (&lt;7), SEVEN (=7), or UP (&gt;7)</p>
                <p>3. Click ROLL DICE</p>
                <p>4. Win 2x for DOWN/UP, 5x for SEVEN!</p>
              </div>
            </div>
          </div>
        </div>

        {/* Result Notification */}
        <AnimatePresence>
          {result && (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50"
            >
              <div className={`px-12 py-6 rounded-2xl font-black text-3xl shadow-2xl ${
                result === 'win'
                  ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white'
                  : 'bg-gradient-to-r from-red-500 to-rose-500 text-white'
              }`}>
                {result === 'win' ? '🎉 YOU WIN! 🎉' : '😢 YOU LOSE'}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
