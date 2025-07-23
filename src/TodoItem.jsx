import React from 'react';
import { FaTrash, FaEdit, FaCheckCircle, FaRegCircle } from 'react-icons/fa';

function TodoItem({ todo, onDelete, onToggle, onEdit }) {
  return (
    <li
      style={{
        display: 'flex',
        alignItems: 'center',
        padding: '10px 0',
        borderBottom: '1px solid #eee',
        background: todo.completed ? '#f6f6f6' : 'transparent',
        opacity: todo.completed ? 0.6 : 1,
      }}
    >
      <button
        onClick={onToggle}
        aria-label={todo.completed ? 'Mark as active' : 'Mark as completed'}
        style={{
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          marginRight: 12,
          fontSize: 20,
          color: todo.completed ? '#4caf50' : '#aaa',
        }}
      >
        {todo.completed ? <FaCheckCircle /> : <FaRegCircle />}
      </button>
      <span
        style={{
          flex: 1,
          textDecoration: todo.completed ? 'line-through' : 'none',
          color: todo.completed ? '#888' : '#222',
          fontSize: 18,
        }}
      >
        {todo.text}
      </span>
      <button
        onClick={onEdit}
        aria-label="Edit todo"
        style={{
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          marginRight: 8,
          color: '#1976d2',
          fontSize: 18,
        }}
      >
        <FaEdit />
      </button>
      <button
        onClick={onDelete}
        aria-label="Delete todo"
        style={{
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          color: '#e53935',
          fontSize: 18,
        }}
      >
        <FaTrash />
      </button>
    </li>
  );
}

export default TodoItem; 