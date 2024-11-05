/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState, useContext } from 'react';
import { LanguageContext } from '../App';

function TodoForm({ onSubmit, onChange, newTask }) {
  const { language } = useContext(LanguageContext);

  return (
    <form onSubmit={onSubmit} className='d-flex mb-3'>
      <input onChange={onChange} value={newTask} type='text' className='form-control me-2' placeholder={language === 'en' ? 'Add a new task' : 'Tambahkan tugas baru'} />
      <button type='submit' className='btn btn-primary'>
        {language === 'en' ? 'Add' : 'Tambah'}
      </button>
    </form>
  );
}

export default TodoForm;
