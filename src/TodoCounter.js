import './TodoCounter.css'
function TodoCounter({ total, completed }) {
  return (
    <h1>
      You've completed {completed} of {total} TODOS
    </h1>
  );
}

export { TodoCounter };
