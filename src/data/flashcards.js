export const flashcardsData = [
    {
      id: 1,
      category: 'Arrays',
      question: "How would you define an array?",
      answer: "An array is a **collection of elements** of the same type, stored in **contiguous memory locations**.\n\n**Key characteristics**:\n* Elements are stored sequentially\n* Each element can be accessed using an **index**\n* Fixed size in most implementations",
    },
    {
      id: 2,
      category: 'Arrays',
      question: "What are the advantages of using an unsorted array?",
      answer: "**Time Complexities:**\n\n* **Insertion at end:** O(1)\n* **Deletion (index known):** O(1)\n* **Access by index:** O(1)\n\n**Additional Benefits:**\n* Simple implementation\n* Memory efficient\n* Cache-friendly due to contiguous memory",
    },
    {
      id: 3,
      category: 'Arrays',
      question: "What are the disadvantages of using an unsorted array?",
      answer: "**Major Limitations:**\n\n1. **Fixed Size:**\n   * Must declare size at creation\n   * Resizing requires creating new array\n\n2. **Search Operations:**\n   * Linear search - O(n)\n   * No efficient search without sorting\n\n3. **Insertion/Deletion:**\n   * Mid-array operations require shifting - O(n)\n   * Memory waste with many deletions",
    },
    {
      id: 4,
      category: 'Arrays',
      question: "How do sorted arrays differ from unsorted arrays?",
      answer: "**Key Differences:**\n\n**1. Search Efficiency:**\n* Sorted: Binary search - **O(log n)**\n* Unsorted: Linear search - **O(n)**\n\n**2. Insertion Cost:**\n* Sorted: Requires finding position & shifting - **O(n)**\n* Unsorted: Simple append at end - **O(1)**\n\n**3. Use Cases:**\n* Sorted: Frequent searching\n* Unsorted: Frequent insertions",
    },
    {
      id: 5,
      category: 'Arrays',
      question: "What is the time complexity for basic array operations?",
      answer: "**Access Operations:**\n* **Random Access:** O(1)\n* **First Element:** O(1)\n* **Last Element:** O(1)\n\n**Search Operations:**\n* **Unsorted Array:** O(n)\n* **Sorted Array:** O(log n)\n\n**Modification:**\n* **Insert at End:** O(1)\n* **Insert at Middle:** O(n)\n* **Delete from End:** O(1)\n* **Delete from Middle:** O(n)",
    }
  ];