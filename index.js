// // Stacks 

// const Stack = function () {
//   this.storage = {}
//   this.count = 0

//   // Push
//   this.push = function (value) {
//     this.storage[this.count] = value
//     this.count++
//     return this.storage
//   }

//   // Pop
//   this.pop = function () {
//     if (this.count === 0) {
//       return undefined
//     }
//     let result = this.storage[this.count - 1]
//     delete this.storage[this.count - 1]
//     this.count--
//     return result
//   }

//   // Peek
//   this.peek = function () {
//     return this.storage[this.count - 1]
//   }

//   // Size
//   this.size = function () {
//     return this.count
//   }
// }

// let demoStack = new Stack()
// // demoStack.push(12)
// // demoStack.push(24)
// // demoStack.push(90)
// // demoStack.pop()
// // demoStack.peek()
// // console.log(demoStack)

// // Sets

// const CustomSet = function () {
//   this.collection = []

//   // Sets only contain unique elements
//   // If element exists in set
//   this.has = function (value) {
//     return (this.collection.indexOf(value) !== -1)
//   }

//   // Add to set
//   this.add = function (value) {
//     if (!this.has(value)) {
//       this.collection.push(value)
//       return true
//     }
//     return false
//   }

//   // Remove from set
//   this.remove = function (value) {
//     if (this.has(value)) {
//       let elementPos = this.collection.indexOf(value)
//       this.collection.splice(elementPos, 1)
//       return this.collection
//     }
//     return false
//   }

//   // Values in the set
//   this.values = function () {
//     return this.collection
//   }

//   // Size of set
//   this.size = function () {
//     return this.collection.length
//   }

//   // Union
//   this.union = function (otherSet) {
//     let unionSet = new CustomSet()
//     let firstSet = this.values()
//     otherSet = otherSet.values()

//     // console.log(otherSet)
//     for(let ele of firstSet){
//       unionSet.add(ele);
//     }
//     for(let ele of otherSet){
//       unionSet.add(ele);
//     }
//     // return unionSet
//     return unionSet
//   }

//   // Intersection
//   this.intersection = function (otherSet) {
//     let intersectionSet = new CustomSet()
//     let firstSet = this.values()
//     firstSet.forEach(function (ele) {
//       if (otherSet.has(ele)) {
//         intersectionSet.add(ele)
//       }
//     })
//     return intersectionSet
//   }

//   // Difference
//   this.difference = function (otherSet) {
//     let differenceSet = new CustomSet()
//     let firstSet = this.values()
//     // otherSet = otherSet.values()
//     firstSet.forEach(function (ele) {
//       if (!otherSet.has(ele)) {
//         differenceSet.add(ele)
//       }
//     })
//     return differenceSet
//   }

//   // Subset
//   this.subset = function (otherSet) {
//     let firstSet = this.values()
//     return firstSet.every(function (ele) {
//       return otherSet.has(ele)
//     })
//   }
// }

// let demoSet = new CustomSet()
// let setA = new CustomSet()
// let setB = new CustomSet()
// // setA.add(4)
// // setB.add('a')
// // setB.add(4)
// // setB.add('cdf')
// // setA.subset(setB)
// // setA.intersection(setB).values()
// // setA.union(setB).values()
// // setA.difference(setB).values()

// // Queues
// const Queue = function () {
//   collection = []

//   // Print queue
//   this.print = function () {
//     console.log(collection)
//   }

//   // Enqueue
//   this.enqueue = function (elem) {
//     return collection.push(elem)
//   }

//   // Dequeue
//   this.dequeue = function () {
//     return collection.shift()
//   }

//   // Front of queue
//   this.front = function () {
//     return collection[0]
//   }

//   // Empty or not
//   this.isEmpty = function () {
//     return (collection.length === 0)
//   }
// }

// let demoQ = new Queue()
// // demoQ
// // demoQ.enqueue('a')
// // demoQ.enqueue('b')
// // demoQ.enqueue('c')
// // demoQ.dequeue()
// // demoQ.isEmpty()
// // demoQ.front()

