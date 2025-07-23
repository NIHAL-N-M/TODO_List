import React, { useState, useEffect } from 'react';
import TodoInput from './Creat';
import TodoList from './TodoList';

const FILTERS = {
  all: t => true,
  active: t => !t.completed,
  completed: t => t.completed,
};

function Home() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('all');
  const [editing, setEditing] = useState(null);

  useEffect(() => {
    const saved = localStorage.getItem('todos');
    if (saved) setTodos(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = text => {
    setTodos([{ id: Date.now(), text, completed: false }, ...todos]);
  };

  const deleteTodo = id => setTodos(todos.filter(t => t.id !== id));

  const toggleComplete = id => setTodos(todos.map(t => t.id === id ? { ...t, completed: !t.completed } : t));

  const startEdit = todo => setEditing(todo);

  const editTodo = updated => {
    setTodos(todos.map(t => t.id === updated.id ? updated : t));
    setEditing(null);
  };

  const cancelEdit = () => setEditing(null);

  const clearCompleted = () => setTodos(todos.filter(t => !t.completed));

  return (
    <div className="home">
      <h1>TODO List</h1>
      <TodoInput onAdd={addTodo} onEdit={editTodo} editingTodo={editing} cancelEdit={cancelEdit} />
      <div style={{margin: '16px 0'}}>
        <button onClick={() => setFilter('all')} disabled={filter==='all'}>All</button>
        <button onClick={() => setFilter('active')} disabled={filter==='active'}>Active</button>
        <button onClick={() => setFilter('completed')} disabled={filter==='completed'}>Completed</button>
        <button onClick={clearCompleted} style={{marginLeft:8}}>Clear Completed</button>
      </div>
      <TodoList
        todos={todos.filter(FILTERS[filter])}
        onDelete={deleteTodo}
        onToggle={toggleComplete}
        onEdit={startEdit}
      />
      {todos.length === 0 && <div><h2>No Records</h2></div>}
    </div>
  );
}

export default Home;
