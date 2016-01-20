var task = {
    title: 'My Title',
    description: 'My Description'
};

Object.defineProperty(task, 'toString', {
    value: function () {
        return this.title + ' ' + this.description;
    },
    writable: false,
    enumerable: false,
    // To fix the file change the value below to true
    configurable: false
});

task.toString = 'Hi!';

console.log(task.toString())
console.log(task);
console.log(Object.keys(task));

Object.defineProperty(task, 'toString', {
    enumerable: true
});

console.log(Object.keys(task));
