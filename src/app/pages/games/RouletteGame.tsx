import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Home, Coins, RotateCcw, Circle } from 'lucide-react';
import { Link } from 'react-router';

const ROULETTE_NUMBERS = [
  { num: 0, color: 'green' },
  { num: 32, color: 'red' }, { num: 15, color: 'black' }, { num: 19, color: 'red' }, { num: 4, color: 'black' },
  { num: 21, color: 'red' }, { num: 2, color: 'black' }, { num: 25, color: 'red' }, { num: 17, color: 'black' },
  { num: 34, color: 'red' }, { num: 6, color: 'black' }, { num: 27, color: 'red' }, { num: 13, color: 'black' },
  { num: 36, color: 'red' }, { num: 11, color: 'black' }, { num: 30, color: 'red' }, { num: 8, color: 'black' },
  { num: 23, color: 'red' }, { num: 10, color: 'black' }, { num: 5, color: 'red' }, { num: 24, color: 'black' },
  { num: 16, color: 'red' }, { num: 33, color: 'black' }, { num: 1, color: 'red' }, { num: 20, color: 'black' },
  { num: 14, color: 'red' }, { num: 31, color: 'black' }, { num: 9, color: 'red' }, { num: 22, color: 'black' },
  { num: 18, color: 'red' }, { num: 29, color: 'black' }, { num: 7, color: 'red' }, { num: 28, color: 'black' },
  { num: 12, color: 'red' }, { num: 35, color: 'black' }, { num: 3, color: 'red' }, { num: 26, color: 'black' },
];

type BetType = 'red' | 'black' | 'even' | 'odd' | 'low' | 'high' | number | null;

