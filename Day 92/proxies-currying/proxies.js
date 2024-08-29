const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  city: "New York",
  country: "USA",
  encryptedPassword: "XXXXXXXXX",
};

const personProxy = new Proxy(person, {
  get(target, key) {
    if (key === "encryptedPassword") {
      throw new Error("Cannot access encrypted password");
    }
    if (target[key]) {
      return target[key];
    } else {
      throw new Error(`Property ${key} does not exist`);
    }
  },
  set(target, key, value) {
    if (key === "encryptedPassword") {
      throw new Error("Cannot set encrypted password");
    }
    target[key] = value;
  },
  deleteProperty(target, key) {
    if (key === "encryptedPassword") {
      throw new Error("Cannot delete encrypted password");
    }
    delete target[key];
  },
});

// get
console.log(personProxy.firstName); // John

// set
personProxy.firstName = "Bharath";

//get
console.log(personProxy.firstName); // Bharath

//delete
delete personProxy.age;
console.log(personProxy.age); // Error: Property age does not exist

//set
personProxy.encryptedPassword = "XXXXXXXXX"; // Error: Cannot set encrypted password
