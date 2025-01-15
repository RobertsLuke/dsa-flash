export const stackData = {
    id: 'stack',
    title: 'Stack ADT',
    flashcards: [
      {
        id: 1,
        category: 'Stack Basics',
        question: "What is the defining characteristic of a Stack data structure?",
        answer: "A Stack is defined by its **Last-In-First-Out (LIFO)** principle where:\n\n* Only the most recently inserted element can be removed\n* Elements are added and removed from the same end (top)\n* Access to other elements is restricted\n\n**Key Operations:**\n* Push: Add element to top\n* Pop: Remove element from top\n* Peek: View top element"
      },
      {
        id: 2,
        category: 'LIFO Principle',
        question: "Explain the LIFO principle with a real-world example.",
        answer: "**LIFO Principle in Real World:**\n\n**Example: Stack of Plates**\n* New plates are added to the top\n* Only the top plate can be removed\n* Must remove upper plates to access lower ones\n\n**Other Examples:**\n* Browser back button history\n* Undo function in text editors\n* Function call stack in programming"
      },
      {
        id: 3,
        category: 'Applications',
        question: "What are common applications of a stack data structure?",
        answer: "**Common Stack Applications:**\n\n1. **Expression Evaluation**\n   * Parentheses matching\n   * Postfix evaluation\n\n2. **Memory Management**\n   * Function call stack\n   * Recursive function calls\n\n3. **User Interface**\n   * Undo/Redo operations\n   * Browser history\n\n4. **Algorithms**\n   * Depth-first search\n   * Backtracking algorithms"
      }
    ],
    quiz: [
      {
        id: 1,
        question: "Which principle defines a stack's behavior?",
        options: [
          { id: 'a', text: 'First-In-First-Out (FIFO)' },
          { id: 'b', text: 'Last-In-First-Out (LIFO)' },
          { id: 'c', text: 'Random Access Memory (RAM)' },
          { id: 'd', text: 'Priority-based access' }
        ],
        correctAnswer: 'b',
        explanation: "A stack operates on the Last-In-First-Out (LIFO) principle, meaning the last element added to the stack is the first one that can be removed. This is similar to a stack of plates where you can only take the top plate."
      },
      {
        id: 2,
        type: 'code',
        question: "What will be the output of these stack operations?",
        code: `
  class Stack:
      def __init__(self):
          self.items = []
          
      def push(self, item):
          self.items.append(item)
          
      def pop(self):
          if not self.is_empty():
              return self.items.pop()
              
      def peek(self):
          if not self.is_empty():
              return self.items[-1]
              
      def is_empty(self):
          return len(self.items) == 0
  
  # Test the stack
  stack = Stack()
  stack.push(1)
  stack.push(2)
  stack.push(3)
  print(stack.pop())
  stack.push(4)
  print(stack.peek())
  print(stack.items)`,
        language: 'python',
        options: [
          { id: 'a', text: '3, 4, [1, 2, 4]' },
          { id: 'b', text: '1, 4, [2, 3, 4]' },
          { id: 'c', text: '3, 2, [1, 2]' },
          { id: 'd', text: '2, 4, [1, 2, 3]' }
        ],
        correctAnswer: 'a',
        explanation: "Let's trace the operations:\n1. Push 1: [1]\n2. Push 2: [1, 2]\n3. Push 3: [1, 2, 3]\n4. Pop: removes and returns 3: [1, 2]\n5. Push 4: [1, 2, 4]\n6. Peek: shows 4 but doesn't remove it\n7. Final state: [1, 2, 4]"
      },
      {
        id: 3,
        type: 'code',
        question: "What problem does this stack implementation solve?",
        code: `
  def is_balanced(expression):
      stack = []
      brackets = {')': '(', '}': '{', ']': '['}
      
      for char in expression:
          if char in '({[':
              stack.append(char)
          elif char in ')}]':
              if not stack:
                  return False
              if stack.pop() != brackets[char]:
                  return False
      
      return len(stack) == 0
  
  # Test cases
  print(is_balanced("({[]})"))  # True
  print(is_balanced("({[}])"))  # False`,
        language: 'python',
        options: [
          { id: 'a', text: 'Sorting brackets in ascending order' },
          { id: 'b', text: 'Checking for balanced parentheses and brackets' },
          { id: 'c', text: 'Converting infix to postfix notation' },
          { id: 'd', text: 'Evaluating mathematical expressions' }
        ],
        correctAnswer: 'b',
        explanation: "This code uses a stack to check for balanced brackets by:\n1. Pushing opening brackets onto stack\n2. When closing bracket is found, checking if it matches top of stack\n3. Stack should be empty at end if all brackets are balanced\n4. Perfect example of how stacks are used for parentheses matching"
      },
      {
        id: 4,
        question: "Which scenario would NOT be suitable for a stack data structure?",
        options: [
          { id: 'a', text: 'Implementing an undo feature in a text editor' },
          { id: 'b', text: 'Managing function calls in program execution' },
          { id: 'c', text: 'Processing customer service requests in order of arrival' },
          { id: 'd', text: 'Checking for balanced parentheses in code' }
        ],
        correctAnswer: 'c',
        explanation: "Processing customer service requests in order of arrival requires a FIFO (First-In-First-Out) structure, making it suitable for a queue, not a stack. A stack's LIFO principle would process the newest requests first, which wouldn't be fair to customers who waited longer."
      }
    ]
  };