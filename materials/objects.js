// Creating an object
let person = {
    name: 'John',
    age: 30,
    occupation: 'Software Developer',
    hobbies: ['Reading', 'Cycling', 'Gaming']
};

// Accessing object properties using dot notation
console.log('Name:', person.name);  // John
console.log('Age:', person.age);    // 30
console.log('Occupation:', person.occupation); // Software Developer

// Accessing object properties using bracket notation
console.log('Hobbies:', person['hobbies']); // ['Reading', 'Cycling', 'Gaming']

// Modifying object properties
person.age = 31; // Changing age to 31
person.occupation = 'Senior Software Developer'; // Changing occupation
console.log('Modified person object:', person);

// Adding new properties to an object
person.email = 'john.doe@example.com'; // Adding a new property
console.log('After adding new property:', person); // Adds email property

// Deleting a property from an object
delete person.email; // Removes the email property
console.log('After deleting the email property:', person); // No email property

// Iterating through object properties using a for...in loop
console.log('Iterating through object properties:');
for (let key in person) {
    console.log(key + ':', person[key]);
}

// Using Object.keys() to get all keys in an object
let keys = Object.keys(person);
console.log('Object keys:', keys); // ['name', 'age', 'occupation', 'hobbies']

// Using Object.values() to get all values in an object
let values = Object.values(person);
console.log('Object values:', values); // ['John', 31, 'Senior Software Developer', ['Reading', 'Cycling', 'Gaming']]

// Using Object.entries() to get key-value pairs
let entries = Object.entries(person);
console.log('Object entries (key-value pairs):');
entries.forEach(entry => {
    console.log(entry[0] + ':', entry[1]);
});

// Checking if a property exists using `in` operator
console.log('Does person have a name property?', 'name' in person); // true
console.log('Does person have an email property?', 'email' in person); // false

// Checking if a property is undefined
console.log('Person\'s email property:', person.email); // undefined

// Merging two objects using Object.assign()
let contactInfo = {
    phone: '555-1234',
    address: '123 Main St.'
};

// Merging contactInfo object into person
Object.assign(person, contactInfo);
console.log('After merging contactInfo into person:', person);

// Cloning an object using Object.assign()
let personClone = Object.assign({}, person); // Creates a shallow copy of person
console.log('Cloned person object:', personClone);

// Nested Objects
let employee = {
    name: 'Alice',
    position: 'Manager',
    details: {
        department: 'HR',
        location: 'New York',
    }
};
console.log('Employee Details:', employee.details); // { department: 'HR', location: 'New York' }

// Accessing nested object properties
console.log('Employee department:', employee.details.department); // HR
console.log('Employee location:', employee.details.location); // New York

// Modifying a nested object property
employee.details.location = 'San Francisco';
console.log('Modified employee location:', employee.details.location); // San Francisco

// Using Object.freeze() to make an object immutable
const frozenPerson = Object.freeze({
    name: 'Bob',
    age: 40
});
console.log('Frozen Person:', frozenPerson);

// Trying to modify a frozen object (will fail silently in non-strict mode)
frozenPerson.name = 'Robert'; // This won't change the object in non-strict mode
console.log('After attempting to modify frozen object:', frozenPerson); // { name: 'Bob', age: 40 }

// Using Object.seal() to prevent adding new properties but allow modifications
const sealedPerson = Object.seal({
    name: 'Tom',
    age: 25
});
sealedPerson.age = 26; // Allowed modification
sealedPerson.email = 'tom@example.com'; // Will not be added
console.log('Sealed person:', sealedPerson); // { name: 'Tom', age: 26 }
