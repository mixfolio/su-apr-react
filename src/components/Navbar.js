import React from 'react'
import aprLogo from '../assets/apr-logo-dark-mode.svg';
import {Link} from 'react-router-dom';

const Navbar = () => {
   return (
      <div className="header">
         <Link className="nav-brand" to='/'>
            <img src={aprLogo} height="36" alt="АПР-лого"/>
         </Link>
         <h5 className="header__title">Система управления ГБУ АПР</h5>
         <div className="header__group-btn">
            <form>
               <input style={{backgroundColor:' #f6f6f6'}} className="f-control icon-user" name="search" type="text" placeholder="Поиск"/>
            </form>
            <div className="header-avatar">
               <div className="header-avatar__pict icon-user"></div>
               <ul className="user-menu">
                  <li>
                     <a className="profile-link icon-user" href="profile-2.html">Профиль</a>
                  </li>
                  <li>
                     <a className="profile-link icon-exit" href="index.html">Выйти</a>
                  </li>
               </ul>
               <p className="header-avatar__text hide">Родионов П.В.</p>
            </div>
         </div>
      </div>
   )
}

export default Navbar
