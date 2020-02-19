// Stacks 

const Stack = function() {
  this.storage = {}
  this.count = 0

  // Push
  this.push = function(value) {
    this.storage[this.count] = value
    this.count++
    return this.storage
  }

  // Pop
  this.pop = function() {
    if(this.count === 0) {
      return undefined
    }
    let result = this.storage[this.count - 1]
    delete this.storage[this.count - 1]
    this.count--
    return result
  }

  // Peek
  this.peek = function() {
    return this.storage[this.count -1]
  }

  // Size
  this.size = function() {
    return this.count
  }
}

let demoStack = new Stack()
demoStack.push(12)
demoStack.push(24)
demoStack.push(90)
demoStack.pop()
demoStack.peek()
demoStack

// Sets

const CustomSet = function() {
  this.collection = []

  // Sets only contain unique elements
  // If element exists in set
  this.has = function(value) {
    return (this.collection.indexOf(value) !== -1)
  }

  // Add to set
  this.add = function(value) {
    if(!this.has(value)) {
      this.collection.push(value)
      return true
    }
    return false
  }

  // Remove from set
  this.remove = function(value) {
    if(this.has(value)){
      let elementPos = this.collection.indexOf(value)
      this.collection.splice(elementPos, 1)
      return this.collection
    }
    return false
  }

  // Values in the set
  this.values = function() {
    return this.collection
  }

  // Size of set
  this.size =  function() {
    return this.collection.length
  }

  // Union
  this.union = function(otherSet) {
    let unionSet = new CustomSet()
    let firstSet = this.values()
    firstSet.forEach(function(ele){
      unionSet.add(ele)
    })
    otherSet.forEach(function(ele){
      unionSet.add(ele)
    })
    return unionSet
  }

  // Intersection
  this.intersection = function(otherSet) {
    let intersectionSet = new CustomSet()
    let firstSet = this.values()
    
  }
}

let demoSet = new CustomSet()
console.log(demoSet)