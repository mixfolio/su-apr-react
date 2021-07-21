import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';
import { HOME_ROUTE,
      PHONEBOOK_ROUTE,
      EXITLOG_ROUTE,
      ARCHIVE_ROUTE
} from '../utils/const';

const SidebarLeft = () => {
   const [sidebar, setSidebar] = useState(false);
   const showSidebar = () => setSidebar(!sidebar)

   return (
      <div className={sidebar ? "sidebar-left" : "sidebar-left sidebar-left--show" }>
      {/* // <div className="sidebar-left"> */}
         <div className={sidebar ? "btn-burger icon-arr-prev" : "btn-burger icon-burger" }
            onClick={showSidebar}></div>
      
         <ul className="sidebar-left__menu">
           
            <li>
               <NavLink 
                  to={HOME_ROUTE}
                  className="nav-link icon-home" 
                  activeClassName="nav-link--active"
                  onClick={showSidebar}>
                     Главная
               </NavLink>
            </li>
            
           
            <li>
               <NavLink 
                  to={EXITLOG_ROUTE} 
                  className="nav-link icon-file-attach"
                  activeClassName="nav-link--active"
                  onClick={showSidebar}>
                  Журнал выезда сотрудников
               </NavLink>
            </li>

            
            <li>
               <NavLink 
                  to={ARCHIVE_ROUTE} 
                  className="nav-link icon-archive"
                  activeClassName="nav-link--active"
                  onClick={showSidebar}>
                  Архив
               </NavLink>
            </li>
           
 
            <li>
               <NavLink 
                  to={HOME_ROUTE}
                  className="nav-link icon-private" 
                  activeClassName="nav-link--active"
                  onClick={showSidebar}>
                  Панель управления
               </NavLink>
            </li>


            <li>
               <NavLink to={HOME_ROUTE} className="nav-link icon-industry" >Платформа мониторинга промышленности</NavLink>
            </li>


            <li>
               <NavLink 
                  to={PHONEBOOK_ROUTE}
                  className="nav-link icon-archive" 
                  activeClassName="nav-link--active"
                  onClick={showSidebar}>
                  Телефонная книга
               </NavLink>
            </li>


            <li>
               <NavLink 
                  to={HOME_ROUTE}
                  className="nav-link icon-letter"
                  activeClassName="nav-link--active"
                  onClick={showSidebar}>
                  Сообщения
               </NavLink>
            </li>

         </ul>
      </div>
   )
}

export default SidebarLeft
