/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { LanguageContext } from '../App';

function TodoList({ todos, handleDelete, handleComplete }) {
  const { language } = useContext(LanguageContext);
  return (
    <ul className='list-group'>
      {todos.map((todo) => (
        <li key={todo.id} className={`list-group-item d-flex justify-content-between align-items-center ${todo.completed ? 'list-group-item-success' : ''}`}>
          <span
            style={{
              textDecoration: todo.completed ? 'line-through' : 'none',
              cursor: 'pointer',
            }}>
            {todo.text}
          </span>
          <div>
            <button className='btn btn-success btn-sm margin-left-5' onClick={() => handleComplete(todo.id)}>
              {language === 'en' ? 'Complated' : 'Selesai'}
            </button>
            <button className='btn btn-danger btn-sm' onClick={() => handleDelete(todo.id)}>
              {language === 'en' ? 'Delete' : 'Hapus'}
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
