import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeftIcon, ChevronRightIcon, ArrowPathIcon } from '@heroicons/react/24/solid';
import FlashCard from './FlashCard';

const FlashCardDeck = ({ flashcards }) => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  // Reset index when flashcards change
  useEffect(() => {
    setCurrentCardIndex(0);
  }, [flashcards]);

  if (!flashcards || flashcards.length === 0) {
    return (
      <div className="text-center text-gray-500 py-12">
        No flashcards available for this topic.
      </div>
    );
  }

  const handleNext = () => {
    if (currentCardIndex < flashcards.length - 1) {
      setDirection(1);
      setCurrentCardIndex(prev => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentCardIndex > 0) {
      setDirection(-1);
      setCurrentCardIndex(prev => prev - 1);
    }
  };

  const handleReset = () => {
    setDirection(-1);
    setCurrentCardIndex(0);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [currentCardIndex, flashcards.length]);

  return (
    <div className="space-y-6">
      {/* Progress tracking */}
      <div className="mb-4 flex justify-between items-center">
        <p className="text-sm text-gray-600">
          Card {currentCardIndex + 1} of {flashcards.length}
        </p>
        <p className="text-sm font-medium text-blue-600">
          {flashcards[currentCardIndex].category}
        </p>
      </div>

      {/* Navigation - Positioned above flashcard */}
      <div className="flex justify-between items-center mb-6">
        <button
          onClick={handlePrev}
          disabled={currentCardIndex === 0}
          className="flex items-center px-4 py-2 bg-blue-500 text-white rounded-lg
                     hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed
                     transition-colors"
        >
          <ChevronLeftIcon className="h-5 w-5 mr-2" />
          Previous
        </button>

        <button
          onClick={handleReset}
          className="flex items-center px-4 py-2 bg-gray-500 text-white rounded-lg
                     hover:bg-gray-600 transition-colors"
        >
          <ArrowPathIcon className="h-5 w-5 mr-2" />
          Reset
        </button>

        <button
          onClick={handleNext}
          disabled={currentCardIndex === flashcards.length - 1}
          className="flex items-center px-4 py-2 bg-blue-500 text-white rounded-lg
                     hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed
                     transition-colors"
        >
          Next
          <ChevronRightIcon className="h-5 w-5 ml-2" />
        </button>
      </div>

      {/* Flashcard */}
      <div className="min-h-[400px]"> {/* Fixed minimum height container */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentCardIndex}
            initial={{ x: 50 * direction, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -50 * direction, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <FlashCard 
              question={flashcards[currentCardIndex].question}
              answer={flashcards[currentCardIndex].answer}
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Keyboard shortcuts hint */}
      <div className="text-center text-sm text-gray-500 mt-4">
        Use ← and → arrow keys to navigate
      </div>
    </div>
  );
};

export default FlashCardDeck;