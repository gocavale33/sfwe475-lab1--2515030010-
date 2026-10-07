import { TaskSchema } from "./schemas.js";

export async function fetchTodo(id: number) {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/todos/${id}`
    );

    if (!response.ok) {
      console.error(`Request failed with status ${response.status}`);
      return null;
    }

    const data: unknown = await response.json();

    const result = TaskSchema.safeParse(data);

    if (!result.success) {
      console.error("API response validation failed:", result.error.issues);
      return null;
    }

    return result.data;
  } catch (error) {
    console.error("Network request failed:", error);
    return null;
  }
}

