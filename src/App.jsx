/* eslint-disable no-unused-vars */
import React, { useState, createContext, useContext } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import Navbar from './components/Navbar';

// Membuat konteks untuk bahasa
// eslint-disable-next-line react-refresh/only-export-components
export const LanguageContext = createContext();

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1730787481212,
      text: 'kerjakan praktek react',
      completed: false,
    },
  ]);

  const [language, setLanguage] = useState('en'); // Menyimpan bahasa yang aktif ('en' atau 'id')

  const [newTask, setNewTask] = useState('');

  const handleChange = (e) => {
    setNewTask(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTask.trim() === '') return;

    const newTodo = {
      id: Date.now(),
      text: newTask,
      completed: false,
    };
    setTodos([...todos, newTodo]);
    setNewTask('');
  };

  const handleDelete = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const handleComplete = (id) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const handleChangeLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === 'en' ? 'id' : 'en'));
  };

  return (
    <LanguageContext.Provider value={{ language, handleChangeLanguage }} className='container mt-5'>
      <Navbar />

      <TodoForm onSubmit={handleSubmit} onChange={handleChange} newTask={newTask} />
      <TodoList todos={todos} handleDelete={handleDelete} handleComplete={handleComplete} />
    </LanguageContext.Provider>
  );
}

export default App;
