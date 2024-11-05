/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { LanguageContext } from '../App'; // Mengimpor LanguageContext yang benar

const Navbar = () => {
  const { language, handleChangeLanguage } = useContext(LanguageContext); // Menggunakan LanguageContext yang benar

  return (
    <>
      <nav className='navbar navbar-expand navbar-light bg-light'>
        <div className='container-fluid d-flex justify-content-end'>
          <button onClick={handleChangeLanguage} className='btn btn-light'>
            <p className='m-0'>{language === 'en' ? 'Indonesia' : 'English'}</p>
          </button>
        </div>
      </nav>
      <h1 className='text-center mb-4'>{language === 'en' ? 'Todo List' : 'Daftar Tugas'}</h1>
    </>
  );
};

export default Navbar;
