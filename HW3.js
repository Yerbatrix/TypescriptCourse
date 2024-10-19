var tasks = [
    {
        id: 0,
        title: "Zrobić pranie",
        description: "W czterdziestu stopniach, kolorowe",
        completed: false,
    },
    {
        id: 1,
        title: "Ugotować obiad",
        description: "Kurczak z ryżem",
        completed: false,
    },
    {
        id: 2,
        title: "Być zajebisym",
        description: "Jak zawsze",
        completed: true,
    },
];
var addTask = function (task) {
    tasks.push(task);
    console.log("\nTablica zadań po dodaniu nowego zadania:");
    console.log(tasks);
};
var findTaskById = function (id) {
    var task = tasks.find(function (task) { return task.id === id; });
    if (task) {
        console.log("\nZnaleziono zadanie: ".concat(task.title));
    }
    else {
        console.log("\nNie znaleziono zadania o ID: ".concat(id));
    }
    return task;
};
var newTask = {
    id: 3,
    title: "Zrobić porządek",
    description: "Jak załoga Gwiezdnego Patrolu",
    completed: false,
};
findTaskById(3);
addTask(newTask);
findTaskById(3);
