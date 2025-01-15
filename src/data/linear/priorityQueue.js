export const priorityQueueData = {
    id: 'priorityqueue',
    title: 'Priority Queue',
    flashcards: [
      {
        id: 1,
        category: 'Priority Queue Features',
        question: "What additional feature does a Priority Queue have compared to a regular queue?",
        answer: "A Priority Queue extends the queue concept with these features:\n\n1. **Priority Value:**\n   * Each element has an associated priority\n   * Priority determines processing order\n\n2. **Ordering:**\n   * Elements processed by priority, not arrival time\n   * Highest (or lowest) priority served first\n\n3. **Structure:**\n   * Can be implemented with array or heap\n   * Simple implementation uses array with O(n) removal"
      },
      {
        id: 2,
        category: 'Time Complexity',
        question: "Why is insertion O(1) in a priority queue but deletion O(n)?",
        answer: "**Time Complexity Analysis:**\n\n**Insertion - O(1):**\n* Simply add to end of array\n* No need to maintain order\n* Position doesn't matter\n\n**Deletion - O(n):**\n* Must search all elements\n* Find highest priority element\n* Compare each element's priority\n* No shortcuts without different implementation (like heap)"
      },
      {
        id: 3,
        category: 'Comparisons',
        question: "Compare time complexities across different data structures",
        answer: "**Time Complexity Comparison:**\n\n**Unsorted Array:**\n* Insert: O(1)\n* Delete: O(n)\n* Search: O(n)\n\n**Sorted Array:**\n* Insert: O(n)\n* Delete: O(n)\n* Search: O(log₂ n)\n\n**Stack/Queue:**\n* Insert: O(1)\n* Delete: O(1)\n\n**Priority Queue (Array):**\n* Insert: O(1)\n* Delete: O(n)"
      },
      {
        id: 4,
        category: 'Applications',
        question: "When would you choose a priority queue over a regular queue in real-world applications?",
        answer: "**Priority Queue Use Cases:**\n\n1. **Emergency Services:**\n   * Hospital emergency room triage\n   * Emergency response dispatch\n\n2. **Operating Systems:**\n   * Process scheduling\n   * Job scheduling\n\n3. **Network Management:**\n   * Packet routing (QoS)\n   * Bandwidth allocation\n\n4. **Task Management:**\n   * Task scheduling by importance\n   * Resource allocation"
      }
    ],
    quiz: [
      {
        id: 1,
        type: 'code',
        question: "What will be the output of this priority queue implementation?",
        code: `
  class PriorityQueue:
      def __init__(self):
          self.queue = []
          
      def enqueue(self, item, priority):
          self.queue.append({'item': item, 'priority': priority})
          
      def dequeue(self):
          if not self.queue:
              return None
              
          # Find highest priority
          max_priority_idx = 0
          for i in range(len(self.queue)):
              if self.queue[i]['priority'] > self.queue[max_priority_idx]['priority']:
                  max_priority_idx = i
                  
          return self.queue.pop(max_priority_idx)['item']
  
  # Test
  pq = PriorityQueue()
  pq.enqueue('Task 1', 2)
  pq.enqueue('Task 2', 1)
  pq.enqueue('Task 3', 3)
  print(pq.dequeue())
  pq.enqueue('Task 4', 2)
  print(pq.dequeue())`,
        language: 'python',
        options: [
          { id: 'a', text: 'Task 1, Task 4' },
          { id: 'b', text: 'Task 3, Task 1' },
          { id: 'c', text: 'Task 2, Task 1' },
          { id: 'd', text: 'Task 3, Task 4' }
        ],
        correctAnswer: 'b',
        explanation: "Let's trace the operations:\n1. Enqueue: Task 1 (priority 2)\n2. Enqueue: Task 2 (priority 1)\n3. Enqueue: Task 3 (priority 3)\n4. Dequeue: Returns Task 3 (highest priority)\n5. Enqueue: Task 4 (priority 2)\n6. Dequeue: Returns Task 1 (highest remaining priority)"
      },
      {
        id: 2,
        question: "Which scenario would best benefit from a priority queue?",
        options: [
          { id: 'a', text: 'Processing bank transactions in order of arrival' },
          { id: 'b', text: 'Managing emergency room patients based on condition severity' },
          { id: 'c', text: 'Tracking order of browser history' },
          { id: 'd', text: 'Implementing an undo feature' }
        ],
        correctAnswer: 'b',
        explanation: "Emergency room triage is a perfect use case for priority queues because:\n1. Patients have different urgency levels\n2. Most critical cases must be treated first\n3. New critical cases should override earlier, less urgent cases\n4. Priority-based processing is literally life-saving"
      },
      {
        id: 3,
        question: "What is the main trade-off when using an array-based priority queue?",
        options: [
          { id: 'a', text: 'Fast insertion but slow deletion' },
          { id: 'b', text: 'Fast deletion but slow insertion' },
          { id: 'c', text: 'Fast operations but high memory usage' },
          { id: 'd', text: 'Low memory usage but complex implementation' }
        ],
        correctAnswer: 'a',
        explanation: "Array-based priority queues trade-off:\n1. Insertion is O(1) - just append to array\n2. Deletion is O(n) - must search all elements\n3. This trade-off can be improved using heap implementation\n4. Heap implementation gives O(log n) for both operations"
      },
      {
        id: 4,
        type: 'code',
        question: "What improvement could make this priority queue more efficient?",
        code: `
  def find_highest_priority(queue):
      if not queue:
          return None
      
      highest_priority = float('-inf')
      highest_index = -1
      
      for i, item in enumerate(queue):
          if item['priority'] > highest_priority:
              highest_priority = item['priority']
              highest_index = i
              
      return highest_index`,
        language: 'python',
        options: [
          { id: 'a', text: 'Use a linked list instead of an array' },
          { id: 'b', text: 'Implement it using a heap data structure' },
          { id: 'c', text: 'Sort the queue after each insertion' },
          { id: 'd', text: 'Use recursive search instead of iterative' }
        ],
        correctAnswer: 'b',
        explanation: "Using a heap would improve efficiency because:\n1. Current implementation is O(n) for finding highest priority\n2. Heap implementation would reduce this to O(log n)\n3. Heap maintains partial ordering automatically\n4. Both insertion and deletion would become O(log n)"
      }
    ]
  };