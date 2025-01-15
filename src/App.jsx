import { useState, useEffect } from 'react';
import FlashCardDeck from './components/FlashCardDeck';
import Quiz from './components/Quiz';
import Navigation from './components/Navigation';
import { loadTopicData } from './utils/dataLoader';

function App() {
  const [activeTab, setActiveTab] = useState('flashcards');
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [topicData, setTopicData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const loadData = async () => {
      if (selectedTopic) {
        setIsLoading(true);
        try {
          const data = await loadTopicData(selectedTopic.id);
          setTopicData(data);
        } catch (error) {
          console.error('Error loading topic data:', error);
          // You might want to show an error message to the user
        }
        setIsLoading(false);
      }
    };

    loadData();
  }, [selectedTopic]);

  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <Navigation setSelectedTopic={setSelectedTopic} />
      
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">DSA Flash</h1>
        
        {selectedTopic && (
          <h2 className="text-xl font-medium text-center mb-6 text-blue-600">
            {selectedTopic.title}
          </h2>
        )}
        
        {/* Tabs */}
        <div className="flex justify-center space-x-2 mb-8">
  <button
    onClick={() => setActiveTab('flashcards')}
    className={`px-6 py-3 rounded-lg font-medium transition-colors ${
      activeTab === 'flashcards'
        ? 'bg-blue-500 text-white'
        : 'bg-white text-gray-700 hover:bg-gray-50'
    }`}
  >
    Flashcards
  </button>
  <button
    onClick={() => setActiveTab('quiz')}
    className={`px-6 py-3 rounded-lg font-medium transition-colors ${
      activeTab === 'quiz'
        ? 'bg-blue-500 text-white'
        : 'bg-white text-gray-700 hover:bg-gray-50'
    }`}
  >
    Quiz
  </button>
</div>

        {/* Loading State */}
        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
          </div>
        ) : topicData ? (
          /* Content */
          activeTab === 'flashcards' ? (
            <FlashCardDeck flashcards={topicData.flashcards} />
          ) : (
            <Quiz questions={topicData.quiz} />
          )
        ) : (
          /* No topic selected state */
          <div className="text-center text-gray-500 py-12">
            Select a topic from the menu to begin studying
          </div>
        )}
      </div>
    </div>
  );
}

export default App;