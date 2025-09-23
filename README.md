# 150 Original and Classic Questions

## 🔄 Two Pointers
**When to use:** Sorted arrays, palindromes, pairs/triplets, opposite ends
**Time:** O(n) | **Space:** O(1)
```javascript
function twoPointers(arr) {
    let left = 0, right = arr.length - 1;
    
    while (left < right) {
        if (condition_met) {
            // process result
            left++; right--;
        } else if (need_larger_sum) {
            left++;
        } else {
            right--;
        }
    }
}
```

## 🪟 Sliding Window
**When to use:** Subarray/substring problems, "maximum/minimum in window"
**Time:** O(n) | **Space:** O(1)
```javascript
// Fixed size window
function fixedWindow(arr, k) {
    let windowSum = 0;
    for (let i = 0; i < k; i++) windowSum += arr[i];
    
    let maxSum = windowSum;
    for (let i = k; i < arr.length; i++) {
        windowSum = windowSum - arr[i - k] + arr[i];
        maxSum = Math.max(maxSum, windowSum);
    }
    return maxSum;
}

// Variable size window
function variableWindow(arr) {
    let left = 0, result = 0;
    
    for (let right = 0; right < arr.length; right++) {
        // Expand window
        window_state += arr[right];
        
        // Shrink if invalid
        while (window_invalid) {
            window_state -= arr[left];
            left++;
        }
        
        // Update result
        result = Math.max(result, right - left + 1);
    }
    return result;
}
```

## 🔁 Fast & Slow Pointers (Floyd's Cycle Detection)
**When to use:** Linked lists, cycle detection, finding middle
**Time:** O(n) | **Space:** O(1)
```javascript
function fastSlow(head) {
    let slow = head, fast = head;
    
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
        
        if (slow === fast) return true; // cycle found
    }
    return false;
}

// Find cycle start
function findCycleStart(head) {
    let slow = head, fast = head;
    
    // Find meeting point
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
        if (slow === fast) break;
    }
    
    // Find start of cycle
    slow = head;
    while (slow !== fast) {
        slow = slow.next;
        fast = fast.next;
    }
    return slow;
}
```

## 🔄 Backtracking
**When to use:** Generate combinations/permutations, puzzles, constraint satisfaction
**Time:** Exponential | **Space:** O(depth)
```javascript
function backtrack(current, remaining, result) {
    if (base_case) {
        result.push([...current]);
        return;
    }
    
    for (let i = 0; i < remaining.length; i++) {
        // Choose
        current.push(remaining[i]);
        
        // Explore
        backtrack(current, remaining.slice(i + 1), result);
        
        // Unchoose
        current.pop();
    }
}

// With duplicates handling
function backtrackWithDuplicates(candidates, target) {
    candidates.sort();
    const result = [];
    
    function dfs(start, current, remaining) {
        if (remaining === 0) {
            result.push([...current]);
            return;
        }
        
        for (let i = start; i < candidates.length; i++) {
            if (i > start && candidates[i] === candidates[i-1]) continue; // skip duplicates
            if (candidates[i] > remaining) break;
            
            current.push(candidates[i]);
            dfs(i + 1, current, remaining - candidates[i]);
            current.pop();
        }
    }
    
    dfs(0, [], target);
    return result;
}
```

## 🌳 DFS (Depth-First Search)
**When to use:** Trees, graphs, connected components, path finding
**Time:** O(V + E) | **Space:** O(V)
```javascript
// Recursive DFS
function dfs(node, visited = new Set()) {
    if (!node || visited.has(node)) return;
    
    visited.add(node);
    // Process node
    
    for (let neighbor of getNeighbors(node)) {
        dfs(neighbor, visited);
    }
}

// Iterative DFS
function dfsIterative(start) {
    const stack = [start];
    const visited = new Set();
    
    while (stack.length > 0) {
        const current = stack.pop();
        if (visited.has(current)) continue;
        
        visited.add(current);
        // Process current
        
        for (let neighbor of getNeighbors(current)) {
            if (!visited.has(neighbor)) {
                stack.push(neighbor);
            }
        }
    }
}

// Tree DFS variants
function preorder(root) {
    if (!root) return [];
    return [root.val, ...preorder(root.left), ...preorder(root.right)];
}

function inorder(root) {
    if (!root) return [];
    return [...inorder(root.left), root.val, ...inorder(root.right)];
}

function postorder(root) {
    if (!root) return [];
    return [...postorder(root.left), ...postorder(root.right), root.val];
}
```

## 🔍 BFS (Breadth-First Search)
**When to use:** Shortest path, level-order traversal, minimum steps
**Time:** O(V + E) | **Space:** O(V)
```javascript
function bfs(start) {
    const queue = [start];
    const visited = new Set([start]);
    
    while (queue.length > 0) {
        const current = queue.shift();
        // Process current
        
        for (let neighbor of getNeighbors(current)) {
            if (!visited.has(neighbor)) {
                visited.add(neighbor);
                queue.push(neighbor);
            }
        }
    }
}

// BFS with level tracking
function bfsLevels(start) {
    const queue = [start];
    const visited = new Set([start]);
    let level = 0;
    
    while (queue.length > 0) {
        const size = queue.length;
        
        for (let i = 0; i < size; i++) {
            const current = queue.shift();
            // Process current at this level
            
            for (let neighbor of getNeighbors(current)) {
                if (!visited.has(neighbor)) {
                    visited.add(neighbor);
                    queue.push(neighbor);
                }
            }
        }
        level++;
    }
}
```

