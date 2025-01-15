import { motion } from "framer-motion";
import { useState } from "react";
import ReactMarkdown from 'react-markdown';

const FlashCard = ({ question, answer }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="relative w-full h-[400px] perspective-1000" onClick={() => setIsFlipped(!isFlipped)}>
      <motion.div
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 500, damping: 30 }}
        className="w-full h-full relative [transform-style:preserve-3d]"
      >
        {/* Front of card */}
        <motion.div
          className="absolute w-full h-full backface-hidden bg-white rounded-xl shadow-lg border-2 border-blue-200 p-8 flex flex-col items-center justify-center"
        >
          <p className="text-xl font-medium text-center">{question}</p>
          <p className="absolute bottom-4 text-sm text-gray-400">Click to flip</p>
        </motion.div>

        {/* Back of card */}
        <motion.div
          className="absolute w-full h-full backface-hidden bg-blue-50 rounded-xl shadow-lg border-2 border-blue-200 p-8 flex flex-col items-center justify-center [transform:rotateY(180deg)]"
        >
          <div className="prose prose-blue max-w-none overflow-auto">
            <ReactMarkdown>{answer}</ReactMarkdown>
          </div>
          <p className="absolute bottom-4 text-sm text-gray-400">Click to flip back</p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default FlashCard;