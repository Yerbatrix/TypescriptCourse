type Task = {
  id: number;
  title: string;
  description: string;
  completed: boolean;
};

const tasks: Array<Task> = [
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

const addTask = (task: Task): void => {
  tasks.push(task);
  console.log("\nTablica zadań po dodaniu nowego zadania:");
  console.log(tasks);
};

const findTaskById = (id: number): Task | undefined => {
  const task = tasks.find((task) => task.id === id);

  if (task) {
    console.log(`\nZnaleziono zadanie: ${task.title}`);
  } else {
    console.log(`\nNie znaleziono zadania o ID: ${id}`);
  }

  return task;
};

let newTask = {
  id: 3,
  title: "Zrobić porządek",
  description: "Jak załoga Gwiezdnego Patrolu",
  completed: false,
};

findTaskById(3);

addTask(newTask);

findTaskById(3);
