import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CodeBlock from './CodeBlock';

const Quiz = ({ questions }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setShowExplanation(false);
    setScore(0);
    setIsComplete(false);
  }, [questions]);

  if (!questions || questions.length === 0) {
    return (
      <div className="text-center text-gray-500 py-12">
        No quiz questions available for this topic.
      </div>
    );
  }

  const currentQuestion = questions[currentQuestionIndex];

  const handleAnswerSelect = (optionId) => {
    if (selectedAnswer) return;
    setSelectedAnswer(optionId);
    setShowExplanation(true);
    if (optionId === currentQuestion.correctAnswer) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    } else {
      setIsComplete(true);
    }
  };

  const handleReset = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setShowExplanation(false);
    setScore(0);
    setIsComplete(false);
  };

  if (isComplete) {
    return (
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="bg-white rounded-xl shadow-lg p-8 text-center"
      >
        <h2 className="text-2xl font-bold mb-4">Quiz Complete!</h2>
        <p className="text-lg mb-4">
          Your score: {score} out of {questions.length}
          ({Math.round((score / questions.length) * 100)}%)
        </p>
        <button
          onClick={handleReset}
          className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
        >
          Try Again
        </button>
      </motion.div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Progress and Score */}
      <div className="mb-4 flex justify-between items-center">
        <p className="text-sm text-gray-600">
          Question {currentQuestionIndex + 1} of {questions.length}
        </p>
        <p className="text-sm font-medium text-green-600">
          Score: {score}/{currentQuestionIndex + (selectedAnswer ? 1 : 0)}
        </p>
      </div>

      {/* Navigation - Positioned above question */}
      <div className="flex justify-end mb-6">
        <button
          onClick={handleNext}
          disabled={!selectedAnswer}
          className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 
                     disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
        >
          {currentQuestionIndex < questions.length - 1 ? 'Next Question' : 'Complete Quiz'}
        </button>
      </div>

      {/* Question Container with fixed minimum height */}
      <div className="min-h-[400px]">
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-xl font-medium mb-6">{currentQuestion.question}</h2>
          
          {/* Code Block if present */}
          {currentQuestion.type === 'code' && (
            <div className="mb-6">
              <CodeBlock 
                code={currentQuestion.code.trim()} 
                language={currentQuestion.language} 
              />
            </div>
          )}

          {/* Options */}
          <div className="space-y-3">
            {currentQuestion.options.map((option) => (
              <button
                key={option.id}
                onClick={() => handleAnswerSelect(option.id)}
                disabled={selectedAnswer !== null}
                className={`w-full p-4 text-left rounded-lg border-2 transition-all ${
                  selectedAnswer === null
                    ? 'hover:bg-blue-50 border-gray-200'
                    : option.id === currentQuestion.correctAnswer
                    ? 'bg-green-100 border-green-500'
                    : selectedAnswer === option.id
                    ? 'bg-red-100 border-red-500'
                    : 'border-gray-200'
                }`}
              >
                {option.text}
              </button>
            ))}
          </div>

          {/* Explanation */}
          <AnimatePresence>
            {showExplanation && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="mt-6"
              >
                <div className="p-4 bg-blue-50 rounded-lg">
                  <h3 className="font-medium text-blue-800 mb-2">Explanation:</h3>
                  <p className="text-blue-900 whitespace-pre-line">{currentQuestion.explanation}</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Quiz;