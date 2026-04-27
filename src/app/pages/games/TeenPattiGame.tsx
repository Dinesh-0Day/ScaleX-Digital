import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Home, Coins, RotateCcw, Sparkles } from 'lucide-react';
import { Link } from 'react-router';

const SUITS = ['♠', '♥', '♦', '♣'];
const RANKS = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

interface Card {
  suit: string;
  rank: string;
}

type HandRank = 'High Card' | 'Pair' | 'Flush' | 'Straight' | 'Three of a Kind' | 'Straight Flush' | 'Trail';

export function TeenPattiGame() {
  const [credits, setCredits] = useState(1000);
  const [bet, setBet] = useState(100);
  const [playerCards, setPlayerCards] = useState<Card[]>([]);
  const [dealerCards, setDealerCards] = useState<Card[]>([]);
  const [gameState, setGameState] = useState<'betting' | 'dealing' | 'result'>('betting');
  const [result, setResult] = useState<'win' | 'lose' | 'tie' | null>(null);
  const [playerHand, setPlayerHand] = useState<HandRank>('High Card');
  const [dealerHand, setDealerHand] = useState<HandRank>('High Card');
  const [showDealerCards, setShowDealerCards] = useState(false);

  const createDeck = (): Card[] => {
    const deck: Card[] = [];
    for (const suit of SUITS) {
      for (const rank of RANKS) {
        deck.push({ suit, rank });
      }
    }
    return deck;
  };

  const shuffleDeck = (deck: Card[]): Card[] => {
    const shuffled = [...deck];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  const evaluateHand = (cards: Card[]): HandRank => {
    if (cards.length !== 3) return 'High Card';

    const ranks = cards.map(c => RANKS.indexOf(c.rank));
    const suits = cards.map(c => c.suit);
    ranks.sort((a, b) => a - b);

    // Trail (Three of a Kind)
    if (ranks[0] === ranks[1] && ranks[1] === ranks[2]) return 'Trail';

    // Straight
    const isStraight = ranks[1] === ranks[0] + 1 && ranks[2] === ranks[1] + 1;
    const isFlush = suits[0] === suits[1] && suits[1] === suits[2];

    if (isStraight && isFlush) return 'Straight Flush';
    if (isStraight) return 'Straight';
    if (isFlush) return 'Flush';

    // Pair
    if (ranks[0] === ranks[1] || ranks[1] === ranks[2]) return 'Pair';

    return 'High Card';
  };

  const getHandValue = (hand: HandRank): number => {
    const values: Record<HandRank, number> = {
      'High Card': 1,
      'Pair': 2,
      'Flush': 3,
      'Straight': 4,
      'Three of a Kind': 5,
      'Trail': 6,
      'Straight Flush': 7,
    };
    return values[hand];
  };

  const dealCards = () => {
    if (credits < bet) return;

    setCredits(prev => prev - bet);
    setGameState('dealing');
    setResult(null);
    setShowDealerCards(false);

    const deck = shuffleDeck(createDeck());
    const pCards = deck.slice(0, 3);
    const dCards = deck.slice(3, 6);

    setPlayerCards(pCards);
    setDealerCards(dCards);

    const pHand = evaluateHand(pCards);
    const dHand = evaluateHand(dCards);
    setPlayerHand(pHand);
    setDealerHand(dHand);

    setTimeout(() => {
      setShowDealerCards(true);
      const pValue = getHandValue(pHand);
      const dValue = getHandValue(dHand);

      let gameResult: 'win' | 'lose' | 'tie';
      if (pValue > dValue) {
        gameResult = 'win';
        setCredits(prev => prev + bet * 2);
      } else if (pValue < dValue) {
        gameResult = 'lose';
      } else {
        gameResult = 'tie';
        setCredits(prev => prev + bet);
      }

      setResult(gameResult);
      setGameState('result');
    }, 2000);
  };

  const newRound = () => {
    setPlayerCards([]);
    setDealerCards([]);
    setGameState('betting');
    setResult(null);
    setShowDealerCards(false);
  };

  const resetGame = () => {
    setCredits(1000);
    setBet(100);
    newRound();
  };

  const CardComponent = ({ card, hidden = false }: { card: Card; hidden?: boolean }) => {
    const isRed = card.suit === '♥' || card.suit === '♦';

    return (
      <motion.div
        initial={{ rotateY: 180, scale: 0 }}
        animate={{ rotateY: hidden ? 180 : 0, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="relative w-24 h-36 rounded-xl shadow-2xl"
      >
        {hidden ? (
          <div className="w-full h-full bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl p-2 flex items-center justify-center">
            <div className="w-full h-full border-4 border-white/30 rounded-lg flex items-center justify-center">
              <Sparkles className="w-8 h-8 text-white/50" />
            </div>
          </div>
        ) : (
          <div className="w-full h-full bg-white rounded-xl p-3 flex flex-col justify-between border-4 border-gray-200">
            <div className={`text-2xl font-black ${isRed ? 'text-red-600' : 'text-gray-900'}`}>
              {card.rank}
              <div className="text-3xl">{card.suit}</div>
            </div>
            <div className={`text-2xl font-black self-end rotate-180 ${isRed ? 'text-red-600' : 'text-gray-900'}`}>
              {card.rank}
              <div className="text-3xl">{card.suit}</div>
            </div>
          </div>
        )}
      </motion.div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <Link to="/games" className="flex items-center gap-2 text-white hover:text-yellow-300 transition-colors">
            <Home className="w-6 h-6" />
            <span className="font-bold">Back to Games</span>
          </Link>
          <h1 className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-pink-300 tracking-tighter">
            TEEN PATTI
          </h1>
          <button
            onClick={resetGame}
            className="flex items-center gap-2 px-4 py-2 bg-white/20 hover:bg-white/30 rounded-lg text-white transition-all"
          >
            <RotateCcw className="w-5 h-5" />
            Reset
          </button>
        </div>

        {/* Credits */}
        <div className="bg-gradient-to-r from-yellow-500 to-orange-500 rounded-2xl p-6 mb-8 flex items-center justify-between shadow-2xl">
          <div className="flex items-center gap-3">
            <Coins className="w-10 h-10 text-white" />
            <div>
              <p className="text-white/80 text-sm font-bold">YOUR CREDITS</p>
              <p className="text-white text-4xl font-black">{credits}</p>
            </div>
          </div>
          {gameState === 'betting' && (
            <div>
              <p className="text-white/80 text-sm font-bold text-right">BET AMOUNT</p>
              <div className="flex items-center gap-2 mt-1">
                <button
                  onClick={() => setBet(Math.max(50, bet - 50))}
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
          )}
        </div>

        {/* Game Table */}
        <div className="bg-gradient-to-br from-green-800 to-green-900 rounded-3xl p-12 shadow-2xl border-8 border-amber-900">
          {/* Dealer Section */}
          <div className="mb-16">
            <div className="text-center mb-6">
              <h3 className="text-white text-2xl font-black mb-2">DEALER</h3>
              {showDealerCards && (
                <div className="inline-block px-6 py-2 bg-white/20 backdrop-blur-lg rounded-full">
                  <p className="text-yellow-300 text-xl font-black">{dealerHand}</p>
                </div>
              )}
            </div>
            <div className="flex items-center justify-center gap-4">
              {dealerCards.map((card, idx) => (
                <CardComponent key={idx} card={card} hidden={!showDealerCards} />
              ))}
            </div>
          </div>

          {/* VS Divider */}
          {gameState !== 'betting' && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="text-center mb-16"
            >
              <div className="inline-block px-12 py-4 bg-gradient-to-r from-red-500 to-pink-500 rounded-full shadow-2xl">
                <p className="text-white text-4xl font-black">VS</p>
              </div>
            </motion.div>
          )}

          {/* Player Section */}
          <div>
            <div className="text-center mb-6">
              <h3 className="text-white text-2xl font-black mb-2">YOUR HAND</h3>
              {playerCards.length > 0 && (
                <div className="inline-block px-6 py-2 bg-white/20 backdrop-blur-lg rounded-full">
                  <p className="text-cyan-300 text-xl font-black">{playerHand}</p>
                </div>
              )}
            </div>
            <div className="flex items-center justify-center gap-4">
              {playerCards.length === 0 ? (
                <div className="text-center py-8">
                  <p className="text-white/50 text-lg">Place your bet to start</p>
                </div>
              ) : (
                playerCards.map((card, idx) => (
                  <CardComponent key={idx} card={card} />
                ))
              )}
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="mt-8 flex items-center justify-center gap-4">
          {gameState === 'betting' ? (
            <motion.button
              onClick={dealCards}
              disabled={credits < bet}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-16 py-6 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 disabled:opacity-50 disabled:cursor-not-allowed text-white font-black text-3xl rounded-2xl shadow-2xl transition-all"
            >
              DEAL CARDS
            </motion.button>
          ) : gameState === 'result' && (
            <motion.button
              onClick={newRound}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-16 py-6 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-black text-3xl rounded-2xl shadow-2xl transition-all"
            >
              NEW ROUND
            </motion.button>
          )}
        </div>

        {/* Hand Rankings */}
        <div className="mt-8 bg-white/10 backdrop-blur-lg rounded-2xl p-6 border-2 border-white/20">
          <h3 className="text-white text-lg font-black mb-4 text-center">HAND RANKINGS (Highest to Lowest)</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-center">
            {['Trail', 'Straight Flush', 'Straight', 'Flush', 'Pair', 'High Card'].map((hand, idx) => (
              <div key={hand} className="bg-white/10 rounded-lg p-3">
                <p className="text-yellow-300 font-black text-sm">{7 - idx}.</p>
                <p className="text-white text-sm font-bold">{hand}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Result Modal */}
        <AnimatePresence>
          {result && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 backdrop-blur-sm"
            >
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                exit={{ scale: 0, rotate: 180 }}
                transition={{ type: "spring", stiffness: 200 }}
                className={`rounded-3xl p-16 text-center shadow-2xl max-w-md ${
                  result === 'win'
                    ? 'bg-gradient-to-br from-green-500 to-emerald-600'
                    : result === 'lose'
                    ? 'bg-gradient-to-br from-red-500 to-rose-600'
                    : 'bg-gradient-to-br from-yellow-500 to-orange-600'
                }`}
              >
                <p className="text-white text-7xl mb-6">
                  {result === 'win' ? '🎉' : result === 'lose' ? '😢' : '🤝'}
                </p>
                <h2 className="text-6xl font-black text-white mb-4">
                  {result === 'win' ? 'YOU WIN!' : result === 'lose' ? 'YOU LOSE' : 'TIE!'}
                </h2>
                <p className="text-white/90 text-xl mb-2">Your Hand: <span className="font-black">{playerHand}</span></p>
                <p className="text-white/90 text-xl">Dealer: <span className="font-black">{dealerHand}</span></p>
                {result === 'win' && (
                  <p className="text-yellow-300 text-4xl font-black mt-6">+{bet * 2}</p>
                )}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