export function RouletteGame() {
  const [credits, setCredits] = useState(1000);
  const [bet, setBet] = useState(50);
  const [selectedBets, setSelectedBets] = useState<Array<{ type: BetType; amount: number }>>([]);
  const [isSpinning, setIsSpinning] = useState(false);
  const [winningNumber, setWinningNumber] = useState<number | null>(null);
  const [rotation, setRotation] = useState(0);
  const [result, setResult] = useState<'win' | 'lose' | null>(null);
  const [winAmount, setWinAmount] = useState(0);

  const placeBet = (type: BetType) => {
    if (isSpinning || credits < bet) return;

    setSelectedBets(prev => {
      const existing = prev.find(b => b.type === type);
      if (existing) {
        return prev.map(b => b.type === type ? { ...b, amount: b.amount + bet } : b);
      }
      return [...prev, { type, amount: bet }];
    });
    setCredits(prev => prev - bet);
  };

  const clearBets = () => {
    const totalBet = selectedBets.reduce((sum, b) => sum + b.amount, 0);
    setCredits(prev => prev + totalBet);
    setSelectedBets([]);
  };

  const spin = () => {
    if (isSpinning || selectedBets.length === 0) return;

    setIsSpinning(true);
    setResult(null);
    setWinAmount(0);

    // Random winning number
    const randomIndex = Math.floor(Math.random() * ROULETTE_NUMBERS.length);
    const winning = ROULETTE_NUMBERS[randomIndex];

    // Calculate rotation
    const degreesPerSlot = 360 / ROULETTE_NUMBERS.length;
    const targetRotation = 360 * 5 + (randomIndex * degreesPerSlot); // 5 full spins + target
    setRotation(targetRotation);

    setTimeout(() => {
      setWinningNumber(winning.num);
      checkWin(winning);
      setIsSpinning(false);
    }, 4000);
  };

  const checkWin = (winning: { num: number; color: string }) => {
    let totalWin = 0;

    selectedBets.forEach(bet => {
      let won = false;

      if (bet.type === 'red' && winning.color === 'red') won = true;
      if (bet.type === 'black' && winning.color === 'black') won = true;
      if (bet.type === 'even' && winning.num !== 0 && winning.num % 2 === 0) won = true;
      if (bet.type === 'odd' && winning.num % 2 === 1) won = true;
      if (bet.type === 'low' && winning.num >= 1 && winning.num <= 18) won = true;
      if (bet.type === 'high' && winning.num >= 19 && winning.num <= 36) won = true;
      if (typeof bet.type === 'number' && bet.type === winning.num) {
        won = true;
        totalWin += bet.amount * 36;
      } else if (won) {
        totalWin += bet.amount * 2;
      }
    });

    if (totalWin > 0) {
      setResult('win');
      setWinAmount(totalWin);
      setCredits(prev => prev + totalWin);
    } else {
      setResult('lose');
    }

    setTimeout(() => {
      setSelectedBets([]);
      setResult(null);
    }, 3000);
  };

  const resetGame = () => {
    setCredits(1000);
    setBet(50);
    setSelectedBets([]);
    setWinningNumber(null);
    setRotation(0);
    setResult(null);
  };

  const totalBetAmount = selectedBets.reduce((sum, b) => sum + b.amount, 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-red-900 to-slate-900 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <Link to="/games" className="flex items-center gap-2 text-white hover:text-yellow-300 transition-colors">
            <Home className="w-6 h-6" />
            <span className="font-bold">Back to Games</span>
          </Link>
          <h1 className="text-6xl font-black text-yellow-300 tracking-tighter">ROULETTE</h1>
          <button
            onClick={resetGame}
            className="flex items-center gap-2 px-4 py-2 bg-white/20 hover:bg-white/30 rounded-lg text-white transition-all"
          >
            <RotateCcw className="w-5 h-5" />
            Reset
          </button>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Roulette Wheel */}
          <div className="lg:col-span-2">
            {/* Credits */}
            <div className="bg-gradient-to-r from-yellow-500 to-orange-500 rounded-2xl p-6 mb-6 flex items-center justify-between shadow-2xl">
              <div className="flex items-center gap-3">
                <Coins className="w-10 h-10 text-white" />
                <div>
                  <p className="text-white/80 text-sm font-bold">CREDITS</p>
                  <p className="text-white text-4xl font-black">{credits}</p>
                </div>
              </div>
              <div>
                <p className="text-white/80 text-sm font-bold text-right">TOTAL BET</p>
                <p className="text-white text-3xl font-black">{totalBetAmount}</p>
              </div>
            </div>

            {/* Wheel */}
            <div className="bg-gradient-to-br from-amber-900 to-amber-950 rounded-3xl p-12 relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-amber-800/20 to-transparent"></div>

              <div className="relative">
                {/* Pointer */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-4 z-20">
                  <div className="w-6 h-12 bg-yellow-400 clip-triangle shadow-lg"></div>
                </div>

                {/* Wheel */}
                <motion.div
                  animate={{ rotate: rotation }}
                  transition={{ duration: 4, ease: [0.17, 0.67, 0.16, 0.99] }}
                  className="relative w-full aspect-square max-w-md mx-auto"
                >
                  {/* Outer ring */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-yellow-600 to-yellow-800 shadow-2xl"></div>

                  {/* Numbers ring */}
                  <div className="absolute inset-4 rounded-full overflow-hidden">
                    {ROULETTE_NUMBERS.map((slot, idx) => {
                      const angle = (360 / ROULETTE_NUMBERS.length) * idx;
                      const bgColor = slot.color === 'red' ? '#DC2626' : slot.color === 'black' ? '#1F2937' : '#059669';

                      return (
                        <div
                          key={idx}
                          className="absolute inset-0"
                          style={{
                            transform: `rotate(${angle}deg)`,
                            transformOrigin: 'center',
                          }}
                        >
                          <div
                            className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-16 flex items-start justify-center pt-2"
                            style={{ backgroundColor: bgColor }}
                          >
                            <span className="text-white text-xs font-bold">{slot.num}</span>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Center */}
                  <div className="absolute inset-1/3 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 shadow-inner flex items-center justify-center">
                    <Circle className="w-12 h-12 text-yellow-800" />
                  </div>
                </motion.div>

                {/* Winning Number Display */}
                <AnimatePresence>
                  {winningNumber !== null && (
                    <motion.div
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0, opacity: 0 }}
                      className="absolute inset-0 flex items-center justify-center z-30"
                    >
                      <div className="bg-black/90 backdrop-blur-lg rounded-3xl p-12 text-center">
                        <p className="text-white text-sm font-bold mb-2">WINNING NUMBER</p>
                        <p className="text-yellow-300 text-8xl font-black">{winningNumber}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Betting Grid */}
            <div className="mt-6 bg-gradient-to-br from-green-800 to-green-900 rounded-2xl p-6">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                <button
                  onClick={() => placeBet('red')}
                  disabled={isSpinning}
                  className="bg-red-600 hover:bg-red-700 disabled:opacity-50 text-white font-black py-4 rounded-xl transition-all hover:scale-105"
                >
                  RED
                  <span className="block text-xs mt-1">2x</span>
                </button>
                <button
                  onClick={() => placeBet('black')}
                  disabled={isSpinning}
                  className="bg-gray-800 hover:bg-gray-900 disabled:opacity-50 text-white font-black py-4 rounded-xl transition-all hover:scale-105"
                >
                  BLACK
                  <span className="block text-xs mt-1">2x</span>
                </button>
                <button
                  onClick={() => placeBet('even')}
                  disabled={isSpinning}
                  className="bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white font-black py-4 rounded-xl transition-all hover:scale-105"
                >
                  EVEN
                  <span className="block text-xs mt-1">2x</span>
                </button>
                <button
                  onClick={() => placeBet('odd')}
                  disabled={isSpinning}
                  className="bg-purple-600 hover:bg-purple-700 disabled:opacity-50 text-white font-black py-4 rounded-xl transition-all hover:scale-105"
                >
                  ODD
                  <span className="block text-xs mt-1">2x</span>
                </button>
                <button
                  onClick={() => placeBet('low')}
                  disabled={isSpinning}
                  className="bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 text-white font-black py-4 rounded-xl transition-all hover:scale-105"
                >
                  1-18
                  <span className="block text-xs mt-1">2x</span>
                </button>
                <button
                  onClick={() => placeBet('high')}
                  disabled={isSpinning}
                  className="bg-pink-600 hover:bg-pink-700 disabled:opacity-50 text-white font-black py-4 rounded-xl transition-all hover:scale-105"
                >
                  19-36
                  <span className="block text-xs mt-1">2x</span>
                </button>
              </div>
            </div>
          </div>

          {/* Controls */}
          <div className="space-y-6">
            {/* Bet Amount */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border-2 border-white/20">
              <h3 className="text-white text-sm font-bold mb-4">BET AMOUNT</h3>
              <div className="flex items-center justify-center gap-3 mb-4">
                <button
                  onClick={() => setBet(Math.max(10, bet - 10))}
                  className="px-4 py-2 bg-white/20 hover:bg-white/30 rounded-lg text-white font-bold"
                >
                  -
                </button>
                <p className="text-white text-4xl font-black min-w-[120px] text-center">{bet}</p>
                <button
                  onClick={() => setBet(Math.min(500, bet + 10))}
                  className="px-4 py-2 bg-white/20 hover:bg-white/30 rounded-lg text-white font-bold"
                >
                  +
                </button>
              </div>
              <div className="grid grid-cols-3 gap-2">
                {[10, 50, 100].map(amount => (
                  <button
                    key={amount}
                    onClick={() => setBet(amount)}
                    className="py-2 bg-white/10 hover:bg-white/20 rounded text-white text-sm font-bold"
                  >
                    {amount}
                  </button>
                ))}
              </div>
            </div>

            {/* Current Bets */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border-2 border-white/20">
              <h3 className="text-white text-sm font-bold mb-4">YOUR BETS</h3>
              <div className="space-y-2 max-h-64 overflow-y-auto">
                {selectedBets.length === 0 ? (
                  <p className="text-white/50 text-sm text-center py-4">No bets placed</p>
                ) : (
                  selectedBets.map((bet, idx) => (
                    <div
                      key={idx}
                      className="p-3 bg-white/10 rounded-lg flex items-center justify-between"
                    >
                      <span className="text-white font-bold text-sm">
                        {typeof bet.type === 'number' ? `#${bet.type}` : bet.type?.toUpperCase()}
                      </span>
                      <span className="text-yellow-300 font-black">{bet.amount}</span>
                    </div>
                  ))
                )}
              </div>
            </div>

            {/* Action Buttons */}
            <button
              onClick={spin}
              disabled={isSpinning || selectedBets.length === 0}
              className="w-full py-4 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 disabled:opacity-50 disabled:cursor-not-allowed text-white font-black text-xl rounded-xl transition-all shadow-lg"
            >
              {isSpinning ? 'SPINNING...' : 'SPIN'}
            </button>

            <button
              onClick={clearBets}
              disabled={isSpinning || selectedBets.length === 0}
              className="w-full py-3 bg-white/10 hover:bg-white/20 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold rounded-xl transition-all"
            >
              CLEAR BETS
            </button>
          </div>
        </div>

        {/* Result Notification */}
        <AnimatePresence>
          {result && (
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50"
            >
              <div className={`px-16 py-12 rounded-3xl font-black text-5xl shadow-2xl text-center ${
                result === 'win'
                  ? 'bg-gradient-to-br from-green-500 to-emerald-600 text-white'
                  : 'bg-gradient-to-br from-red-500 to-rose-600 text-white'
              }`}>
                {result === 'win' ? (
                  <>
                    <p className="mb-4">🎉 YOU WIN! 🎉</p>
                    <p className="text-yellow-300 text-6xl">+{winAmount}</p>
                  </>
                ) : (
                  <p>😢 YOU LOSE</p>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
