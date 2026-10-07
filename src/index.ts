import { fetchTodo } from "./api.js";
import { createTask } from "./createTask.js";

async function main() {
  const todo = await fetchTodo(1);

  if (todo) {
    console.log("Fetched task:", todo);
  } else {
    console.log("Fetched task is invalid or unavailable.");
  }

  console.log(
    "Valid createTask:",
    createTask({
      id: 1,
      title: "Learn TypeScript",
      done: true,
    })
  );

  console.log(
    "Missing field:",
    createTask({
      id: 1,
      title: "Missing done field",
    })
  );

  console.log(
    "Wrong type:",
    createTask({
      id: "1",
      title: "Wrong id type",
      done: true,
    })
  );
}

main();
