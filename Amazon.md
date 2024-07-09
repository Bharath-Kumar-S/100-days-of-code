# Trees (Binary Trees, Red-Black Trees, N-ary Trees, Tree Traversal, etc.)

### Binary Tree Inorder Traversal - LeetCode 94

### Binary Tree Preorder Traversal - LeetCode 144

### Binary Tree Postorder Traversal - LeetCode 145

### Validate Binary Search Tree - LeetCode 98

### Symmetric Tree - LeetCode 101

### Binary Tree Level Order Traversal - LeetCode 102

### Serialize and Deserialize Binary Tree - LeetCode 297

### Lowest Common Ancestor of a Binary Search Tree - LeetCode 235

### Lowest Common Ancestor of a Binary Tree - LeetCode 236

### Construct Binary Tree from Preorder and Inorder Traversal - LeetCode 105

### Binary Tree Maximum Path Sum - LeetCode 124

### Path Sum - LeetCode 112

### Flatten Binary Tree to Linked List - LeetCode 114

### Populating Next Right Pointers in Each Node - LeetCode 116

### Binary Search Tree Iterator - LeetCode 173

### N-ary Tree Level Order Traversal - LeetCode 429

### Kth Smallest Element in a BST - LeetCode 230

# Hash Maps

### Two Sum - LeetCode 1

### Group Anagrams - LeetCode 49

### Top K Frequent Elements - LeetCode 347

### Contains Duplicate - LeetCode 217

### Longest Substring Without Repeating Characters - LeetCode 3

### Subarray Sum Equals K - LeetCode 560

### Minimum Window Substring - LeetCode 76

### Find All Anagrams in a String - LeetCode 438

### Valid Anagram - LeetCode 242

### Longest Consecutive Sequence - LeetCode 128

### Word Pattern - LeetCode 290

### Isomorphic Strings - LeetCode 205

# Stacks/Queues/Heap/Priority Queue

### Implement Stack using Queues - LeetCode 225

### Implement Queue using Stacks - LeetCode 232

### Min Stack - LeetCode 155

### Top K Frequent Elements - LeetCode 347

### Task Scheduler - LeetCode 621

### Merge k Sorted Lists - LeetCode 23

### Design Circular Queue - LeetCode 622

### Evaluate Reverse Polish Notation - LeetCode 150

### Sliding Window Maximum - LeetCode 239

### Remove K Digits - LeetCode 402

### Next Greater Element I - LeetCode 496

### Next Greater Element II - LeetCode 503

### Daily Temperatures - LeetCode 739

# Linked Lists (Reverse Linked Lists, etc.)

### Reverse Linked List - LeetCode 206

### Merge Two Sorted Lists - LeetCode 21

### Linked List Cycle - LeetCode 141

### Remove Nth Node From End of List - LeetCode 19

### Add Two Numbers - LeetCode 2

### Intersection of Two Linked Lists - LeetCode 160

### LRU Cache - LeetCode 146

### Odd Even Linked List - LeetCode 328

### Palindrome Linked List - LeetCode 234

### Copy List with Random Pointer - LeetCode 138

### Sort List - LeetCode 148

### Flatten a Multilevel Doubly Linked List - LeetCode 430

# Recursion

### Climbing Stairs - LeetCode 70

### Permutations - LeetCode 46

### Subsets - LeetCode 78

### Combinations - LeetCode 77

### Generate Parentheses - LeetCode 22

### Letter Combinations of a Phone Number - LeetCode 17

### Combination Sum - LeetCode 39

### Combination Sum II - LeetCode 40

### N-Queens - LeetCode 51

### N-Queens II - LeetCode 52

### Word Search - LeetCode 79

### Sudoku Solver - LeetCode 37

### Regular Expression Matching - LeetCode 10

### Wildcard Matching - LeetCode 44

### Decode Ways - LeetCode 91

# Binary Search

### Binary Search - LeetCode 704

### Search Insert Position - LeetCode 35

### Find Minimum in Rotated Sorted Array - LeetCode 153

### Search in Rotated Sorted Array - LeetCode 33

### Find Peak Element - LeetCode 162

### Find First and Last Position of Element in Sorted Array - LeetCode 34

### Median of Two Sorted Arrays - LeetCode 4

### Search a 2D Matrix - LeetCode 74

### Search a 2D Matrix II - LeetCode 240

### Intersection of Two Arrays II - LeetCode 350

### Kth Smallest Element in a Sorted Matrix - LeetCode 378

### Split Array Largest Sum - LeetCode 410

### Capacity To Ship Packages Within D Days - LeetCode 1011

### Find Right Interval - LeetCode 436

### Count of Range Sum - LeetCode 327

# Arrays (2D/3D)

### Two Sum - LeetCode 1

### 3Sum - LeetCode 15

### Product of Array Except Self - LeetCode 238

### Set Matrix Zeroes - LeetCode 73

### Spiral Matrix - LeetCode 54

### Rotate Image - LeetCode 48

### Word Search - LeetCode 79

### Find the Duplicate Number - LeetCode 287

### Game of Life - LeetCode 289

### Search a 2D Matrix II - LeetCode 240

### First Missing Positive - LeetCode 41

### Merge Intervals - LeetCode 56

### Insert Interval - LeetCode 57

### Jump Game - LeetCode 55

### Jump Game II - LeetCode 45

### Maximum Subarray - LeetCode 53

### Best Time to Buy and Sell Stock - LeetCode 121

### Subarray Sum Equals K - LeetCode 560

### Container With Most Water - LeetCode 11

### Trapping Rain Water - LeetCode 42

### Find Minimum in Rotated Sorted Array - LeetCode 153

### Search in Rotated Sorted Array - LeetCode 33

### Median of Two Sorted Arrays - LeetCode 4

# Graphs (Graph Traversal, etc.)

### Clone Graph - LeetCode 133

### Course Schedule - LeetCode 207

### Number of Islands - LeetCode 200

### Word Ladder - LeetCode 127

### Graph Valid Tree - LeetCode 261

### Find the Town Judge - LeetCode 997

### Alien Dictionary - LeetCode 269

### Course Schedule II - LeetCode 210

### Redundant Connection - LeetCode 684

### Critical Connections in a Network - LeetCode 1192

### Minimum Cost to Connect All Points - LeetCode 1584

### Reconstruct Itinerary - LeetCode 332

### All Paths From Source to Target - LeetCode 797

### Cheapest Flights Within K Stops - LeetCode 787

### Course Schedule III - LeetCode 630

Designing distributed systems requires carefully balancing these trade-offs based on application requirements.

Here are some practical strategies:

1. **Eventual Consistency:**
   - **Definition:** A consistency model where updates are propagated to all nodes eventually, but not immediately.
   - **Use Case:** Systems where immediate consistency is not critical, such as DNS and content delivery networks (CDNs).
2. **Strong Consistency:**
   - **Definition:** A model ensuring that once a write is confirmed, any subsequent reads will return that value.
   - **Use Case:** Systems requiring high data accuracy, like financial applications and inventory management.
