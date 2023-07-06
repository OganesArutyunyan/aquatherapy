import style from './Header.module.css';
import React, { useState } from 'react';
import Logo from './Group 1.png';
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai';
import Button from '../button/Button';

import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Blog from '../blog/Blog';

function Header()  {
    const [nav, setNav] = useState(false);
    return (
      <header className={style.header}>
        <div className={style.container}>
          <div className={style.box}>
            <div className={style.logo_image}>
              <img src={Logo} alt='/' />
            </div>
            <Router>
            <ul className={nav ? [style.menu, style.active].join(' ') : [style.menu]}>
              <li><Link to='#'>Главная</Link></li>
              <li><Link to='#'>Сеансы</Link></li>
              <li><Link to='#'>Отзывы</Link></li>
              <li><Link to='#'>Контакты</Link></li>
              <li><Link to='#'>Новости</Link></li>
              <li><Link to='#'>Обо мне</Link></li>
              <li><Link to='/Blog'>Блог</Link></li>
            </ul>
              <Routes>
                <Route path='/' element={<Blog/>}/>
              </Routes>
            </Router>
            <div className='button-header'><Button /></div>
            <div onClick={() => setNav(!nav)} className={style.mobile_btn}>
              {nav ? <AiOutlineClose size={35} /> : <AiOutlineMenu size={35}/>}                           
            </div>
            
          </div>
        </div>
      </header>
    );
  }  

export default Header;
