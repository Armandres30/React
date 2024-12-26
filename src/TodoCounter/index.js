import './TodoCounter.css'

function TodoCounter({ total, completed }) {
  return (
    <h1>
      You've completed <span> {completed} </span> of <span>{total}</span> TODOS
    </h1>
  );
}

export { TodoCounter };
