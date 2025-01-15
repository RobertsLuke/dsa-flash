export const quizData = [
    {
      id: 1,
      category: 'Arrays',
      question: "What is the time complexity of inserting an element at the end of an unsorted array?",
      options: [
        { id: 'a', text: 'O(1)' },
        { id: 'b', text: 'O(n)' },
        { id: 'c', text: 'O(log n)' },
        { id: 'd', text: 'O(n²)' }
      ],
      correctAnswer: 'a',
      explanation: "Inserting at the end of an unsorted array is O(1) because we simply place the new element in the next available position. No shifting of elements is required."
    },
    {
      id: 2,
      category: 'Arrays',
      question: "Which operation in an unsorted array requires O(n) time complexity?",
      options: [
        { id: 'a', text: 'Accessing element by index' },
        { id: 'b', text: 'Inserting at end' },
        { id: 'c', text: 'Searching for an element' },
        { id: 'd', text: 'Getting array length' }
      ],
      correctAnswer: 'c',
      explanation: "Searching for an element in an unsorted array requires checking each element one by one until we find the target element, leading to O(n) time complexity where n is the size of the array."
    },
    // Add more questions as needed
  ];