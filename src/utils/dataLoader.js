import { arrayData } from '../data/linear/array';
import { stackData } from '../data/linear/stack';
import { queueData } from '../data/linear/queue';
import { priorityQueueData } from '../data/linear/priorityQueue';

export const loadTopicData = async (topicId) => {
  const dataMap = {
    // Linear Data Structures
    'array': arrayData,
    'stack': stackData,
    'queue': queueData,
    'priorityqueue': priorityQueueData,
    
    // These will be implemented later
    'linkedlist': null,
    'hashtable': null,
    'binarytree': null,
    'bst': null,
    'avl': null,
    'splay': null,
    'twothree': null,
    'btree': null,
    'heap': null,
    'graph': null,
    'traversal': null,
    'shortestpath': null,
    'spanning': null
  };

  if (!dataMap[topicId]) {
    return {
      id: topicId,
      title: 'Coming Soon',
      flashcards: [
        {
          id: 1,
          category: 'Under Development',
          question: "This topic is coming soon!",
          answer: "This section is currently under development. Check back later for content on this topic."
        }
      ],
      quiz: []
    };
  }

  return dataMap[topicId];
};