## 💰 Dynamic Programming
**When to use:** Optimization problems, overlapping subproblems
**Time:** O(n²) typically | **Space:** O(n) or O(n²)
```javascript
// 1D DP
function dp1D(n) {
    const dp = new Array(n + 1);
    dp[0] = base_case;
    dp[1] = base_case;
    
    for (let i = 2; i <= n; i++) {
        dp[i] = dp[i-1] + dp[i-2]; // recurrence relation
    }
    return dp[n];
}

// 2D DP
function dp2D(m, n) {
    const dp = Array(m).fill().map(() => Array(n).fill(0));
    
    // Initialize base cases
    for (let i = 0; i < m; i++) dp[i][0] = 1;
    for (let j = 0; j < n; j++) dp[0][j] = 1;
    
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            dp[i][j] = dp[i-1][j] + dp[i][j-1];
        }
    }
    return dp[m-1][n-1];
}

// DP with memoization
function dpMemo(n, memo = {}) {
    if (n in memo) return memo[n];
    if (n <= 1) return n;
    
    memo[n] = dpMemo(n-1, memo) + dpMemo(n-2, memo);
    return memo[n];
}
```

## 🔢 Binary Search
**When to use:** Sorted arrays, search space problems, "find minimum/maximum"
**Time:** O(log n) | **Space:** O(1)
```javascript
// Standard binary search
function binarySearch(arr, target) {
    let left = 0, right = arr.length - 1;
    
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        
        if (arr[mid] === target) return mid;
        if (arr[mid] < target) left = mid + 1;
        else right = mid - 1;
    }
    return -1;
}

// Find first/last occurrence
function findFirst(arr, target) {
    let left = 0, right = arr.length - 1;
    let result = -1;
    
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        
        if (arr[mid] === target) {
            result = mid;
            right = mid - 1; // continue searching left
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return result;
}

// Binary search on answer space
function binarySearchAnswer(left, right, condition) {
    while (left < right) {
        const mid = Math.floor((left + right) / 2);
        
        if (condition(mid)) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }
    return left;
}
```

## 🥞 Stack/Monotonic Stack
**When to use:** Parentheses, next greater element, histogram problems
**Time:** O(n) | **Space:** O(n)
```javascript
// Basic stack operations
function stackPattern(arr) {
    const stack = [];
    
    for (let item of arr) {
        while (stack.length && condition(stack[stack.length - 1], item)) {
            const popped = stack.pop();
            // Process popped element
        }
        stack.push(item);
    }
    
    return result;
}

// Next greater element
function nextGreaterElement(arr) {
    const stack = [];
    const result = new Array(arr.length).fill(-1);
    
    for (let i = 0; i < arr.length; i++) {
        while (stack.length && arr[stack[stack.length - 1]] < arr[i]) {
            const index = stack.pop();
            result[index] = arr[i];
        }
        stack.push(i);
    }
    return result;
}

// Valid parentheses
function isValid(s) {
    const stack = [];
    const pairs = { ')': '(', '}': '{', ']': '[' };
    
    for (let char of s) {
        if (char in pairs) {
            if (stack.pop() !== pairs[char]) return false;
        } else {
            stack.push(char);
        }
    }
    return stack.length === 0;
}
```

## 🗺️ Hash Map Patterns
**When to use:** Frequency counting, two sum variants, caching
**Time:** O(n) | **Space:** O(n)
```javascript
// Two sum pattern
function twoSum(arr, target) {
    const map = new Map();
    
    for (let i = 0; i < arr.length; i++) {
        const complement = target - arr[i];
        if (map.has(complement)) {
            return [map.get(complement), i];
        }
        map.set(arr[i], i);
    }
    return [];
}

// Frequency counter
function frequencyCounter(arr) {
    const freq = new Map();
    
    for (let item of arr) {
        freq.set(item, (freq.get(item) || 0) + 1);
    }
    
    return freq;
}

// Group anagrams
function groupAnagrams(strs) {
    const map = new Map();
    
    for (let str of strs) {
        const key = str.split('').sort().join('');
        if (!map.has(key)) map.set(key, []);
        map.get(key).push(str);
    }
    
    return Array.from(map.values());
}
```

