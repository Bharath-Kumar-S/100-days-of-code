class Hashtable {
  constructor(size) {
    this.data = new Array(size);
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }

  set(key, value) {
    const index = this._hash(key);
    this.data[index] = value;
  }

  get(key) {
    const index = this._hash(key);
    return this.data[index];
  }

  remove(key) {
    const index = this._hash(key);
    this.data[index] = undefined;
  }

  display() {
    for (let i = 0; i < this.data.length; i++) {
      console.log(this.data[i]);
    }
  }
}

const hash = new Hashtable(50);
hash.set("grapes", 10000);
hash.set("apples", 9);
hash.set("oranges", 2);
hash.display();
