import React, { useState, useEffect } from 'react';

function TodoInput({ onAdd, onEdit, editingTodo, cancelEdit }) {
  const [input, setInput] = useState('');

  useEffect(() => {
    if (editingTodo) {
      setInput(editingTodo.text);
    } else {
      setInput('');
    }
  }, [editingTodo]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmed = input.trim();
    if (!trimmed) return;
    if (editingTodo) {
      onEdit({ ...editingTodo, text: trimmed });
    } else {
      onAdd(trimmed);
    }
    setInput('');
  };

  return (
    <form className="create_form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder={editingTodo ? "Edit your task" : "Enter your task here"}
        value={input}
        onChange={e => setInput(e.target.value)}
        autoFocus
        aria-label="Todo input"
      />
      <button type="submit">{editingTodo ? "Update" : "Add"}</button>
      {editingTodo && <button type="button" onClick={cancelEdit} style={{marginLeft:8}}>Cancel</button>}
    </form>
  );
}

export default TodoInput;