## 🔗 Linked List Patterns
**When to use:** Linked list manipulation, reversal, merging
**Time:** O(n) | **Space:** O(1)
```javascript
// Reverse linked list
function reverseList(head) {
    let prev = null, curr = head;
    
    while (curr) {
        const next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }
    return prev;
}

// Merge two sorted lists
function mergeTwoLists(l1, l2) {
    const dummy = { next: null };
    let curr = dummy;
    
    while (l1 && l2) {
        if (l1.val <= l2.val) {
            curr.next = l1;
            l1 = l1.next;
        } else {
            curr.next = l2;
            l2 = l2.next;
        }
        curr = curr.next;
    }
    
    curr.next = l1 || l2;
    return dummy.next;
}

// Remove nth node from end
function removeNthFromEnd(head, n) {
    const dummy = { next: head };
    let first = dummy, second = dummy;
    
    // Move first n+1 steps ahead
    for (let i = 0; i <= n; i++) {
        first = first.next;
    }
    
    // Move both until first reaches end
    while (first) {
        first = first.next;
        second = second.next;
    }
    
    second.next = second.next.next;
    return dummy.next;
}
```

## 🌊 Greedy Algorithms
**When to use:** Optimization where local optimal leads to global optimal
**Time:** O(n log n) typically | **Space:** O(1)
```javascript
// Activity selection / interval scheduling
function activitySelection(intervals) {
    intervals.sort((a, b) => a[1] - b[1]); // sort by end time
    
    const result = [intervals[0]];
    let lastEnd = intervals[0][1];
    
    for (let i = 1; i < intervals.length; i++) {
        if (intervals[i][0] >= lastEnd) {
            result.push(intervals[i]);
            lastEnd = intervals[i][1];
        }
    }
    return result;
}

// Jump game pattern
function canJump(nums) {
    let farthest = 0;
    
    for (let i = 0; i < nums.length; i++) {
        if (i > farthest) return false;
        farthest = Math.max(farthest, i + nums[i]);
        if (farthest >= nums.length - 1) return true;
    }
    return false;
}
```

## 🔄 Union Find (Disjoint Set)
**When to use:** Connected components, cycle detection in undirected graphs
**Time:** O(α(n)) amortized | **Space:** O(n)
```javascript
class UnionFind {
    constructor(n) {
        this.parent = Array.from({length: n}, (_, i) => i);
        this.rank = new Array(n).fill(0);
        this.count = n;
    }
    
    find(x) {
        if (this.parent[x] !== x) {
            this.parent[x] = this.find(this.parent[x]); // path compression
        }
        return this.parent[x];
    }
    
    union(x, y) {
        const rootX = this.find(x);
        const rootY = this.find(y);
        
        if (rootX === rootY) return false;
        
        // Union by rank
        if (this.rank[rootX] < this.rank[rootY]) {
            this.parent[rootX] = rootY;
        } else if (this.rank[rootX] > this.rank[rootY]) {
            this.parent[rootY] = rootX;
        } else {
            this.parent[rootY] = rootX;
            this.rank[rootX]++;
        }
        
        this.count--;
        return true;
    }
    
    connected(x, y) {
        return this.find(x) === this.find(y);
    }
}
```

## 🎯 Pattern Recognition Guide

### **Array Problems:**
- **Two elements sum to target** → Two Pointers or Hash Map
- **Subarray/substring with condition** → Sliding Window
- **All combinations/permutations** → Backtracking
- **Next greater/smaller element** → Monotonic Stack
- **Sorted array search** → Binary Search

### **Tree Problems:**
- **Any tree traversal** → DFS (recursive/iterative)
- **Level-by-level processing** → BFS
- **Path sum/diameter** → DFS with return values
- **Lowest common ancestor** → DFS with parent tracking

### **Graph Problems:**
- **Connected components** → DFS/BFS or Union Find
- **Shortest path (unweighted)** → BFS
- **Shortest path (weighted)** → Dijkstra/Bellman-Ford
- **Cycle detection** → DFS (directed) or Union Find (undirected)

### **Dynamic Programming:**
- **Optimization** + **overlapping subproblems** → DP
- **"How many ways"** questions → DP
- **Minimum/maximum path** → DP
- **Subsequence problems** → DP

### **String Problems:**
- **Anagrams/character frequency** → Hash Map
- **Palindromes** → Two Pointers or DP
- **Pattern matching** → KMP or sliding window
- **Valid parentheses** → Stack

### **Linked List:**
- **Cycle detection** → Fast & Slow Pointers
- **Find middle** → Fast & Slow Pointers
- **Reverse/merge** → Iterative manipulation
- **Remove nodes** → Dummy head technique

## 🚀 Quick Pattern Lookup

| Problem Type | Pattern | Time | Space |
|--------------|---------|------|-------|
| Two Sum | Hash Map | O(n) | O(n) |
| 3Sum | Two Pointers | O(n²) | O(1) |
| Max Subarray Sum | Kadane's / DP | O(n) | O(1) |
| Binary Tree Traversal | DFS/BFS | O(n) | O(h) |
| Shortest Path | BFS | O(V+E) | O(V) |
| Longest Substring | Sliding Window | O(n) | O(k) |
| Valid Parentheses | Stack | O(n) | O(n) |
| Fibonacci | DP | O(n) | O(1) |
| Quick Sort | Divide & Conquer | O(n log n) | O(log n) |
| Connected Components | Union Find | O(α(n)) | O(n) |