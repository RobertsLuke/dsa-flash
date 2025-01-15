export const queueData = {
    id: 'queue',
    title: 'Queue ADT',
    flashcards: [
      {
        id: 1,
        category: 'Queue vs Stack',
        question: "How does a Queue differ from a Stack in terms of element access?",
        answer: "A Queue differs from a Stack in these key ways:\n\n**Access Pattern:**\n* Queue: **First-In-First-Out (FIFO)**\n* Stack: Last-In-First-Out (LIFO)\n\n**Operations:**\n* Queue: Enqueue at rear, Dequeue from front\n* Stack: Push and Pop from same end\n\n**Access Points:**\n* Queue: Two ends (front and rear)\n* Stack: Single end (top)"
      },
      {
        id: 2,
        category: 'FIFO Principle',
        question: "Explain the FIFO principle with a real-world example.",
        answer: "**FIFO Principle in Real World:**\n\n**Example: Waiting Line at a Store**\n* First person in line gets served first\n* New people join at the end of line\n* Order of service matches order of arrival\n\n**Other Examples:**\n* Printer job queue\n* Traffic management\n* Restaurant orders\n* Customer service tickets"
      },
      {
        id: 3,
        category: 'Implementation',
        question: "What are the main operations and their time complexities in a queue?",
        answer: "**Queue Operations:**\n\n1. **Enqueue (Add):**\n   * Time Complexity: O(1)\n   * Adds element to rear\n\n2. **Dequeue (Remove):**\n   * Time Complexity: O(1)\n   * Removes element from front\n\n3. **Peek/Front:**\n   * Time Complexity: O(1)\n   * Views front element\n\n4. **IsEmpty:**\n   * Time Complexity: O(1)"
      }
    ],
    quiz: [
      {
        id: 1,
        type: 'code',
        question: "What will be the output of these queue operations?",
        code: `
  from collections import deque
  
  class Queue:
      def __init__(self):
          self.items = deque()
          
      def enqueue(self, item):
          self.items.append(item)
          
      def dequeue(self):
          if not self.is_empty():
              return self.items.popleft()
              
      def front(self):
          if not self.is_empty():
              return self.items[0]
              
      def is_empty(self):
          return len(self.items) == 0
  
  # Test the queue
  queue = Queue()
  queue.enqueue(1)
  queue.enqueue(2)
  queue.enqueue(3)
  print(queue.dequeue())
  queue.enqueue(4)
  print(queue.front())
  print(list(queue.items))`,
        language: 'python',
        options: [
          { id: 'a', text: '1, 2, [2, 3, 4]' },
          { id: 'b', text: '3, 4, [1, 2, 4]' },
          { id: 'c', text: '1, 4, [4, 2, 3]' },
          { id: 'd', text: '2, 3, [1, 3, 4]' }
        ],
        correctAnswer: 'a',
        explanation: "Let's trace the operations:\n1. Enqueue 1: [1]\n2. Enqueue 2: [1, 2]\n3. Enqueue 3: [1, 2, 3]\n4. Dequeue: removes and prints 1: [2, 3]\n5. Enqueue 4: [2, 3, 4]\n6. Front: prints 2 (doesn't remove)\n7. Final state: [2, 3, 4]"
      },
      {
        id: 2,
        question: "Which real-world scenario would be best suited for a queue data structure?",
        options: [
          { id: 'a', text: 'Implementing an undo feature in a text editor' },
          { id: 'b', text: 'Managing print jobs sent to a printer' },
          { id: 'c', text: 'Tracking browser history' },
          { id: 'd', text: 'Checking for balanced parentheses in code' }
        ],
        correctAnswer: 'b',
        explanation: "A printer queue is a perfect example of FIFO principle because:\n1. Print jobs should be processed in order of arrival\n2. First job submitted should be first to print\n3. New jobs join at the end of queue\n4. Processing order is fair and predictable"
      },
      {
        id: 3,
        type: 'code',
        question: "What potential issue does this queue implementation have?",
        code: `
  class SimpleQueue:
      def __init__(self, size):
          self.size = size
          self.items = [None] * size
          self.front = 0
          self.rear = -1
          self.count = 0
          
      def enqueue(self, item):
          if self.count >= self.size:
              return False  # Queue is full
          self.rear = (self.rear + 1) % self.size
          self.items[self.rear] = item
          self.count += 1
          return True
          
      def dequeue(self):
          if self.count == 0:
              return None  # Queue is empty
          item = self.items[self.front]
          self.front = (self.front + 1) % self.size
          self.count -= 1
          return item`,
        language: 'python',
        options: [
          { id: 'a', text: 'It doesn\'t implement FIFO properly' },
          { id: 'b', text: 'It has O(n) time complexity for operations' },
          { id: 'c', text: 'It has a fixed size limit' },
          { id: 'd', text: 'It doesn\'t handle empty queue checks' }
        ],
        correctAnswer: 'c',
        explanation: "This is a circular queue implementation that:\n1. Has a fixed size defined at creation\n2. Uses modulo operator for circular behavior\n3. Can't grow beyond initial size\n4. While efficient (O(1) operations), it's limited by fixed capacity"
      }
    ]
  };