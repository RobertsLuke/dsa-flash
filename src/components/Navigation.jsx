import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronRightIcon, ChevronDownIcon } from '@heroicons/react/24/solid';

const MenuItem = ({ item, isOpen, toggleItem, setSelectedTopic }) => {
  return (
    <div className="mb-2">
      {item.subtopics ? (
        <div>
          <button
            onClick={() => toggleItem(item.id)}
            className="flex items-center w-full text-left px-4 py-2 text-gray-700 hover:bg-blue-50 rounded-lg"
          >
            {isOpen[item.id] ? (
              <ChevronDownIcon className="h-4 w-4 mr-2" />
            ) : (
              <ChevronRightIcon className="h-4 w-4 mr-2" />
            )}
            {item.title}
          </button>
          {isOpen[item.id] && (
            <div className="ml-4 mt-2 space-y-2">
              {item.subtopics.map((subtopic) => (
                <button
                  key={subtopic.id}
                  onClick={() => setSelectedTopic(subtopic)}
                  className="w-full text-left px-4 py-2 text-sm text-gray-600 hover:bg-blue-50 rounded-lg"
                >
                  {subtopic.title}
                </button>
              ))}
            </div>
          )}
        </div>
      ) : (
        <button
          onClick={() => setSelectedTopic(item)}
          className="w-full text-left px-4 py-2 text-gray-700 hover:bg-blue-50 rounded-lg"
        >
          {item.title}
        </button>
      )}
    </div>
  );
};

const Navigation = ({ setSelectedTopic }) => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isOpen, setIsOpen] = useState({});

  const menuItems = [
    {
      id: 'linear',
      title: 'Linear Data Structures',
      subtopics: [
        { id: 'array', title: 'Arrays' },
        { id: 'stack', title: 'Stack ADT' },
        { id: 'queue', title: 'Queue ADT' },
        { id: 'priorityqueue', title: 'Priority Queue' },
        { id: 'linkedlist', title: 'Linked List' },
        { id: 'hashtable', title: 'Hash Table' }
      ]
    },
    {
      id: 'hierarchical',
      title: 'Hierarchical Data Structures',
      subtopics: [
        { id: 'binarytree', title: 'Binary Tree' },
        { id: 'bst', title: 'Binary Search Tree' },
        { id: 'avl', title: 'AVL Tree' },
        { id: 'splay', title: 'Splay Tree' },
        { id: 'twothree', title: 'Two-Three Tree' },
        { id: 'btree', title: 'B Tree' },
        { id: 'heap', title: 'Heaps' }
      ]
    },
    {
      id: 'graphical',
      title: 'Graphical Data Structures',
      subtopics: [
        { id: 'graph', title: 'Graphs' },
        { id: 'traversal', title: 'Tree Traversals' },
        { id: 'shortestpath', title: 'Shortest Path Trees' },
        { id: 'spanning', title: 'Spanning Trees' }
      ]
    }
  ];

  const toggleItem = (id) => {
    setIsOpen(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <>
      {/* Toggle Button */}
      <button
        onClick={() => setIsNavOpen(!isNavOpen)}
        className="fixed top-4 left-4 z-30 p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
      >
        <ChevronRightIcon className="h-6 w-6" />
      </button>

      {/* Overlay */}
      {isNavOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsNavOpen(false)}
        />
      )}

      {/* Navigation Menu */}
      <motion.div
        initial={{ x: '-100%' }}
        animate={{ x: isNavOpen ? 0 : '-100%' }}
        transition={{ type: "spring", damping: 20 }}
        className="fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-50 p-4 pt-16 overflow-y-auto"
      >
        <div className="space-y-4">
          {menuItems.map((item) => (
            <MenuItem
              key={item.id}
              item={item}
              isOpen={isOpen}
              toggleItem={toggleItem}
              setSelectedTopic={setSelectedTopic}
            />
          ))}
        </div>
      </motion.div>
    </>
  );
};

export default Navigation;