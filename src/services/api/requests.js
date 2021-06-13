import axios from 'axios';

// GET REQUEST
export const getTodos = async (setter) => {
  console.log("GET Request");

  const result = await axios
    .get("https://jsonplaceholder.typicode.com/todos?_limit=202")
    .then((res) => res)
    .catch((err) => console.log(err));

  setter(result.data);
}

// POST REQUEST
export const addTodo = () => {
  console.log("POST Request");

  axios
    .post("https://jsonplaceholder.typicode.com/todos", {
      title: "New Todo",
      completed: false,
    })
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
}

// PUT/PATCH REQUEST
export const updateTodo = () => {
  console.log("PUT/PATCH Request");

  axios
    .patch("https://jsonplaceholder.typicode.com/todos/1", {
      title: "Updated Todo",
      completed: true,
    })
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
}

// DELETE REQUEST
export const removeTodo = () => {
  console.log("DELETE Request");

  axios
    .delete("https://jsonplaceholder.typicode.com/todos/1")
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
}