// Code by Danseok

class LinkedList {
  constructor() {
    this.data = [];
  };

  append(value) {
    const node = new Node();
    node.value = value;
    node.nextNode = null;
    this.data.push(node);
    updateNextNodes();
  }

  prepend(value) {
    const node = new Node();
    node.value = value;
    node.nextNode = this.data[0] || null;
    this.data.unshift(node);
    updateNextNodes();
  }

  size() {
    return this.data.length;
  }

  head() {
    return this.data[0];
  }

  tail() {
    return this.data[this.size() - 1];
  }

  at(index) {
    return this.data[index];
  }

  pop() {
    return this.data.shift();
  }

  contains(value) {
    for (let i = 0; i < this.size(); i++) {
      if (this.data[i].value === value) {
        return true;
      }
    }
    return false;
  }

  findIndex(value) {
    for (let i = 0; i < this.size(); i++) {
      if (this.data[i].value === value) {
        return i;
      }
    }
    return null;
  }

  toString() {
    let str = '';
    for (let i = 0; i < this.size(); i++) {
      str += `( ${this.data[i].value} ) -> `;
    }
    str += 'null';
    return str;
  }

  insertAt(index, ...values) {
    if (index < 0 || index > this.size()) {
      throw new RangeError('Index out of bounds');
    }
    const nodes = values.map(value => {
      const node = new Node();
      node.value = value;
      return node;
    });
    this.data.splice(index, 0, ...nodes);
    updateNextNodes();
  }

  removeAt(index) {
    if (index < 0 || index >= this.size()) {
      throw new RangeError('Index out of bounds');
    }
    this.data.splice(index, 1);
    updateNextNodes();
  }

  updateNextNodes() {
    for (let i = 0; i < this.size() - 1; i++) {
      this.data[i].nextNode = this.data[i + 1];
    }
    if (this.size() > 0) {
      this.data[this.size() - 1].nextNode = null;
    }
  }
}

class Node {
  constructor() {
    this.value = null;
    this.nextNode = null;
  }
}


export { LinkedList, Node };