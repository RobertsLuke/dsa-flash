export const stackQueueData = {
    id: 'stackqueue',
    title: 'Stacks and Queues',
    flashcards: [
      {
        id: 1,
        category: 'Stack ADT',
        question: "What is a Stack and how does it work?",
        answer: "A **Stack** is a collection of objects organized with **Last-In First-Out (LIFO)** principle.\n\n**Key Points:**\n* Only the most recently inserted object can be removed\n* Last-In First-Out structure\n* Common operations: push (insert), pop (remove), peek (view top)"
      },
      {
        id: 2,
        category: 'Queue ADT',
        question: "What is a Queue and how does it work?",
        answer: "A **Queue** is a collection of objects organized with **First-In First-Out (FIFO)** principle.\n\n**Key Points:**\n* Object stored longest is removed first\n* First-In First-Out structure\n* Common operations: enqueue (insert), dequeue (remove), peek (view front)"
      },
      {
        id: 3,
        category: 'Priority Queue',
        question: "What is a Priority Queue and what are its time complexities?",
        answer: "A **Priority Queue** is a queue where elements have associated priorities.\n\n**Time Complexities:**\n* **Insertion:** O(1)\n* **Removal:** O(n) - must search for highest priority\n\n**Key Points:**\n* Elements have priorities\n* Highest priority element is removed first\n* Sequential search needed for removal"
      }
    ],
    quiz: [
      {
        id: 1,
        question: "What is the defining characteristic of a Stack data structure?",
        options: [
          { id: 'a', text: 'First-In First-Out (FIFO)' },
          { id: 'b', text: 'Last-In First-Out (LIFO)' },
          { id: 'c', text: 'Random access to elements' },
          { id: 'd', text: 'Priority-based access' }
        ],
        correctAnswer: 'b',
        explanation: "A Stack follows the Last-In First-Out (LIFO) principle, meaning the most recently added element is the first one to be removed. This is like a stack of plates where you can only take from the top."
      },
      {
        id: 2,
        type: 'code',
        question: "What will be the output of this stack operation?",
        code: `
  stack = []
  stack.append(1)    # push 1
  stack.append(2)    # push 2
  stack.append(3)    # push 3
  stack.pop()        # pop once
  stack.append(4)    # push 4
  print(stack)
  `,
        language: 'python',
        options: [
          { id: 'a', text: '[1, 2, 4]' },
          { id: 'b', text: '[4, 3, 2, 1]' },
          { id: 'c', text: '[1, 2, 3]' },
          { id: 'd', text: '[1, 4, 3, 2]' }
        ],
        correctAnswer: 'a',
        explanation: "Let's follow the operations:\n1. Push 1: [1]\n2. Push 2: [1, 2]\n3. Push 3: [1, 2, 3]\n4. Pop: [1, 2] (3 is removed)\n5. Push 4: [1, 2, 4]"
      },
      {
        id: 3,
        question: "What is the key characteristic of a Queue data structure?",
        options: [
          { id: 'a', text: 'Last-In First-Out (LIFO)' },
          { id: 'b', text: 'First-In First-Out (FIFO)' },
          { id: 'c', text: 'Random access to elements' },
          { id: 'd', text: 'Sorted order of elements' }
        ],
        correctAnswer: 'b',
        explanation: "A Queue follows the First-In First-Out (FIFO) principle, meaning the first element added is the first one to be removed. This is like a line of people waiting - the first person to join the line is the first person to be served."
      },
      {
        id: 4,
        type: 'code',
        question: "What will be the output of this queue operation?",
        code: `
  from collections import deque
  queue = deque()
  queue.append(1)      # enqueue 1
  queue.append(2)      # enqueue 2
  queue.append(3)      # enqueue 3
  queue.popleft()      # dequeue once
  queue.append(4)      # enqueue 4
  print(list(queue))
  `,
        language: 'python',
        options: [
          { id: 'a', text: '[1, 2, 4]' },
          { id: 'b', text: '[2, 3, 4]' },
          { id: 'c', text: '[4, 3, 2]' },
          { id: 'd', text: '[1, 4, 3]' }
        ],
        correctAnswer: 'b',
        explanation: "Let's follow the operations:\n1. Enqueue 1: [1]\n2. Enqueue 2: [1, 2]\n3. Enqueue 3: [1, 2, 3]\n4. Dequeue: [2, 3] (1 is removed from front)\n5. Enqueue 4: [2, 3, 4]"
      },
      {
        id: 5,
        question: "What is the time complexity of removing the highest priority element from a Priority Queue implemented as a simple list?",
        options: [
          { id: 'a', text: 'O(1)' },
          { id: 'b', text: 'O(log n)' },
          { id: 'c', text: 'O(n)' },
          { id: 'd', text: 'O(n²)' }
        ],
        correctAnswer: 'c',
        explanation: "In a Priority Queue implemented as a simple list, removing the highest priority element requires searching through the entire list to find the element with the highest priority, which takes O(n) time. This is because we need to compare each element's priority to find the highest one."
      }
    ]
  };