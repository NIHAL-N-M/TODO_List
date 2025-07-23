import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ todos, onDelete, onToggle, onEdit }) {
  if (todos.length === 0) return <div style={{marginTop: 16}}>No todos to show.</div>;
  return (
    <ul style={{listStyle: 'none', padding: 0, width: 350, maxWidth: '100%'}}>
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onDelete={() => onDelete(todo.id)}
          onToggle={() => onToggle(todo.id)}
          onEdit={() => onEdit(todo)}
        />
      ))}
    </ul>
  );
}

export default TodoList; 