// // Priority Queue
// function PriorityQueue() {
//   let collection = []
  
//   // Print the collection 
//   this.print = function() {
//     return collection
//   }

//   // Enqueue
//   this.enqueue = function(elem) {
//     if(this.isEmpty()) {
//       collection.push(elem)
//     } else {
//       let added = false
//       for(let i = 0 ; i < collection.length; i++) {
//         if(elem[1] < collection[i][1]) {
//           collection.splice(i, 0, elem)
//           added = true
//           break
//         }
//       }
//       if(added === false) {
//           collection.push(elem)
//       }
//     }
//     return collection
//   }

//   // Dequeue
//   this.dequeue = function() {
//     return collection.shift()[0]
//   }

//   // Front
//   this.front = function() {
//     return collection[0]
//   }

//   // Size
//   this.size = function() {
//     return collection.length
//   }

//   // Empty
//   this.isEmpty = function() {
//     return collection.length === 0
//   }
// }

// let demoPriorityQ = new PriorityQueue()
// // demoPriorityQ.print()
// // demoPriorityQ.enqueue([1,2])
// // demoPriorityQ.enqueue([3,5])
// // demoPriorityQ.enqueue([5,1])
// // demoPriorityQ.dequeue()
// // demoPriorityQ.isEmpty()

// Binary Search Tree

class Node {
  constructor(data, left=null, right=null){
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  // Add to the tree
  add(data) {
    const node = this.root;
    if(node === null){
      this.root = new Node(data);
      return;
    } else {
      const searchTree = function(node) { 
        if(data < node.data) {
          if(node.left === null) {
            node.left = new Node(data);
          } else {
            searchTree(node.left);
          }
        } else if(data > node.data) {
          if(node.right === null) {
            node.right = new Node(data);
          } else {
            searchTree(node.right);
          }
        } else {
            return null;
        }
      };
      return searchTree(node);
    }
  }

  // Find min
  findMin() {
    let current = this.root;
    while(current.left !== null){
      current = current.left;
    }
    return current.data;
  }

  // Find max
  findMax() {
    let current = this.root;
    while(current.right !== null){
      current = current.right;
    }
    return current.data;
  }

  // Find a value in the tree
  find(data) {
    let current = this.root;
    while(current.data !== data) {
      if(data < current.data){
        current = current.left;
      } else {
        current = current.right;
      }
      if(current === null) {
        return null;
      }
    }
    return current;
  }

  // If value is present in the tree
  isPresent(data) {
    let current = this.root;
    console.log(current)
    while(current) {
      if(data === current.data) {
        return true;
      }
      else if(data < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
    return false;
  }

  // Remove node from the tree
  remove(data) {
    const removeNode = function(node, data) {
      // if node is null
      if(node === null) {
        return null;
      }
      // if data equals first node
      if(node.data === data) {
        // if the node has no children
        if(node.left === null && node.right === null) {
          return null;
        }
        // if the node has a left child
        if(node.right === null) {
          return node.left;
        }
        // if the node has a right child
        if(node.left === null) {
          return node.right;
        }
        // node has two children
        let tempNode = node.right;
        while(tempNode.left !== null) {
          tempNode = node.left;
        }
        node.data = tempNode.data;
        node.right = removeNode(node.right, tempNode.data);
        return node;
      } else if(data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else if(data > node.data) {
        node.right = removeNode(node.right, data);
        return node;
      }
    }
    this.root = removeNode(this.root, data);
  }
}

let firstBST = new BST();
firstBST.add(37)
firstBST.add(24)
firstBST.add(70)
firstBST.add(13)
firstBST.add(10)
firstBST.add(59)
firstBST.add(20)
firstBST.add(45)
console.log(firstBST);
firstBST.remove(37);
// firstBST.add(37)
firstBST;
// firstBST.find(13)
// firstBST.isPresent(123)
// firstBST.findMin()
// firstBST.findMax()
