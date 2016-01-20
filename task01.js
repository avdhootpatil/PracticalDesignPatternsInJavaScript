var task = {
    title: 'My Titile',
    description: 'My Descriotion'
};

//Object.defineProperty(task, 'toString', {
//});
task.toString = function() {
        return this.title + ' ' + this.description;
}

console.log(task.toString());