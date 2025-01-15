export const arrayData = {
    id: 'array',
    title: 'Arrays',
    flashcards: [
      {
        id: 1,
        category: 'Basic Concepts',
        question: "What defines a linear data structure in terms of node relationships?",
        answer: "A linear data structure is characterized by having elements arranged in a **sequential order** where:\n\n* Each element (except the last) has a **unique successor**\n* Each element (except the first) has a **unique predecessor**\n\nThis creates a **one-dimensional** arrangement of data elements."
      },
      {
        id: 2,
        category: 'Basic Concepts',
        question: "How do nodes connect to each other in a linear data structure?",
        answer: "In linear data structures, nodes connect in a **sequential manner** where:\n\n1. **Direct Connection:** Each node connects directly to the next node\n2. **Single Direction:** Connections flow in one direction (can be forward or both directions depending on implementation)\n3. **No Branching:** Unlike trees or graphs, there are no branches or multiple paths"
      },
      {
        id: 3,
        category: 'Array Basics',
        question: "What is the primary characteristic of elements stored in an array?",
        answer: "The primary characteristics of array elements are:\n\n1. **Same Data Type:** All elements must be of the same type\n2. **Contiguous Memory:** Elements are stored in consecutive memory locations\n3. **Fixed Size:** Size is typically defined at creation\n4. **Direct Access:** Elements can be accessed directly using an index"
      },
      {
        id: 4,
        category: 'Array Access',
        question: "How are elements identified or located within an array?",
        answer: "Elements in an array are identified through:\n\n1. **Index Numbers:** Each element has a numerical index\n2. **Zero-Based:** Usually starts at index 0 (in most languages)\n3. **Formula:** Memory_Location = Base_Address + (Index × Element_Size)\n4. **Direct Access:** O(1) time complexity for accessing any element"
      },
      {
        id: 5,
        category: 'Time Complexity',
        question: "Compare the time complexities for insertion and deletion in unsorted vs sorted arrays.",
        answer: "**Unsorted Array:**\n* Insertion (end): O(1)\n* Insertion (middle): O(n)\n* Deletion (known index): O(1)\n* Deletion (by value): O(n)\n\n**Sorted Array:**\n* Insertion: O(n) - must maintain order\n* Deletion: O(n) - must maintain order\n* Search: O(log₂ n) - can use binary search"
      }
    ],
    quiz: [
      {
        id: 1,
        question: "What defines a linear data structure?",
        options: [
          { id: 'a', text: 'Elements arranged in multiple dimensions with multiple connections' },
          { id: 'b', text: 'Elements arranged sequentially, each with a unique predecessor and successor' },
          { id: 'c', text: 'Elements arranged in a tree-like structure' },
          { id: 'd', text: 'Elements arranged randomly in memory' }
        ],
        correctAnswer: 'b',
        explanation: "A linear data structure is defined by its sequential arrangement where each element (except the first and last) has exactly one predecessor and one successor. This creates a linear, one-dimensional sequence of elements."
      },
      {
        id: 2,
        type: 'code',
        question: "What will be the output of this array operation implementing basic operations?",
        code: `
  def array_operations():
      # Initialize array
      arr = [1, 3, 5, 7, 9]
      
      # Insert at end (O(1))
      arr.append(11)
      
      # Insert at middle (O(n))
      arr.insert(2, 4)
      
      # Delete known index (O(1) for last element)
      arr.pop()
      
      # Search by value (O(n))
      found_index = arr.index(5)
      
      return arr, found_index
  
  # Run operations
  result, index = array_operations()
  print(f"Array: {result}")
  print(f"Found 5 at index: {index}")`,
        language: 'python',
        options: [
          { id: 'a', text: 'Array: [1, 3, 4, 5, 7, 9], Found 5 at index: 3' },
          { id: 'b', text: 'Array: [1, 3, 5, 7, 9, 11], Found 5 at index: 2' },
          { id: 'c', text: 'Array: [1, 3, 4, 5, 7, 9, 11], Found 5 at index: 3' },
          { id: 'd', text: 'Array: [1, 3, 4, 5, 7, 9], Found 5 at index: 2' }
        ],
        correctAnswer: 'a',
        explanation: "Let's trace the operations:\n1. Initial array: [1, 3, 5, 7, 9]\n2. After append(11): [1, 3, 5, 7, 9, 11]\n3. After insert(2, 4): [1, 3, 4, 5, 7, 9, 11]\n4. After pop(): [1, 3, 4, 5, 7, 9]\n5. Finding 5: index 3"
      },
      {
        id: 3,
        type: 'code',
        question: "What is the time complexity of this binary search implementation?",
        code: `
  def binary_search(arr, target):
      left = 0
      right = len(arr) - 1
      
      while left <= right:
          mid = (left + right) // 2
          
          if arr[mid] == target:
              return mid
          elif arr[mid] < target:
              left = mid + 1
          else:
              right = mid - 1
              
      return -1
  
  # Example usage
  sorted_arr = [1, 3, 5, 7, 9, 11, 13]
  result = binary_search(sorted_arr, 7)`,
        language: 'python',
        options: [
          { id: 'a', text: 'O(n)' },
          { id: 'b', text: 'O(log₂ n)' },
          { id: 'c', text: 'O(1)' },
          { id: 'd', text: 'O(n²)' }
        ],
        correctAnswer: 'b',
        explanation: "Binary search has O(log₂ n) time complexity because:\n1. It divides the search space in half each time\n2. The number of operations is logarithmic to the input size\n3. This makes it much more efficient than linear search (O(n))\n4. However, it requires the array to be sorted"
      },
      {
        id: 4,
        question: "Why would you choose an unsorted array over a sorted array?",
        options: [
          { id: 'a', text: 'When you need fast binary search capabilities' },
          { id: 'b', text: 'When you need fast insertions and dont frequently search by value' },
          { id: 'c', text: 'When you need to maintain elements in sorted order' },
          { id: 'd', text: 'When you need logarithmic time complexity for all operations' }
        ],
        correctAnswer: 'b',
        explanation: "An unsorted array is preferred when:\n1. Fast insertions are priority (O(1) at end)\n2. You mostly access elements by index\n3. Search operations are infrequent\n4. Maintaining sorted order isn't necessary\n\nThis makes it ideal for scenarios like a simple task list or buffer."
      }
    ]
  };